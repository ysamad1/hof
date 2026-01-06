var ac_quicklinks =
webpackJsonpac__name_([2],{

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dnd_utils__ = __webpack_require__(57);
/* unused harmony export DataTransferEffect */
/* unused harmony export DragImage */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DragDropConfig; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd

var DataTransferEffect = (function () {
    function DataTransferEffect(name) {
        this.name = name;
    }
    DataTransferEffect.COPY = new DataTransferEffect('copy');
    DataTransferEffect.LINK = new DataTransferEffect('link');
    DataTransferEffect.MOVE = new DataTransferEffect('move');
    DataTransferEffect.NONE = new DataTransferEffect('none');
    return DataTransferEffect;
}());
var DragImage = (function () {
    function DragImage(imageElement, x_offset, y_offset) {
        if (x_offset === void 0) { x_offset = 0; }
        if (y_offset === void 0) { y_offset = 0; }
        this.imageElement = imageElement;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["a" /* isString */])(this.imageElement)) {
            // Create real image from string source
            var imgScr = this.imageElement;
            this.imageElement = new HTMLImageElement();
            this.imageElement.src = imgScr;
        }
    }
    return DragImage;
}());
var DragDropConfig = (function () {
    function DragDropConfig() {
        this.onDragStartClass = "dnd-drag-start";
        this.onDragEnterClass = "dnd-drag-enter";
        this.onDragOverClass = "dnd-drag-over";
        this.onSortableDragClass = "dnd-sortable-drag";
        this.dragEffect = DataTransferEffect.MOVE;
        this.dropEffect = DataTransferEffect.MOVE;
        this.dragCursor = "move";
    }
    return DragDropConfig;
}());


/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_config__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_utils__ = __webpack_require__(57);
/* unused harmony export DragDropData */
/* harmony export (immutable) */ exports["c"] = dragDropServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DragDropService; });
/* harmony export (immutable) */ exports["d"] = dragDropSortableServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return DragDropSortableService; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd



var DragDropData = (function () {
    function DragDropData() {
    }
    return DragDropData;
}());
function dragDropServiceFactory() {
    return new DragDropService();
}
var DragDropService = (function () {
    function DragDropService() {
        this.allowedDropZones = [];
    }
    DragDropService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    DragDropService.ctorParameters = function () { return []; };
    return DragDropService;
}());
function dragDropSortableServiceFactory(config) {
    return new DragDropSortableService(config);
}
var DragDropSortableService = (function () {
    function DragDropSortableService(_config) {
        this._config = _config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "elem", {
        get: function () {
            return this._elem;
        },
        enumerable: true,
        configurable: true
    });
    DragDropSortableService.prototype.markSortable = function (elem) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_utils__["b" /* isPresent */])(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_utils__["b" /* isPresent */])(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    };
    DragDropSortableService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    DragDropSortableService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__dnd_config__["a" /* DragDropConfig */], },
    ]; };
    return DragDropSortableService;
}());


/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_dnd_config__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_draggable_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_droppable_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_abstract_component__ = __webpack_require__(38);
/* unused harmony export providers */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DndModule; });
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd












var providers = [
    __WEBPACK_IMPORTED_MODULE_1__src_dnd_config__["a" /* DragDropConfig */],
    { provide: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["a" /* DragDropService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["c" /* dragDropServiceFactory */] },
    { provide: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["b" /* DragDropSortableService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["d" /* dragDropSortableServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_1__src_dnd_config__["a" /* DragDropConfig */]] }
];
var DndModule = (function () {
    function DndModule() {
    }
    DndModule.forRoot = function () {
        return {
            ngModule: DndModule,
            providers: providers
        };
    };
    DndModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* NgModule */], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["a" /* DraggableComponent */], __WEBPACK_IMPORTED_MODULE_4__src_droppable_component__["a" /* DroppableComponent */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["a" /* SortableContainer */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["b" /* SortableComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["a" /* DraggableComponent */], __WEBPACK_IMPORTED_MODULE_4__src_droppable_component__["a" /* DroppableComponent */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["a" /* SortableContainer */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["b" /* SortableComponent */]],
                },] },
    ];
    /** @nocollapse */
    DndModule.ctorParameters = function () { return []; };
    return DndModule;
}());


