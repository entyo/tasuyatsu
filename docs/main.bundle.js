webpackJsonp([1,5],{

/***/ 286:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 286;


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(304);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_sound__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_stores_sound_store__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddSoundComponent = (function () {
    function AddSoundComponent(store) {
        this.store = store;
    }
    AddSoundComponent.prototype.ngOnInit = function () {
    };
    AddSoundComponent.prototype.addSound = function () {
        this.store.insert(new __WEBPACK_IMPORTED_MODULE_1__shared_models_sound__["a" /* Sound */](this.getBaseName(this.fileURL), this.fileURL));
        this.fileURL = "";
    };
    AddSoundComponent.prototype.getBaseName = function (uri) {
        return uri.split(/[\\/]/).pop();
    };
    return AddSoundComponent;
}());
AddSoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-add-sound',
        template: __webpack_require__(393),
        styles: [__webpack_require__(360)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_stores_sound_store__["a" /* SoundStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_stores_sound_store__["a" /* SoundStore */]) === "function" && _a || Object])
], AddSoundComponent);

var _a;
//# sourceMappingURL=add-sound.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'tasuyatsu';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(394),
        styles: [__webpack_require__(361)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_player_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__player_list_player_list_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_store__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_sound_add_sound_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__audio_service__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__player_player_component__["a" /* PlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__player_list_player_list_component__["a" /* PlayerListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_sound_add_sound_component__["a" /* AddSoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__app_store__["a" /* AppStore */],
            __WEBPACK_IMPORTED_MODULE_11__audio_service__["a" /* AudioService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return audioContext; });

var audioContext = new (window['AudioContext'] || window['webkitAudioContext'])();
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_stores_sound_store__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerListComponent = (function () {
    function PlayerListComponent(store) {
        this.store = store;
    }
    PlayerListComponent.prototype.ngOnInit = function () {
    };
    PlayerListComponent.prototype.updateSound = function (sound) {
        this.store.update(sound.id, sound);
    };
    PlayerListComponent.prototype.removeSound = function (sound) {
        this.store.delete(sound.id);
    };
    return PlayerListComponent;
}());
PlayerListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-player-list',
        template: __webpack_require__(395),
        styles: [__webpack_require__(362)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_stores_sound_store__["a" /* SoundStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_stores_sound_store__["a" /* SoundStore */]) === "function" && _a || Object])
], PlayerListComponent);

var _a;
//# sourceMappingURL=player-list.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_sound__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_service__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerComponent = (function () {
    function PlayerComponent(audioService) {
        this.audioService = audioService;
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent.prototype.play = function () {
        var _this = this;
        this.sound.loading = true;
        this.update.emit(this.sound);
        this.audioService.play(this.sound)
            .then(function (s) {
            s.loading = false;
            _this.update.emit(s);
            console.log("Played");
            console.log(_this.sound);
        });
    };
    PlayerComponent.prototype.stop = function () {
        var _this = this;
        this.audioService.stop(this.sound)
            .then(function (s) {
            console.log("Stopped");
            _this.update.emit(s);
        });
    };
    PlayerComponent.prototype.switchLoop = function () {
        this.sound.loop = !this.sound.loop;
        console.log("loop: ", this.sound.loop);
        this.update.emit(this.sound);
    };
    PlayerComponent.prototype.editTitle = function (newTitle) {
        this.sound.title = newTitle;
        this.update.emit(this.sound);
    };
    PlayerComponent.prototype.removeSound = function (e) {
        e.stopPropagation();
        this.remove.emit(this.sound);
    };
    PlayerComponent.prototype.switchEditMode = function () {
        this.sound.editing = !this.sound.editing;
        this.update.emit(this.sound);
    };
    PlayerComponent.prototype.changeVolume = function (v) {
        if (!this.sound.gainNode) {
            return;
        }
        // TODO: Volumeの最大値はModuleの一部として定数をまとめたファイルみたいなところで定義する
        this.sound.gainNode.gain.value = this.audioService.calcGainValue(v, 100);
        console.log("Volume changed: ", this.sound.gainNode.gain.value);
        this.update.emit(this.sound);
    };
    return PlayerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_models_sound__["a" /* Sound */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_models_sound__["a" /* Sound */]) === "function" && _a || Object)
], PlayerComponent.prototype, "sound", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Output */])(),
    __metadata("design:type", Object)
], PlayerComponent.prototype, "update", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Output */])(),
    __metadata("design:type", Object)
], PlayerComponent.prototype, "remove", void 0);
PlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-player',
        template: __webpack_require__(396),
        styles: [__webpack_require__(363)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__audio_service__["a" /* AudioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__audio_service__["a" /* AudioService */]) === "function" && _b || Object])
], PlayerComponent);

