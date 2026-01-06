var ac_email =
webpackJsonpac__name_([1],{

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountService = (function () {
    function AccountService(http, _jsonp) {
        this.http = http;
        this._jsonp = _jsonp;
        //private emailurl = "/email/v2/api";
        this.emailurl = "/hofstra-mail-portlet";
    }
    AccountService.prototype.getAccounts = function () {
        var serviceUrl = "/get-accounts";
        return this.http.get(this.emailurl + serviceUrl + "?" + new Date().getTime())
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    /*	searchAccounts(account: string) : Observable<EmailAccount[]> {
            let serviceUrl = "/search-address-book/" + account;
    
            return this.http.get(this.emailurl + serviceUrl + "?" + new Date().getTime())
                // ...and calling .json() on the response to return data
                .map((res:Response) => res.json())
                //...errors if any
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        }
    */
    AccountService.prototype.authenticate = function () {
        return this._jsonp.get(this.emailurl + '/authenticate?callback=JSONP_CALLBACK' + "&" + new Date().getTime())
            .toPromise()
            .catch(this.handleError);
    };
    AccountService.prototype.isAvailable = function () {
        return this.http.get('/hofapps/applications/admin-flags/index.jsp')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AccountService.prototype.extractData = function (res) {
        return res.json();
    };
    AccountService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AccountService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */]) === 'function' && _b) || Object])
    ], AccountService);
    return AccountService;
    var _a, _b;
}());


/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GoogleEmailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleEmailService = (function () {
    function GoogleEmailService(http) {
        this.http = http;
        //private emailurl = "/email/v2/api";
        this.emailurl = "/hofstra-mail-portlet";
    }
    GoogleEmailService.prototype.getEmails = function (account, fetch) {
        var serviceUrl = "/update-gmail-inbox-service/" + fetch;
        // If there is a next page token, append it to the URL
        if (account.nextPageToken) {
            serviceUrl += "/" + account.nextPageToken;
        }
        return this.http.post(this.emailurl + serviceUrl, account)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    GoogleEmailService.prototype.deleteEmails = function (account) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.emailurl + "/delete-student-email", account, options)
            .toPromise()
            .catch(this.handleError);
    };
    GoogleEmailService.prototype.downloadAttachment = function (account, email, attachment) {
        window.open(this.emailurl + "/download-gmail-attachment/" + account.address + "/" + email.uid + "/"
            + attachment.id + "/" + attachment.name, "_blank");
    };
    GoogleEmailService.prototype.markAsRead = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.emailurl + "/set-student-email-read", email, options)
            .toPromise()
            .catch(this.handleError);
    };
    GoogleEmailService.prototype.sendEmail = function (email, fileList) {
        var formData = new FormData();
        formData.append("email", JSON.stringify(email));
        if (fileList) {
            for (var i = 0; i < fileList.length; i++) {
                formData.append('files', fileList.item(i));
            }
        }
        return this.http.post(this.emailurl + "/send-student-email-service", formData)
            .toPromise()
            .catch(this.handleError);
    };
    GoogleEmailService.prototype.extractData = function (res) {
        // Google API will return a next page token with each request.
        // We can extract it here and set the token and use it for the next request.
        return res.json();
    };
    GoogleEmailService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    GoogleEmailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], GoogleEmailService);
    return GoogleEmailService;
    var _a;
}());


/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_config__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccordionComponent; });


/** Displays collapsible content panels for presenting information in a limited amount of space. */
var AccordionComponent = (function () {
    function AccordionComponent(config) {
        this.groups = [];
        Object.assign(this, config);
    }
    AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    AccordionComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */], args: [{
                    selector: 'accordion',
                    template: "<ng-content></ng-content>",
                    // tslint:disable-next-line
                    host: {
                        '[class.panel-group]': 'true',
                        '[attr.aria-multiselectable]': 'closeOthers',
                        role: 'tablist'
                    }
                },] },
    ];
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__accordion_config__["a" /* AccordionConfig */], },
    ]; };
    AccordionComponent.propDecorators = {
        'closeOthers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
    };
    return AccordionComponent;
}());
//# sourceMappingURL=accordion.component.js.map

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccordionConfig; });

/**
 * Configuration service, provides default values for the AccordionComponent.
 */
var AccordionConfig = (function () {
    function AccordionConfig() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
    }
    AccordionConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    AccordionConfig.ctorParameters = function () { return []; };
    return AccordionConfig;
}());
//# sourceMappingURL=accordion.config.js.map

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlertConfig; });

var AlertConfig = (function () {
    function AlertConfig() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
    AlertConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    AlertConfig.ctorParameters = function () { return []; };
    return AlertConfig;
}());
//# sourceMappingURL=alert.config.js.map

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabset_component__ = __webpack_require__(218);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TabDirective; });


var TabDirective = (function () {
    function TabDirective(tabset) {
        /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
        this.deselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        /** fired before tab will be removed */
        this.removed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: function () {
            return this._active;
        },
        set: function (active) {
            var _this = this;
            if (this.disabled && active || !active) {
                if (!active) {
                    this._active = active;
                }
                this.deselect.emit(this);
                return;
            }
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach(function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    TabDirective.prototype.ngOnInit = function () {
        this.removable = this.removable;
    };
    TabDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */], args: [{ selector: 'tab, [tab]' },] },
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__tabset_component__["a" /* TabsetComponent */], },
    ]; };
    TabDirective.propDecorators = {
        'heading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'removable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'customClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */], args: ['class.active',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'deselect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'removed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */], args: ['class.tab-pane',] },],
    };
    return TabDirective;
}());
//# sourceMappingURL=tab.directive.js.map

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabset_config__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TabsetComponent; });


// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
var TabsetComponent = (function () {
    function TabsetComponent(config) {
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        /** if true tabs will be placed vertically */
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /** if true tabs fill the container and have a consistent width */
        get: function () {
            return this._justified;
        },
        set: function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /** navigation context class: 'tabs' or 'pills' */
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    TabsetComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    TabsetComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && tab.active !== false;
    };
    TabsetComponent.prototype.removeTab = function (tab) {
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (tab.active && this.hasAvailableTabs(index)) {
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
    };
    TabsetComponent.prototype.getClosestTabIndex = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            var prevIndex = index - step;
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    TabsetComponent.prototype.hasAvailableTabs = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    TabsetComponent.prototype.setClassMap = function () {
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'nav-justified': this.justified
            },
            _a["nav-" + this.type] = true,
            _a
        );
        var _a;
    };
    TabsetComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */], args: [{
                    selector: 'tabset',
                    template: "\n    <ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\n        <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n          [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n          <a href=\"javascript:void(0);\" class=\"nav-link\"\n            [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n            (click)=\"tabz.active = true\">\n            <span [ngTransclude]=\"tabz.headingRef\">{{tabz.heading}}</span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"glyphicon glyphicon-remove-circle\"></span>\n            </span>\n          </a>\n        </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__tabset_config__["a" /* TabsetConfig */], },
    ]; };
    TabsetComponent.propDecorators = {
        'vertical': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'justified': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'clazz': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */], args: ['class.tab-container',] },],
    };
    return TabsetComponent;
}());
//# sourceMappingURL=tabset.component.js.map

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TabsetConfig; });

var TabsetConfig = (function () {
    function TabsetConfig() {
        /** provides default navigation context class: 'tabs' or 'pills' */
        this.type = 'tabs';
    }
    TabsetConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    TabsetConfig.ctorParameters = function () { return []; };
    return TabsetConfig;
}());
//# sourceMappingURL=tabset.config.js.map

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_utils__ = __webpack_require__(221);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TypeaheadContainerComponent; });



var TypeaheadContainerComponent = (function () {
    function TypeaheadContainerComponent(element) {
        this.isFocused = false;
        this._matches = [];
        this.element = element;
    }
    Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
        get: function () {
            return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        set: function (value) {
            this._matches = value;
            if (this._matches.length > 0) {
                this._active = this._matches[0];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
        get: function () {
            return this.parent ? this.parent.optionsListTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
        get: function () {
            return this.parent ? this.parent.typeaheadItemTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadContainerComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this._active);
    };
    TypeaheadContainerComponent.prototype.prevActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0
            ? this.matches.length - 1
            : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
    };
    TypeaheadContainerComponent.prototype.nextActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1
            ? 0
            : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
    };
    TypeaheadContainerComponent.prototype.selectActive = function (value) {
        this.isFocused = true;
        this._active = value;
    };
    TypeaheadContainerComponent.prototype.hightlight = function (match, query) {
        var itemStr = match.value;
        var itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? __WEBPACK_IMPORTED_MODULE_2__typeahead_utils__["a" /* TypeaheadUtils */].latinize(itemStr)
            : itemStr).toLowerCase();
        var startIdx;
        var tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            var queryLen = query.length;
            for (var i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
                    itemStrHelper = itemStrHelper.substring(0, startIdx) + '        ' + ' '.repeat(tokenLen) + '         ' + itemStrHelper.substring(startIdx + tokenLen);
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
            }
        }
        return itemStr;
    };
    TypeaheadContainerComponent.prototype.focusLost = function () {
        this.isFocused = false;
    };
    TypeaheadContainerComponent.prototype.isActive = function (value) {
        return this._active === value;
    };
    TypeaheadContainerComponent.prototype.selectMatch = function (value, e) {
        var _this = this;
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout(function () {
            return _this.parent.typeaheadOnSelect.emit(value);
        }, 0);
        return false;
    };
    TypeaheadContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */], args: [{
                    selector: 'typeahead-container',
                    // tslint:disable-next-line
                    template: "\n<!-- inject options list template -->\n<template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\n  [ngOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></template>\n\n<!-- default options item template -->\n<template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"hightlight(match, query)\"></span></template>\n\n<!-- Bootstrap 3 options list template -->\n<template #bs3Template>\n<ul class=\"dropdown-menu\">\n  <template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <li *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{match}}</li>\n    <li *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\">\n      <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n        <template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" \n          [ngOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></template>\n      </a>\n    </li>\n  </template>\n</ul>\n</template>\n\n<!-- Bootstrap 4 options list template -->\n<template #bs4Template >\n<template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n   <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{match}}</h6>\n   <template [ngIf]=\"!match.isHeader()\">\n      <button\n        class=\"dropdown-item\"\n        (click)=\"selectMatch(match, $event)\"\n        (mouseenter)=\"selectActive(match)\"\n        [class.active]=\"isActive(match)\">\n          <template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" \n            [ngOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></template>\n      </button>\n  </template>\n</template>\n</template>\n",
                    // tslint:disable
                    host: {
                        'class': 'dropdown open',
                        '[class.dropdown-menu]': 'isBs4',
                        style: 'position: absolute;display: block;'
                    },
                    // tslint: enable
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ViewEncapsulation */].None
                },] },
    ];
    /** @nocollapse */
    TypeaheadContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], },
    ]; };
    TypeaheadContainerComponent.propDecorators = {
        'focusLost': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */], args: ['mouseleave',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */], args: ['blur',] },],
    };
    return TypeaheadContainerComponent;
}());
//# sourceMappingURL=typeahead-container.component.js.map

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__latin_map__ = __webpack_require__(344);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TypeaheadUtils; });

var TypeaheadUtils = (function () {
    function TypeaheadUtils() {
    }
    TypeaheadUtils.latinize = function (str) {
        if (!str) {
            return '';
        }
        return str.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
            return TypeaheadUtils.latinMap[a] || a;
        });
    };
    TypeaheadUtils.escapeRegexp = function (queryToEscape) {
        // Regex: capture the whole query string and replace it with the string
        // that will be used to match the results, for example if the capture is
        // 'a' the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    };
    /* tslint:disable */
    TypeaheadUtils.tokenize = function (str, wordRegexDelimiters, phraseRegexDelimiters) {
        if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
        if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
        /* tslint:enable */
        var regexStr = '(?:[' + phraseRegexDelimiters + '])([^' + phraseRegexDelimiters + ']+)(?:[' + phraseRegexDelimiters + '])|([^' + wordRegexDelimiters + ']+)';
        var preTokenized = str.split(new RegExp(regexStr, 'g'));
        var result = [];
        var preTokenizedLength = preTokenized.length;
        var token;
        var replacePhraseDelimiters = new RegExp('[' + phraseRegexDelimiters + ']+', 'g');
        for (var i = 0; i < preTokenizedLength; i += 1) {
            token = preTokenized[i];
            if (token && token.length && token !== wordRegexDelimiters) {
                result.push(token.replace(replacePhraseDelimiters, ''));
            }
        }
        return result;
    };
    TypeaheadUtils.getValueFromObject = function (object, option) {
        if (!option || typeof object !== 'object') {
            return object.toString();
        }
        if (option.endsWith('()')) {
            var functionName = option.slice(0, option.length - 2);
            return object[functionName]().toString();
        }
        var properties = option.replace(/\[(\w+)\]/g, '.$1')
            .replace(/^\./, '');
        var propertiesArray = properties.split('.');
        for (var _i = 0, propertiesArray_1 = propertiesArray; _i < propertiesArray_1.length; _i++) {
            var property = propertiesArray_1[_i];
            if (property in object) {
                object = object[property];
            }
        }
        return object.toString();
    };
    TypeaheadUtils.latinMap = __WEBPACK_IMPORTED_MODULE_0__latin_map__["a" /* latinMap */];
    return TypeaheadUtils;
}());
//# sourceMappingURL=typeahead-utils.js.map