/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuickLinkService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuickLinkService = (function () {
    function QuickLinkService(http, _jsonp, sanitizer) {
        this.http = http;
        this._jsonp = _jsonp;
        this.sanitizer = sanitizer;
        this.quicklinkurl = "/quick-links-portlet";
    }
    QuickLinkService.prototype.isAvailable = function () {
        return this.http.get('/hofapps/applications/admin-flags/index.jsp')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    QuickLinkService.prototype.getAllLinks = function () {
        return this.http.get(this.quicklinkurl + "/get-links" + "?" + new Date().getTime())
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    QuickLinkService.prototype.removeQuickLink = function (quickLink) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        quickLink.url = quickLink.url.changingThisBreaksApplicationSecurity;
        return this.http.post(this.quicklinkurl + "/delete-quick-link", quickLink, options)
            .toPromise()
            .catch(this.handleError);
    };
    QuickLinkService.prototype.createQuickLink = function (quickLink) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.quicklinkurl + "/create-quick-link", quickLink, options)
            .toPromise()
            .catch(this.handleError);
    };
    QuickLinkService.prototype.updateQuickLinks = function (quickLinks) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.quicklinkurl + "/update-quick-links", quickLinks, options)
            .toPromise()
            .catch(this.handleError);
    };
    QuickLinkService.prototype.authenticate = function () {
        return this._jsonp.get(this.quicklinkurl + '/authenticate?callback=JSONP_CALLBACK')
            .toPromise()
            .catch(this.handleError);
    };
    QuickLinkService.prototype.extractData = function (res) {
        return res.json();
    };
    QuickLinkService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    QuickLinkService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === 'function' && _c) || Object])
    ], QuickLinkService);
    return QuickLinkService;
    var _a, _b, _c;
}());


/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_config__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_utils__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AbstractComponent; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd





