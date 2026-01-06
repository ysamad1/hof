import os, re

html_path = "out/index.html"
css_dir = "out/css"

# Build mapping: "cascade.css" -> "css/<hash>_cascade.css"
css_map = {}
for fname in os.listdir(css_dir):
    if fname.lower().endswith(".css"):
        parts = fname.split("_", 1)
        if len(parts) == 2:
            css_map[parts[1]] = f"css/{fname}"

with open(html_path, "r", encoding="utf-8", errors="ignore") as f:
    html = f.read()

def rewrite_href(match):
    original = match.group(1)
    # pull basename without query/hash
    base = original.split("/")[-1].split("?")[0].split("#")[0]
    if base in css_map:
        # preserve query string if present
        qs = ""
        if "?" in original:
            qs = "?" + original.split("?", 1)[1]
        return f'href="{css_map[base]}{qs}"'
    return match.group(0)

# rewrite href="...css..."
html2 = re.sub(r'href="([^"]+\.css[^"]*)"', rewrite_href, html, flags=re.IGNORECASE)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html2)

print("✅ Rewrote CSS <link> hrefs in out/index.html")