/***/ },

/***/ 330:
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
            selector: 'email-app',
            template: '<router-outlet name="email"></router-outlet>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());


/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_email__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__google_email_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EmailComposeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmailComposeComponent = (function () {
    // 
    function EmailComposeComponent(googleEmailService, accountService, router) {
        this.googleEmailService = googleEmailService;
        this.accountService = accountService;
        this.router = router;
        // Status messages
        this.alerts = [];
        // Email objects
        this.email = new __WEBPACK_IMPORTED_MODULE_2__models_email__["a" /* Email */]();
        this.attachmentDesc = "";
        if (this.accountService.activeAccount) {
            if (this.accountService.activeAccount.type === "GMAIL") {
                this.email = this.googleEmailService.emailReply;
            }
        }
        // If this email is a reply, we need to set the recepients as the reply to header states.
        if (this.email.replyTo) {
            this.asyncRecipients = this.email.replyTo;
            this.email.recipients = this.email.replyTo;
        }
        else if (this.email.recipients) {
            this.asyncRecipients = this.email.recipients + ",";
        }
        if (this.email.cc) {
            this.asyncRecipientsCC = this.email.cc + ",";
        }
        if (this.email.bcc) {
            this.asyncRecipientsBCC = this.email.bcc + ",";
        }
        /*
                this.dataSource = Observable
                .create((observer: any) => {
                    // Runs on every search
                    observer.next(this.asyncRecipients);
                })
                .mergeMap((token: string) => this.getSearchAsObservable(token));
        
                this.dataSourceCC = Observable
                .create((observer: any) => {
                    // Runs on every search
                    observer.next(this.asyncRecipientsCC);
                })
                .mergeMap((token: string) => this.getSearchAsObservable(token));
        
                this.dataSourceBCC = Observable
                .create((observer: any) => {
                    // Runs on every search
                    observer.next(this.asyncRecipientsBCC);
                })
                .mergeMap((token: string) => this.getSearchAsObservable(token));
        */
    }
    EmailComposeComponent.prototype.sendEmail = function () {
        var _this = this;
        // Bug fix for when typeahead wasn't activated after selecting users.
        // This should really be resolved on the typeahead directive.
        if (!this.email.recipients) {
            this.email.recipients = this.asyncRecipients;
        }
        if (!this.email.cc) {
            this.email.cc = this.asyncRecipientsCC;
        }
        if (!this.email.bcc) {
            this.email.bcc = this.asyncRecipientsBCC;
        }
        // Choose the active account
        this.email.from = this.accountService.activeAccount.address;
        if (this.accountService.activeAccount.type === "GMAIL") {
            this.googleEmailService.sendEmail(this.email, this.fileList).then(function (e) {
                _this.back();
            }, function (error) {
                _this.createAlert("danger", "An error has occurred sending your email.  Please refresh your page. If the problem persists please contact Hofstra Help Desk at <a class='alert-link' href='tel:+15164637777'>(516)463-7777</a>");
            });
        }
    };
    EmailComposeComponent.prototype.fileChange = function (event) {
        this.fileList = event.target.files;
        // loop through files
        this.attachmentDesc = "";
        for (var i = 0; i < this.fileList.length; i++) {
            if (this.attachmentDesc != "") {
                this.attachmentDesc += ", " + this.fileList.item(i).name;
            }
            else {
                this.attachmentDesc = this.fileList.item(i).name;
            }
        }
    };
    /*
     * Selecting emails
     */
    /*
       getSearchAsObservable(token: string): Observable<any> {
        return this.accountService.searchAccounts(token.split(',').pop().trim());
       }
    */
    EmailComposeComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    EmailComposeComponent.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
    };
    EmailComposeComponent.prototype.typeaheadOnSelect = function (e) {
        if (this.email.recipients)
            this.email.recipients += e.item.email + ", ";
        else
            this.email.recipients = e.item.email + ", ";
        this.asyncRecipients = this.email.recipients;
    };
    EmailComposeComponent.prototype.changeTypeaheadLoadingCC = function (e) {
        this.typeaheadLoadingCC = e;
    };
    EmailComposeComponent.prototype.changeTypeaheadNoResultsCC = function (e) {
        this.typeaheadNoResultsCC = e;
    };
    EmailComposeComponent.prototype.typeaheadOnSelectCC = function (e) {
        if (this.email.cc)
            this.email.cc += e.item.email + ", ";
        else
            this.email.cc = e.item.email + ", ";
        this.asyncRecipientsCC = this.email.cc;
    };
    EmailComposeComponent.prototype.changeTypeaheadLoadingBCC = function (e) {
        this.typeaheadLoadingBCC = e;
    };
    EmailComposeComponent.prototype.changeTypeaheadNoResultsBCC = function (e) {
        this.typeaheadNoResultsBCC = e;
    };
    EmailComposeComponent.prototype.typeaheadOnSelectBCC = function (e) {
        if (this.email.bcc)
            this.email.bcc += e.item.email + ", ";
        else
            this.email.bcc = e.item.email + ", ";
        this.asyncRecipientsBCC = this.email.bcc;
    };
    /*
     * Navigation
     */
    EmailComposeComponent.prototype.back = function (error) {
        this.router.navigate([{ outlets: { email: null } }]);
    };
    EmailComposeComponent.prototype.createAlert = function (type, message) {
        this.alerts.push({
            type: type,
            msg: message,
            timeout: 5000
        });
    };
    EmailComposeComponent.prototype.ngOnInit = function () { };
    EmailComposeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'email-compose',
            template: __webpack_require__(606)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__google_email_service__["a" /* GoogleEmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__google_email_service__["a" /* GoogleEmailService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__account_service__["a" /* AccountService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], EmailComposeComponent);
    return EmailComposeComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_email__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_email_account__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__google_email_service__ = __webpack_require__(213);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EmailListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmailListComponent = (function () {
    function EmailListComponent(accountService, googleEmailService, router, sanitizer) {
        this.accountService = accountService;
        this.googleEmailService = googleEmailService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.title = 'Emails';
        // Status messages
        this.alerts = [];
        // Email objects
        this.emailAccounts = [];
        this.showList = true;
        this.emailListAmount = 10;
        this.authenticationComplete = false;
        this.authenticationCounter = 0;
        // Outage
        this.outage = false;
        // Status of accordion for details
        this.status = {
            isFirstOpen: true,
            isOpen: false
        };
        this.cacheBust = this.sanitizer.bypassSecurityTrustResourceUrl("/hofstra-mail-portlet/images/rubiks.gif?" + new Date().getTime());
        this.activeEmailAccount = new __WEBPACK_IMPORTED_MODULE_4__models_email_account__["a" /* EmailAccount */]();
    }
    EmailListComponent.prototype.getEmailAddresses = function () {
        var _this = this;
        this.accountService.getAccounts().then(function (e) {
            _this.emailAccounts = e;
            _this.activeEmailAccount = _this.emailAccounts[0];
            // Retrieve emails for all accounts
            _this.getEmailsAllAccounts(0, _this.emailListAmount);
            // After retrieving emails from cache, grab cache busted version
            // this.getEmailsAllAccounts(0, this.emailListAmount, true);
        }, function (error) { return _this.createAlert("danger", "An error has occurred retrieving your email accounts.  Please refresh your page. If the problem persists please contact Hofstra Help Desk at <a class='alert-link' href='tel:+15164637777'>(516)463-7777</a>"); });
    };
    EmailListComponent.prototype.getEmailsAllAccounts = function (offset, fetch) {
        var _this = this;
        var _loop_1 = function(account) {
            if (account.type === "GMAIL") {
                this_1.googleEmailService.getEmails(account, fetch).then(function (p) {
                    account.emails = account.emails.concat(p.emails);
                    account.nextPageToken = p.nextPageToken;
                }, function (error) { return _this.createAlert("danger", "An error has occurred retrieving your inbox.  Please refresh your page. If the problem persists please contact Hofstra Help Desk at <a class='alert-link' href='tel:+15164637777'>(516)463-7777</a>"); });
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.emailAccounts; _i < _a.length; _i++) {
            var account = _a[_i];
            _loop_1(account);
        }
    };
    EmailListComponent.prototype.openDetails = function (email) {
        var _this = this;
        this.showList = false;
        // Mark email as read
        if (!email.read) {
            if (this.activeEmailAccount.type === "GMAIL") {
                email.account = this.activeEmailAccount.address;
                this.googleEmailService.markAsRead(email).then(null, function (error) { return _this.createAlert("danger", "An error has occurred.  Please refresh your page. If the problem persists please contact Hofstra Help Desk at <a class='alert-link' href='tel:+15164637777'>(516)463-7777</a>"); });
            }
            email.read = true;
        }
        this.emailDetails = email;
    };
    EmailListComponent.prototype.downloadAttachment = function (email, attachment) {
        if (this.activeEmailAccount.type === "GMAIL") {
            this.googleEmailService.downloadAttachment(this.activeEmailAccount, this.emailDetails, attachment);
        }
    };
    //====================================
    //
    //  Toolbar functionality
    //
    //====================================
    EmailListComponent.prototype.refreshAccount = function () {
        var _this = this;
        var account = this.activeEmailAccount;
        account.currentIndex = 0;
        if (account.type === "GMAIL") {
            account.nextPageToken = "";
            this.googleEmailService.getEmails(account, this.emailListAmount).then(function (p) {
                account.emails = p.emails;
                account.nextPageToken = p.nextPageToken;
            }, function (error) { return _this.createAlert("danger", "An error has occurred retrieving your inbox.  Please refresh your page. If the problem persists please contact Hofstra Help Desk at <a class='alert-link' href='tel:+15164637777'>(516)463-7777</a>"); });
        }
    };
    EmailListComponent.prototype.incrementPage = function () {
        var _this = this;
        this.activeEmailAccount.currentIndex += this.emailListAmount;
        // Check if we already have this email in the array
        if (!this.activeEmailAccount.emails[this.activeEmailAccount.currentIndex]) {
            var offset = this.activeEmailAccount.emails.length;
            if (this.activeEmailAccount.type === "GMAIL") {
                // Sorry, for some reason this.activeEmailAccount would not work in the .then function.
                // Had to assign it to another variable and use that instead. Odd...
                var account_1 = this.activeEmailAccount;
                this.googleEmailService.getEmails(account_1, this.emailListAmount).then(function (p) {
                    account_1.emails = account_1.emails.concat(p.emails);
                    account_1.nextPageToken = p.nextPageToken;
                }, function (error) { return _this.createAlert("danger", "An error has occurred retrieving your email.  Please refresh your page. If the problem persists please contact Hofstra Help Desk at <a class='alert-link' href='tel:+15164637777'>(516)463-7777</a>"); });
            }
        }
    };
    EmailListComponent.prototype.decrementPage = function () {
        this.activeEmailAccount.currentIndex -= this.emailListAmount;
    };
    EmailListComponent.prototype.openInbox = function () {
        this.showList = true;
    };
    EmailListComponent.prototype.deleteActiveEmail = function () {
        var _this = this;
        // Delete this email on the server
        var ids = [this.emailDetails.uid];
        // Delete this email from the array of emails
        this.activeEmailAccount.emails = this.activeEmailAccount.emails.filter(function (el) {
            return el.uid !== ids[0];
        });
        // Get new email to replace deleted one
        if (this.activeEmailAccount.type === "GMAIL") {
            // Mock up object that contains emails to be deleted. This is dumb and should be changed.
            var account = new __WEBPACK_IMPORTED_MODULE_4__models_email_account__["a" /* EmailAccount */]();
            account.address = this.activeEmailAccount.address;
            account.emails = [this.emailDetails];
            account.nextPageToken = this.activeEmailAccount.nextPageToken;
            var activeAccount_1 = this.activeEmailAccount;
            this.googleEmailService.deleteEmails(account).then(function (e) { return _this.createAlert("success", "Your email was successfully deleted"); }, function (error) { return _this.createAlert("danger", "An error has occurred deleting your email.  Please refresh your page. If the problem persists please contact Hofstra Help Desk at <a class='alert-link' href='tel:+15164637777'>(516)463-7777</a>"); });
            this.googleEmailService.getEmails(account, 1).then(function (p) {
                activeAccount_1.emails = activeAccount_1.emails.concat(p.emails);
                activeAccount_1.nextPageToken = p.nextPageToken;
            }, function (error) { return _this.createAlert("danger", "An error has occurred retrieving your inbox.  Please refresh your page. If the problem persists please contact Hofstra Help Desk at <a class='alert-link' href='tel:+15164637777'>(516)463-7777</a>"); });
        }
        this.openInbox();
    };
    EmailListComponent.prototype.deleteEmailInbox = function () {
        var _this = this;
        var remove = [];
        for (var _i = 0, _a = this.activeEmailAccount.emails; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.selected) {
                // If this email is selected, mark it for removal
                remove.push(e.uid);
            }
        }
        // Get new email to replace deleted one
        if (this.activeEmailAccount.type === "GMAIL") {
            // Mock up object that contains emails to be deleted. This is dumb and should be changed.
            var account = new __WEBPACK_IMPORTED_MODULE_4__models_email_account__["a" /* EmailAccount */]();
            account.address = this.activeEmailAccount.address;
            account.emails = [];
            account.nextPageToken = this.activeEmailAccount.nextPageToken;
            for (var _b = 0, _c = this.activeEmailAccount.emails; _b < _c.length; _b++) {
                var e = _c[_b];
                if (e.selected) {
                    // If this email is selected, mark it for removal
                    account.emails.push(e);
                }
            }
            var activeAccount_2 = this.activeEmailAccount;
            this.googleEmailService.deleteEmails(account).then(function (e) { return _this.createAlert("success", "Your email was successfully deleted"); }, function (error) { return _this.createAlert("danger", "An error has occurred deleting your email.  Please refresh your page. If the problem persists please contact Hofstra Help Desk at <a class='alert-link' href='tel:+15164637777'>(516)463-7777</a>"); });
            this.googleEmailService.getEmails(account, remove.length).then(function (p) {
                activeAccount_2.emails = activeAccount_2.emails.concat(p.emails);
                activeAccount_2.nextPageToken = p.nextPageToken;
            }, function (error) { return _this.createAlert("danger", "An error has occurred retrieving your inbox.  Please refresh your page. If the problem persists please contact Hofstra Help Desk at <a class='alert-link' href='tel:+15164637777'>(516)463-7777</a>"); });
        }
        // Delete this email from the array of emails
        this.activeEmailAccount.emails = this.activeEmailAccount.emails.filter(function (el) {
            return remove.indexOf(el.uid) === -1;
        });
    };
    EmailListComponent.prototype.createAlert = function (type, message) {
        this.alerts = [];
        this.alerts.push({
            type: type,
            msg: message,
            timeout: 5000
        });
    };
    EmailListComponent.prototype.composeEmail = function () {
        if (this.activeEmailAccount.type === "GMAIL") {
            this.googleEmailService.emailReply = new __WEBPACK_IMPORTED_MODULE_3__models_email__["a" /* Email */]();
        }
        this.accountService.activeAccount = this.activeEmailAccount;
        this.router.navigate([{ outlets: { email: 'compose' } }]);
    };
    EmailListComponent.prototype.replyEmail = function () {
        // Set up this email for a reply email
        var reply = this.emailDetails;
        reply.content = "<p>" + reply.content + "</p>";
        reply.cc = null;
        reply.bcc = null;
        reply.recipients = reply.from;
        reply.from = null;
        reply.subject = (reply.subject.indexOf("RE:") > 0 ? reply.subject : "RE: " + reply.subject);
        // Some email addresses were coming across as 'Name - email<email>'. The Name part had to be stripped out
        reply.recipients = reply.recipients.indexOf('<') >= 1 ? reply.recipients.substring(reply.recipients.indexOf('<') + 1, reply.recipients.indexOf('>')) : reply.recipients;
        reply.replyTo = reply.replyTo.indexOf('<') >= 1 ? reply.replyTo.substring(reply.replyTo.indexOf('<') + 1, reply.replyTo.indexOf('>')) : reply.replyTo;
        if (this.activeEmailAccount.type === "GMAIL") {
            this.googleEmailService.emailReply = reply;
        }
        this.accountService.activeAccount = this.activeEmailAccount;
        this.router.navigate([{ outlets: { email: 'compose' } }]);
    };
    EmailListComponent.prototype.replyAllEmail = function () {
        // Set up this email for a reply email
        var reply = this.emailDetails;
        reply.content = "<p>" + reply.content + "</p>";
        reply.recipients = reply.recipients + ", " + reply.from + (reply.cc ? ", " + reply.cc : "");
        reply.cc = null;
        reply.bcc = null;
        reply.from = null;
        reply.subject = (reply.subject.indexOf("RE:") > 0 ? reply.subject : "RE: " + reply.subject);
        // Remove current email address from recipients
        var r = reply.recipients.split(',');
        var recipients = [];
        for (var _i = 0, r_1 = r; _i < r_1.length; _i++) {
            var e = r_1[_i];
            // Some email addresses were coming across as 'Name - email<email>'. The Name part had to be stripped out
            e = e.indexOf('<') >= 1 ? e.substring(e.indexOf('<') + 1, e.indexOf('>')) : e;
            if (e.indexOf(this.activeEmailAccount.address) < 0) {
                recipients.push(e);
            }
        }
        reply.recipients = recipients.join(", ");
        if (this.activeEmailAccount.type === "GMAIL") {
            this.googleEmailService.emailReply = reply;
        }
        this.accountService.activeAccount = this.activeEmailAccount;
        this.router.navigate([{ outlets: { email: 'compose' } }]);
    };
    EmailListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check to see if email channel is available
        this.accountService.isAvailable().then(function (response) {
            if (response['emailDown'] === 'false') {
                // CPIP to authenticate the user
                _this.accountService.authenticate().then(function () {
                    _this.getEmailAddresses();
                });
            }
            else {
                // Email channel is not available
                _this.outage = true;
            }
        });
    };
    EmailListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'email-list',
            template: __webpack_require__(607),
            styles: [],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__account_service__["a" /* AccountService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__google_email_service__["a" /* GoogleEmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__google_email_service__["a" /* GoogleEmailService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === 'function' && _d) || Object])
    ], EmailListComponent);
    return EmailListComponent;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Email; });
var Email = (function () {
    function Email() {
    }
    return Email;
}());


/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_component__ = __webpack_require__(214);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccordionPanelComponent; });



/*
 * ### Accordion heading

 Instead of using `heading` attribute on the `accordion-group`, you can use an `accordion-heading` attribute on `any` element inside of a group that will be used as group's header template.

 * */
var AccordionPanelComponent = (function () {
    function AccordionPanelComponent(accordion) {
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
        // Questionable, maybe .panel-open should be on child div.panel element?
        /** Is accordion group open or closed */
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = value;
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    AccordionPanelComponent.prototype.ngOnInit = function () {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    };
    AccordionPanelComponent.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    AccordionPanelComponent.prototype.toggleOpen = function (event) {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    AccordionPanelComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */], args: [{
                    selector: 'accordion-group, accordion-panel',
                    template: "\n<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div class=\"panel-heading card-header\" role=\"tab\" (click)=\"toggleOpen($event)\">\n    <div class=\"panel-title card-title\">\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\n        <div *ngIf=\"heading\"[ngClass]=\"{'text-muted': isDisabled}\">{{heading}}</div>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\">\n    <div class=\"panel-body card-block\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n  "
                },] },
    ];
    /** @nocollapse */
    AccordionPanelComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* AccordionComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* AccordionComponent */],] },] },
    ]; };
    AccordionPanelComponent.propDecorators = {
        'heading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'panelClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */], args: ['class.panel-open',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
    };
    return AccordionPanelComponent;
}());
//# sourceMappingURL=accordion-group.component.js.map

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_config__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_decorators__ = __webpack_require__(600);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent(_config) {
        var _this = this;
        /** Alert type. Provides one of four bootstrap supported contextual classes: `success`, `info`, `warning` and `danger` */
        this.type = 'warning';
        /** If set, displays an inline "Close" button */
        this.dismissible = false;
        /** This event fires immediately after close instance method is called, $event is an instance of Alert component. */
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        /** This event fires when alert closed, $event is an instance of Alert component */
        this.onClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.isClosed = false;
        this.classes = '';
        this.dismissibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
        });
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(function () { return _this.close(); }, parseInt(this.dismissOnTimeout, 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    AlertComponent.prototype.close = function () {
        if (this.isClosed) {
            return;
        }
        this.onClose.emit(this);
        this.isClosed = true;
        this.onClosed.emit(this);
    };
    AlertComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */], args: [{
                    selector: 'alert,ngx-alert',
                    template: "\n<template [ngIf]=\"!isClosed\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </template>\n    <ng-content></ng-content>\n  </div>\n</template>\n  "
                },] },
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__alert_config__["a" /* AlertConfig */], },
    ]; };
    AlertComponent.propDecorators = {
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'dismissible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'dismissOnTimeout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'onClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'onClosed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_decorators__["a" /* OnChange */])(), 
        __metadata('design:type', Boolean)
    ], AlertComponent.prototype, "dismissible", void 0);
    return AlertComponent;
}());
//# sourceMappingURL=alert.component.js.map

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_ref_class__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_triggers__ = __webpack_require__(603);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ComponentLoader; });