var _a, _b;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_sound_store__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* unused harmony export RootSharedModule */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: RootSharedModule,
        };
    };
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
        ],
        declarations: []
    })
], SharedModule);

var RootSharedModule = (function () {
    function RootSharedModule() {
    }
    return RootSharedModule;
}());
RootSharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            SharedModule,
        ],
        exports: [
            SharedModule
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__stores_sound_store__["a" /* SoundStore */],
        ],
    })
], RootSharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "#root-container {\n  width: 85%;\n  height: 90%;\n  margin: 30px 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.content {\n  width: 90%;\n  height: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nheader {\n  /*position: fixed;*/\n  top: 0px;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  background-color: #c9c9c9;\n  padding: 15px 0;\n}\n\nheader p {\n  color: #444444;\n  font-size: 20px;\n  padding-right: 15px;\n  padding-left: 15px;  \n}\n\nfooter {\n  /*position: fixed;*/\n  bottom: 0px;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  padding: 20px 0;\n  background-color: #c9c9c9;\n}\n\nfooter p {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  color: #444444;\n  padding-right: 15px;\n  padding-left: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "i {\n  vertical-align: middle;\n}\n\n.fa-refresh {\n  margin-left: 32px;\n}\n\n.repeating {\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n  100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n\n@keyframes spin {\n  0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n  100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".player {\n  background-color: whitesmoke;\n  height: 15%;\n  padding: 2%;\n  margin: 2% 0;\n  /*border: 2px solid whitesmoke;*/\n}\n\np .fa {\n  vertical-align: middle;\n  display:inline-block;\n}\n\np span {\n  vertical-align: middle\n}\n\n.fa-pencil {\n  margin-right: 5px;\n}\n\n.fa-refresh {\n  margin-left: 5px;\n}\n\n.fa-trash {\n  margin-left: 5px;\n}\n\n.loading {\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n  100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n\n@keyframes spin {\n  0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n  100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n\n.checkbox {\n  margin-left: 30px;\n  display: inline-block;\n}\n\n.fa-pencil {\n  cursor: pointer;  \n}\n\n.song-title {\n  cursor: pointer;  \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 104,
	"./af.js": 104,
	"./ar": 111,
	"./ar-dz": 105,
	"./ar-dz.js": 105,
	"./ar-kw": 106,
	"./ar-kw.js": 106,
	"./ar-ly": 107,
	"./ar-ly.js": 107,
	"./ar-ma": 108,
	"./ar-ma.js": 108,
	"./ar-sa": 109,
	"./ar-sa.js": 109,
	"./ar-tn": 110,
	"./ar-tn.js": 110,
	"./ar.js": 111,
	"./az": 112,
	"./az.js": 112,
	"./be": 113,
	"./be.js": 113,
	"./bg": 114,
	"./bg.js": 114,
	"./bn": 115,
	"./bn.js": 115,
	"./bo": 116,
	"./bo.js": 116,
	"./br": 117,
	"./br.js": 117,
	"./bs": 118,
	"./bs.js": 118,
	"./ca": 119,
	"./ca.js": 119,
	"./cs": 120,
	"./cs.js": 120,
	"./cv": 121,
	"./cv.js": 121,
	"./cy": 122,
	"./cy.js": 122,
	"./da": 123,
	"./da.js": 123,
	"./de": 126,
	"./de-at": 124,
	"./de-at.js": 124,
	"./de-ch": 125,
	"./de-ch.js": 125,
	"./de.js": 126,
	"./dv": 127,
	"./dv.js": 127,
	"./el": 128,
	"./el.js": 128,
	"./en-au": 129,
	"./en-au.js": 129,
	"./en-ca": 130,
	"./en-ca.js": 130,
	"./en-gb": 131,
	"./en-gb.js": 131,
	"./en-ie": 132,
	"./en-ie.js": 132,
	"./en-nz": 133,
	"./en-nz.js": 133,
	"./eo": 134,
	"./eo.js": 134,
	"./es": 136,
	"./es-do": 135,
	"./es-do.js": 135,
	"./es.js": 136,
	"./et": 137,
	"./et.js": 137,
	"./eu": 138,
	"./eu.js": 138,
	"./fa": 139,
	"./fa.js": 139,
	"./fi": 140,
	"./fi.js": 140,
	"./fo": 141,
	"./fo.js": 141,
	"./fr": 144,
	"./fr-ca": 142,
	"./fr-ca.js": 142,
	"./fr-ch": 143,
	"./fr-ch.js": 143,
	"./fr.js": 144,
	"./fy": 145,
	"./fy.js": 145,
	"./gd": 146,
	"./gd.js": 146,
	"./gl": 147,
	"./gl.js": 147,
	"./gom-latn": 148,
	"./gom-latn.js": 148,
	"./he": 149,
	"./he.js": 149,
	"./hi": 150,
	"./hi.js": 150,
	"./hr": 151,
	"./hr.js": 151,
	"./hu": 152,
	"./hu.js": 152,
	"./hy-am": 153,
	"./hy-am.js": 153,
	"./id": 154,
	"./id.js": 154,
	"./is": 155,
	"./is.js": 155,
	"./it": 156,
	"./it.js": 156,
	"./ja": 157,
	"./ja.js": 157,
	"./jv": 158,
	"./jv.js": 158,
	"./ka": 159,
	"./ka.js": 159,
	"./kk": 160,
	"./kk.js": 160,
	"./km": 161,
	"./km.js": 161,
	"./kn": 162,
	"./kn.js": 162,
	"./ko": 163,
	"./ko.js": 163,
	"./ky": 164,
	"./ky.js": 164,
	"./lb": 165,
	"./lb.js": 165,
	"./lo": 166,
	"./lo.js": 166,
	"./lt": 167,
	"./lt.js": 167,
	"./lv": 168,
	"./lv.js": 168,
	"./me": 169,
	"./me.js": 169,
	"./mi": 170,
	"./mi.js": 170,
	"./mk": 171,
	"./mk.js": 171,
	"./ml": 172,
	"./ml.js": 172,
	"./mr": 173,
	"./mr.js": 173,
	"./ms": 175,
	"./ms-my": 174,
	"./ms-my.js": 174,
	"./ms.js": 175,
	"./my": 176,
	"./my.js": 176,
	"./nb": 177,
	"./nb.js": 177,
	"./ne": 178,
	"./ne.js": 178,
	"./nl": 180,
	"./nl-be": 179,
	"./nl-be.js": 179,
	"./nl.js": 180,
	"./nn": 181,
	"./nn.js": 181,
	"./pa-in": 182,
	"./pa-in.js": 182,
	"./pl": 183,
	"./pl.js": 183,
	"./pt": 185,
	"./pt-br": 184,
	"./pt-br.js": 184,
	"./pt.js": 185,
	"./ro": 186,
	"./ro.js": 186,
	"./ru": 187,
	"./ru.js": 187,
	"./sd": 188,
	"./sd.js": 188,
	"./se": 189,
	"./se.js": 189,
	"./si": 190,
	"./si.js": 190,
	"./sk": 191,
	"./sk.js": 191,
	"./sl": 192,
	"./sl.js": 192,
	"./sq": 193,
	"./sq.js": 193,
	"./sr": 195,
	"./sr-cyrl": 194,
	"./sr-cyrl.js": 194,
	"./sr.js": 195,
	"./ss": 196,
	"./ss.js": 196,
	"./sv": 197,
	"./sv.js": 197,
	"./sw": 198,
	"./sw.js": 198,
	"./ta": 199,
	"./ta.js": 199,
	"./te": 200,
	"./te.js": 200,
	"./tet": 201,
	"./tet.js": 201,
	"./th": 202,
	"./th.js": 202,
	"./tl-ph": 203,
	"./tl-ph.js": 203,
	"./tlh": 204,
	"./tlh.js": 204,
	"./tr": 205,
	"./tr.js": 205,
	"./tzl": 206,
	"./tzl.js": 206,
	"./tzm": 208,
	"./tzm-latn": 207,
	"./tzm-latn.js": 207,
	"./tzm.js": 208,
	"./uk": 209,
	"./uk.js": 209,
	"./ur": 210,
	"./ur.js": 210,
	"./uz": 212,
	"./uz-latn": 211,
	"./uz-latn.js": 211,
	"./uz.js": 212,
	"./vi": 213,
	"./vi.js": 213,
	"./x-pseudo": 214,
	"./x-pseudo.js": 214,
	"./yo": 215,
	"./yo.js": 215,
	"./zh-cn": 216,
	"./zh-cn.js": 216,
	"./zh-hk": 217,
	"./zh-hk.js": 217,
	"./zh-tw": 218,
	"./zh-tw.js": 218
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 368;


/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "<h2>Add new sound</h2>\n<div class=\"input-group\">\n  <input type=\"url\" class=\"form-control\" placeholder=\"追加したい音源のファイルのURLをいれてね\" [(ngModel)]=\"fileURL\">\n  <span class=\"input-group-btn\">\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"addSound()\">追加</button>\n  </span>\n</div>\n"

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = "<header>\n  <p>{{title}}</p>\n</header>\n\n<main>\n  <div class=\"jumbotron\" id=\"root-container\">\n    <div class=\"content\">\n      <app-player-list></app-player-list>\n      <app-add-sound></app-add-sound>\n    </div>\n  </div>\n</main>\n\n<footer>\n  <p>Repository is <a href=\"\">here</a>. Hack me!</p>\n</footer>"

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = "<h2>All sounds</h2>\n<div *ngFor=\"let sound of (store.list | async)\" >\n  <app-player [sound]=\"sound\" (update)=\"updateSound($event)\" (remove)=\"removeSound($event)\"></app-player>\n</div>"

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = "<div class=\"player\">\n  <p>\n    <i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"switchEditMode()\"></i>\n    <span class=\"song-title\" (click)=\"switchEditMode()\">{{sound.title}}</span>\n    <i class=\"fa fa-trash fa-pull-right\" aria-hidden=\"true\" (click)=\"removeSound($event)\"></i>\n  </p>\n  <div class=\"form-group\" *ngIf=\"sound.editing\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"sound.title\" placeholder=\"もっといいタイトルを頼む\">\n    <button type=\"submit\" class=\"btn btn-default\" (click)=\"switchEditMode()\">こり!</button>\n  </div>\n  <div>\n    <i class=\"fa fa-play-circle fa-fw\" aria-hidden=\"true\" (click)=\"play()\" *ngIf=\"!sound.playing && !sound.loading\"></i>\n    <i class=\"fa fa-stop-circle-o fa-fw\" aria-hidden=\"true\" (click)=\"stop()\" *ngIf=\"sound.playing && !sound.loading\"></i>\n    <i class=\"fa fa-refresh fa-fw loading\" aria-hidden=\"true\" *ngIf=\"sound.loading\"></i>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" (click)=\"switchLoop()\" [ngModel]=\"sound.loop\"> loop\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"control-label\">Volume</label>\n    <input type=\"range\" class=\"form-control\" min=\"0\" max=\"100\" value=\"50\" #ref (change)=\"changeVolume(ref.value)\" />\n  </div>\n</div>\n"

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sound; });
var Sound = (function () {
    function Sound(title, url) {
        this.title = title;
        this.url = url;
        this.playing = false;
        this.loop = false;
        this.editing = false;
        this.loading = false;
    }
    return Sound;
}());

