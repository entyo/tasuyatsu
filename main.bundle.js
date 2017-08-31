webpackJsonp([1,5],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(565);
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

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__(403);
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

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyCXUplO20cWIbing2TWF-m6zhHMoQJUFQ8',
        authDomain: 'tasuyatsu.firebaseapp.com',
        databaseURL: 'https://tasuyatsu.firebaseio.com',
        projectId: 'tasuyatsu',
        storageBucket: 'tasuyatsu.appspot.com',
        messagingSenderId: '24552721392'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 389;


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(145);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 400:
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
        template: __webpack_require__(560),
        styles: [__webpack_require__(465)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_player_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__player_list_player_list_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_store__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__audio_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_environment__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__file_uploader_file_uploader_component__ = __webpack_require__(402);
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
            __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__file_uploader_file_uploader_component__["a" /* FileUploaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["a" /* AngularFireDatabaseModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__app_store__["a" /* AppStore */],
            __WEBPACK_IMPORTED_MODULE_10__audio_service__["a" /* AudioService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_sound__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_stores_sound_store__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// angularfire2 does not support filestorage yet :-(
// So I use firebase/app directly

var FileUploaderComponent = (function () {
    function FileUploaderComponent(store) {
        this.store = store;
    }
    FileUploaderComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        this.files = event.srcElement.files;
        console.log(this.files);
        var _loop_1 = function (i) {
            if (!this_1.makeRef(this_1.files.item(i).name)) {
                return { value: void 0 };
            }
            var uploadTask = this_1.userRef.put(this_1.files.item(i));
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                _this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log('Upload is ' + _this.uploadProgress + '% done');
            }, function () {
                alert('Error uploading an item to filestorage :-(');
                _this.uploadProgress = 0;
            }, function () {
                var downloadURL = uploadTask.snapshot.downloadURL;
                var sound = new __WEBPACK_IMPORTED_MODULE_1__shared_models_sound__["a" /* Sound */](_this.files.item(i).name, downloadURL);
                _this.store.insert(sound);
                _this.uploadProgress = 0;
                return undefined;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.files.length; ++i) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    FileUploaderComponent.prototype.makeRef = function (filename) {
        if (!__WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser) {
            alert('ログインして？');
            return false;
        }
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        console.log(user.uid + '/' + filename);
        this.userRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref().child(user.uid + '/' + filename);
        return true;
    };
    return FileUploaderComponent;
}());
FileUploaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-file-uploader',
        template: __webpack_require__(561),
        styles: [__webpack_require__(466)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_stores_sound_store__["a" /* SoundStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_stores_sound_store__["a" /* SoundStore */]) === "function" && _a || Object])
], FileUploaderComponent);

var _a;
//# sourceMappingURL=file-uploader.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return audioContext; });

var audioContext = new (window['AudioContext'] || window['webkitAudioContext'])();
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (auth) {
            _this.isLoggedIn = auth ? true : false;
            _this.allowedAction = _this.isLoggedIn ? 'ログアウト' : 'ログイン';
        });
    }
    LoginComponent.prototype.switchLoginStatus = function () {
        if (this.isLoggedIn) {
            this.afAuth.auth.signOut();
        }
        else {
            this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].TwitterAuthProvider());
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(562),
        styles: [__webpack_require__(467)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_stores_sound_store__ = __webpack_require__(85);
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
        template: __webpack_require__(563),
        styles: [__webpack_require__(468)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_stores_sound_store__["a" /* SoundStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_stores_sound_store__["a" /* SoundStore */]) === "function" && _a || Object])
], PlayerListComponent);

var _a;
//# sourceMappingURL=player-list.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_sound__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_service__ = __webpack_require__(144);
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
            console.log('Played');
            console.log(_this.sound);
        });
    };
    PlayerComponent.prototype.stop = function () {
        var _this = this;
        this.audioService.stop(this.sound)
            .then(function (s) {
            console.log('Stopped');
            _this.update.emit(s);
        });
    };
    PlayerComponent.prototype.switchLoop = function () {
        this.sound.loop = !this.sound.loop;
        console.log('loop: ', this.sound.loop);
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
        console.log('Volume changed: ', this.sound.gainNode.gain.value);
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
        template: __webpack_require__(564),
        styles: [__webpack_require__(469)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__audio_service__["a" /* AudioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__audio_service__["a" /* AudioService */]) === "function" && _b || Object])
], PlayerComponent);