var ComponentLoader = (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     * @param _viewContainerRef
     * @param _elementRef
     * @param _injector
     * @param _renderer
     * @param _componentFactoryResolver
     * @param _ngZone
     * @param _posService
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _posService) {
        this.onBeforeShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.onBeforeHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this._providers = [];
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._posService = _posService;
        this._viewContainerRef = _viewContainerRef;
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: function () {
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = opts.target || this._elementRef;
        return this;
    };
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content);
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ReflectiveInjector */].resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._viewContainerRef
                .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container === 'body' && typeof document !== 'undefined') {
                document.querySelector(this.container)
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            this._componentRef.changeDetectorRef.markForCheck();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    };
    ComponentLoader.prototype.hide = function () {
        if (this._componentRef) {
            this.onBeforeHide.emit(this._componentRef.instance);
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
            this._componentRef = null;
            if (this._contentRef.viewRef) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                this._contentRef = null;
            }
            this._componentRef = null;
            this.onHidden.emit();
        }
        return this;
    };
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (function () { return _this.show(); });
        listenOpts.hide = listenOpts.hide || (function () { return _this.hide(); });
        listenOpts.toggle = listenOpts.toggle || (function () { return _this.isShown
            ? listenOpts.hide()
            : listenOpts.show(); });
        this._unregisterListenersFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_triggers__["a" /* listenToTriggers */])(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    };
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    ComponentLoader.prototype._getContentRef = function (content) {
        if (!content) {
            return new __WEBPACK_IMPORTED_MODULE_1__content_ref_class__["a" /* ContentRef */]([]);
        }
        if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* TemplateRef */]) {
            var viewRef = this._viewContainerRef
                .createEmbeddedView(content);
            return new __WEBPACK_IMPORTED_MODULE_1__content_ref_class__["a" /* ContentRef */]([viewRef.rootNodes], viewRef);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__content_ref_class__["a" /* ContentRef */]([[this._renderer.createText(null, "" + content)]]);
    };
    return ComponentLoader;
}());
//# sourceMappingURL=component-loader.class.js.map

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContentRef; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());
//# sourceMappingURL=content-ref.class.js.map

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_loader_class__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_ref_class__ = __webpack_require__(338);
/* unused harmony reexport ComponentLoader */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__["a"]; });
/* unused harmony reexport ContentRef */



//# sourceMappingURL=index.js.map

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_positioning__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__positioning_service__ = __webpack_require__(594);
/* unused harmony reexport positionElements */
/* unused harmony reexport Positioning */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__positioning_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export Positioning */
/* harmony export (immutable) */ exports["a"] = positionElements;
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split(' ')[0] || 'top';
        var placementSecondary = placement.split(' ')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());
var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=ng-positioning.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgTranscludeDirective; });

var NgTranscludeDirective = (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgTranscludeDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */], args: [{
                    selector: '[ngTransclude]'
                },] },
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ViewContainerRef */], },
    ]; };
    NgTranscludeDirective.propDecorators = {
        'ngTransclude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
    };
    return NgTranscludeDirective;
}());
//# sourceMappingURL=ng-transclude.directive.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_directive__ = __webpack_require__(217);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TabHeadingDirective; });