var AbstractComponent = (function () {
    function AbstractComponent(elemRef, _dragDropService, _config, _cdr) {
        var _this = this;
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._cdr = _cdr;
        /**
         * Whether the object is draggable. Default is true.
         */
        this._dragEnabled = false;
        /**
         * Allows drop on this element
         */
        this.dropEnabled = false;
        this.dropZones = [];
        this.cloneItem = false;
        this._elem = elemRef.nativeElement;
        //
        // DROP events
        //
        this._elem.ondragenter = function (event) {
            _this._onDragEnter(event);
        };
        this._elem.ondragover = function (event) {
            _this._onDragOver(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.dropEffect = _this._config.dropEffect.name;
            }
            return false;
        };
        this._elem.ondragleave = function (event) {
            _this._onDragLeave(event);
        };
        this._elem.ondrop = function (event) {
            _this._onDrop(event);
        };
        //
        // Drag events
        //
        this._elem.ondragstart = function (event) {
            // console.log('ondragstart', event.target);
            _this._onDragStart(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.setData('text', '');
                // Change drag effect
                event.dataTransfer.effectAllowed = _this.effectAllowed || _this._config.dragEffect.name;
                // Change drag image
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["b" /* isPresent */])(_this.dragImage)) {
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["a" /* isString */])(_this.dragImage)) {
                        event.dataTransfer.setDragImage(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["c" /* createImage */])(_this.dragImage));
                    }
                    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["d" /* isFunction */])(_this.dragImage)) {
                        event.dataTransfer.setDragImage(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["e" /* callFun */])(_this.dragImage));
                    }
                    else {
                        var img = _this.dragImage;
                        event.dataTransfer.setDragImage(img.imageElement, img.x_offset, img.y_offset);
                    }
                }
                else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["b" /* isPresent */])(_this._config.dragImage)) {
                    var dragImage = _this._config.dragImage;
                    event.dataTransfer.setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                }
                else if (_this.cloneItem) {
                    _this._dragHelper = _this._elem.cloneNode(true);
                    _this._dragHelper.classList.add('dnd-drag-item');
                    _this._dragHelper.style.position = "absolute";
                    _this._dragHelper.style.top = "0px";
                    _this._dragHelper.style.left = "-1000px";
                    _this._elem.parentElement.appendChild(_this._dragHelper);
                    event.dataTransfer.setDragImage(_this._dragHelper, event.offsetX, event.offsetY);
                }
                // Change drag cursor
                if (_this._dragEnabled) {
                    _this._elem.style.cursor = _this.effectCursor ? _this.effectCursor : _this._config.dragCursor;
                }
                else {
                    _this._elem.style.cursor = _this._defaultCursor;
                }
            }
        };
        this._elem.ondragend = function (event) {
            if (_this._elem.parentElement && _this._dragHelper) {
                _this._elem.parentElement.removeChild(_this._dragHelper);
            }
            // console.log('ondragend', event.target);
            _this._onDragEnd(event);
            // Restore style of dragged element
            _this._elem.style.cursor = _this._defaultCursor;
        };
    }
    Object.defineProperty(AbstractComponent.prototype, "dragEnabled", {
        get: function () {
            return this._dragEnabled;
        },
        set: function (enabled) {
            this._dragEnabled = !!enabled;
            this._elem.draggable = this._dragEnabled;
        },
        enumerable: true,
        configurable: true
    });
    /******* Change detection ******/
    AbstractComponent.prototype.detectChanges = function () {
        var _this = this;
        // Programmatically run change detection to fix issue in Safari
        setTimeout(function () {
            _this._cdr.detectChanges();
        }, 250);
    };
    //****** Droppable *******//
    AbstractComponent.prototype._onDragEnter = function (event) {
        // console.log('ondragenter._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed) {
            // event.preventDefault();
            this._onDragEnterCallback(event);
        }
    };
    AbstractComponent.prototype._onDragOver = function (event) {
        // // console.log('ondragover._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed) {
            // The element is over the same source element - do nothing
            if (event.preventDefault) {
                // Necessary. Allows us to drop.
                event.preventDefault();
            }
            this._onDragOverCallback(event);
        }
    };
    AbstractComponent.prototype._onDragLeave = function (event) {
        // console.log('ondragleave._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed) {
            // event.preventDefault();
            this._onDragLeaveCallback(event);
        }
    };
    AbstractComponent.prototype._onDrop = function (event) {
        // console.log('ondrop._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed) {
            if (event.preventDefault) {
                // Necessary. Allows us to drop.
                event.preventDefault();
            }
            if (event.stopPropagation) {
                // Necessary. Allows us to drop.
                event.stopPropagation();
            }
            this._onDropCallback(event);
            this.detectChanges();
        }
    };
    Object.defineProperty(AbstractComponent.prototype, "_isDropAllowed", {
        get: function () {
            if (this._dragDropService.isDragged && this.dropEnabled) {
                // First, if `allowDrop` is set, call it to determine whether the
                // dragged element can be dropped here.
                if (this.allowDrop) {
                    return this.allowDrop(this._dragDropService.dragData);
                }
                // Otherwise, use dropZones if they are set.
                if (this.dropZones.length === 0 && this._dragDropService.allowedDropZones.length === 0) {
                    return true;
                }
                for (var i = 0; i < this._dragDropService.allowedDropZones.length; i++) {
                    var dragZone = this._dragDropService.allowedDropZones[i];
                    if (this.dropZones.indexOf(dragZone) !== -1) {
                        return true;
                    }
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    //*********** Draggable **********//
    AbstractComponent.prototype._onDragStart = function (event) {
        // console.log('ondragstart.dragEnabled', this._dragEnabled);
        if (this._dragEnabled) {
            this._dragDropService.allowedDropZones = this.dropZones;
            // console.log('ondragstart.allowedDropZones', this._dragDropService.allowedDropZones);
            this._onDragStartCallback(event);
        }
    };
    AbstractComponent.prototype._onDragEnd = function (event) {
        this._dragDropService.allowedDropZones = [];
        // console.log('ondragend.allowedDropZones', this._dragDropService.allowedDropZones);
        this._onDragEndCallback(event);
    };
    //**** Drop Callbacks ****//
    AbstractComponent.prototype._onDragEnterCallback = function (event) { };
    AbstractComponent.prototype._onDragOverCallback = function (event) { };
    AbstractComponent.prototype._onDragLeaveCallback = function (event) { };
    AbstractComponent.prototype._onDropCallback = function (event) { };
    //**** Drag Callbacks ****//
    AbstractComponent.prototype._onDragStartCallback = function (event) { };
    AbstractComponent.prototype._onDragEndCallback = function (event) { };
    AbstractComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    AbstractComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__dnd_service__["a" /* DragDropService */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__dnd_config__["a" /* DragDropConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */], },
    ]; };
    return AbstractComponent;
}());


/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quick_link_list_quick_link_list_component__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quick_link_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__quick_link_list_quick_link_list_component__["a" /* QuickLinkListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__["a" /* DndModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* JsonpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__quick_link_service__["a" /* QuickLinkService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());


/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = isString;
/* harmony export (immutable) */ exports["b"] = isPresent;
/* harmony export (immutable) */ exports["d"] = isFunction;
/* harmony export (immutable) */ exports["c"] = createImage;
/* harmony export (immutable) */ exports["e"] = callFun;
/**
 * Check and return true if an object is type of string
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object not undefined or null
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
/**
 * Check and return true if an object is type of Function
 */
function isFunction(obj) {
    return typeof obj === "function";
}
/**
 * Create Image element with specified url string
 */
function createImage(src) {
    var img = new HTMLImageElement();
    img.src = src;
    return img;
}
/**
 * Call the function
 */
function callFun(fun) {
    return fun();
}


/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'quick-links',
            template: '<quick-link-list></quick-link-list>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());


/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quick_link__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quick_link_service__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuickLinkListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuickLinkListComponent = (function () {
    function QuickLinkListComponent(quickLinkService, sanitizer) {
        this.quickLinkService = quickLinkService;
        this.sanitizer = sanitizer;
        this.title = 'Quick Links';
        // List of quicklinks
        this.quickLinks = [];
        // New quick link that will be created
        this.quickLink = new __WEBPACK_IMPORTED_MODULE_2__quick_link__["a" /* QuickLink */]();
        // Display Create or List
        this.listView = true;
        // Outage
        this.outage = false;
    }
    QuickLinkListComponent.prototype.getAllLinks = function () {
        var _this = this;
        this.quickLinkService.getAllLinks().then(function (q) {
            _this.quickLinks = q;
            for (var _i = 0, _a = _this.quickLinks; _i < _a.length; _i++) {
                var l = _a[_i];
                l.url = _this.sanitizer.bypassSecurityTrustResourceUrl(l.url);
            }
        }, function (error) { return _this.errorMessage = "An error has occurred trying to retrieve your quick links. Please refresh the page and try again."; });
    };
    QuickLinkListComponent.prototype.removeQuickLink = function (quickLink) {
        var index = this.quickLinks.indexOf(quickLink);
        this.quickLinks.splice(index, 1);
        this.quickLinkService.removeQuickLink(quickLink);
    };
    QuickLinkListComponent.prototype.createQuickLink = function () {
        var _this = this;
        this.quickLinkService.createQuickLink(this.quickLink).then(function (p) { return _this.back(); }, function (error) { return _this.errorMessage = "An error has occurred creating your quick link. Please refresh the page and try again."; });
    };
    /*
     * Reordering logic
     */
    QuickLinkListComponent.prototype.transferDataSuccess = function ($event) {
        for (var i = 0; i < this.quickLinks.length; i++) {
            this.quickLinks[i].order = i;
        }
        this.quickLinkService.updateQuickLinks(this.quickLinks);
    };
    /**
      * Navigation
      */
    QuickLinkListComponent.prototype.create = function () {
        this.listView = false;
    };
    QuickLinkListComponent.prototype.back = function () {
        this.getAllLinks();
        this.listView = true;
    };
    QuickLinkListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quickLinkService.isAvailable().then(function (response) {
            if (response['qlDown'] === 'false') {
                _this.quickLinkService.authenticate().then(function () { _this.getAllLinks(); });
            }
            else {
                // QL channel is not available
                _this.outage = true;
            }
        });
    };
    QuickLinkListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'quick-link-list',
            template: __webpack_require__(608)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__quick_link_service__["a" /* QuickLinkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__quick_link_service__["a" /* QuickLinkService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === 'function' && _b) || Object])
    ], QuickLinkListComponent);
    return QuickLinkListComponent;
    var _a, _b;
}());


/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuickLink; });
var QuickLink = (function () {
    function QuickLink() {
    }
    return QuickLink;
}());


/***/ },

/***/ 608:
/***/ function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"outage\">\n\t<div class=\"col-sm-12\">\n\t\t<div class=\"alert alert-danger\">\n\t\t\tQuick Links are currently unavailable due to scheduled maintenance. \n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container-fluid\" *ngIf=\"listView && !outage\">\n\t<div class=\"row\" [hidden]=\"!errorMessage\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"alert alert-danger\" [hidden]=\"!errorMessage\">{{errorMessage}}</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<a class=\"pull-right clickable\" (click)=\"create()\">\n\t\t\t\t<span class=\"fa fa-plus-square-o fa-2x\"></span>\n\t\t\t\t<span class=\"sr-only\">Create new quick link</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"list-group\" *ngIf=\"quickLinks\">\n\t\t\t\t<ul class=\"list-group\" dnd-sortable-container [sortableData]=\"quickLinks\">\n\t\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let quickLink of quickLinks; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\" (onDropSuccess)=\"transferDataSuccess($event)\"><a class=\"e2e-trusted-url\" [href]='quickLink.url'>{{quickLink.text}}</a>\n\t\t\t\t\t\t<button (click)=\"removeQuickLink(quickLink)\" class=\"btn btn-link pull-right\">\n\t\t\t\t\t\t\t<span class=\"fa fa-trash-o fa-lg\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t<span class=\"sr-only ng-binding\">Delete {{quickLink.text}} quick link</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"alert alert-info\" *ngIf=\"!quickLinks\">You have no Quick Links! Please click the plus sign to add one!</div>\n\t\t</div>\n\t</div>\n\t<p></p>\n</div>\n\n<div class=\"container-fluid\" *ngIf=\"!listView\">\n\t<div class=\"row\" [hidden]=\"!errorMessage\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"alert alert-danger\" [hidden]=\"!errorMessage\">{{errorMessage}}</div>\n\t\t</div>\n\t</div>\n\t<form (ngSubmit)=\"createQuickLink()\" #quickLinkForm=\"ngForm\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"quicklinkUrl\">Quicklink URL</label>\n\t\t\t<input type=\"url\" class=\"form-control\" id=\"url\" [(ngModel)]=\"quickLink.url\" name=\"url\" #url=\"ngModel\" required>\n\t\t\t<div [hidden]=\"url.valid || url.pristine\" class=\"alert alert-danger\">\n\t\t\t\tURL is required\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"quicklinkUrl\">Description</label>\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"text\" [(ngModel)]=\"quickLink.text\" name=\"text\" #text=\"ngModel\" required>\n\t\t\t<div [hidden]=\"text.valid || text.pristine\" class=\"alert alert-danger\">\n\t\t\t\tDescription is required\n\t\t\t</div>\n\t\t</div>\n\n\t\t<button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!quickLinkForm.form.valid\">Submit</button>\n\t\t<a  class=\"btn btn-default\" (click)=\"back()\">Back</a>\n\t</form>\n\t<p></p>\n</div>\n"

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_config__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DraggableComponent; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





var DraggableComponent = (function (_super) {
    __extends(DraggableComponent, _super);
    function DraggableComponent(elemRef, dragDropService, config, cdr) {
        _super.call(this, elemRef, dragDropService, config, cdr);
        /**
         * Callback function called when the drag actions happened.
         */
        this.onDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.onDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        this.onDragSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this._defaultCursor = this._elem.style.cursor;
        this.dragEnabled = true;
    }
    Object.defineProperty(DraggableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DraggableComponent.prototype._onDragStartCallback = function (event) {
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        this._elem.classList.add(this._config.onDragStartClass);
        //
        this.onDragStart.emit({ dragData: this.dragData, mouseEvent: event });
    };
    DraggableComponent.prototype._onDragEndCallback = function (event) {
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        this._elem.classList.remove(this._config.onDragStartClass);
        //
        this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
    };
    DraggableComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */], args: [{ selector: '[dnd-draggable]' },] },
    ];
    /** @nocollapse */
    DraggableComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__dnd_service__["a" /* DragDropService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__dnd_config__["a" /* DragDropConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */], },
    ]; };
    DraggableComponent.propDecorators = {
        'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["dragEnabled",] },],
        'onDragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'onDragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'dragData': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'onDragSuccessCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */], args: ["onDragSuccess",] },],
        'dropzones': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["dropZones",] },],
        'effectallowed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["effectAllowed",] },],
        'effectcursor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["effectCursor",] },],
        'dragImage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'cloneItem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
    };
    return DraggableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));