//# sourceMappingURL=sound.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_store__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_sound__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundStore; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SoundStore = (function () {
    function SoundStore(appStore) {
        this.appStore = appStore;
        this.mockSetup();
    }
    Object.defineProperty(SoundStore.prototype, "list", {
        get: function () {
            return this.appStore.map(function (appStore) {
                return Object.keys(appStore.sound).map(function (id) { return appStore.sound[id]; })
                    .filter(function (sound) { return !!sound; })
                    .sort(function (a, b) { return b.id - a.id; });
            });
        },
        enumerable: true,
        configurable: true
    });
    SoundStore.prototype.mockSetup = function () {
        var _this = this;
        [
            new __WEBPACK_IMPORTED_MODULE_2__models_sound__["a" /* Sound */]('ピーポくんのうた', 'https://firebasestorage.googleapis.com/v0/b/tasuyatsu.appspot.com/o/pi.mp3?alt=media&token=55ddf9c2-4487-4390-9288-e34bfd303bc5'),
            new __WEBPACK_IMPORTED_MODULE_2__models_sound__["a" /* Sound */]('ブーイング', 'https://firebasestorage.googleapis.com/v0/b/tasuyatsu.appspot.com/o/booing.wav?alt=media&token=d0ef2930-0383-4c2e-a1c5-17605fe8a1d0'),
            new __WEBPACK_IMPORTED_MODULE_2__models_sound__["a" /* Sound */]('笑い声', 'https://firebasestorage.googleapis.com/v0/b/tasuyatsu.appspot.com/o/warai.wav?alt=media&token=9683a607-39e3-4ddc-a18d-61833986a522'),
        ].forEach(function (sound) { return _this.insert(sound); });
    };
    SoundStore.prototype.get = function (id) {
        return this.appStore.map(function (appStore) { return appStore.sound[id]; });
    };
    SoundStore.prototype.insert = function (sound) {
        var store = this.appStore.snapshot;
        sound.id = Object.keys(store.sound).length;
        store.sound[sound.id] = sound;
        this.appStore.patchValue(store);
    };
    SoundStore.prototype.update = function (id, sound) {
        var store = this.appStore.snapshot;
        store.sound[sound.id] = sound;
        this.appStore.patchValue(store);
    };
    SoundStore.prototype.delete = function (id) {
        var store = this.appStore.snapshot;
        store.sound[id] = undefined;
        this.appStore.patchValue(store);
    };
    return SoundStore;
}());
SoundStore = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_store__["a" /* AppStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_store__["a" /* AppStore */]) === "function" && _a || Object])
], SoundStore);