/** Should be used to mark <template> element as a template for tab heading */
var TabHeadingDirective = (function () {
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    TabHeadingDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */], args: [{ selector: '[tabHeading]' },] },
    ];
    /** @nocollapse */
    TabHeadingDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* TemplateRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__tab_directive__["a" /* TabDirective */], },
    ]; };
    return TabHeadingDirective;
}());
//# sourceMappingURL=tab-heading.directive.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return latinMap; });
/* tslint:disable:max-file-line-count */
var latinMap = {
    'Á': 'A',
    'Ă': 'A',
    'Ắ': 'A',
    'Ặ': 'A',
    'Ằ': 'A',
    'Ẳ': 'A',
    'Ẵ': 'A',
    'Ǎ': 'A',
    'Â': 'A',
    'Ấ': 'A',
    'Ậ': 'A',
    'Ầ': 'A',
    'Ẩ': 'A',
    'Ẫ': 'A',
    'Ä': 'A',
    'Ǟ': 'A',
    'Ȧ': 'A',
    'Ǡ': 'A',
    'Ạ': 'A',
    'Ȁ': 'A',
    'À': 'A',
    'Ả': 'A',
    'Ȃ': 'A',
    'Ā': 'A',
    'Ą': 'A',
    'Å': 'A',
    'Ǻ': 'A',
    'Ḁ': 'A',
    'Ⱥ': 'A',
    'Ã': 'A',
    'Ꜳ': 'AA',
    'Æ': 'AE',
    'Ǽ': 'AE',
    'Ǣ': 'AE',
    'Ꜵ': 'AO',
    'Ꜷ': 'AU',
    'Ꜹ': 'AV',
    'Ꜻ': 'AV',
    'Ꜽ': 'AY',
    'Ḃ': 'B',
    'Ḅ': 'B',
    'Ɓ': 'B',
    'Ḇ': 'B',
    'Ƀ': 'B',
    'Ƃ': 'B',
    'Ć': 'C',
    'Č': 'C',
    'Ç': 'C',
    'Ḉ': 'C',
    'Ĉ': 'C',
    'Ċ': 'C',
    'Ƈ': 'C',
    'Ȼ': 'C',
    'Ď': 'D',
    'Ḑ': 'D',
    'Ḓ': 'D',
    'Ḋ': 'D',
    'Ḍ': 'D',
    'Ɗ': 'D',
    'Ḏ': 'D',
    'ǲ': 'D',
    'ǅ': 'D',
    'Đ': 'D',
    'Ƌ': 'D',
    'Ǳ': 'DZ',
    'Ǆ': 'DZ',
    'É': 'E',
    'Ĕ': 'E',
    'Ě': 'E',
    'Ȩ': 'E',
    'Ḝ': 'E',
    'Ê': 'E',
    'Ế': 'E',
    'Ệ': 'E',
    'Ề': 'E',
    'Ể': 'E',
    'Ễ': 'E',
    'Ḙ': 'E',
    'Ë': 'E',
    'Ė': 'E',
    'Ẹ': 'E',
    'Ȅ': 'E',
    'È': 'E',
    'Ẻ': 'E',
    'Ȇ': 'E',
    'Ē': 'E',
    'Ḗ': 'E',
    'Ḕ': 'E',
    'Ę': 'E',
    'Ɇ': 'E',
    'Ẽ': 'E',
    'Ḛ': 'E',
    'Ꝫ': 'ET',
    'Ḟ': 'F',
    'Ƒ': 'F',
    'Ǵ': 'G',
    'Ğ': 'G',
    'Ǧ': 'G',
    'Ģ': 'G',
    'Ĝ': 'G',
    'Ġ': 'G',
    'Ɠ': 'G',
    'Ḡ': 'G',
    'Ǥ': 'G',
    'Ḫ': 'H',
    'Ȟ': 'H',
    'Ḩ': 'H',
    'Ĥ': 'H',
    'Ⱨ': 'H',
    'Ḧ': 'H',
    'Ḣ': 'H',
    'Ḥ': 'H',
    'Ħ': 'H',
    'Í': 'I',
    'Ĭ': 'I',
    'Ǐ': 'I',
    'Î': 'I',
    'Ï': 'I',
    'Ḯ': 'I',
    'İ': 'I',
    'Ị': 'I',
    'Ȉ': 'I',
    'Ì': 'I',
    'Ỉ': 'I',
    'Ȋ': 'I',
    'Ī': 'I',
    'Į': 'I',
    'Ɨ': 'I',
    'Ĩ': 'I',
    'Ḭ': 'I',
    'Ꝺ': 'D',
    'Ꝼ': 'F',
    'Ᵹ': 'G',
    'Ꞃ': 'R',
    'Ꞅ': 'S',
    'Ꞇ': 'T',
    'Ꝭ': 'IS',
    'Ĵ': 'J',
    'Ɉ': 'J',
    'Ḱ': 'K',
    'Ǩ': 'K',
    'Ķ': 'K',
    'Ⱪ': 'K',
    'Ꝃ': 'K',
    'Ḳ': 'K',
    'Ƙ': 'K',
    'Ḵ': 'K',
    'Ꝁ': 'K',
    'Ꝅ': 'K',
    'Ĺ': 'L',
    'Ƚ': 'L',
    'Ľ': 'L',
    'Ļ': 'L',
    'Ḽ': 'L',
    'Ḷ': 'L',
    'Ḹ': 'L',
    'Ⱡ': 'L',
    'Ꝉ': 'L',
    'Ḻ': 'L',
    'Ŀ': 'L',
    'Ɫ': 'L',
    'ǈ': 'L',
    'Ł': 'L',
    'Ǉ': 'LJ',
    'Ḿ': 'M',
    'Ṁ': 'M',
    'Ṃ': 'M',
    'Ɱ': 'M',
    'Ń': 'N',
    'Ň': 'N',
    'Ņ': 'N',
    'Ṋ': 'N',
    'Ṅ': 'N',
    'Ṇ': 'N',
    'Ǹ': 'N',
    'Ɲ': 'N',
    'Ṉ': 'N',
    'Ƞ': 'N',
    'ǋ': 'N',
    'Ñ': 'N',
    'Ǌ': 'NJ',
    'Ó': 'O',
    'Ŏ': 'O',
    'Ǒ': 'O',
    'Ô': 'O',
    'Ố': 'O',
    'Ộ': 'O',
    'Ồ': 'O',
    'Ổ': 'O',
    'Ỗ': 'O',
    'Ö': 'O',
    'Ȫ': 'O',
    'Ȯ': 'O',
    'Ȱ': 'O',
    'Ọ': 'O',
    'Ő': 'O',
    'Ȍ': 'O',
    'Ò': 'O',
    'Ỏ': 'O',
    'Ơ': 'O',
    'Ớ': 'O',
    'Ợ': 'O',
    'Ờ': 'O',
    'Ở': 'O',
    'Ỡ': 'O',
    'Ȏ': 'O',
    'Ꝋ': 'O',
    'Ꝍ': 'O',
    'Ō': 'O',
    'Ṓ': 'O',
    'Ṑ': 'O',
    'Ɵ': 'O',
    'Ǫ': 'O',
    'Ǭ': 'O',
    'Ø': 'O',
    'Ǿ': 'O',
    'Õ': 'O',
    'Ṍ': 'O',
    'Ṏ': 'O',
    'Ȭ': 'O',
    'Ƣ': 'OI',
    'Ꝏ': 'OO',
    'Ɛ': 'E',
    'Ɔ': 'O',
    'Ȣ': 'OU',
    'Ṕ': 'P',
    'Ṗ': 'P',
    'Ꝓ': 'P',
    'Ƥ': 'P',
    'Ꝕ': 'P',
    'Ᵽ': 'P',
    'Ꝑ': 'P',
    'Ꝙ': 'Q',
    'Ꝗ': 'Q',
    'Ŕ': 'R',
    'Ř': 'R',
    'Ŗ': 'R',
    'Ṙ': 'R',
    'Ṛ': 'R',
    'Ṝ': 'R',
    'Ȑ': 'R',
    'Ȓ': 'R',
    'Ṟ': 'R',
    'Ɍ': 'R',
    'Ɽ': 'R',
    'Ꜿ': 'C',
    'Ǝ': 'E',
    'Ś': 'S',
    'Ṥ': 'S',
    'Š': 'S',
    'Ṧ': 'S',
    'Ş': 'S',
    'Ŝ': 'S',
    'Ș': 'S',
    'Ṡ': 'S',
    'Ṣ': 'S',
    'Ṩ': 'S',
    'Ť': 'T',
    'Ţ': 'T',
    'Ṱ': 'T',
    'Ț': 'T',
    'Ⱦ': 'T',
    'Ṫ': 'T',
    'Ṭ': 'T',
    'Ƭ': 'T',
    'Ṯ': 'T',
    'Ʈ': 'T',
    'Ŧ': 'T',
    'Ɐ': 'A',
    'Ꞁ': 'L',
    'Ɯ': 'M',
    'Ʌ': 'V',
    'Ꜩ': 'TZ',
    'Ú': 'U',
    'Ŭ': 'U',
    'Ǔ': 'U',
    'Û': 'U',
    'Ṷ': 'U',
    'Ü': 'U',
    'Ǘ': 'U',
    'Ǚ': 'U',
    'Ǜ': 'U',
    'Ǖ': 'U',
    'Ṳ': 'U',
    'Ụ': 'U',
    'Ű': 'U',
    'Ȕ': 'U',
    'Ù': 'U',
    'Ủ': 'U',
    'Ư': 'U',
    'Ứ': 'U',
    'Ự': 'U',
    'Ừ': 'U',
    'Ử': 'U',
    'Ữ': 'U',
    'Ȗ': 'U',
    'Ū': 'U',
    'Ṻ': 'U',
    'Ų': 'U',
    'Ů': 'U',
    'Ũ': 'U',
    'Ṹ': 'U',
    'Ṵ': 'U',
    'Ꝟ': 'V',
    'Ṿ': 'V',
    'Ʋ': 'V',
    'Ṽ': 'V',
    'Ꝡ': 'VY',
    'Ẃ': 'W',
    'Ŵ': 'W',
    'Ẅ': 'W',
    'Ẇ': 'W',
    'Ẉ': 'W',
    'Ẁ': 'W',
    'Ⱳ': 'W',
    'Ẍ': 'X',
    'Ẋ': 'X',
    'Ý': 'Y',
    'Ŷ': 'Y',
    'Ÿ': 'Y',
    'Ẏ': 'Y',
    'Ỵ': 'Y',
    'Ỳ': 'Y',
    'Ƴ': 'Y',
    'Ỷ': 'Y',
    'Ỿ': 'Y',
    'Ȳ': 'Y',
    'Ɏ': 'Y',
    'Ỹ': 'Y',
    'Ź': 'Z',
    'Ž': 'Z',
    'Ẑ': 'Z',
    'Ⱬ': 'Z',
    'Ż': 'Z',
    'Ẓ': 'Z',
    'Ȥ': 'Z',
    'Ẕ': 'Z',
    'Ƶ': 'Z',
    'Ĳ': 'IJ',
    'Œ': 'OE',
    'ᴀ': 'A',
    'ᴁ': 'AE',
    'ʙ': 'B',
    'ᴃ': 'B',
    'ᴄ': 'C',
    'ᴅ': 'D',
    'ᴇ': 'E',
    'ꜰ': 'F',
    'ɢ': 'G',
    'ʛ': 'G',
    'ʜ': 'H',
    'ɪ': 'I',
    'ʁ': 'R',
    'ᴊ': 'J',
    'ᴋ': 'K',
    'ʟ': 'L',
    'ᴌ': 'L',
    'ᴍ': 'M',
    'ɴ': 'N',
    'ᴏ': 'O',
    'ɶ': 'OE',
    'ᴐ': 'O',
    'ᴕ': 'OU',
    'ᴘ': 'P',
    'ʀ': 'R',
    'ᴎ': 'N',
    'ᴙ': 'R',
    'ꜱ': 'S',
    'ᴛ': 'T',
    'ⱻ': 'E',
    'ᴚ': 'R',
    'ᴜ': 'U',
    'ᴠ': 'V',
    'ᴡ': 'W',
    'ʏ': 'Y',
    'ᴢ': 'Z',
    'á': 'a',
    'ă': 'a',
    'ắ': 'a',
    'ặ': 'a',
    'ằ': 'a',
    'ẳ': 'a',
    'ẵ': 'a',
    'ǎ': 'a',
    'â': 'a',
    'ấ': 'a',
    'ậ': 'a',
    'ầ': 'a',
    'ẩ': 'a',
    'ẫ': 'a',
    'ä': 'a',
    'ǟ': 'a',
    'ȧ': 'a',
    'ǡ': 'a',
    'ạ': 'a',
    'ȁ': 'a',
    'à': 'a',
    'ả': 'a',
    'ȃ': 'a',
    'ā': 'a',
    'ą': 'a',
    'ᶏ': 'a',
    'ẚ': 'a',
    'å': 'a',
    'ǻ': 'a',
    'ḁ': 'a',
    'ⱥ': 'a',
    'ã': 'a',
    'ꜳ': 'aa',
    'æ': 'ae',
    'ǽ': 'ae',
    'ǣ': 'ae',
    'ꜵ': 'ao',
    'ꜷ': 'au',
    'ꜹ': 'av',
    'ꜻ': 'av',
    'ꜽ': 'ay',
    'ḃ': 'b',
    'ḅ': 'b',
    'ɓ': 'b',
    'ḇ': 'b',
    'ᵬ': 'b',
    'ᶀ': 'b',
    'ƀ': 'b',
    'ƃ': 'b',
    'ɵ': 'o',
    'ć': 'c',
    'č': 'c',
    'ç': 'c',
    'ḉ': 'c',
    'ĉ': 'c',
    'ɕ': 'c',
    'ċ': 'c',
    'ƈ': 'c',
    'ȼ': 'c',
    'ď': 'd',
    'ḑ': 'd',
    'ḓ': 'd',
    'ȡ': 'd',
    'ḋ': 'd',
    'ḍ': 'd',
    'ɗ': 'd',
    'ᶑ': 'd',
    'ḏ': 'd',
    'ᵭ': 'd',
    'ᶁ': 'd',
    'đ': 'd',
    'ɖ': 'd',
    'ƌ': 'd',
    'ı': 'i',
    'ȷ': 'j',
    'ɟ': 'j',
    'ʄ': 'j',
    'ǳ': 'dz',
    'ǆ': 'dz',
    'é': 'e',
    'ĕ': 'e',
    'ě': 'e',
    'ȩ': 'e',
    'ḝ': 'e',
    'ê': 'e',
    'ế': 'e',
    'ệ': 'e',
    'ề': 'e',
    'ể': 'e',
    'ễ': 'e',
    'ḙ': 'e',
    'ë': 'e',
    'ė': 'e',
    'ẹ': 'e',
    'ȅ': 'e',
    'è': 'e',
    'ẻ': 'e',
    'ȇ': 'e',
    'ē': 'e',
    'ḗ': 'e',
    'ḕ': 'e',
    'ⱸ': 'e',
    'ę': 'e',
    'ᶒ': 'e',
    'ɇ': 'e',
    'ẽ': 'e',
    'ḛ': 'e',
    'ꝫ': 'et',
    'ḟ': 'f',
    'ƒ': 'f',
    'ᵮ': 'f',
    'ᶂ': 'f',
    'ǵ': 'g',
    'ğ': 'g',
    'ǧ': 'g',
    'ģ': 'g',
    'ĝ': 'g',
    'ġ': 'g',
    'ɠ': 'g',
    'ḡ': 'g',
    'ᶃ': 'g',
    'ǥ': 'g',
    'ḫ': 'h',
    'ȟ': 'h',
    'ḩ': 'h',
    'ĥ': 'h',
    'ⱨ': 'h',
    'ḧ': 'h',
    'ḣ': 'h',
    'ḥ': 'h',
    'ɦ': 'h',
    'ẖ': 'h',
    'ħ': 'h',
    'ƕ': 'hv',
    'í': 'i',
    'ĭ': 'i',
    'ǐ': 'i',
    'î': 'i',
    'ï': 'i',
    'ḯ': 'i',
    'ị': 'i',
    'ȉ': 'i',
    'ì': 'i',
    'ỉ': 'i',
    'ȋ': 'i',
    'ī': 'i',
    'į': 'i',
    'ᶖ': 'i',
    'ɨ': 'i',
    'ĩ': 'i',
    'ḭ': 'i',
    'ꝺ': 'd',
    'ꝼ': 'f',
    'ᵹ': 'g',
    'ꞃ': 'r',
    'ꞅ': 's',
    'ꞇ': 't',
    'ꝭ': 'is',
    'ǰ': 'j',
    'ĵ': 'j',
    'ʝ': 'j',
    'ɉ': 'j',
    'ḱ': 'k',
    'ǩ': 'k',
    'ķ': 'k',
    'ⱪ': 'k',
    'ꝃ': 'k',
    'ḳ': 'k',
    'ƙ': 'k',
    'ḵ': 'k',
    'ᶄ': 'k',
    'ꝁ': 'k',
    'ꝅ': 'k',
    'ĺ': 'l',
    'ƚ': 'l',
    'ɬ': 'l',
    'ľ': 'l',
    'ļ': 'l',
    'ḽ': 'l',
    'ȴ': 'l',
    'ḷ': 'l',
    'ḹ': 'l',
    'ⱡ': 'l',
    'ꝉ': 'l',
    'ḻ': 'l',
    'ŀ': 'l',
    'ɫ': 'l',
    'ᶅ': 'l',
    'ɭ': 'l',
    'ł': 'l',
    'ǉ': 'lj',
    'ſ': 's',
    'ẜ': 's',
    'ẛ': 's',
    'ẝ': 's',
    'ḿ': 'm',
    'ṁ': 'm',
    'ṃ': 'm',
    'ɱ': 'm',
    'ᵯ': 'm',
    'ᶆ': 'm',
    'ń': 'n',
    'ň': 'n',
    'ņ': 'n',
    'ṋ': 'n',
    'ȵ': 'n',
    'ṅ': 'n',
    'ṇ': 'n',
    'ǹ': 'n',
    'ɲ': 'n',
    'ṉ': 'n',
    'ƞ': 'n',
    'ᵰ': 'n',
    'ᶇ': 'n',
    'ɳ': 'n',
    'ñ': 'n',
    'ǌ': 'nj',
    'ó': 'o',
    'ŏ': 'o',
    'ǒ': 'o',
    'ô': 'o',
    'ố': 'o',
    'ộ': 'o',
    'ồ': 'o',
    'ổ': 'o',
    'ỗ': 'o',
    'ö': 'o',
    'ȫ': 'o',
    'ȯ': 'o',
    'ȱ': 'o',
    'ọ': 'o',
    'ő': 'o',
    'ȍ': 'o',
    'ò': 'o',
    'ỏ': 'o',
    'ơ': 'o',
    'ớ': 'o',
    'ợ': 'o',
    'ờ': 'o',
    'ở': 'o',
    'ỡ': 'o',
    'ȏ': 'o',
    'ꝋ': 'o',
    'ꝍ': 'o',
    'ⱺ': 'o',
    'ō': 'o',
    'ṓ': 'o',
    'ṑ': 'o',
    'ǫ': 'o',
    'ǭ': 'o',
    'ø': 'o',
    'ǿ': 'o',
    'õ': 'o',
    'ṍ': 'o',
    'ṏ': 'o',
    'ȭ': 'o',
    'ƣ': 'oi',
    'ꝏ': 'oo',
    'ɛ': 'e',
    'ᶓ': 'e',
    'ɔ': 'o',
    'ᶗ': 'o',
    'ȣ': 'ou',
    'ṕ': 'p',
    'ṗ': 'p',
    'ꝓ': 'p',
    'ƥ': 'p',
    'ᵱ': 'p',
    'ᶈ': 'p',
    'ꝕ': 'p',
    'ᵽ': 'p',
    'ꝑ': 'p',
    'ꝙ': 'q',
    'ʠ': 'q',
    'ɋ': 'q',
    'ꝗ': 'q',
    'ŕ': 'r',
    'ř': 'r',
    'ŗ': 'r',
    'ṙ': 'r',
    'ṛ': 'r',
    'ṝ': 'r',
    'ȑ': 'r',
    'ɾ': 'r',
    'ᵳ': 'r',
    'ȓ': 'r',
    'ṟ': 'r',
    'ɼ': 'r',
    'ᵲ': 'r',
    'ᶉ': 'r',
    'ɍ': 'r',
    'ɽ': 'r',
    'ↄ': 'c',
    'ꜿ': 'c',
    'ɘ': 'e',
    'ɿ': 'r',
    'ś': 's',
    'ṥ': 's',
    'š': 's',
    'ṧ': 's',
    'ş': 's',
    'ŝ': 's',
    'ș': 's',
    'ṡ': 's',
    'ṣ': 's',
    'ṩ': 's',
    'ʂ': 's',
    'ᵴ': 's',
    'ᶊ': 's',
    'ȿ': 's',
    'ɡ': 'g',
    'ᴑ': 'o',
    'ᴓ': 'o',
    'ᴝ': 'u',
    'ť': 't',
    'ţ': 't',
    'ṱ': 't',
    'ț': 't',
    'ȶ': 't',
    'ẗ': 't',
    'ⱦ': 't',
    'ṫ': 't',
    'ṭ': 't',
    'ƭ': 't',
    'ṯ': 't',
    'ᵵ': 't',
    'ƫ': 't',
    'ʈ': 't',
    'ŧ': 't',
    'ᵺ': 'th',
    'ɐ': 'a',
    'ᴂ': 'ae',
    'ǝ': 'e',
    'ᵷ': 'g',
    'ɥ': 'h',
    'ʮ': 'h',
    'ʯ': 'h',
    'ᴉ': 'i',
    'ʞ': 'k',
    'ꞁ': 'l',
    'ɯ': 'm',
    'ɰ': 'm',
    'ᴔ': 'oe',
    'ɹ': 'r',
    'ɻ': 'r',
    'ɺ': 'r',
    'ⱹ': 'r',
    'ʇ': 't',
    'ʌ': 'v',
    'ʍ': 'w',
    'ʎ': 'y',
    'ꜩ': 'tz',
    'ú': 'u',
    'ŭ': 'u',
    'ǔ': 'u',
    'û': 'u',
    'ṷ': 'u',
    'ü': 'u',
    'ǘ': 'u',
    'ǚ': 'u',
    'ǜ': 'u',
    'ǖ': 'u',
    'ṳ': 'u',
    'ụ': 'u',
    'ű': 'u',
    'ȕ': 'u',
    'ù': 'u',
    'ủ': 'u',
    'ư': 'u',
    'ứ': 'u',
    'ự': 'u',
    'ừ': 'u',
    'ử': 'u',
    'ữ': 'u',
    'ȗ': 'u',
    'ū': 'u',
    'ṻ': 'u',
    'ų': 'u',
    'ᶙ': 'u',
    'ů': 'u',
    'ũ': 'u',
    'ṹ': 'u',
    'ṵ': 'u',
    'ᵫ': 'ue',
    'ꝸ': 'um',
    'ⱴ': 'v',
    'ꝟ': 'v',
    'ṿ': 'v',
    'ʋ': 'v',
    'ᶌ': 'v',
    'ⱱ': 'v',
    'ṽ': 'v',
    'ꝡ': 'vy',
    'ẃ': 'w',
    'ŵ': 'w',
    'ẅ': 'w',
    'ẇ': 'w',
    'ẉ': 'w',
    'ẁ': 'w',
    'ⱳ': 'w',
    'ẘ': 'w',
    'ẍ': 'x',
    'ẋ': 'x',
    'ᶍ': 'x',
    'ý': 'y',
    'ŷ': 'y',
    'ÿ': 'y',
    'ẏ': 'y',
    'ỵ': 'y',
    'ỳ': 'y',
    'ƴ': 'y',
    'ỷ': 'y',
    'ỿ': 'y',
    'ȳ': 'y',
    'ẙ': 'y',
    'ɏ': 'y',
    'ỹ': 'y',
    'ź': 'z',
    'ž': 'z',
    'ẑ': 'z',
    'ʑ': 'z',
    'ⱬ': 'z',
    'ż': 'z',
    'ẓ': 'z',
    'ȥ': 'z',
    'ẕ': 'z',
    'ᵶ': 'z',
    'ᶎ': 'z',
    'ʐ': 'z',
    'ƶ': 'z',
    'ɀ': 'z',
    'ﬀ': 'ff',
    'ﬃ': 'ffi',
    'ﬄ': 'ffl',
    'ﬁ': 'fi',
    'ﬂ': 'fl',
    'ĳ': 'ij',
    'œ': 'oe',
    'ﬆ': 'st',
    'ₐ': 'a',
    'ₑ': 'e',
    'ᵢ': 'i',
    'ⱼ': 'j',
    'ₒ': 'o',
    'ᵣ': 'r',
    'ᵤ': 'u',
    'ᵥ': 'v',
    'ₓ': 'x'
};
//# sourceMappingURL=latin-map.js.map

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TypeaheadMatch; });
var TypeaheadMatch = (function () {
    function TypeaheadMatch(item, value, header) {
        if (value === void 0) { value = item; }
        if (header === void 0) { header = false; }
        this.item = item;
        this.value = value;
        this.header = header;
    }
    TypeaheadMatch.prototype.isHeader = function () {
        return this.header;
    };
    TypeaheadMatch.prototype.toString = function () {
        return this.value;
    };
    return TypeaheadMatch;
}());
//# sourceMappingURL=typeahead-match.class.js.map

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toArray__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_loader__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TypeaheadDirective; });