/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_config__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DroppableComponent; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





var DroppableComponent = (function (_super) {
    __extends(DroppableComponent, _super);
    function DroppableComponent(elemRef, dragDropService, config, cdr) {
        _super.call(this, elemRef, dragDropService, config, cdr);
        /**
         * Callback function called when the drop action completes correctly.
         * It is activated before the on-drag-success callback.
         */
        this.onDropSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.onDragEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.onDragOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.onDragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.dropEnabled = true;
    }
    Object.defineProperty(DroppableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "allowdrop", {
        set: function (value) {
            this.allowDrop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DroppableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragEnterClass);
            this.onDragEnter.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    DroppableComponent.prototype._onDragOverCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragOverClass);
            this.onDragOver.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDragLeaveCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
            this.onDragLeave.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDropCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this.onDropSuccess.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            if (this._dragDropService.onDragSuccessCallback) {
                this._dragDropService.onDragSuccessCallback.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            }
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
        }
    };
    DroppableComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */], args: [{ selector: '[dnd-droppable]' },] },
    ];
    /** @nocollapse */
    DroppableComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__dnd_service__["a" /* DragDropService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__dnd_config__["a" /* DragDropConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */], },
    ]; };
    DroppableComponent.propDecorators = {
        'droppable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["dropEnabled",] },],
        'onDropSuccess': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'onDragEnter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'onDragOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'onDragLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'allowdrop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["allowDrop",] },],
        'dropzones': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["dropZones",] },],
        'effectallowed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["effectAllowed",] },],
        'effectcursor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["effectCursor",] },],
    };
    return DroppableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));