var _a, _b;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_sound_store__ = __webpack_require__(85);
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

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, "#root-container {\n  width: 85%;\n  height: 90%;\n  margin: 30px 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.jumbotron {\n  padding: 1% 0 1% 0;\n}\n\n.content {\n  width: 90%;\n  height: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nheader {\n  /*position: fixed;*/\n  top: 0px;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  background-color: #c9c9c9;\n  padding: 15px 0;\n}\n\nheader p {\n  color: #444444;\n  font-size: 20px;\n  padding-right: 15px;\n  padding-left: 15px;  \n}\n\nfooter {\n  /*position: fixed;*/\n  bottom: 0px;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  padding: 20px 0;\n  background-color: #c9c9c9;\n}\n\nfooter p {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  color: #444444;\n  padding-right: 15px;\n  padding-left: 15px;\n}", "", {"version":3,"sources":["/home/entyo/github/entyo/tasuyatsu/src/app/app.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,mBAAmB;CACpB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;CACpB;;AAED;EACE,oBAAoB;EACpB,SAAS;EACT,YAAY;EACZ,6CAA6C;EAC7C,aAAa;EACb,0BAA0B;EAC1B,gBAAgB;CACjB;;AAED;EACE,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;CACpB;;AAED;EACE,oBAAoB;EACpB,YAAY;EACZ,YAAY;EACZ,6CAA6C;EAC7C,aAAa;EACb,gBAAgB;EAChB,0BAA0B;CAC3B;;AAED;EACE,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,oBAAoB;EACpB,mBAAmB;CACpB","file":"app.component.css","sourcesContent":["#root-container {\n  width: 85%;\n  height: 90%;\n  margin: 30px 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.jumbotron {\n  padding: 1% 0 1% 0;\n}\n\n.content {\n  width: 90%;\n  height: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nheader {\n  /*position: fixed;*/\n  top: 0px;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  background-color: #c9c9c9;\n  padding: 15px 0;\n}\n\nheader p {\n  color: #444444;\n  font-size: 20px;\n  padding-right: 15px;\n  padding-left: 15px;  \n}\n\nfooter {\n  /*position: fixed;*/\n  bottom: 0px;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  padding: 20px 0;\n  background-color: #c9c9c9;\n}\n\nfooter p {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  color: #444444;\n  padding-right: 15px;\n  padding-left: 15px;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, ".help-block {\n  font-size: 12px;\n}\n\nh2 {\n  font-size: 24px;\n  margin-bottom: 2%;\n}\n\nh2 .fa {\n  vertical-align: middle;\n  display:inline-block;\n}\n\n.fa-file-audio-o {\n  margin-right: 5px;\n}\n\nh2 span {\n  vertical-align: middle;\n}", "", {"version":3,"sources":["/home/entyo/github/entyo/tasuyatsu/src/app/file-uploader/file-uploader.component.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;CACjB;;AAED;EACE,gBAAgB;EAChB,kBAAkB;CACnB;;AAED;EACE,uBAAuB;EACvB,qBAAqB;CACtB;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,uBAAuB;CACxB","file":"file-uploader.component.css","sourcesContent":[".help-block {\n  font-size: 12px;\n}\n\nh2 {\n  font-size: 24px;\n  margin-bottom: 2%;\n}\n\nh2 .fa {\n  vertical-align: middle;\n  display:inline-block;\n}\n\n.fa-file-audio-o {\n  margin-right: 5px;\n}\n\nh2 span {\n  vertical-align: middle;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, ".navbar-btn {\n  margin-left: 5px;\n}", "", {"version":3,"sources":["/home/entyo/github/entyo/tasuyatsu/src/app/login/login.component.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;CAClB","file":"login.component.css","sourcesContent":[".navbar-btn {\n  margin-left: 5px;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, "i {\n  vertical-align: middle;\n}\n\nh2 {\n  font-size: 24px;\n}\n\nh2 .fa {\n  vertical-align: middle;\n  display:inline-block;\n}\n\nh2 span {\n  vertical-align: middle;\n}\n\n.fa-music {\n  margin-right: 5px;\n}\n\n.fa-refresh {\n  margin-left: 32px;\n}\n\n.repeating {\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n  100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n\n@keyframes spin {\n  0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n  100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}", "", {"version":3,"sources":["/home/entyo/github/entyo/tasuyatsu/src/app/player-list/player-list.component.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;CACxB;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,uBAAuB;EACvB,qBAAqB;CACtB;;AAED;EACE,uBAAuB;CACxB;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,6CAAqC;UAArC,qCAAqC;CACtC;;AAED;EACE,IAAI,gCAAA,wBAAwB,CAAC;EAC7B,MAAM,kCAAA,0BAA0B,CAAC;CAClC;;AAHD;EACE,IAAI,gCAAA,wBAAwB,CAAC;EAC7B,MAAM,kCAAA,0BAA0B,CAAC;CAClC","file":"player-list.component.css","sourcesContent":["i {\n  vertical-align: middle;\n}\n\nh2 {\n  font-size: 24px;\n}\n\nh2 .fa {\n  vertical-align: middle;\n  display:inline-block;\n}\n\nh2 span {\n  vertical-align: middle;\n}\n\n.fa-music {\n  margin-right: 5px;\n}\n\n.fa-refresh {\n  margin-left: 32px;\n}\n\n.repeating {\n  animation: spin 1.5s linear infinite;\n}\n\n@keyframes spin {\n  0% {transform: rotate(0deg);}\n  100% {transform: rotate(360deg);}\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, ".player {\n  background-color: whitesmoke;\n  height: 15%;\n  padding: 1% 2% 1% 2%;\n  margin: 2% 0;\n  /*border: 2px solid whitesmoke;*/\n}\n\np {\n  margin-bottom: 1%;\n}\n\np .fa {\n  vertical-align: middle;\n  display:inline-block;\n}\n\np span {\n  vertical-align: middle\n}\n\n.fa-pencil {\n  margin-right: 5px;\n  cursor: pointer;\n}\n\n.fa-refresh {\n  margin-left: 5px;\n}\n\n.fa-trash {\n  margin-left: 5px;\n}\n\n.loading {\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n  100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n\n@keyframes spin {\n  0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n  100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n\n.checkbox {\n  margin-left: 10px;\n  display: inline-block;\n}\n\n.song-title {\n  cursor: pointer;  \n}", "", {"version":3,"sources":["/home/entyo/github/entyo/tasuyatsu/src/app/player/player.component.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,YAAY;EACZ,qBAAqB;EACrB,aAAa;EACb,iCAAiC;CAClC;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,uBAAuB;EACvB,qBAAqB;CACtB;;AAED;EACE,sBAAsB;CACvB;;AAED;EACE,kBAAkB;EAClB,gBAAgB;CACjB;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,6CAAqC;UAArC,qCAAqC;CACtC;;AAED;EACE,IAAI,gCAAA,wBAAwB,CAAC;EAC7B,MAAM,kCAAA,0BAA0B,CAAC;CAClC;;AAHD;EACE,IAAI,gCAAA,wBAAwB,CAAC;EAC7B,MAAM,kCAAA,0BAA0B,CAAC;CAClC;;AAED;EACE,kBAAkB;EAClB,sBAAsB;CACvB;;AAED;EACE,gBAAgB;CACjB","file":"player.component.css","sourcesContent":[".player {\n  background-color: whitesmoke;\n  height: 15%;\n  padding: 1% 2% 1% 2%;\n  margin: 2% 0;\n  /*border: 2px solid whitesmoke;*/\n}\n\np {\n  margin-bottom: 1%;\n}\n\np .fa {\n  vertical-align: middle;\n  display:inline-block;\n}\n\np span {\n  vertical-align: middle\n}\n\n.fa-pencil {\n  margin-right: 5px;\n  cursor: pointer;\n}\n\n.fa-refresh {\n  margin-left: 5px;\n}\n\n.fa-trash {\n  margin-left: 5px;\n}\n\n.loading {\n  animation: spin 1.5s linear infinite;\n}\n\n@keyframes spin {\n  0% {transform: rotate(0deg);}\n  100% {transform: rotate(360deg);}\n}\n\n.checkbox {\n  margin-left: 10px;\n  display: inline-block;\n}\n\n.song-title {\n  cursor: pointer;  \n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 205,
	"./af.js": 205,
	"./ar": 212,
	"./ar-dz": 206,
	"./ar-dz.js": 206,
	"./ar-kw": 207,
	"./ar-kw.js": 207,
	"./ar-ly": 208,
	"./ar-ly.js": 208,
	"./ar-ma": 209,
	"./ar-ma.js": 209,
	"./ar-sa": 210,
	"./ar-sa.js": 210,
	"./ar-tn": 211,
	"./ar-tn.js": 211,
	"./ar.js": 212,
	"./az": 213,
	"./az.js": 213,
	"./be": 214,
	"./be.js": 214,
	"./bg": 215,
	"./bg.js": 215,
	"./bn": 216,
	"./bn.js": 216,
	"./bo": 217,
	"./bo.js": 217,
	"./br": 218,
	"./br.js": 218,
	"./bs": 219,
	"./bs.js": 219,
	"./ca": 220,
	"./ca.js": 220,
	"./cs": 221,
	"./cs.js": 221,
	"./cv": 222,
	"./cv.js": 222,
	"./cy": 223,
	"./cy.js": 223,
	"./da": 224,
	"./da.js": 224,
	"./de": 227,
	"./de-at": 225,
	"./de-at.js": 225,
	"./de-ch": 226,
	"./de-ch.js": 226,
	"./de.js": 227,
	"./dv": 228,
	"./dv.js": 228,
	"./el": 229,
	"./el.js": 229,
	"./en-au": 230,
	"./en-au.js": 230,
	"./en-ca": 231,
	"./en-ca.js": 231,
	"./en-gb": 232,
	"./en-gb.js": 232,
	"./en-ie": 233,
	"./en-ie.js": 233,
	"./en-nz": 234,
	"./en-nz.js": 234,
	"./eo": 235,
	"./eo.js": 235,
	"./es": 237,
	"./es-do": 236,
	"./es-do.js": 236,
	"./es.js": 237,
	"./et": 238,
	"./et.js": 238,
	"./eu": 239,
	"./eu.js": 239,
	"./fa": 240,
	"./fa.js": 240,
	"./fi": 241,
	"./fi.js": 241,
	"./fo": 242,
	"./fo.js": 242,
	"./fr": 245,
	"./fr-ca": 243,
	"./fr-ca.js": 243,
	"./fr-ch": 244,
	"./fr-ch.js": 244,
	"./fr.js": 245,
	"./fy": 246,
	"./fy.js": 246,
	"./gd": 247,
	"./gd.js": 247,
	"./gl": 248,
	"./gl.js": 248,
	"./gom-latn": 249,
	"./gom-latn.js": 249,
	"./he": 250,
	"./he.js": 250,
	"./hi": 251,
	"./hi.js": 251,
	"./hr": 252,
	"./hr.js": 252,
	"./hu": 253,
	"./hu.js": 253,
	"./hy-am": 254,
	"./hy-am.js": 254,
	"./id": 255,
	"./id.js": 255,
	"./is": 256,
	"./is.js": 256,
	"./it": 257,
	"./it.js": 257,
	"./ja": 258,
	"./ja.js": 258,
	"./jv": 259,
	"./jv.js": 259,
	"./ka": 260,
	"./ka.js": 260,
	"./kk": 261,
	"./kk.js": 261,
	"./km": 262,
	"./km.js": 262,
	"./kn": 263,
	"./kn.js": 263,
	"./ko": 264,
	"./ko.js": 264,
	"./ky": 265,
	"./ky.js": 265,
	"./lb": 266,
	"./lb.js": 266,
	"./lo": 267,
	"./lo.js": 267,
	"./lt": 268,
	"./lt.js": 268,
	"./lv": 269,
	"./lv.js": 269,
	"./me": 270,
	"./me.js": 270,
	"./mi": 271,
	"./mi.js": 271,
	"./mk": 272,
	"./mk.js": 272,
	"./ml": 273,
	"./ml.js": 273,
	"./mr": 274,
	"./mr.js": 274,
	"./ms": 276,
	"./ms-my": 275,
	"./ms-my.js": 275,
	"./ms.js": 276,
	"./my": 277,
	"./my.js": 277,
	"./nb": 278,
	"./nb.js": 278,
	"./ne": 279,
	"./ne.js": 279,
	"./nl": 281,
	"./nl-be": 280,
	"./nl-be.js": 280,
	"./nl.js": 281,
	"./nn": 282,
	"./nn.js": 282,
	"./pa-in": 283,
	"./pa-in.js": 283,
	"./pl": 284,
	"./pl.js": 284,
	"./pt": 286,
	"./pt-br": 285,
	"./pt-br.js": 285,
	"./pt.js": 286,
	"./ro": 287,
	"./ro.js": 287,
	"./ru": 288,
	"./ru.js": 288,
	"./sd": 289,
	"./sd.js": 289,
	"./se": 290,
	"./se.js": 290,
	"./si": 291,
	"./si.js": 291,
	"./sk": 292,
	"./sk.js": 292,
	"./sl": 293,
	"./sl.js": 293,
	"./sq": 294,
	"./sq.js": 294,
	"./sr": 296,
	"./sr-cyrl": 295,
	"./sr-cyrl.js": 295,
	"./sr.js": 296,
	"./ss": 297,
	"./ss.js": 297,
	"./sv": 298,
	"./sv.js": 298,
	"./sw": 299,
	"./sw.js": 299,
	"./ta": 300,
	"./ta.js": 300,
	"./te": 301,
	"./te.js": 301,
	"./tet": 302,
	"./tet.js": 302,
	"./th": 303,
	"./th.js": 303,
	"./tl-ph": 304,
	"./tl-ph.js": 304,
	"./tlh": 305,
	"./tlh.js": 305,
	"./tr": 306,
	"./tr.js": 306,
	"./tzl": 307,
	"./tzl.js": 307,
	"./tzm": 309,
	"./tzm-latn": 308,
	"./tzm-latn.js": 308,
	"./tzm.js": 309,
	"./uk": 310,
	"./uk.js": 310,
	"./ur": 311,
	"./ur.js": 311,
	"./uz": 313,
	"./uz-latn": 312,
	"./uz-latn.js": 312,
	"./uz.js": 313,
	"./vi": 314,
	"./vi.js": 314,
	"./x-pseudo": 315,
	"./x-pseudo.js": 315,
	"./yo": 316,
	"./yo.js": 316,
	"./zh-cn": 317,
	"./zh-cn.js": 317,
	"./zh-hk": 318,
	"./zh-hk.js": 318,
	"./zh-tw": 319,
	"./zh-tw.js": 319
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
webpackContext.id = 533;


/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "<!--<header>\n  <p>{{title}}</p>\n</header>-->\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n        aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n      <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <div class=\"navbar-header\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a href=\"#\">Home</a></li>\n          <li><a href=\"https://github.com/entyo/tasuyatsu\">Repository</a></li>\n        </ul>\n      </div>\n      <app-login></app-login>\n    </div>\n  </div>\n</nav>\n\n<main>\n  <div class=\"jumbotron\" id=\"root-container\">\n    <div class=\"content\">\n      <app-player-list></app-player-list>\n      <app-file-uploader></app-file-uploader>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "<h2>\n  <i class=\"fa fa-fw fa-file-audio-o\" aria-hidden=\"true\"></i>\n  <span>ファイルから音を追加</span>\n</h2>\n<div class=\"form-group\">\n  <label for=\"sound-file\">音声ファイルをアップロード</label>\n  <input type=\"file\" id=\"sound-file\" ngModel (change)=\"onSelectFile($event)\" accept=\"audio/*\">\n  <p class=\"help-block\" *ngIf=\"uploadProgress > 0\">Upload is {{uploadProgress}}% done</p>\n</div>\n"

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar-nav navbar-right\">\n  <button class=\"btn btn-default navbar-btn\" (click)=\"switchLoginStatus()\">{{allowedAction}}</button>\n  <!--<button class=\"btn btn-default navbar-btn\" (click)=\"login()\" *ngIf=\"!isLoggedIn\">login</button>\n  <button class=\"btn btn-default navbar-btn\" (click)=\"logout()\" *ngIf=\"isLoggedIn\">logout</button>-->\n  <p class=\"navbar-text\" *ngIf=\"isLoggedIn\">{{(afAuth.authState | async)?.displayName}} としてログイン</p>\n</nav>"

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "<h2>\n  <i class=\"fa fa-music fa-fw\" aria-hidden=\"true\"></i>\n  <span>使える音一覧</span>  \n</h2>\n<div *ngFor=\"let sound of (store.list | async)\" >\n  <app-player [sound]=\"sound\" (update)=\"updateSound($event)\" (remove)=\"removeSound($event)\"></app-player>\n</div>"

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "<div class=\"player\">\n  <p>\n    <i class=\"fa fa-pencil\" aria-hidden=\"true\" (click)=\"switchEditMode()\"></i>\n    <span class=\"song-title\" (click)=\"switchEditMode()\">{{sound.title}}</span>\n    <i class=\"fa fa-trash fa-pull-right\" aria-hidden=\"true\" (click)=\"removeSound($event)\"></i>\n  </p>\n  <div class=\"form-group\" *ngIf=\"sound.editing\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"sound.title\" placeholder=\"もっといいタイトルを頼む\">\n    <button type=\"submit\" class=\"btn btn-default\" (click)=\"switchEditMode()\">こり!</button>\n  </div>\n  <div>\n    <i class=\"fa fa-play-circle fa-fw\" aria-hidden=\"true\" (click)=\"play()\" *ngIf=\"!sound.playing && !sound.loading\"></i>\n    <i class=\"fa fa-stop-circle-o fa-fw\" aria-hidden=\"true\" (click)=\"stop()\" *ngIf=\"sound.playing && !sound.loading\"></i>\n    <i class=\"fa fa-refresh fa-fw loading\" aria-hidden=\"true\" *ngIf=\"sound.loading\"></i>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" (click)=\"switchLoop()\" [ngModel]=\"sound.loop\"> loop\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"control-label\">Volume</label>\n    <input type=\"range\" class=\"form-control\" min=\"0\" max=\"100\" value=\"50\" #ref (change)=\"changeVolume(ref.value)\" />\n  </div>\n</div>\n"

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ }),

/***/ 84:
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

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_store__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_sound__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
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
    function SoundStore(appStore, afAuth, afDB) {
        var _this = this;
        this.appStore = appStore;
        afAuth.authState.subscribe(function (user) {
            var store = _this.appStore.snapshot;
            if (!Object.keys(store.sound).length && !_this.fireDB) {
                _this.mockSetup();
            }
            if (!user) {
                return;
            }
            _this.fireDBRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref().child('users/' + user.uid);
            _this.fireDB = afDB.list(_this.fireDBRef, { preserveSnapshot: true });
            _this.fireDB.subscribe(function (snapshots) {
                snapshots.forEach(function (snapshot) {
                    var sound = snapshot.val();
                    sound.fireDBKey = snapshot.key;
                    var existsIDs = Object.keys(store.sound);
                    if (existsIDs.find(function (id) { return parseInt(id, 10) === sound.id; })) {
                        _this.update(sound.id, sound);
                    }
                    else {
                        _this.insert(sound);
                    }
                });
            });
        });
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
            // tslint:disable-next-line:max-line-length
            new __WEBPACK_IMPORTED_MODULE_2__models_sound__["a" /* Sound */]('ピーポくんのうた', 'https://firebasestorage.googleapis.com/v0/b/tasuyatsu.appspot.com/o/pi.mp3?alt=media&token=55ddf9c2-4487-4390-9288-e34bfd303bc5'),
            new __WEBPACK_IMPORTED_MODULE_2__models_sound__["a" /* Sound */]('ブーイング', 'https://firebasestorage.googleapis.com/v0/b/tasuyatsu.appspot.com/o/booing.wav?alt=media&token=d0ef2930-0383-4c2e-a1c5-17605fe8a1d0'),
            // tslint:disable-next-line:max-line-length
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
        if (this.fireDB) {
            this.fireDB.push(sound);
        }
    };
    SoundStore.prototype.update = function (id, sound) {
        var store = this.appStore.snapshot;
        store.sound[sound.id] = sound;
        this.appStore.patchValue(store);
        if (this.fireDB && sound.fireDBKey) {
            var key = sound.fireDBKey;
            this.fireDB.update(this.fireDBRef.child(key), sound)
                .then(function () { return console.log('updated: ', sound.fireDBKey); })
                .catch(function () { return console.log('update failed', sound.fireDBKey); });
        }
    };
    SoundStore.prototype.delete = function (id) {
        var store = this.appStore.snapshot;
        var sound = store.sound[id];
        if (this.fireDB && sound.fireDBKey) {
            this.fireDB.remove(sound.fireDBKey)
                .then(function () { return console.log('deleted: ', sound.fireDBKey); })
                .catch(function () { return console.log('deletion failed', sound.fireDBKey); });
        }
        store.sound[id] = undefined;
        this.appStore.patchValue(store);
    };
    return SoundStore;
}());
SoundStore = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_store__["a" /* AppStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_store__["a" /* AppStore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object])
], SoundStore);

var _a, _b, _c;
//# sourceMappingURL=sound.store.js.map

/***/ })

},[604]);
//# sourceMappingURL=main.bundle.js.map