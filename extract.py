import plistlib, os, re, mimetypes, hashlib

ARCHIVE_XML = "archive.xml"
OUT_DIR = "out"

os.makedirs(OUT_DIR, exist_ok=True)

with open(ARCHIVE_XML, "rb") as f:
    plist = plistlib.load(f)

main = plist.get("WebMainResource", {})
subs = plist.get("WebSubresources", []) or []

def write_bytes(path, data: bytes):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "wb") as f:
        f.write(data)

def safe_name(s: str) -> str:
    s = re.sub(r"[^a-zA-Z0-9._-]+", "_", s).strip("_")
    return s[:120] if s else "file"

# Save main HTML
main_data = main.get("WebResourceData", b"")
write_bytes(f"{OUT_DIR}/index.html", main_data)

# Save subresources
manifest = []  # (url, local_path)
for i, r in enumerate(subs):
    data = r.get("WebResourceData")
    url = r.get("WebResourceURL", "") or ""
    mime = r.get("WebResourceMIMEType", "") or ""

    if not data:
        continue

    # Guess extension
    ext = ""
    if mime:
        ext = mimetypes.guess_extension(mime) or ""
    if not ext and url and "." in url.split("/")[-1]:
        ext = "." + url.split("/")[-1].split(".")[-1].split("?")[0].split("#")[0]
        if len(ext) > 8:  # guard weird cases
            ext = ""

    h = hashlib.sha1((url + str(i)).encode("utf-8")).hexdigest()[:10]
    base = safe_name(url.split("/")[-1].split("?")[0].split("#")[0]) or f"res_{i}"
    if not base.endswith(ext) and ext:
        base = f"{base}{ext}"

    # Put css/images/fonts/scripts in reasonable folders
    folder = "assets"
    if (mime and "text/css" in mime) or base.endswith(".css"):
        folder = "css"
    elif any(base.lower().endswith(x) for x in [".png",".jpg",".jpeg",".gif",".svg",".webp",".ico",".avif"]):
        folder = "images"
    elif any(base.lower().endswith(x) for x in [".woff",".woff2",".ttf",".otf",".eot"]):
        folder = "fonts"
    elif any(base.lower().endswith(x) for x in [".js",".mjs"]):
        folder = "js"

    local = f"{OUT_DIR}/{folder}/{h}_{base}"
    write_bytes(local, data)
    manifest.append((url, local.replace(f"{OUT_DIR}/", "")))

# Now rewrite references in HTML (cid:, about:, original URLs) to local files where possible
html_path = f"{OUT_DIR}/index.html"
html = main_data.decode("utf-8", errors="ignore")

for url, local in manifest:
    if not url:
        continue
    # replace exact url occurrences
    html = html.replace(url, local)

# Also replace cid: references by matching filename-ish endings (best-effort)
# If your HTML has <link href="cid:..."> we can’t map perfectly without more metadata,
# but often the cid is also present in the URL list; the direct replace above handles most cases.

write_bytes(html_path, html.encode("utf-8"))
print(f"Done. Open {OUT_DIR}/index.html")