var _a;
//# sourceMappingURL=sound.store.js.map

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(287);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStore; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppStore = (function (_super) {
    __extends(AppStore, _super);
    function AppStore() {
        var _this = _super.call(this, {
            sound: {},
        }) || this;
        _this.subscribe(function (snapshot) {
            _this._snapshot = snapshot;
        });
        return _this;
    }
    Object.defineProperty(AppStore.prototype, "snapshot", {
        get: function () {
            return this._snapshot;
        },
        enumerable: true,
        configurable: true
    });
    AppStore.prototype.patchValue = function (value) {
        var snapshot = Object.assign({}, this._snapshot, value);
        this.next(snapshot);
    };
    return AppStore;
}(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]));
AppStore = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppStore);

//# sourceMappingURL=app.store.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__(300);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AudioService = (function () {
    function AudioService() {
    }
    AudioService.prototype.load = function (sound) {
        return new Promise(function (resolve, reject) {
            // 既に一度音源を取得している場合、XHRをせず単にnodeを作り直す
            if (sound.sourceNode) {
                var b = sound.sourceNode.buffer;
                sound.sourceNode = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* audioContext */].createBufferSource();
                sound.sourceNode.buffer = b;
                sound.sourceNode.loop = sound.loop;
                resolve(sound);
                return;
            }
            var xhr = new XMLHttpRequest();
            xhr.open('GET', sound.url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function () {
                if (xhr.status !== 200) {
                    reject(new Error('Audio data couldn\'t be loaded successfully; error code:' + xhr.statusText));
                }
                __WEBPACK_IMPORTED_MODULE_1__global__["a" /* audioContext */].decodeAudioData(xhr.response, function (buf) {
                    sound.sourceNode = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* audioContext */].createBufferSource();
                    sound.sourceNode.buffer = buf;
                    sound.sourceNode.loop = sound.loop;
                    resolve(sound);
                }, function () {
                    reject(new Error('Audio data seemed to be loaded succesfully, but couldn\'t be decoded.'));
                });
            };
            xhr.onerror = function () {
                reject(new Error('Network error :-('));
            };
            xhr.send(null);
        });
    };
    AudioService.prototype.play = function (sound) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.load(sound)
                .then(function (s) {
                s.gainNode = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* audioContext */].createGain();
                s.gainNode.gain.value = 1.0;
                s.sourceNode.connect(s.gainNode);
                s.gainNode.connect(__WEBPACK_IMPORTED_MODULE_1__global__["a" /* audioContext */].destination);
                s.sourceNode.start();
                s.playing = true;
                resolve(s);
            });
        });
    };
    AudioService.prototype.stop = function (sound) {
        return new Promise(function (resolve, reject) {
            if (!sound.sourceNode) {
                reject(new Error('SoundにAudioBufferSourceNodeが設定されていません'));
            }
            sound.sourceNode.stop();
            sound.playing = false;
            resolve(sound);
        });
    };
    AudioService.prototype.calcGainValue = function (vol, max) {
        console.log(vol, max);
        return Math.pow(vol / max, 2);
    };
    return AudioService;
}());
AudioService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AudioService);

//# sourceMappingURL=audio.service.js.map

/***/ })

},[440]);
//# sourceMappingURL=main.bundle.js.map