/***/ },

/***/ 885:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(459);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
});


/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_config__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return SortableComponent; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





var SortableContainer = (function (_super) {
    __extends(SortableContainer, _super);
    function SortableContainer(elemRef, dragDropService, config, cdr, _sortableDataService) {
        _super.call(this, elemRef, dragDropService, config, cdr);
        this._sortableDataService = _sortableDataService;
        this._sortableData = [];
        this.dragEnabled = false;
    }
    Object.defineProperty(SortableContainer.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "sortableData", {
        get: function () {
            return this._sortableData;
        },
        set: function (sortableData) {
            this._sortableData = sortableData;
            //
            this.dropEnabled = !!this._sortableData;
            // console.log("collection is changed, drop enabled: " + this.dropEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableContainer.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            var item = this._sortableDataService.sortableContainer._sortableData[this._sortableDataService.index];
            // Check does element exist in sortableData of this Container
            if (this._sortableData.indexOf(item) === -1) {
                // Let's add it
                // console.log('Container._onDragEnterCallback. drag node [' + this._sortableDataService.index.toString() + '] over parent node');
                // Remove item from previouse list
                this._sortableDataService.sortableContainer._sortableData.splice(this._sortableDataService.index, 1);
                if (this._sortableDataService.sortableContainer._sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableData.unshift(item);
                this._sortableDataService.sortableContainer = this;
                this._sortableDataService.index = 0;
            }
            // Refresh changes in properties of container component
            this.detectChanges();
        }
    };
    SortableContainer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */], args: [{ selector: '[dnd-sortable-container]' },] },
    ];
    /** @nocollapse */
    SortableContainer.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__dnd_service__["a" /* DragDropService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__dnd_config__["a" /* DragDropConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__dnd_service__["b" /* DragDropSortableService */], },
    ]; };
    SortableContainer.propDecorators = {
        'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["dragEnabled",] },],
        'sortableData': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'dropzones': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["dropZones",] },],
    };
    return SortableContainer;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));