var TypeaheadDirective = (function () {
    function TypeaheadDirective(control, viewContainerRef, element, renderer, cis) {
        /** minimal no of characters that needs to be entered before typeahead kicks-in. When set to 0, typeahead shows on focus with full list of options (limited as normal by typeaheadOptionsLimit) */
        this.typeaheadMinLength = void 0;
        /** should be used only in case of typeahead attribute is array. If true - loading of options will be async, otherwise - sync. true make sense if options array is large. */
        this.typeaheadAsync = void 0;
        /** match latin symbols. If true the word súper would match super and vice versa. */
        this.typeaheadLatinize = true;
        /** break words with spaces. If true the text "exact phrase" here match would match with match exact phrase here but not with phrase here exact match (kind of "google style"). */
        this.typeaheadSingleWords = true;
        /** should be used only in case typeaheadSingleWords attribute is true. Sets the word delimiter to break words. Defaults to space. */
        this.typeaheadWordDelimiters = ' ';
        /** should be used only in case typeaheadSingleWords attribute is true. Sets the word delimiter to match exact phrase. Defaults to simple and double quotes. */
        this.typeaheadPhraseDelimiters = '\'"';
        /** fired when 'busy' state of this component was changed, fired on async mode only, returns boolean */
        this.typeaheadLoading = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        /** fired on every key event and returns true in case of matches are not detected */
        this.typeaheadNoResults = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        /** fired when option was selected, return object with data of this option */
        this.typeaheadOnSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        /** fired when blur event occurres. returns the active item */
        this.typeaheadOnBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.isTypeaheadOptionsListActive = false;
        this.keyUpEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.placement = 'bottom-left';
        this.element = element;
        this.ngControl = control;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this._typeahead = cis
            .createLoader(element, viewContainerRef, renderer);
    }
    TypeaheadDirective.prototype.onChange = function (e) {
        if (this._container) {
            // esc
            if (e.keyCode === 27) {
                this.hide();
                return;
            }
            // up
            if (e.keyCode === 38) {
                this._container.prevActiveMatch();
                return;
            }
            // down
            if (e.keyCode === 40) {
                this._container.nextActiveMatch();
                return;
            }
            // enter
            if (e.keyCode === 13) {
                this._container.selectActiveMatch();
                return;
            }
        }
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`, use `innerText`.
        var value = e.target.value !== undefined
            ? e.target.value
            : e.target.innerText;
        if (value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    };
    TypeaheadDirective.prototype.onFocus = function () {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit('');
        }
    };
    TypeaheadDirective.prototype.onBlur = function () {
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
            this.hide();
        }
    };
    TypeaheadDirective.prototype.onKeydown = function (e) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        // if items is visible - prevent form submition
        if (e.keyCode === 13) {
            e.preventDefault();
            return;
        }
    };
    TypeaheadDirective.prototype.ngOnInit = function () {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength = this.typeaheadMinLength === void 0
            ? 1
            : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined && !(this.typeahead instanceof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"])) {
            this.typeaheadAsync = false;
        }
        if (this.typeahead instanceof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    };
    TypeaheadDirective.prototype.changeModel = function (match) {
        var valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        this.ngControl.control.setValue(valueStr);
        this.hide();
    };
    Object.defineProperty(TypeaheadDirective.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadDirective.prototype.show = function () {
        this._typeahead
            .attach(__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */])
            .to(this.container)
            .position({ attachment: 'bottom left' })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false
        });
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        var normalizedQuery = (this.typeaheadLatinize
            ? __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].latinize(this.ngControl.control.value)
            : this.ngControl.control.value).toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
    };
    TypeaheadDirective.prototype.hide = function () {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._container = null;
        }
    };
    TypeaheadDirective.prototype.ngOnDestroy = function () {
        this._typeahead.dispose();
    };
    TypeaheadDirective.prototype.asyncActions = function () {
        var _this = this;
        this.keyUpEventEmitter
            .debounceTime(this.typeaheadWaitMs)
            .mergeMap(function () { return _this.typeahead; })
            .subscribe(function (matches) {
            _this.finalizeAsyncCall(matches);
        }, function (err) {
            console.error(err);
        });
    };
    TypeaheadDirective.prototype.syncActions = function () {
        var _this = this;
        this.keyUpEventEmitter
            .debounceTime(this.typeaheadWaitMs)
            .mergeMap(function (value) {
            var normalizedQuery = _this.normalizeQuery(value);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].from(_this.typeahead)
                .filter(function (option) {
                return option && _this.testMatch(_this.normalizeOption(option), normalizedQuery);
            })
                .toArray();
        })
            .subscribe(function (matches) {
            _this.finalizeAsyncCall(matches);
        }, function (err) {
            console.error(err);
        });
    };
    TypeaheadDirective.prototype.normalizeOption = function (option) {
        var optionValue = __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].getValueFromObject(option, this.typeaheadOptionField);
        var normalizedOption = this.typeaheadLatinize
            ? __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].latinize(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    };
    TypeaheadDirective.prototype.normalizeQuery = function (value) {
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        var normalizedQuery = (this.typeaheadLatinize ? __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].latinize(value) : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ?
                __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            :
                normalizedQuery;
        return normalizedQuery;
    };
    TypeaheadDirective.prototype.testMatch = function (match, test) {
        var spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (var i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        else {
            return match.indexOf(test) >= 0;
        }
    };
    TypeaheadDirective.prototype.finalizeAsyncCall = function (matches) {
        this.prepareMatches(matches);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (this._container) {
            // This improves the speed as it won't have to be done for each list item
            var normalizedQuery = (this.typeaheadLatinize
                ? __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].latinize(this.ngControl.control.value)
                : this.ngControl.control.value).toString()
                .toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    };
    TypeaheadDirective.prototype.prepareMatches = function (options) {
        var _this = this;
        var limited = options.slice(0, this.typeaheadOptionsLimit);
        if (this.typeaheadGroupField) {
            var matches_1 = [];
            // extract all group names
            var groups = limited
                .map(function (option) { return __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].getValueFromObject(option, _this.typeaheadGroupField); })
                .filter(function (v, i, a) { return a.indexOf(v) === i; });
            groups.forEach(function (group) {
                // add group header to array of matches
                matches_1.push(new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](group, group, true));
                // add each item of group to array of matches
                matches_1 = matches_1.concat(limited
                    .filter(function (option) { return __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].getValueFromObject(option, _this.typeaheadGroupField) === group; })
                    .map(function (option) { return new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](option, __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].getValueFromObject(option, _this.typeaheadOptionField)); }));
            });
            this._matches = matches_1;
        }
        else {
            this._matches = limited.map(function (option) { return new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](option, __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].getValueFromObject(option, _this.typeaheadOptionField)); });
        }
    };
    TypeaheadDirective.prototype.hasMatches = function () {
        return this._matches.length > 0;
    };
    TypeaheadDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */], args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] },
    ];
    /** @nocollapse */
    TypeaheadDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgControl */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ViewContainerRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer */], },
        { type: __WEBPACK_IMPORTED_MODULE_12__component_loader__["a" /* ComponentLoaderFactory */], },
    ]; };
    TypeaheadDirective.propDecorators = {
        'typeahead': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'typeaheadMinLength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'typeaheadWaitMs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'typeaheadOptionsLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'typeaheadOptionField': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'typeaheadGroupField': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'typeaheadAsync': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'typeaheadLatinize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'typeaheadSingleWords': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'typeaheadWordDelimiters': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'typeaheadPhraseDelimiters': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'typeaheadItemTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'optionsListTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'typeaheadLoading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'typeaheadNoResults': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'typeaheadOnSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'typeaheadOnBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
        'onChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */], args: ['keyup', ['$event'],] },],
        'onFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */], args: ['focus',] },],
        'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */], args: ['blur',] },],
        'onKeydown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */], args: ['keydown', ['$event'],] },],
    };
    return TypeaheadDirective;
}());
//# sourceMappingURL=typeahead.directive.js.map

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__(601);
/* harmony export (immutable) */ exports["a"] = isBs3;

function isBs3() {
    return __WEBPACK_IMPORTED_MODULE_0__facade_browser__["a" /* window */].__theme !== 'bs4';
}
//# sourceMappingURL=ng2-bootstrap-config.js.map

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_tabs__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_accordion__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_alert__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_typeahead__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tinymce_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__email_list_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__email_compose_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__google_email_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__(580);
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
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* JsonpModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__email_list_component__["a" /* EmailListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__email_compose_component__["a" /* EmailComposeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tinymce_component__["a" /* TinymceComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_13__google_email_service__["a" /* GoogleEmailService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());


/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_list_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_compose_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(330);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var appRoutes = [
    { path: 'list-emails', component: __WEBPACK_IMPORTED_MODULE_3__email_list_component__["a" /* EmailListComponent */], outlet: 'email' },
    { path: 'compose', component: __WEBPACK_IMPORTED_MODULE_4__email_compose_component__["a" /* EmailComposeComponent */], outlet: 'email' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__email_list_component__["a" /* EmailListComponent */], outlet: 'email' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__email_list_component__["a" /* EmailListComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true })],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* APP_BASE_HREF */], useValue: "/" }],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
;


/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EmailAccount; });
var EmailAccount = (function () {
    function EmailAccount() {
    }
    return EmailAccount;
}());


/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TinymceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TinymceComponent = (function () {
    function TinymceComponent() {
        this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    TinymceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.readonly) {
            tinymce.init({
                selector: '#' + this.elementId,
                plugins: ['autoresize'],
                skin_url: '/js-apps/src/assets/skins/lightgray',
                toolbar: false,
                menubar: false,
                menu: {
                    format: false
                },
                statusbar: false,
                readonly: 1,
                setup: function (editor) {
                    _this.editor = editor;
                    editor.on('init', function () {
                        if (_this.model) {
                            editor.setContent(_this.model);
                        }
                    });
                },
            });
        }
        else {
            tinymce.init({
                selector: '#' + this.elementId,
                plugins: ['link', 'paste', 'table', 'autoresize'],
                skin_url: '/js-apps/src/assets/skins/lightgray',
                setup: function (editor) {
                    _this.editor = editor;
                    editor.on('init', function () {
                        if (_this.model) {
                            editor.setContent(_this.model);
                        }
                    });
                    editor.on('keyup', function () {
                        var content = editor.getContent();
                        _this.modelChange.emit(content);
                    });
                },
            });
        }
    };
    TinymceComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], TinymceComponent.prototype, "elementId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], TinymceComponent.prototype, "name", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], TinymceComponent.prototype, "model", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Number)
    ], TinymceComponent.prototype, "readonly", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', Object)
    ], TinymceComponent.prototype, "modelChange", void 0);
    TinymceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'tiny-mce',
            template: "<textarea id=\"{{elementId}}\"></textarea>"
        }), 
        __metadata('design:paramtypes', [])
    ], TinymceComponent);
    return TinymceComponent;
}());


/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collapse_collapse_module__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accordion_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordion_config__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccordionModule; });






var AccordionModule = (function () {
    function AccordionModule() {
    }
    AccordionModule.forRoot = function () { return { ngModule: AccordionModule, providers: [__WEBPACK_IMPORTED_MODULE_5__accordion_config__["a" /* AccordionConfig */]] }; };
    AccordionModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__collapse_collapse_module__["a" /* CollapseModule */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_4__accordion_component__["a" /* AccordionComponent */], __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__["a" /* AccordionPanelComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__accordion_component__["a" /* AccordionComponent */], __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__["a" /* AccordionPanelComponent */]]
                },] },
    ];
    /** @nocollapse */
    AccordionModule.ctorParameters = function () { return []; };
    return AccordionModule;
}());
//# sourceMappingURL=accordion.module.js.map

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion_group_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_module__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_config__ = __webpack_require__(215);
/* unused harmony reexport AccordionPanelComponent */
/* unused harmony reexport AccordionComponent */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_module__["a"]; });
/* unused harmony reexport AccordionConfig */




//# sourceMappingURL=index.js.map

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_config__ = __webpack_require__(216);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlertModule; });




var AlertModule = (function () {
    function AlertModule() {
    }
    AlertModule.forRoot = function () {
        return { ngModule: AlertModule, providers: [__WEBPACK_IMPORTED_MODULE_3__alert_config__["a" /* AlertConfig */]] };
    };
    AlertModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]]
                },] },
    ];
    /** @nocollapse */
    AlertModule.ctorParameters = function () { return []; };
    return AlertModule;
}());
//# sourceMappingURL=alert.module.js.map

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_module__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_config__ = __webpack_require__(216);
/* unused harmony reexport AlertComponent */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__alert_module__["a"]; });
/* unused harmony reexport AlertConfig */



//# sourceMappingURL=index.js.map

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CollapseDirective; });

var CollapseDirective = (function () {
    function CollapseDirective(_el, _renderer) {
        /** This event fires as soon as content collapses */
        this.collapsed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        /** This event fires as soon as content becomes visible */
        this.expanded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        this._el = _el;
        this._renderer = _renderer;
    }
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: function () {
            return this.isExpanded;
        },
        /** A flag indicating visibility of content (shown or hidden) */
        set: function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /** allows to manually toggle content visibility */
    CollapseDirective.prototype.toggle = function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    CollapseDirective.prototype.hide = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.display = 'none';
        this.collapsed.emit(this);
    };
    /** allows to manually show collapsed content */
    CollapseDirective.prototype.show = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.display = 'block';
        // this.height = 'auto';
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setElementStyle(this._el.nativeElement, 'overflow', 'visible');
        this._renderer.setElementStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
    };
    CollapseDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */], args: [{
                    selector: '[collapse]',
                    exportAs: 'bs-collapse',
                    /* tslint:disable-next-line */
                    host: { '[class.collapse]': 'true' } /*,
                    animations: [
                      trigger('active', [
                        state('void', style({height: 0})),
                        state('closed', style({height: 0})),
                        state('open', style({height: '*'})),
                        transition('void => closed', [animate(0)]),
                        transition('closed => open', [animate('350ms ease-out')]),
                        transition('open => closed', [animate('350ms ease-out')])
                      ])
                    ]*/
                },] },
    ];
    /** @nocollapse */
    CollapseDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Renderer */], },
    ]; };
    CollapseDirective.propDecorators = {
        'collapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'expanded': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */] },],
        'display': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */], args: ['style.display',] },],
        'isExpanded': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */], args: ['class.in',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */], args: ['class.show',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */], args: ['attr.aria-expanded',] },],
        'isCollapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */], args: ['attr.aria-hidden',] },],
        'isCollapse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */], args: ['class.collapse',] },],
        'isCollapsing': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */], args: ['class.collapsing',] },],
        'collapse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */] },],
    };
    return CollapseDirective;
}());
//# sourceMappingURL=collapse.directive.js.map

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_directive__ = __webpack_require__(591);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CollapseModule; });


var CollapseModule = (function () {
    function CollapseModule() {
    }
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    CollapseModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* NgModule */], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["a" /* CollapseDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["a" /* CollapseDirective */]]
                },] },
    ];
    /** @nocollapse */
    CollapseModule.ctorParameters = function () { return []; };
    return CollapseModule;
}());
//# sourceMappingURL=collapse.module.js.map

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_class__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning__ = __webpack_require__(340);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ComponentLoaderFactory; });



var ComponentLoaderFactory = (function () {
    function ComponentLoaderFactory(componentFactoryResolver, ngZone, injector, posService) {
        this._ngZone = ngZone;
        this._injector = injector;
        this._posService = posService;
        this._componentFactoryResolver = componentFactoryResolver;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     * @returns {ComponentLoader}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new __WEBPACK_IMPORTED_MODULE_1__component_loader_class__["a" /* ComponentLoader */](_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ComponentFactoryResolver */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* NgZone */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Injector */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__positioning__["a" /* PositioningService */], },
    ]; };
    return ComponentLoaderFactory;
}());
//# sourceMappingURL=component-loader.factory.js.map

/***/ },

/***/ 594:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_positioning__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PositioningService; });


var PositioningService = (function () {
    function PositioningService() {
    }
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ng_positioning__["a" /* positionElements */])(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService.prototype._getHtmlElement = function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return document.querySelector(element);
        }
        if (element instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) {
            return element.nativeElement;
        }
        return element;
    };
    PositioningService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    PositioningService.ctorParameters = function () { return []; };
    return PositioningService;
}());
//# sourceMappingURL=positioning.service.js.map

/***/ },

/***/ 595:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_transclude_directive__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_directive__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_heading_directive__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabset_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabset_config__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_module__ = __webpack_require__(596);
/* unused harmony reexport NgTranscludeDirective */
/* unused harmony reexport TabDirective */
/* unused harmony reexport TabHeadingDirective */
/* unused harmony reexport TabsetComponent */
/* unused harmony reexport TabsetConfig */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__tabs_module__["a"]; });






//# sourceMappingURL=index.js.map

/***/ },

/***/ 596:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_transclude_directive__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_directive__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabset_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabset_config__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TabsModule; });







var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule.forRoot = function () {
        return {
            ngModule: TabsModule,
            providers: [__WEBPACK_IMPORTED_MODULE_6__tabset_config__["a" /* TabsetConfig */]]
        };
    };
    TabsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__ng_transclude_directive__["a" /* NgTranscludeDirective */], __WEBPACK_IMPORTED_MODULE_4__tab_directive__["a" /* TabDirective */], __WEBPACK_IMPORTED_MODULE_5__tabset_component__["a" /* TabsetComponent */], __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__["a" /* TabHeadingDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__tab_directive__["a" /* TabDirective */], __WEBPACK_IMPORTED_MODULE_5__tabset_component__["a" /* TabsetComponent */], __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__["a" /* TabHeadingDirective */], __WEBPACK_IMPORTED_MODULE_2__ng_transclude_directive__["a" /* NgTranscludeDirective */]]
                },] },
    ];
    /** @nocollapse */
    TabsModule.ctorParameters = function () { return []; };
    return TabsModule;
}());
//# sourceMappingURL=tabs.module.js.map

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__latin_map__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__typeahead_options_class__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_match_class__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__typeahead_container_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typeahead_directive__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typeahead_module__ = __webpack_require__(599);
/* unused harmony reexport latinMap */
/* unused harmony reexport TypeaheadOptions */
/* unused harmony reexport TypeaheadMatch */
/* unused harmony reexport TypeaheadUtils */
/* unused harmony reexport TypeaheadContainerComponent */
/* unused harmony reexport TypeaheadDirective */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__typeahead_module__["a"]; });







//# sourceMappingURL=index.js.map

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export TypeaheadOptions */
var TypeaheadOptions = (function () {
    function TypeaheadOptions(options) {
        Object.assign(this, options);
    }
    return TypeaheadOptions;
}());
//# sourceMappingURL=typeahead-options.class.js.map

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_loader__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__positioning__ = __webpack_require__(340);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TypeaheadModule; });






var TypeaheadModule = (function () {
    function TypeaheadModule() {
    }
    TypeaheadModule.forRoot = function () {
        return {
            ngModule: TypeaheadModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__component_loader__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_5__positioning__["a" /* PositioningService */]]
        };
    };
    ;
    TypeaheadModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__["a" /* TypeaheadDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__["a" /* TypeaheadDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    TypeaheadModule.ctorParameters = function () { return []; };
    return TypeaheadModule;
}());
//# sourceMappingURL=typeahead.module.js.map

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = OnChange;
/*tslint:disable:no-invalid-this */
function OnChange(defaultValue) {
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: function () { return this[_key]; },
            set: function (value) {
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
//# sourceMappingURL=decorators.js.map

/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return win; });
/* unused harmony export document */
/* unused harmony export location */
/* unused harmony export gc */
/* unused harmony export performance */
/* unused harmony export Event */
/* unused harmony export MouseEvent */
/* unused harmony export KeyboardEvent */
/* unused harmony export EventTarget */
/* unused harmony export History */
/* unused harmony export Location */
/* unused harmony export EventListener */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = typeof window !== 'undefined' && window || {};

var document = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];
//# sourceMappingURL=browser.js.map

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Trigger; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
//# sourceMappingURL=trigger.class.js.map

/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trigger_class__ = __webpack_require__(602);
/* unused harmony export parseTriggers */
/* harmony export (immutable) */ exports["a"] = listenToTriggers;

var DEFAULT_ALIASES = {
    hover: ['mouseenter', 'mouseleave'],
    focus: ['focusin', 'focusout']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new __WEBPACK_IMPORTED_MODULE_0__trigger_class__["a" /* Trigger */](alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers
        .filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}
//# sourceMappingURL=triggers.js.map

/***/ },

/***/ 606:
/***/ function(module, exports) {

module.exports = "<style>\r\n\t.mce-branding {\r\n\t\tdisplay: none;\r\n\t}\r\n</style>\r\n<div class=\"row\">\r\n\t<div class=\"col-xs-12\">\r\n\t\t<div *ngFor=\"let alert of alerts\">\r\n\t  \t\t<alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\"><span [innerHTML]=\"alert.msg\"></span></alert>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<form (ngSubmit)=\"sendEmail()\" #sendEmailForm=\"ngForm\">\r\n\t<div class=\"form-group\">\r\n\t\t<input name=\"recipients\"\r\n\t\t\t[(ngModel)]=\"asyncRecipients\"\r\n\t\t\t[typeahead]=\"dataSource\"\r\n\t\t\t(typeaheadLoading)=\"changeTypeaheadLoading($event)\"\r\n\t\t\t(typeaheadNoResults)=\"changeTypeaheadNoResults($event)\"\r\n\t\t\t(typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\r\n\t\t\ttypeaheadMinLength=\"3\"\r\n\t\t\ttypeaheadOptionsLimit=\"7\"\r\n\t\t\ttypeaheadWaitMs=\"500\"\r\n\t\t\ttypeaheadOptionField=\"email\"\r\n\t\t\tplaceholder=\"Recipients\"\r\n\t\t\ttypeaheadSingleWords=\"true\"\r\n\t\t\ttypeaheadWordDelimiters=\",\"\r\n\t\t\tclass=\"form-control\">\r\n\t\t<div *ngIf=\"typeaheadLoading===true\">\r\n\t\t\t<i class=\"fa fa-refresh fa-spin\"></i>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"typeaheadNoResults===true\">\r\n\t\t\t<i class=\"fa fa-remove\"></i> No Results Found\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<input name=\"cc\"\r\n\t\t\t[(ngModel)]=\"asyncRecipientsCC\"\r\n\t\t\t[typeahead]=\"dataSourceCC\"\r\n\t\t\t(typeaheadLoading)=\"changeTypeaheadLoadingCC($event)\"\r\n\t\t\t(typeaheadNoResults)=\"changeTypeaheadNoResultsCC($event)\"\r\n\t\t\t(typeaheadOnSelect)=\"typeaheadOnSelectCC($event)\"\r\n\t\t\ttypeaheadMinLength=\"3\"\r\n\t\t\ttypeaheadOptionsLimit=\"7\"\r\n\t\t\ttypeaheadWaitMs=\"500\"\r\n\t\t\ttypeaheadOptionField=\"email\"\r\n\t\t\tplaceholder=\"CC\"\r\n\t\t\ttypeaheadSingleWords=\"true\"\r\n\t\t\ttypeaheadWordDelimiters=\",\"\r\n\t\t\tclass=\"form-control\">\r\n\t\t<div *ngIf=\"typeaheadLoadingCC===true\">\r\n\t\t\t<i class=\"fa fa-refresh fa-spin\"></i>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"typeaheadNoResultsCC===true\">\r\n\t\t\t<i class=\"fa fa-remove\"></i> No Results Found\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<input name=\"bcc\"\r\n\t\t\t[(ngModel)]=\"asyncRecipientsBCC\"\r\n\t\t\t[typeahead]=\"dataSourceBCC\"\r\n\t\t\t(typeaheadLoading)=\"changeTypeaheadLoadingBCC($event)\"\r\n\t\t\t(typeaheadNoResults)=\"changeTypeaheadNoResultsBCC($event)\"\r\n\t\t\t(typeaheadOnSelect)=\"typeaheadOnSelectBCC($event)\"\r\n\t\t\ttypeaheadMinLength=\"3\"\r\n\t\t\ttypeaheadOptionsLimit=\"7\"\r\n\t\t\ttypeaheadWaitMs=\"500\"\r\n\t\t\ttypeaheadOptionField=\"email\"\r\n\t\t\tplaceholder=\"BCC\"\r\n\t\t\ttypeaheadSingleWords=\"true\"\r\n\t\t\ttypeaheadWordDelimiters=\",\"\r\n\t\t\tclass=\"form-control\">\r\n\t\t<div *ngIf=\"typeaheadLoadingBCC===true\">\r\n\t\t\t<i class=\"fa fa-refresh fa-spin\"></i>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"typeaheadNoResultsBCC===true\">\r\n\t\t\t<i class=\"fa fa-remove\"></i> No Results Found\r\n\t\t</div>\r\n\t</div>\r\n\t<hr>\r\n\r\n\t<div class=\"form-group\">\r\n\t\t<input type=\"text\" class=\"form-control\" id=\"subject\" [(ngModel)]=\"email.subject\" name=\"subject\" #subject=\"ngModel\" placeholder=\"Subject\" required>\r\n\t\t<div [hidden]=\"subject.valid || subject.pristine\" class=\"alert alert-danger\">\r\n\t\t\tA subject is required\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"form-group\">\r\n\t\t<tiny-mce [elementId]=\"'compose-email'\" [model]=\"email.content\" (modelChange)=\"email.content = $event\" name=\"content\" required></tiny-mce>\r\n\t</div>\r\n\r\n\t<div class=\"input-group\">\r\n\t\t<label class=\"input-group-btn\">\r\n\t\t\t<span class=\"btn btn-primary\">\r\n\t\t\t\tAttachments&hellip; <input name=\"attachments\" style=\"display:none\" type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" multiple>\r\n\t\t\t</span>\r\n\t\t</label>\r\n\t\t<input name=\"attachment-description\" type=\"text\" class=\"form-control\" readonly [(ngModel)]=\"attachmentDesc\">\r\n\t</div>\r\n\t<p></p>\r\n\t<button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!sendEmailForm.form.valid\">Submit</button>\r\n\t<!-- <button type=\"submit\" class=\"btn btn-default\">Submit</button> -->\r\n\r\n\t<a class=\"btn btn-default\" (click)=\"back()\">Back</a>\r\n</form>\r\n<p></p>"

/***/ },

/***/ 607:
/***/ function(module, exports) {

module.exports = "<style>\r\n\thtml, body {\r\n\t\tbackground-color: #fff;\r\n\t\tmargin-top: 2px;\r\n\t}\r\n\r\n\t.email-panel {\r\n\t\tmargin-bottom: 0;\r\n\t\tborder-radius: 0;\r\n\t}\r\n\r\n\t.email-panel-header {\r\n\t\tpadding: 0;\r\n\t\tpadding-bottom: 5px;\r\n\t\tpadding-top: 5px;\r\n\t}\r\n\r\n\t@media ( min-width : 768px) {\r\n\t\t.email-panel-header {\r\n\t\t\tpadding: 10px 15px;\r\n\t\t}\r\n\t}\r\n\r\n\t.se-pre-con {\r\n/*\t\tposition: fixed;\r\n\t\tleft: 0px;\r\n\t\ttop: 0px;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tz-index: 9999;*/\r\n    \tbackground: url(/hofstra-mail-portlet/images/rubiks.gif) 50% 50% no-repeat;\r\n\t}\r\n\r\n\t.tab-content .inner, .tab-content .compose {\r\n\t\tposition: absolute;\r\n\t\tleft: 0;\r\n\t\tbottom: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tpadding: 6px;\r\n\t\tbackground-color: #fff;\r\n\t\toverflow-y: scroll;\r\n\t\toverflow-x: hidden;\r\n\t}\r\n\r\n\t.email-slide {\r\n\t\toverflow: hidden;\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\tmargin: 1em 0;\r\n\t\tborder: 1px solid #999;\r\n\t}\r\n\r\n\t.email-slide .inner {\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tpadding: 6px;\r\n\t\tbackground-color: #fff;\r\n\t\toverflow-y: scroll;\r\n\t\toverflow-x: hidden;\r\n\t\tmax-height: 500px;\r\n\t}\r\n\r\n\t.email-panel-header:hover {\r\n\t\tbackground-color: #f0f0f0;\r\n\t}\r\n\r\n\t.clickable {\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t#email-portlet-container {\r\n\t\tmin-height: 325px;\r\n\t\tposition: relative;\r\n\t\toverflow: hidden;\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\tmargin: 1em 0;\r\n\t\tborder: 1px solid #999;\r\n\t\tmargin-top: 5px;\r\n\t}\r\n\r\n\t#toolbar {\r\n\t\tpadding-top: 5px;\r\n\t}\r\n\r\n\th5.ng-binding {\r\n\t\ttext-overflow: ellipsis;\r\n\t\toverflow: hidden;\r\n\t\twhite-space: nowrap;\r\n\t}\r\n\r\n\t.email-from-header {\r\n\t\tmargin-top: 3px;\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n\t.word-wrap {\r\n\t\tword-wrap: break-word;\r\n\t}\r\n\r\n\t.panel-title {\r\n\t\tfont-size: 14px;\r\n\t}\r\n\r\n\t.panel-default>.panel-heading {\r\n\t\tpadding-bottom: 0;\r\n\t}\r\n\r\n\t.date-sent {\r\n\t\tfont-size: 12px;\r\n\t}\r\n\r\n\t.not-visible {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\r\n\t.not-read {\r\n\t\tfont-weight: 700;\r\n\t}\r\n\t.read {\r\n\t\tfont-weight: 400;\r\n\t}\r\n\t.btn-file {\r\n\t\tposition: relative;\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n\t.btn-file input[type=file] {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tright: 0;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\tfont-size: 100px;\r\n\t\ttext-align: right;\r\n\t\tfilter: alpha(opacity = 0);\r\n\t\topacity: 0;\r\n\t\toutline: none;\r\n\t\tbackground: white;\r\n\t\tcursor: inherit;\r\n\t\tdisplay: block;\r\n\t}\r\n\t.email-ellipses {\r\n\t\ttext-overflow: ellipsis;\r\n\t\toverflow: hidden;\r\n\t\twhite-space: nowrap;\r\n\t\tmargin: 0;\r\n\t\tpadding-top: 10px;\r\n\t\tpadding-bottom: 10px;\r\n\t}\r\n\t\r\n\t/* To be removed */\r\n\t.aui .tab-content {\r\n\t\toverflow: visible !important;\r\n\t}\r\n\r\n\tul {\r\n\t    margin-left: 0 !important;\r\n\t}\r\n</style>\r\n\r\n<p></p>\r\n\r\n<!--Email List -->\r\n<div *ngIf=\"showList && !outage\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<div *ngFor=\"let alert of alerts\">\r\n\t\t\t\t<alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\"><span [innerHTML]=\"alert.msg\"></span></alert>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- Email Toolbar -->\r\n\t<div class=\"row\" id=\"toolbar\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<button class=\"btn btn-default\"  data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Compose Email\" tooltip (click)=\"composeEmail()\">\r\n\t\t\t\t<span class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></span>\r\n\t\t\t\t<span class=\"sr-only\">Compose Email to send from {{activeEmailAccount.address}}</span>\r\n\t\t\t</button>\r\n\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t<button [disabled]=\"activeEmailAccount.currentIndex !== 0\" class=\"btn btn-default\" (click)=\"refreshAccount(activeEmailAccount)\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Refresh inbox\" tooltip=\"\">\r\n\t\t\t\t\t<span class=\"fa fa-refresh\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t<span class=\"sr-only ng-binding\">Refresh Inbox for {{activeEmailAccount.address}}</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t<button class=\"btn btn-default\" (click)=\"deleteEmailInbox()\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete\" tooltip=\"\">\r\n\t\t\t\t\t<span class=\"fa fa-trash-o\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t<span class=\"sr-only ng-binding\">Delete selected emails for account {{activeEmailAccount.address}}</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t<a *ngIf=\"activeEmailAccount.type === 'GMAIL'\" href=\"/hofapps/applications/gmail/index.jsp\" class=\"btn btn-primary\" target=\"_blank\"> \r\n\t\t\t\t\t<span class=\"fa fa-envelope\" aria-hidden=\"true\"></span><small> Launch Gmail </small>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"btn-group pull-right\">\r\n\t\t\t\t<button class=\"btn btn-default\" [disabled]=\"activeEmailAccount.currentIndex === 0\" (click)=\"decrementPage()\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Newer\" tooltip>\r\n\t\t\t\t\t<span class=\"fa fa-chevron-left\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t<span class=\"sr-only\">Page to newer emails for account {{activeEmailAccount.address}}</span>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button class=\"btn btn-default\" (click)=\"incrementPage()\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Older\" tooltip>\r\n\t\t\t\t\t<span class=\"fa fa-chevron-right\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t<span class=\"sr-only\">Page to older emails for account {{activeEmailAccount.address}}</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<p></p>\r\n\t\r\n\t<div *ngIf=\"emailAccounts.length === 0\">\r\n\t\t<div class=\"se-pre-con\" style=\"min-height: 300px;background: url(/hofstra-mail-portlet/images/rubiks.gif) 50% 50% no-repeat;\"></div>\r\n\t</div>\r\n\t<tabset>\r\n\t\t<tab *ngFor=\"let account of emailAccounts\"\r\n\t\t[heading]=\"account.address\"\r\n\t\t(select)=\"activeEmailAccount = account;\"\r\n\t\t[active]=\"activeEmailAccount.address === account.address\" style=\"min-height: 300px\">\r\n\t\t\t<div class=\"email-portlet-container\">\r\n\t\t\t\t<div *ngIf=\"!account.emails[account.currentIndex]\">\r\n\t\t\t\t\t<div class=\"se-pre-con\" style=\"min-height: 300px;background: url(/hofstra-mail-portlet/images/rubiks.gif) 50% 50% no-repeat;\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel panel-default\" *ngFor=\"let email of account.emails | slice:account.currentIndex:account.currentIndex+emailListAmount\" style=\"padding: 0 10px;margin-bottom: -1px;\">\r\n\t\t\t\t\t<div *ngIf=\"email !== null\">\r\n\t\t\t\t\t\t<div class=\"panel-body clickable\" style=\"padding: 5px 15px;\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-8 btn-link\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"pull-left\" style=\"margin-top: 13px;width: 20px;margin-right: 15px;margin-left: -5px;\" [(ngModel)]=\"email.selected\">\r\n\t\t\t\t\t\t\t\t\t<h5 class=\"email-ellipses word-wrap\" [ngClass]=\"{'not-read' : !email.read, 'read' : email.read }\" (click)=\"openDetails(email)\">\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"email.attachmentsPreview && email.attachmentsPreview.length > 0\" class=\"fa fa-paperclip\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t\t\t\t\t\t{{email.from}}\r\n\t\t\t\t\t\t\t\t\t\t<small class=\"subject word-wrap\">{{email.subject}}</small>\r\n\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xs-4 text-right date-sent\" (click)=\"openDetails(email)\">\r\n\t\t\t\t\t\t\t\t\t{{email.dateSent}}\r\n\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</tab>\r\n\t</tabset> \r\n</div>\r\n\r\n<!-- Email Details -->\r\n<!-- The data is already loaded so in order to improve performance, we can load details in the same view -->\r\n<div (click)=\"$event.preventDefault()\" *ngIf=\"!showList\">\r\n\t<!-- Email Toolbar -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<button class=\"btn btn-default\"  data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Compose Email\" tooltip [routerLink]=\"[{outlets: { email: ['compose'] } }]\">\r\n\t\t\t\t<span class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></span>\r\n\t\t\t\t<span class=\"sr-only\">Compose Email to send from {{activeEmailAccount.address}}</span>\r\n\t\t\t</button>\r\n\t\t\t<button class=\"btn btn-default\"  data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Back to inbox\" tooltip (click)=\"openInbox()\">\r\n\t\t\t\t<span class=\"fa fa-long-arrow-left\" aria-hidden=\"true\"></span>\r\n\t\t\t\t<span class=\"sr-only\">Back to inbox</span>\r\n\t\t\t</button>\r\n\t\t\t<button class=\"btn btn-default\" (click)=\"deleteActiveEmail()\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete Email\" tooltip>\r\n\t\t\t\t<span class=\"fa fa-trash-o\" aria-hidden=\"true\"></span>\r\n\t\t\t\t<span class=\"sr-only\">Delete email</span>\r\n\t\t\t</button>\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t<div class=\"btn-group pull-right\">\r\n\t\t\t\t<button class=\"btn btn-default\" (click)=\"replyEmail()\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Reply\" tooltip>\r\n\t\t\t\t\t<span class=\"fa fa-reply\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t<span class=\"sr-only\">Reply</span>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button class=\"btn btn-default\" (click)=\"replyAllEmail()\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Reply All\" tooltip>\r\n\t\t\t\t\t<span class=\"fa fa-reply-all\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t<span class=\"sr-only\">Reply all</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"email-slide\">\r\n\t\t<div class=\"inner\" id=\"email-content\">\r\n\t\t\t<accordion>\r\n\t\t\t\t<accordion-group #group [isOpen]=\"status.isOpen\">\r\n\t\t\t\t\t<div accordion-heading>\r\n\t\t\t\t\t\t<b>From: </b> {{emailDetails.from}}\r\n\t\t\t\t\t\t<i class=\"pull-right float-xs-right fa\"\r\n\t\t\t\t\t\t[ngClass]=\"{'fa-chevron-down': group?.isOpen, 'fa-chevron-right': !group?.isOpen}\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<b>To: </b> {{emailDetails.recipients}} <br>\r\n\t\t\t\t\t<span *ngIf=\"emailDetails.cc\"><b>CC: </b> {{emailDetails.cc}}</span> <br>\r\n\t\t\t\t\t<b>Received: </b> {{emailDetails.dateSent}}\r\n\t\t\t\t</accordion-group>\r\n\t\t\t</accordion>\r\n\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t\t<b class=\"word-wrap\">{{emailDetails.subject}}</b>\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t<tiny-mce [elementId]=\"'compose-email'\" readonly=\"true\" [model]=\"emailDetails.content\"></tiny-mce>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t<button class=\"btn btn-small btn-default\" *ngFor=\"let attachment of emailDetails.attachmentsPreview\" (click)=\"downloadAttachment(emailDetails, attachment)\">\r\n\t\t\t\t\t\t\t<span class=\"fa fa-paperclip\" aria-hidden=\"true\"></span> {{attachment.name}}\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<iframe id=\"email-iframe\" style=\"width: 1px; height: 1px; display:none;\" [src]=\"cacheBust\"></iframe>\r\n<div class=\"row\" *ngIf=\"outage\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"alert alert-danger\">\r\n\t\t\tEmail is currently unavailable due to scheduled maintenance. \r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ },

/***/ 884:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);



var platform = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])();
platform.bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]).then(function(MODULE_REF) {
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


/***/ }

},[884]);
//# sourceMappingURL=email.map