var SortableComponent = (function (_super) {
    __extends(SortableComponent, _super);
    function SortableComponent(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
        _super.call(this, elemRef, dragDropService, config, cdr);
        this._sortableContainer = _sortableContainer;
        this._sortableDataService = _sortableDataService;
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        this.onDragSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.onDragStartCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.onDragOverCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.onDragEndCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.onDropSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.dropZones = this._sortableContainer.dropZones;
        this.dragEnabled = true;
        this.dropEnabled = true;
    }
    Object.defineProperty(SortableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableComponent.prototype._onDragStartCallback = function (event) {
        // console.log('_onDragStartCallback. dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = true;
        this._sortableDataService.sortableContainer = this._sortableContainer;
        this._sortableDataService.index = this.index;
        this._sortableDataService.markSortable(this._elem);
        // Add dragData
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        //
        this.onDragStartCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragOverCallback = function (event) {
        if (this._sortableDataService.isDragged && this._elem !== this._sortableDataService.elem) {
            // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
            this._sortableDataService.sortableContainer = this._sortableContainer;
            this._sortableDataService.index = this.index;
            this._sortableDataService.markSortable(this._elem);
            this.onDragOverCallback.emit(this._dragDropService.dragData);
        }
    };
    SortableComponent.prototype._onDragEndCallback = function (event) {
        // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = false;
        this._sortableDataService.sortableContainer = null;
        this._sortableDataService.index = null;
        this._sortableDataService.markSortable(null);
        // Add dragGata
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        //
        this.onDragEndCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            this._sortableDataService.markSortable(this._elem);
            if ((this.index !== this._sortableDataService.index) ||
                (this._sortableDataService.sortableContainer.sortableData !== this._sortableContainer.sortableData)) {
                // console.log('Component._onDragEnterCallback. drag node [' + this.index + '] over node [' + this._sortableDataService.index + ']');
                // Get item
                var item = this._sortableDataService.sortableContainer.sortableData[this._sortableDataService.index];
                // Remove item from previouse list
                this._sortableDataService.sortableContainer.sortableData.splice(this._sortableDataService.index, 1);
                if (this._sortableDataService.sortableContainer.sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableContainer.sortableData.splice(this.index, 0, item);
                if (this._sortableContainer.dropEnabled) {
                    this._sortableContainer.dropEnabled = false;
                }
                this._sortableDataService.sortableContainer = this._sortableContainer;
                this._sortableDataService.index = this.index;
            }
        }
    };
    SortableComponent.prototype._onDropCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            // console.log('onDropCallback.onDropSuccessCallback.dragData', this._dragDropService.dragData);
            this.onDropSuccessCallback.emit(this._dragDropService.dragData);
            if (this._dragDropService.onDragSuccessCallback) {
                // console.log('onDropCallback.onDragSuccessCallback.dragData', this._dragDropService.dragData);
                this._dragDropService.onDragSuccessCallback.emit(this._dragDropService.dragData);
            }
            // Refresh changes in properties of container component
            this._sortableContainer.detectChanges();
        }
    };
    SortableComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */], args: [{ selector: '[dnd-sortable]' },] },
    ];
    /** @nocollapse */
    SortableComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__dnd_service__["a" /* DragDropService */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__dnd_config__["a" /* DragDropConfig */], },
        { type: SortableContainer, },
        { type: __WEBPACK_IMPORTED_MODULE_3__dnd_service__["b" /* DragDropSortableService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ChangeDetectorRef */], },
    ]; };
    SortableComponent.propDecorators = {
        'index': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ['sortableIndex',] },],
        'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["dragEnabled",] },],
        'droppable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["dropEnabled",] },],
        'dragData': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'effectallowed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["effectAllowed",] },],
        'effectcursor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */], args: ["effectCursor",] },],
        'onDragSuccessCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */], args: ["onDragSuccess",] },],
        'onDragStartCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */], args: ["onDragStart",] },],
        'onDragOverCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */], args: ["onDragOver",] },],
        'onDragEndCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */], args: ["onDragEnd",] },],
        'onDropSuccessCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */], args: ["onDropSuccess",] },],
    };
    return SortableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));


/***/ }

},[885]);
//# sourceMappingURL=quicklinks.map