(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["live2dLoader"] = factory();
	else
		root["live2dLoader"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/MocMapper.ts":
/*!**************************!*\
  !*** ./src/MocMapper.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MocMapper = void 0;
var lappdefine_1 = __webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts");
var MocMapper = (function () {
    function MocMapper() {
        this.parameterIdMAp = new Map();
        this.resourcesPathToUrlMap = new Map();
        this.jsonResources = null;
        this.scale = 1;
    }
    MocMapper.getInstance = function () {
        if (this.mapper == null) {
            this.mapper = new MocMapper();
        }
        return this.mapper;
    };
    MocMapper.prototype.setParameter = function (defaultParameter, currentModParameter) {
        this.parameterIdMAp.set(defaultParameter, currentModParameter);
    };
    MocMapper.prototype.getParemeter = function (defaultParameter) {
        return this.parameterIdMAp.get(defaultParameter);
    };
    MocMapper.prototype.setPathToUrl = function (resourcesPath, url) {
        this.resourcesPathToUrlMap.set(resourcesPath, url);
    };
    MocMapper.prototype.getUrl = function (resourcesPath) {
        return this.resourcesPathToUrlMap.get(resourcesPath);
    };
    MocMapper.prototype.getJsonConfig = function () {
        return this.jsonResources;
    };
    MocMapper.prototype.getScale = function () { return this.scale; };
    MocMapper.prototype.setMapperJson = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, arrayOfparameters, arrayOfUrl, i, item, key, i, item, key, centerPointScal, model_scale;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, fetch(url).then(function (response) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var json;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4, response.json()];
                                            case 1:
                                                json = _a.sent();
                                                return [2, json];
                                        }
                                    });
                                });
                            })];
                    case 1:
                        _a.jsonResources = _b.sent();
                        arrayOfparameters = this.getJsonConfig().parameter;
                        arrayOfUrl = this.getJsonConfig().url;
                        for (i = 0; i < arrayOfparameters.length; i++) {
                            item = arrayOfparameters[i];
                            for (key in item) {
                                this.setParameter(key, item[key]);
                            }
                        }
                        for (i = 0; i < arrayOfUrl.length; i++) {
                            item = arrayOfUrl[i];
                            for (key in item) {
                                this.setParameter(key, item[key]);
                            }
                        }
                        centerPointScal = this.getJsonConfig().center;
                        lappdefine_1.resourcesConfig.setXscale(centerPointScal[0]);
                        lappdefine_1.resourcesConfig.setYscale(centerPointScal[1]);
                        model_scale = this.getJsonConfig().model_scale;
                        if (model_scale == undefined || model_scale <= 0 || model_scale > 50) {
                            model_scale = 1;
                        }
                        this.scale = model_scale;
                        lappdefine_1.resourcesConfig.setModelScale(model_scale);
                        return [2];
                }
            });
        });
    };
    MocMapper.mapper = null;
    return MocMapper;
}());
exports.MocMapper = MocMapper;


/***/ }),

/***/ "./src/lappdefine.ts":
/*!***************************!*\
  !*** ./src/lappdefine.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderTargetHeight = exports.RenderTargetWidth = exports.CubismLoggingLevel = exports.DebugTouchLogEnable = exports.DebugLogEnable = exports.PriorityForce = exports.PriorityNormal = exports.PriorityIdle = exports.PriorityNone = exports.HitAreaNameBody = exports.HitAreaNameHead = exports.MotionGroupTapBody = exports.MotionGroupIdle = exports.PowerImageName = exports.GearImageName = exports.BackImageName = exports.resourcesConfig = exports.ViewLogicalMaxTop = exports.ViewLogicalMaxBottom = exports.ViewLogicalMaxRight = exports.ViewLogicalMaxLeft = exports.ViewLogicalTop = exports.ViewLogicalBottom = exports.ViewLogicalRight = exports.ViewLogicalLeft = exports.ViewMinScale = exports.ViewMaxScale = exports.ViewScale = exports.CanvasSize = void 0;
var live2dcubismframework_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
exports.CanvasSize = 'auto';
exports.ViewScale = 2;
exports.ViewMaxScale = 4.0;
exports.ViewMinScale = 0.4;
exports.ViewLogicalLeft = -1.0;
exports.ViewLogicalRight = 1.0;
exports.ViewLogicalBottom = -1.0;
exports.ViewLogicalTop = 1.0;
exports.ViewLogicalMaxLeft = -2.0;
exports.ViewLogicalMaxRight = 2.0;
exports.ViewLogicalMaxBottom = -2.0;
exports.ViewLogicalMaxTop = 2.0;
var ResourceConfig = (function () {
    function ResourceConfig() {
        this.canvasId = 'live2d';
        this.x_scale = 2;
        this.y_scale = 1;
        this.model_scale = 1;
        this.resourcesPath = '../../Resources/';
        this.modelNames = ['Haru', 'Hiyori', 'Mark', 'Natori', 'Rice'];
        this.modelSize = this.modelNames.length;
    }
    ResourceConfig.prototype.setResourcesPath = function (path) {
        this.resourcesPath = path;
    };
    ResourceConfig.prototype.setCanvasId = function (canvasId) {
        this.canvasId = canvasId;
    };
    ResourceConfig.prototype.setModelScale = function (scale) {
        this.model_scale = scale;
    };
    ResourceConfig.prototype.getModelScale = function () {
        return this.model_scale;
    };
    ResourceConfig.prototype.setModelNames = function (models) {
        this.modelNames = models;
        this.setModelSize();
    };
    ResourceConfig.prototype.setModelSize = function () {
        this.modelSize = this.modelNames.length;
    };
    ResourceConfig.prototype.getResourcesPath = function () {
        return this.resourcesPath;
    };
    ResourceConfig.prototype.getModelNames = function () {
        return this.modelNames;
    };
    ResourceConfig.prototype.getModelSize = function () { return this.modelSize; };
    ResourceConfig.prototype.getCanvasId = function () {
        return this.canvasId;
    };
    ResourceConfig.prototype.setXscale = function (scale) { this.x_scale = scale; };
    ResourceConfig.prototype.setYscale = function (scale) { this.y_scale = scale; };
    ResourceConfig.prototype.getXscale = function () { return this.x_scale; };
    ResourceConfig.prototype.getYscale = function () { return this.y_scale; };
    return ResourceConfig;
}());
exports.resourcesConfig = new ResourceConfig();
exports.BackImageName = '';
exports.GearImageName = '';
exports.PowerImageName = '';
exports.MotionGroupIdle = 'Idle';
exports.MotionGroupTapBody = 'TapBody';
exports.HitAreaNameHead = 'Head';
exports.HitAreaNameBody = 'Body';
exports.PriorityNone = 0;
exports.PriorityIdle = 1;
exports.PriorityNormal = 2;
exports.PriorityForce = 3;
exports.DebugLogEnable = true;
exports.DebugTouchLogEnable = false;
exports.CubismLoggingLevel = live2dcubismframework_1.LogLevel.LogLevel_Verbose;
exports.RenderTargetWidth = 1900;
exports.RenderTargetHeight = 1000;


/***/ }),

/***/ "./src/lappdelegate.ts":
/*!*****************************!*\
  !*** ./src/lappdelegate.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppDelegate = exports.frameBuffer = exports.gl = exports.s_instance = exports.canvas = void 0;
var live2dcubismframework_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
var lapplive2dmanager_1 = __webpack_require__(/*! ./lapplive2dmanager */ "./src/lapplive2dmanager.ts");
var lapppal_1 = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
var lapptexturemanager_1 = __webpack_require__(/*! ./lapptexturemanager */ "./src/lapptexturemanager.ts");
var lappview_1 = __webpack_require__(/*! ./lappview */ "./src/lappview.ts");
exports.canvas = null;
exports.s_instance = null;
exports.gl = null;
exports.frameBuffer = null;
var LAppDelegate = (function () {
    function LAppDelegate() {
        this._captured = false;
        this._mouseX = 0.0;
        this._mouseY = 0.0;
        this._isEnd = false;
        this._cubismOption = new live2dcubismframework_1.Option();
        this._view = new lappview_1.LAppView();
        this._textureManager = new lapptexturemanager_1.LAppTextureManager();
    }
    LAppDelegate.getInstance = function () {
        if (exports.s_instance == null) {
            exports.s_instance = new LAppDelegate();
        }
        return exports.s_instance;
    };
    LAppDelegate.releaseInstance = function () {
        if (exports.s_instance != null) {
            exports.s_instance.release();
        }
        exports.s_instance = null;
    };
    LAppDelegate.prototype.initialize = function () {
        exports.canvas = document.getElementById(LAppDefine.resourcesConfig.getCanvasId());
        exports.gl = exports.canvas.getContext('webgl') || exports.canvas.getContext('experimental-webgl');
        if (!exports.gl) {
            alert('Cannot initialize WebGL. This browser does not support.');
            exports.gl = null;
            document.body.innerHTML =
                'This browser does not support the <code>&lt;canvas&gt;</code> element.';
            return false;
        }
        if (!exports.frameBuffer) {
            exports.frameBuffer = exports.gl.getParameter(exports.gl.FRAMEBUFFER_BINDING);
        }
        exports.gl.enable(exports.gl.BLEND);
        exports.gl.blendFunc(exports.gl.SRC_ALPHA, exports.gl.ONE_MINUS_SRC_ALPHA);
        exports.canvas.onmouseup = onClickEnded;
        document.addEventListener("mousemove", function (e) {
            if (!LAppDelegate.getInstance()._view) {
                lapppal_1.LAppPal.printMessage("view notfound");
                return;
            }
            var rect = exports.canvas.getBoundingClientRect();
            var posX = e.clientX - rect.left;
            var posY = e.clientY - rect.top;
            LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
        }, false);
        document.addEventListener("mouseout", function (e) {
            var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
            live2DManager.onDrag(0.0, 0.0);
        }, false);
        this._view.initialize();
        this.initializeCubism();
        return true;
    };
    LAppDelegate.prototype.onResize = function () {
        this._resizeCanvas();
        this._view.initialize();
        this._view.initializeSprite();
    };
    LAppDelegate.prototype.release = function () {
        this._textureManager.release();
        this._textureManager = null;
        this._view.release();
        this._view = null;
        lapplive2dmanager_1.LAppLive2DManager.releaseInstance();
        live2dcubismframework_1.CubismFramework.dispose();
    };
    LAppDelegate.prototype.run = function () {
        var _this = this;
        var loop = function () {
            if (exports.s_instance == null) {
                return;
            }
            lapppal_1.LAppPal.updateTime();
            exports.gl.clearColor(0.0, 0.0, 0.0, 0.0);
            exports.gl.enable(exports.gl.DEPTH_TEST);
            exports.gl.depthFunc(exports.gl.LEQUAL);
            exports.gl.clear(exports.gl.COLOR_BUFFER_BIT | exports.gl.DEPTH_BUFFER_BIT);
            exports.gl.clearDepth(1.0);
            exports.gl.enable(exports.gl.BLEND);
            exports.gl.blendFunc(exports.gl.SRC_ALPHA, exports.gl.ONE_MINUS_SRC_ALPHA);
            _this._view.render();
            requestAnimationFrame(loop);
        };
        loop();
    };
    LAppDelegate.prototype.createShader = function () {
        var vertexShaderId = exports.gl.createShader(exports.gl.VERTEX_SHADER);
        if (vertexShaderId == null) {
            lapppal_1.LAppPal.printMessage('failed to create vertexShader');
            return null;
        }
        var vertexShader = 'precision mediump float;' +
            'attribute vec3 position;' +
            'attribute vec2 uv;' +
            'varying vec2 vuv;' +
            'void main(void)' +
            '{' +
            '   gl_Position = vec4(position, 1.0);' +
            '   vuv = uv;' +
            '}';
        exports.gl.shaderSource(vertexShaderId, vertexShader);
        exports.gl.compileShader(vertexShaderId);
        var fragmentShaderId = exports.gl.createShader(exports.gl.FRAGMENT_SHADER);
        if (fragmentShaderId == null) {
            lapppal_1.LAppPal.printMessage('failed to create fragmentShader');
            return null;
        }
        var fragmentShader = 'precision mediump float;' +
            'varying vec2 vuv;' +
            'uniform sampler2D texture;' +
            'void main(void)' +
            '{' +
            '   gl_FragColor = texture2D(texture, vuv);' +
            '}';
        exports.gl.shaderSource(fragmentShaderId, fragmentShader);
        exports.gl.compileShader(fragmentShaderId);
        var programId = exports.gl.createProgram();
        exports.gl.attachShader(programId, vertexShaderId);
        exports.gl.attachShader(programId, fragmentShaderId);
        exports.gl.deleteShader(vertexShaderId);
        exports.gl.deleteShader(fragmentShaderId);
        exports.gl.linkProgram(programId);
        exports.gl.useProgram(programId);
        return programId;
    };
    LAppDelegate.prototype.getView = function () {
        return this._view;
    };
    LAppDelegate.prototype.getTextureManager = function () {
        return this._textureManager;
    };
    LAppDelegate.prototype.initializeCubism = function () {
        this._cubismOption.logFunction = lapppal_1.LAppPal.printMessage;
        this._cubismOption.loggingLevel = LAppDefine.CubismLoggingLevel;
        live2dcubismframework_1.CubismFramework.startUp(this._cubismOption);
        live2dcubismframework_1.CubismFramework.initialize();
        lapplive2dmanager_1.LAppLive2DManager.getInstance();
        lapppal_1.LAppPal.updateTime();
        this._view.initializeSprite();
    };
    LAppDelegate.prototype._resizeCanvas = function () {
        exports.canvas.width = window.innerWidth;
        exports.canvas.height = window.innerHeight;
    };
    return LAppDelegate;
}());
exports.LAppDelegate = LAppDelegate;
function onClickBegan(e) {
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    LAppDelegate.getInstance()._captured = true;
    var posX = e.pageX;
    var posY = e.pageY;
    LAppDelegate.getInstance()._view.onTouchesBegan(posX, posY);
}
function onMouseMoved(e) {
    if (!LAppDelegate.getInstance()._captured) {
        return;
    }
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = exports.canvas.getBoundingClientRect();
    var posX = e.clientX - rect.left;
    var posY = e.clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
}
function onClickEnded(e) {
    LAppDelegate.getInstance()._captured = false;
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = exports.canvas.getBoundingClientRect();
    var posX = e.clientX - rect.left;
    var posY = e.clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}
function onTouchBegan(e) {
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    LAppDelegate.getInstance()._captured = true;
    var posX = e.changedTouches[0].pageX;
    var posY = e.changedTouches[0].pageY;
    LAppDelegate.getInstance()._view.onTouchesBegan(posX, posY);
}
function onTouchMoved(e) {
    if (!LAppDelegate.getInstance()._captured) {
        return;
    }
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = exports.canvas.getBoundingClientRect();
    var posX = e.changedTouches[0].clientX - rect.left;
    var posY = e.changedTouches[0].clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
}
function onTouchEnded(e) {
    LAppDelegate.getInstance()._captured = false;
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = exports.canvas.getBoundingClientRect();
    var posX = e.changedTouches[0].clientX - rect.left;
    var posY = e.changedTouches[0].clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}
function onTouchCancel(e) {
    LAppDelegate.getInstance()._captured = false;
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = exports.canvas.getBoundingClientRect();
    var posX = e.changedTouches[0].clientX - rect.left;
    var posY = e.changedTouches[0].clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}


/***/ }),

/***/ "./src/lapplive2dmanager.ts":
/*!**********************************!*\
  !*** ./src/lapplive2dmanager.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppLive2DManager = exports.s_instance = void 0;
var cubismmatrix44_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/math/cubismmatrix44'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var csmvector_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var MocMapper_1 = __webpack_require__(/*! ./MocMapper */ "./src/MocMapper.ts");
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var lappmodel_1 = __webpack_require__(/*! ./lappmodel */ "./src/lappmodel.ts");
var lapppal_1 = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
exports.s_instance = null;
var LAppLive2DManager = (function () {
    function LAppLive2DManager() {
        this._finishedMotion = function (self) {
            lapppal_1.LAppPal.printMessage('Motion Finished:');
            console.log(self);
        };
        this._viewMatrix = new cubismmatrix44_1.CubismMatrix44();
        this._models = new csmvector_1.csmVector();
        this._sceneIndex = 0;
        this.changeScene(this._sceneIndex);
    }
    LAppLive2DManager.getInstance = function () {
        if (exports.s_instance == null) {
            exports.s_instance = new LAppLive2DManager();
        }
        return exports.s_instance;
    };
    LAppLive2DManager.releaseInstance = function () {
        if (exports.s_instance != null) {
            exports.s_instance = void 0;
        }
        exports.s_instance = null;
    };
    LAppLive2DManager.prototype.getModel = function (no) {
        if (no < this._models.getSize()) {
            return this._models.at(no);
        }
        return null;
    };
    LAppLive2DManager.prototype.releaseAllModel = function () {
        for (var i = 0; i < this._models.getSize(); i++) {
            this._models.at(i).release();
            this._models.set(i, null);
        }
        this._models.clear();
    };
    LAppLive2DManager.prototype.onDrag = function (x, y) {
        for (var i = 0; i < this._models.getSize(); i++) {
            var model = this.getModel(i);
            if (model) {
                model.setDragging(x, y);
            }
        }
    };
    LAppLive2DManager.prototype.onDefaultTap = function (x, y) {
        if (LAppDefine.DebugLogEnable) {
            lapppal_1.LAppPal.printMessage("[APP]tap point: {x: " + x.toFixed(2) + " y: " + y.toFixed(2) + "}");
        }
        for (var i = 0; i < this._models.getSize(); i++) {
            if (this._models.at(i).hitTest(LAppDefine.HitAreaNameHead, x, y)) {
                if (LAppDefine.DebugLogEnable) {
                    lapppal_1.LAppPal.printMessage("[APP]hit area: [" + LAppDefine.HitAreaNameHead + "]");
                }
                this._models.at(i).setRandomExpression();
            }
            else if (this._models.at(i).hitTest(LAppDefine.HitAreaNameBody, x, y)) {
                if (LAppDefine.DebugLogEnable) {
                    lapppal_1.LAppPal.printMessage("[APP]hit area: [" + LAppDefine.HitAreaNameBody + "]");
                }
                this._models
                    .at(i)
                    .startRandomMotion(LAppDefine.MotionGroupTapBody, LAppDefine.PriorityNormal, this._finishedMotion);
            }
        }
    };
    LAppLive2DManager.prototype.onTap = function (x, y) {
        if (LAppDefine.DebugLogEnable) {
            lapppal_1.LAppPal.printMessage("[APP]tap point: {x: " + x.toFixed(2) + " y: " + y.toFixed(2) + "}");
        }
        for (var i = 0; i < this._models.getSize(); i++) {
            if (x > -1 && x < 1 && y > -1 && y < 1) {
                this._models
                    .at(i)
                    .startRandomMotion(LAppDefine.MotionGroupTapBody, LAppDefine.PriorityNormal, this._finishedMotion);
            }
        }
    };
    LAppLive2DManager.prototype.onUpdate = function () {
        var width = lappdelegate_1.canvas.width, height = lappdelegate_1.canvas.height;
        var projection = new cubismmatrix44_1.CubismMatrix44();
        var modelCount = this._models.getSize();
        for (var i = 0; i < modelCount; ++i) {
            var model = this.getModel(i);
            if (model.getModel()) {
                if (model.getModel().getCanvasWidth() > 1.0 && width < height) {
                    model.getModelMatrix().setWidth(2.0);
                    projection.scale(1.0, width / height);
                }
                else {
                    projection.scale(height / width, 1.0);
                }
                if (this._viewMatrix != null) {
                    projection.multiplyByMatrix(this._viewMatrix);
                }
            }
            model.update();
            model.draw(projection);
        }
    };
    LAppLive2DManager.prototype.nextScene = function () {
        var no = (this._sceneIndex + 1) % LAppDefine.resourcesConfig.getModelSize();
        this.changeScene(no);
    };
    LAppLive2DManager.prototype.randomScene = function () {
        var randomNum = Math.random() * (LAppDefine.resourcesConfig.getModelSize() + 1);
        var indexOfModel = Math.floor(randomNum) % LAppDefine.resourcesConfig.getModelSize();
        this.changeScene(indexOfModel);
    };
    LAppLive2DManager.prototype.changeScene = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var model, modelPath, modelJsonName, mapperJsonOfModel, mapper;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._sceneIndex = index;
                        if (LAppDefine.DebugLogEnable) {
                            lapppal_1.LAppPal.printMessage("[APP]model index: " + this._sceneIndex);
                        }
                        model = LAppDefine.resourcesConfig.getModelNames()[index];
                        modelPath = LAppDefine.resourcesConfig.getResourcesPath() + model + '/';
                        modelJsonName = LAppDefine.resourcesConfig.getModelNames()[index];
                        modelJsonName += '.model3.json';
                        mapperJsonOfModel = modelPath + 'mapper.json';
                        mapper = MocMapper_1.MocMapper.getInstance();
                        return [4, mapper.setMapperJson(mapperJsonOfModel)];
                    case 1:
                        _a.sent();
                        this.releaseAllModel();
                        this._models.pushBack(new lappmodel_1.LAppModel());
                        this._models.at(0).loadAssets(modelPath, modelJsonName);
                        return [2];
                }
            });
        });
    };
    LAppLive2DManager.prototype.setViewMatrix = function (m) {
        for (var i = 0; i < 16; i++) {
            this._viewMatrix.getArray()[i] = m.getArray()[i];
        }
    };
    return LAppLive2DManager;
}());
exports.LAppLive2DManager = LAppLive2DManager;


/***/ }),

/***/ "./src/lappmodel.ts":
/*!**************************!*\
  !*** ./src/lappmodel.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppModel = void 0;
__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
var cubismdefaultparameterid_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/cubismdefaultparameterid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismmodelsettingjson_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/cubismmodelsettingjson'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var MocMapper_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../Demo/src/MocMapper'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismbreath_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/effect/cubismbreath'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismeyeblink_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/effect/cubismeyeblink'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var live2dcubismframework_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismusermodel_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/model/cubismusermodel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var acubismmotion_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/motion/acubismmotion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismmotionqueuemanager_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/motion/cubismmotionqueuemanager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var csmmap_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmmap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var csmvector_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismdebug_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var lapppal_1 = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
var lappwavfilehandler_1 = __webpack_require__(/*! ./lappwavfilehandler */ "./src/lappwavfilehandler.ts");
var LoadStep;
(function (LoadStep) {
    LoadStep[LoadStep["LoadAssets"] = 0] = "LoadAssets";
    LoadStep[LoadStep["LoadModel"] = 1] = "LoadModel";
    LoadStep[LoadStep["WaitLoadModel"] = 2] = "WaitLoadModel";
    LoadStep[LoadStep["LoadExpression"] = 3] = "LoadExpression";
    LoadStep[LoadStep["WaitLoadExpression"] = 4] = "WaitLoadExpression";
    LoadStep[LoadStep["LoadPhysics"] = 5] = "LoadPhysics";
    LoadStep[LoadStep["WaitLoadPhysics"] = 6] = "WaitLoadPhysics";
    LoadStep[LoadStep["LoadPose"] = 7] = "LoadPose";
    LoadStep[LoadStep["WaitLoadPose"] = 8] = "WaitLoadPose";
    LoadStep[LoadStep["SetupEyeBlink"] = 9] = "SetupEyeBlink";
    LoadStep[LoadStep["SetupBreath"] = 10] = "SetupBreath";
    LoadStep[LoadStep["LoadUserData"] = 11] = "LoadUserData";
    LoadStep[LoadStep["WaitLoadUserData"] = 12] = "WaitLoadUserData";
    LoadStep[LoadStep["SetupEyeBlinkIds"] = 13] = "SetupEyeBlinkIds";
    LoadStep[LoadStep["SetupLipSyncIds"] = 14] = "SetupLipSyncIds";
    LoadStep[LoadStep["SetupLayout"] = 15] = "SetupLayout";
    LoadStep[LoadStep["LoadMotion"] = 16] = "LoadMotion";
    LoadStep[LoadStep["WaitLoadMotion"] = 17] = "WaitLoadMotion";
    LoadStep[LoadStep["CompleteInitialize"] = 18] = "CompleteInitialize";
    LoadStep[LoadStep["CompleteSetupModel"] = 19] = "CompleteSetupModel";
    LoadStep[LoadStep["LoadTexture"] = 20] = "LoadTexture";
    LoadStep[LoadStep["WaitLoadTexture"] = 21] = "WaitLoadTexture";
    LoadStep[LoadStep["CompleteSetup"] = 22] = "CompleteSetup";
})(LoadStep || (LoadStep = {}));
var LAppModel = (function (_super) {
    __extends(LAppModel, _super);
    function LAppModel() {
        var _this = _super.call(this) || this;
        _this._modelSetting = null;
        _this._modelHomeDir = null;
        _this._userTimeSeconds = 0.0;
        _this._eyeBlinkIds = new csmvector_1.csmVector();
        _this._lipSyncIds = new csmvector_1.csmVector();
        _this._motions = new csmmap_1.csmMap();
        _this._expressions = new csmmap_1.csmMap();
        _this._hitArea = new csmvector_1.csmVector();
        _this._userArea = new csmvector_1.csmVector();
        var mapper = MocMapper_1.MocMapper.mapper;
        if (mapper != null) {
            _this._idParamAngleX = live2dcubismframework_1.CubismFramework.getIdManager().getId(mapper.getParemeter("ParamAngleX"));
            _this._idParamAngleY = live2dcubismframework_1.CubismFramework.getIdManager().getId(mapper.getParemeter("ParamAngleY"));
            _this._idParamAngleZ = live2dcubismframework_1.CubismFramework.getIdManager().getId(mapper.getParemeter("ParamAngleZ"));
            _this._idParamEyeBallX = live2dcubismframework_1.CubismFramework.getIdManager().getId(mapper.getParemeter("ParamEyeBallX"));
            _this._idParamEyeBallY = live2dcubismframework_1.CubismFramework.getIdManager().getId(mapper.getParemeter("ParamEyeBallY"));
            _this._idParamBodyAngleX = live2dcubismframework_1.CubismFramework.getIdManager().getId(mapper.getParemeter("ParamBodyAngleX"));
        }
        else {
            _this._idParamAngleX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleX);
            _this._idParamAngleY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleY);
            _this._idParamAngleZ = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleZ);
            _this._idParamEyeBallX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeBallX);
            _this._idParamEyeBallY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeBallY);
            _this._idParamBodyAngleX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBodyAngleX);
        }
        _this._state = LoadStep.LoadAssets;
        _this._expressionCount = 0;
        _this._textureCount = 0;
        _this._motionCount = 0;
        _this._allMotionCount = 0;
        _this._wavFileHandler = new lappwavfilehandler_1.LAppWavFileHandler();
        return _this;
    }
    LAppModel.prototype.loadAssets = function (dir, fileName) {
        var _this = this;
        this._modelHomeDir = dir;
        fetch("" + this._modelHomeDir + fileName)
            .then(function (response) { return response.arrayBuffer(); })
            .then(function (arrayBuffer) {
            var setting = new cubismmodelsettingjson_1.CubismModelSettingJson(arrayBuffer, arrayBuffer.byteLength);
            _this._state = LoadStep.LoadModel;
            _this.setupModel(setting);
        });
    };
    LAppModel.prototype.setupModel = function (setting) {
        var _this = this;
        this._updating = true;
        this._initialized = false;
        this._modelSetting = setting;
        if (this._modelSetting.getModelFileName() != '') {
            var modelFileName = this._modelSetting.getModelFileName();
            fetch("" + this._modelHomeDir + modelFileName)
                .then(function (response) { return response.arrayBuffer(); })
                .then(function (arrayBuffer) {
                _this.loadModel(arrayBuffer);
                _this._state = LoadStep.LoadExpression;
                loadCubismExpression();
            });
            this._state = LoadStep.WaitLoadModel;
        }
        else {
            lapppal_1.LAppPal.printMessage('Model data does not exist.');
        }
        var loadCubismExpression = function () {
            if (_this._modelSetting.getExpressionCount() > 0) {
                var count_1 = _this._modelSetting.getExpressionCount();
                var _loop_1 = function (i) {
                    var expressionName = _this._modelSetting.getExpressionName(i);
                    var expressionFileName = _this._modelSetting.getExpressionFileName(i);
                    fetch("" + _this._modelHomeDir + expressionFileName)
                        .then(function (response) { return response.arrayBuffer(); })
                        .then(function (arrayBuffer) {
                        var motion = _this.loadExpression(arrayBuffer, arrayBuffer.byteLength, expressionName);
                        if (_this._expressions.getValue(expressionName) != null) {
                            acubismmotion_1.ACubismMotion.delete(_this._expressions.getValue(expressionName));
                            _this._expressions.setValue(expressionName, null);
                        }
                        _this._expressions.setValue(expressionName, motion);
                        _this._expressionCount++;
                        if (_this._expressionCount >= count_1) {
                            _this._state = LoadStep.LoadPhysics;
                            loadCubismPhysics();
                        }
                    });
                };
                for (var i = 0; i < count_1; i++) {
                    _loop_1(i);
                }
                _this._state = LoadStep.WaitLoadExpression;
            }
            else {
                _this._state = LoadStep.LoadPhysics;
                loadCubismPhysics();
            }
        };
        var loadCubismPhysics = function () {
            if (_this._modelSetting.getPhysicsFileName() != '') {
                var physicsFileName = _this._modelSetting.getPhysicsFileName();
                fetch("" + _this._modelHomeDir + physicsFileName)
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (arrayBuffer) {
                    _this.loadPhysics(arrayBuffer, arrayBuffer.byteLength);
                    _this._state = LoadStep.LoadPose;
                    loadCubismPose();
                });
                _this._state = LoadStep.WaitLoadPhysics;
            }
            else {
                _this._state = LoadStep.LoadPose;
                loadCubismPose();
            }
        };
        var loadCubismPose = function () {
            if (_this._modelSetting.getPoseFileName() != '') {
                var poseFileName = _this._modelSetting.getPoseFileName();
                fetch("" + _this._modelHomeDir + poseFileName)
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (arrayBuffer) {
                    _this.loadPose(arrayBuffer, arrayBuffer.byteLength);
                    _this._state = LoadStep.SetupEyeBlink;
                    setupEyeBlink();
                });
                _this._state = LoadStep.WaitLoadPose;
            }
            else {
                _this._state = LoadStep.SetupEyeBlink;
                setupEyeBlink();
            }
        };
        var setupEyeBlink = function () {
            if (_this._modelSetting.getEyeBlinkParameterCount() > 0) {
                _this._eyeBlink = cubismeyeblink_1.CubismEyeBlink.create(_this._modelSetting);
                _this._state = LoadStep.SetupBreath;
            }
            setupBreath();
        };
        var setupBreath = function () {
            _this._breath = cubismbreath_1.CubismBreath.create();
            var breathParameters = new csmvector_1.csmVector();
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleX, 0.0, 15.0, 6.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleY, 0.0, 8.0, 3.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleZ, 0.0, 10.0, 5.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamBodyAngleX, 0.0, 4.0, 15.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBreath), 0.0, 0.5, 3.2345, 0.5));
            _this._breath.setParameters(breathParameters);
            _this._state = LoadStep.LoadUserData;
            loadUserData();
        };
        var loadUserData = function () {
            if (_this._modelSetting.getUserDataFile() != '') {
                var userDataFile = _this._modelSetting.getUserDataFile();
                fetch("" + _this._modelHomeDir + userDataFile)
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (arrayBuffer) {
                    _this.loadUserData(arrayBuffer, arrayBuffer.byteLength);
                    _this._state = LoadStep.SetupEyeBlinkIds;
                    setupEyeBlinkIds();
                });
                _this._state = LoadStep.WaitLoadUserData;
            }
            else {
                _this._state = LoadStep.SetupEyeBlinkIds;
                setupEyeBlinkIds();
            }
        };
        var setupEyeBlinkIds = function () {
            var eyeBlinkIdCount = _this._modelSetting.getEyeBlinkParameterCount();
            for (var i = 0; i < eyeBlinkIdCount; ++i) {
                _this._eyeBlinkIds.pushBack(_this._modelSetting.getEyeBlinkParameterId(i));
            }
            _this._state = LoadStep.SetupLipSyncIds;
            setupLipSyncIds();
        };
        var setupLipSyncIds = function () {
            var lipSyncIdCount = _this._modelSetting.getLipSyncParameterCount();
            for (var i = 0; i < lipSyncIdCount; ++i) {
                _this._lipSyncIds.pushBack(_this._modelSetting.getLipSyncParameterId(i));
            }
            _this._state = LoadStep.SetupLayout;
            setupLayout();
        };
        var setupLayout = function () {
            var layout = new csmmap_1.csmMap();
            _this._modelSetting.getLayoutMap(layout);
            _this._modelMatrix.setupFromLayout(layout);
            _this._state = LoadStep.LoadMotion;
            loadCubismMotion();
        };
        var loadCubismMotion = function () {
            _this._state = LoadStep.WaitLoadMotion;
            _this._model.saveParameters();
            _this._allMotionCount = 0;
            _this._motionCount = 0;
            var group = [];
            var motionGroupCount = _this._modelSetting.getMotionGroupCount();
            for (var i = 0; i < motionGroupCount; i++) {
                group[i] = _this._modelSetting.getMotionGroupName(i);
                _this._allMotionCount += _this._modelSetting.getMotionCount(group[i]);
            }
            for (var i = 0; i < motionGroupCount; i++) {
                _this.preLoadMotionGroup(group[i]);
            }
            if (motionGroupCount == 0) {
                _this._state = LoadStep.LoadTexture;
                _this._motionManager.stopAllMotions();
                _this._updating = false;
                _this._initialized = true;
                _this.createRenderer();
                _this.setupTextures();
                _this.getRenderer().startUp(lappdelegate_1.gl);
            }
        };
    };
    LAppModel.prototype.setupTextures = function () {
        var _this = this;
        var usePremultiply = true;
        if (this._state == LoadStep.LoadTexture) {
            var textureCount_1 = this._modelSetting.getTextureCount();
            var _loop_2 = function (modelTextureNumber) {
                if (this_1._modelSetting.getTextureFileName(modelTextureNumber) == '') {
                    console.log('getTextureFileName null');
                    return "continue";
                }
                var texturePath = this_1._modelSetting.getTextureFileName(modelTextureNumber);
                texturePath = this_1._modelHomeDir + texturePath;
                var onLoad = function (textureInfo) {
                    _this.getRenderer().bindTexture(modelTextureNumber, textureInfo.id);
                    _this._textureCount++;
                    if (_this._textureCount >= textureCount_1) {
                        _this._state = LoadStep.CompleteSetup;
                    }
                };
                lappdelegate_1.LAppDelegate.getInstance()
                    .getTextureManager()
                    .createTextureFromPngFile(texturePath, usePremultiply, onLoad);
                this_1.getRenderer().setIsPremultipliedAlpha(usePremultiply);
            };
            var this_1 = this;
            for (var modelTextureNumber = 0; modelTextureNumber < textureCount_1; modelTextureNumber++) {
                _loop_2(modelTextureNumber);
            }
            this._state = LoadStep.WaitLoadTexture;
        }
    };
    LAppModel.prototype.reloadRenderer = function () {
        this.deleteRenderer();
        this.createRenderer();
        this.setupTextures();
    };
    LAppModel.prototype.update = function () {
        if (this._state != LoadStep.CompleteSetup)
            return;
        var deltaTimeSeconds = lapppal_1.LAppPal.getDeltaTime();
        this._userTimeSeconds += deltaTimeSeconds;
        this._dragManager.update(deltaTimeSeconds);
        this._dragX = this._dragManager.getX();
        this._dragY = this._dragManager.getY();
        var motionUpdated = false;
        this._model.loadParameters();
        if (this._motionManager.isFinished()) {
            this.startRandomMotion(LAppDefine.MotionGroupIdle, LAppDefine.PriorityIdle);
        }
        else {
            motionUpdated = this._motionManager.updateMotion(this._model, deltaTimeSeconds);
        }
        this._model.saveParameters();
        if (!motionUpdated) {
            if (this._eyeBlink != null) {
                this._eyeBlink.updateParameters(this._model, deltaTimeSeconds);
            }
        }
        if (this._expressionManager != null) {
            this._expressionManager.updateMotion(this._model, deltaTimeSeconds);
        }
        this._model.addParameterValueById(this._idParamAngleX, this._dragX * 30);
        this._model.addParameterValueById(this._idParamAngleY, this._dragY * 30);
        this._model.addParameterValueById(this._idParamAngleZ, this._dragX * this._dragY * -30);
        this._model.addParameterValueById(this._idParamBodyAngleX, this._dragX * 10);
        this._model.addParameterValueById(this._idParamEyeBallX, this._dragX);
        this._model.addParameterValueById(this._idParamEyeBallY, this._dragY);
        if (this._breath != null) {
            this._breath.updateParameters(this._model, deltaTimeSeconds);
        }
        if (this._physics != null) {
            this._physics.evaluate(this._model, deltaTimeSeconds);
        }
        if (this._lipsync) {
            var value = 0.0;
            this._wavFileHandler.update(deltaTimeSeconds);
            value = this._wavFileHandler.getRms();
            for (var i = 0; i < this._lipSyncIds.getSize(); ++i) {
                this._model.addParameterValueById(this._lipSyncIds.at(i), value, 0.8);
            }
        }
        if (this._pose != null) {
            this._pose.updateParameters(this._model, deltaTimeSeconds);
        }
        this._model.update();
    };
    LAppModel.prototype.startMotion = function (group, no, priority, onFinishedMotionHandler) {
        var _this = this;
        if (priority == LAppDefine.PriorityForce) {
            this._motionManager.setReservePriority(priority);
        }
        else if (!this._motionManager.reserveMotion(priority)) {
            if (this._debugMode) {
                lapppal_1.LAppPal.printMessage("[APP]can't start motion.");
            }
            return cubismmotionqueuemanager_1.InvalidMotionQueueEntryHandleValue;
        }
        var motionFileName = this._modelSetting.getMotionFileName(group, no);
        var name = group + "_" + no;
        var motion = this._motions.getValue(name);
        var autoDelete = false;
        if (motion == null) {
            fetch("" + this._modelHomeDir + motionFileName)
                .then(function (response) { return response.arrayBuffer(); })
                .then(function (arrayBuffer) {
                motion = _this.loadMotion(arrayBuffer, arrayBuffer.byteLength, null, onFinishedMotionHandler);
                var fadeTime = _this._modelSetting.getMotionFadeInTimeValue(group, no);
                if (fadeTime >= 0.0) {
                    motion.setFadeInTime(fadeTime);
                }
                fadeTime = _this._modelSetting.getMotionFadeOutTimeValue(group, no);
                if (fadeTime >= 0.0) {
                    motion.setFadeOutTime(fadeTime);
                }
                motion.setEffectIds(_this._eyeBlinkIds, _this._lipSyncIds);
                autoDelete = true;
            });
        }
        else {
            motion.setFinishedMotionHandler(onFinishedMotionHandler);
        }
        var voice = this._modelSetting.getMotionSoundFileName(group, no);
        if (voice.localeCompare('') != 0) {
            var path = voice;
            path = this._modelHomeDir + path;
            console.log("lappmodel.ts 加载了音频文件:" + path);
            this._wavFileHandler.start(path);
        }
        if (this._debugMode) {
            lapppal_1.LAppPal.printMessage("[APP]start motion: [" + group + "_" + no);
        }
        return this._motionManager.startMotionPriority(motion, autoDelete, priority);
    };
    LAppModel.prototype.startRandomMotion = function (group, priority, onFinishedMotionHandler) {
        if (this._modelSetting.getMotionCount(group) == 0) {
            return cubismmotionqueuemanager_1.InvalidMotionQueueEntryHandleValue;
        }
        var no = Math.floor(Math.random() * this._modelSetting.getMotionCount(group));
        return this.startMotion(group, no, priority, onFinishedMotionHandler);
    };
    LAppModel.prototype.setExpression = function (expressionId) {
        var motion = this._expressions.getValue(expressionId);
        if (this._debugMode) {
            lapppal_1.LAppPal.printMessage("[APP]expression: [" + expressionId + "]");
        }
        if (motion != null) {
            this._expressionManager.startMotionPriority(motion, false, LAppDefine.PriorityForce);
        }
        else {
            if (this._debugMode) {
                lapppal_1.LAppPal.printMessage("[APP]expression[" + expressionId + "] is null");
            }
        }
    };
    LAppModel.prototype.setRandomExpression = function () {
        if (this._expressions.getSize() == 0) {
            return;
        }
        var no = Math.floor(Math.random() * this._expressions.getSize());
        for (var i = 0; i < this._expressions.getSize(); i++) {
            if (i == no) {
                var name_1 = this._expressions._keyValues[i].first;
                this.setExpression(name_1);
                return;
            }
        }
    };
    LAppModel.prototype.motionEventFired = function (eventValue) {
        (0, cubismdebug_1.CubismLogInfo)('{0} is fired on LAppModel!!', eventValue.s);
    };
    LAppModel.prototype.hitTest = function (hitArenaName, x, y) {
        if (this._opacity < 1) {
            return false;
        }
        var count = this._modelSetting.getHitAreasCount();
        for (var i = 0; i < count; i++) {
            if (this._modelSetting.getHitAreaName(i) == hitArenaName) {
                var drawId = this._modelSetting.getHitAreaId(i);
                return this.isHit(drawId, x, y);
            }
        }
        return false;
    };
    LAppModel.prototype.preLoadMotionGroup = function (group) {
        var _this = this;
        var _loop_3 = function (i) {
            var motionFileName = this_2._modelSetting.getMotionFileName(group, i);
            var name_2 = group + "_" + i;
            if (this_2._debugMode) {
                lapppal_1.LAppPal.printMessage("[APP]load motion: " + motionFileName + " => [" + name_2 + "]");
            }
            fetch("" + this_2._modelHomeDir + motionFileName)
                .then(function (response) { return response.arrayBuffer(); })
                .then(function (arrayBuffer) {
                var tmpMotion = _this.loadMotion(arrayBuffer, arrayBuffer.byteLength, name_2);
                var fadeTime = _this._modelSetting.getMotionFadeInTimeValue(group, i);
                if (fadeTime >= 0.0) {
                    tmpMotion.setFadeInTime(fadeTime);
                }
                fadeTime = _this._modelSetting.getMotionFadeOutTimeValue(group, i);
                if (fadeTime >= 0.0) {
                    tmpMotion.setFadeOutTime(fadeTime);
                }
                tmpMotion.setEffectIds(_this._eyeBlinkIds, _this._lipSyncIds);
                if (_this._motions.getValue(name_2) != null) {
                    acubismmotion_1.ACubismMotion.delete(_this._motions.getValue(name_2));
                }
                _this._motions.setValue(name_2, tmpMotion);
                _this._motionCount++;
                if (_this._motionCount >= _this._allMotionCount) {
                    _this._state = LoadStep.LoadTexture;
                    _this._motionManager.stopAllMotions();
                    _this._updating = false;
                    _this._initialized = true;
                    _this.createRenderer();
                    _this.setupTextures();
                    _this.getRenderer().startUp(lappdelegate_1.gl);
                }
            });
        };
        var this_2 = this;
        for (var i = 0; i < this._modelSetting.getMotionCount(group); i++) {
            _loop_3(i);
        }
    };
    LAppModel.prototype.releaseMotions = function () {
        this._motions.clear();
    };
    LAppModel.prototype.releaseExpressions = function () {
        this._expressions.clear();
    };
    LAppModel.prototype.doDraw = function () {
        if (this._model == null)
            return;
        var viewport = [0, 0, lappdelegate_1.canvas.width, lappdelegate_1.canvas.height];
        this.getRenderer().setRenderState(lappdelegate_1.frameBuffer, viewport);
        this.getRenderer().drawModel();
    };
    LAppModel.prototype.draw = function (matrix) {
        if (this._model == null) {
            return;
        }
        if (this._state == LoadStep.CompleteSetup) {
            matrix.multiplyByMatrix(this._modelMatrix);
            this.getRenderer().setMvpMatrix(matrix);
            this.doDraw();
        }
    };
    return LAppModel;
}(cubismusermodel_1.CubismUserModel));
exports.LAppModel = LAppModel;


/***/ }),

/***/ "./src/lapppal.ts":
/*!************************!*\
  !*** ./src/lapppal.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppPal = void 0;
var LAppPal = (function () {
    function LAppPal() {
    }
    LAppPal.loadFileAsBytes = function (filePath, callback) {
        fetch(filePath)
            .then(function (response) { return response.arrayBuffer(); })
            .then(function (arrayBuffer) { return callback(arrayBuffer, arrayBuffer.byteLength); });
    };
    LAppPal.getDeltaTime = function () {
        return this.s_deltaTime;
    };
    LAppPal.updateTime = function () {
        this.s_currentFrame = Date.now();
        this.s_deltaTime = (this.s_currentFrame - this.s_lastFrame) / 1000;
        this.s_lastFrame = this.s_currentFrame;
    };
    LAppPal.printMessage = function (message) {
        console.log(message);
    };
    LAppPal.lastUpdate = Date.now();
    LAppPal.s_currentFrame = 0.0;
    LAppPal.s_lastFrame = 0.0;
    LAppPal.s_deltaTime = 0.0;
    return LAppPal;
}());
exports.LAppPal = LAppPal;


/***/ }),

/***/ "./src/lapptexturemanager.ts":
/*!***********************************!*\
  !*** ./src/lapptexturemanager.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextureInfo = exports.LAppTextureManager = void 0;
var csmvector_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var LAppTextureManager = (function () {
    function LAppTextureManager() {
        this._textures = new csmvector_1.csmVector();
    }
    LAppTextureManager.prototype.release = function () {
        for (var ite = this._textures.begin(); ite.notEqual(this._textures.end()); ite.preIncrement()) {
            lappdelegate_1.gl.deleteTexture(ite.ptr().id);
        }
        this._textures = null;
    };
    LAppTextureManager.prototype.createTextureFromPngFile = function (fileName, usePremultiply, callback) {
        var _this = this;
        var _loop_1 = function (ite) {
            if (ite.ptr().fileName == fileName &&
                ite.ptr().usePremultply == usePremultiply) {
                ite.ptr().img = new Image();
                ite.ptr().img.onload = function () { return callback(ite.ptr()); };
                ite.ptr().img.src = fileName;
                return { value: void 0 };
            }
        };
        for (var ite = this._textures.begin(); ite.notEqual(this._textures.end()); ite.preIncrement()) {
            var state_1 = _loop_1(ite);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        var img = new Image();
        img.onload = function () {
            var tex = lappdelegate_1.gl.createTexture();
            lappdelegate_1.gl.bindTexture(lappdelegate_1.gl.TEXTURE_2D, tex);
            lappdelegate_1.gl.texParameteri(lappdelegate_1.gl.TEXTURE_2D, lappdelegate_1.gl.TEXTURE_MIN_FILTER, lappdelegate_1.gl.LINEAR_MIPMAP_LINEAR);
            lappdelegate_1.gl.texParameteri(lappdelegate_1.gl.TEXTURE_2D, lappdelegate_1.gl.TEXTURE_MAG_FILTER, lappdelegate_1.gl.LINEAR);
            if (usePremultiply) {
                lappdelegate_1.gl.pixelStorei(lappdelegate_1.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
            }
            lappdelegate_1.gl.texImage2D(lappdelegate_1.gl.TEXTURE_2D, 0, lappdelegate_1.gl.RGBA, lappdelegate_1.gl.RGBA, lappdelegate_1.gl.UNSIGNED_BYTE, img);
            lappdelegate_1.gl.generateMipmap(lappdelegate_1.gl.TEXTURE_2D);
            lappdelegate_1.gl.bindTexture(lappdelegate_1.gl.TEXTURE_2D, null);
            var textureInfo = new TextureInfo();
            if (textureInfo != null) {
                textureInfo.fileName = fileName;
                textureInfo.width = img.width;
                textureInfo.height = img.height;
                textureInfo.id = tex;
                textureInfo.img = img;
                textureInfo.usePremultply = usePremultiply;
                _this._textures.pushBack(textureInfo);
            }
            callback(textureInfo);
        };
        img.src = fileName;
    };
    LAppTextureManager.prototype.releaseTextures = function () {
        for (var i = 0; i < this._textures.getSize(); i++) {
            this._textures.set(i, null);
        }
        this._textures.clear();
    };
    LAppTextureManager.prototype.releaseTextureByTexture = function (texture) {
        for (var i = 0; i < this._textures.getSize(); i++) {
            if (this._textures.at(i).id != texture) {
                continue;
            }
            this._textures.set(i, null);
            this._textures.remove(i);
            break;
        }
    };
    LAppTextureManager.prototype.releaseTextureByFilePath = function (fileName) {
        for (var i = 0; i < this._textures.getSize(); i++) {
            if (this._textures.at(i).fileName == fileName) {
                this._textures.set(i, null);
                this._textures.remove(i);
                break;
            }
        }
    };
    return LAppTextureManager;
}());
exports.LAppTextureManager = LAppTextureManager;
var TextureInfo = (function () {
    function TextureInfo() {
        this.id = null;
        this.width = 0;
        this.height = 0;
    }
    return TextureInfo;
}());
exports.TextureInfo = TextureInfo;


/***/ }),

/***/ "./src/lappview.ts":
/*!*************************!*\
  !*** ./src/lappview.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppView = void 0;
var cubismmatrix44_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/math/cubismmatrix44'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismviewmatrix_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/math/cubismviewmatrix'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var lapplive2dmanager_1 = __webpack_require__(/*! ./lapplive2dmanager */ "./src/lapplive2dmanager.ts");
var lapppal_1 = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
var touchmanager_1 = __webpack_require__(/*! ./touchmanager */ "./src/touchmanager.ts");
var LAppView = (function () {
    function LAppView() {
        this._programId = null;
        this._back = null;
        this._gear = null;
        this._touchManager = new touchmanager_1.TouchManager();
        this._deviceToScreen = new cubismmatrix44_1.CubismMatrix44();
        this._viewMatrix = new cubismviewmatrix_1.CubismViewMatrix();
    }
    LAppView.prototype.initialize = function () {
        var width = lappdelegate_1.canvas.width, height = lappdelegate_1.canvas.height;
        var ratio = width / height;
        var left = -ratio;
        var right = ratio;
        var bottom = LAppDefine.ViewLogicalLeft;
        var top = LAppDefine.ViewLogicalRight;
        this._viewMatrix.setScreenRect(left, right, bottom, top);
        this._viewMatrix.scale(LAppDefine.ViewScale, LAppDefine.ViewScale);
        this._deviceToScreen.loadIdentity();
        if (width > height) {
            var screenW = Math.abs(right - left);
            this._deviceToScreen.scaleRelative(screenW / width, -screenW / width);
        }
        else {
            var screenH = Math.abs(top - bottom);
            this._deviceToScreen.scaleRelative(screenH / height, -screenH / height);
        }
        this._deviceToScreen.translateRelative(-width * 0.5, -height * 0.5);
        this._viewMatrix.setMaxScale(LAppDefine.ViewMaxScale);
        this._viewMatrix.setMinScale(LAppDefine.ViewMinScale);
        this._viewMatrix.setMaxScreenRect(LAppDefine.ViewLogicalMaxLeft, LAppDefine.ViewLogicalMaxRight, LAppDefine.ViewLogicalMaxBottom, LAppDefine.ViewLogicalMaxTop);
    };
    LAppView.prototype.release = function () {
        this._viewMatrix = null;
        this._touchManager = null;
        this._deviceToScreen = null;
        this._gear.release();
        this._gear = null;
        this._back.release();
        this._back = null;
        lappdelegate_1.gl.deleteProgram(this._programId);
        this._programId = null;
    };
    LAppView.prototype.render = function () {
        lappdelegate_1.gl.useProgram(this._programId);
        lappdelegate_1.gl.flush();
        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
        live2DManager.setViewMatrix(this._viewMatrix);
        live2DManager.onUpdate();
    };
    LAppView.prototype.initializeSprite = function () {
        var width = lappdelegate_1.canvas.width;
        var height = lappdelegate_1.canvas.height;
        var textureManager = lappdelegate_1.LAppDelegate.getInstance().getTextureManager();
        var resourcesPath = LAppDefine.resourcesConfig.getResourcesPath();
        if (this._programId == null) {
            this._programId = lappdelegate_1.LAppDelegate.getInstance().createShader();
        }
    };
    LAppView.prototype.onTouchesBegan = function (pointX, pointY) {
        this._touchManager.touchesBegan(pointX, pointY);
    };
    LAppView.prototype.onTouchesMoved = function (pointX, pointY) {
        var viewX = this.transformViewX(this._touchManager.getX());
        var viewY = this.transformViewY(this._touchManager.getY());
        this._touchManager.touchesMoved(pointX, pointY);
        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
        live2DManager.onDrag(viewX, viewY);
    };
    LAppView.prototype.onTouchesEnded = function (pointX, pointY) {
        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
        {
            var x = this._deviceToScreen.transformX(this._touchManager.getX());
            var y = this._deviceToScreen.transformY(this._touchManager.getY());
            if (LAppDefine.DebugTouchLogEnable) {
                lapppal_1.LAppPal.printMessage("[APP]touchesEnded x: " + x + " y: " + y);
            }
            live2DManager.onTap(x, y);
        }
    };
    LAppView.prototype.transformViewX = function (deviceX) {
        var screenX = this._deviceToScreen.transformX(deviceX);
        return this._viewMatrix.invertTransformX(screenX);
    };
    LAppView.prototype.transformViewY = function (deviceY) {
        var screenY = this._deviceToScreen.transformY(deviceY);
        return this._viewMatrix.invertTransformY(screenY);
    };
    LAppView.prototype.transformScreenX = function (deviceX) {
        return this._deviceToScreen.transformX(deviceX);
    };
    LAppView.prototype.transformScreenY = function (deviceY) {
        return this._deviceToScreen.transformY(deviceY);
    };
    return LAppView;
}());
exports.LAppView = LAppView;


/***/ }),

/***/ "./src/lappwavfilehandler.ts":
/*!***********************************!*\
  !*** ./src/lappwavfilehandler.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ByteReader = exports.WavFileInfo = exports.LAppWavFileHandler = exports.s_instance = void 0;
exports.s_instance = null;
var LAppWavFileHandler = (function () {
    function LAppWavFileHandler() {
        var _this = this;
        this._loadFiletoBytes = function (arrayBuffer, length) {
            _this._byteReader._fileByte = arrayBuffer;
            _this._byteReader._fileDataView = new DataView(_this._byteReader._fileByte);
            _this._byteReader._fileSize = length;
        };
        this._pcmData = null;
        this._userTimeSeconds = 0.0;
        this._lastRms = 0.0;
        this._sampleOffset = 0.0;
        this._wavFileInfo = new WavFileInfo();
        this._byteReader = new ByteReader();
    }
    LAppWavFileHandler.getInstance = function () {
        if (exports.s_instance == null) {
            exports.s_instance = new LAppWavFileHandler();
        }
        return exports.s_instance;
    };
    LAppWavFileHandler.releaseInstance = function () {
        if (exports.s_instance != null) {
            exports.s_instance = void 0;
        }
        exports.s_instance = null;
    };
    LAppWavFileHandler.prototype.update = function (deltaTimeSeconds) {
        var goalOffset;
        var rms;
        if (this._pcmData == null ||
            this._sampleOffset >= this._wavFileInfo._samplesPerChannel) {
            this._lastRms = 0.0;
            return false;
        }
        this._userTimeSeconds += deltaTimeSeconds;
        goalOffset = Math.floor(this._userTimeSeconds * this._wavFileInfo._samplingRate);
        if (goalOffset > this._wavFileInfo._samplesPerChannel) {
            goalOffset = this._wavFileInfo._samplesPerChannel;
        }
        rms = 0.0;
        for (var channelCount = 0; channelCount < this._wavFileInfo._numberOfChannels; channelCount++) {
            for (var sampleCount = this._sampleOffset; sampleCount < goalOffset; sampleCount++) {
                var pcm = this._pcmData[channelCount][sampleCount];
                rms += pcm * pcm;
            }
        }
        rms = Math.sqrt(rms /
            (this._wavFileInfo._numberOfChannels *
                (goalOffset - this._sampleOffset)));
        this._lastRms = rms;
        this._sampleOffset = goalOffset;
        return true;
    };
    LAppWavFileHandler.prototype.start = function (filePath) {
        this._sampleOffset = 0;
        this._userTimeSeconds = 0.0;
        this._lastRms = 0.0;
        if (!this.loadWavFile(filePath)) {
            return;
        }
    };
    LAppWavFileHandler.prototype.getRms = function () {
        return this._lastRms;
    };
    LAppWavFileHandler.prototype.loadWavFile = function (filePath) {
        var _this = this;
        var ret = false;
        if (this._pcmData != null) {
            this.releasePcmData();
        }
        var asyncFileLoad = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, fetch(filePath).then(function (responce) {
                        return responce.arrayBuffer();
                    })];
            });
        }); };
        var asyncWavFileManager = (function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, fmtChunkSize, dataChunkSize, channelCount, sampleCount, channelCount, audioContext_1, audioSource_1, gainNode_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this._byteReader;
                        return [4, asyncFileLoad()];
                    case 1:
                        _a._fileByte = _b.sent();
                        this._byteReader._fileDataView = new DataView(this._byteReader._fileByte);
                        this._byteReader._fileSize = this._byteReader._fileByte.byteLength;
                        this._byteReader._readOffset = 0;
                        if (this._byteReader._fileByte == null ||
                            this._byteReader._fileSize < 4) {
                            return [2, false];
                        }
                        this._wavFileInfo._fileName = filePath;
                        try {
                            if (!this._byteReader.getCheckSignature('RIFF')) {
                                ret = false;
                                throw new Error('Cannot find Signeture "RIFF".');
                            }
                            this._byteReader.get32LittleEndian();
                            if (!this._byteReader.getCheckSignature('WAVE')) {
                                ret = false;
                                throw new Error('Cannot find Signeture "WAVE".');
                            }
                            if (!this._byteReader.getCheckSignature('fmt ')) {
                                ret = false;
                                throw new Error('Cannot find Signeture "fmt".');
                            }
                            fmtChunkSize = this._byteReader.get32LittleEndian();
                            if (this._byteReader.get16LittleEndian() != 1) {
                                ret = false;
                                throw new Error('File is not linear PCM.');
                            }
                            this._wavFileInfo._numberOfChannels = this._byteReader.get16LittleEndian();
                            this._wavFileInfo._samplingRate = this._byteReader.get32LittleEndian();
                            this._byteReader.get32LittleEndian();
                            this._byteReader.get16LittleEndian();
                            this._wavFileInfo._bitsPerSample = this._byteReader.get16LittleEndian();
                            if (fmtChunkSize > 16) {
                                this._byteReader._readOffset += fmtChunkSize - 16;
                            }
                            while (!this._byteReader.getCheckSignature('data') &&
                                this._byteReader._readOffset < this._byteReader._fileSize) {
                                this._byteReader._readOffset +=
                                    this._byteReader.get32LittleEndian() + 4;
                            }
                            if (this._byteReader._readOffset >= this._byteReader._fileSize) {
                                ret = false;
                                throw new Error('Cannot find "data" Chunk.');
                            }
                            {
                                dataChunkSize = this._byteReader.get32LittleEndian();
                                this._wavFileInfo._samplesPerChannel =
                                    (dataChunkSize * 8) /
                                        (this._wavFileInfo._bitsPerSample *
                                            this._wavFileInfo._numberOfChannels);
                            }
                            this._pcmData = new Array(this._wavFileInfo._numberOfChannels);
                            for (channelCount = 0; channelCount < this._wavFileInfo._numberOfChannels; channelCount++) {
                                this._pcmData[channelCount] = new Float32Array(this._wavFileInfo._samplesPerChannel);
                            }
                            for (sampleCount = 0; sampleCount < this._wavFileInfo._samplesPerChannel; sampleCount++) {
                                for (channelCount = 0; channelCount < this._wavFileInfo._numberOfChannels; channelCount++) {
                                    this._pcmData[channelCount][sampleCount] = this.getPcmSample();
                                }
                            }
                            audioContext_1 = new window.AudioContext();
                            audioSource_1 = audioContext_1.createBufferSource();
                            gainNode_1 = audioContext_1.createGain();
                            audioContext_1.decodeAudioData(this._byteReader._fileByte, function (buffer) {
                                audioSource_1.buffer = buffer;
                                gainNode_1.gain.value = 1;
                                audioSource_1.connect(gainNode_1);
                                gainNode_1.connect(audioContext_1.destination);
                                audioSource_1.start();
                            });
                            ret = true;
                        }
                        catch (e) {
                            console.log(e);
                        }
                        return [2];
                }
            });
        }); })();
        return ret;
    };
    LAppWavFileHandler.prototype.getPcmSample = function () {
        var pcm32;
        switch (this._wavFileInfo._bitsPerSample) {
            case 8:
                pcm32 = this._byteReader.get8() - 128;
                pcm32 <<= 24;
                break;
            case 16:
                pcm32 = this._byteReader.get16LittleEndian() << 16;
                break;
            case 24:
                pcm32 = this._byteReader.get24LittleEndian() << 8;
                break;
            default:
                pcm32 = 0;
                break;
        }
        return pcm32 / 2147483647;
    };
    LAppWavFileHandler.prototype.releasePcmData = function () {
        for (var channelCount = 0; channelCount < this._wavFileInfo._numberOfChannels; channelCount++) {
            delete this._pcmData[channelCount];
        }
        delete this._pcmData;
        this._pcmData = null;
    };
    return LAppWavFileHandler;
}());
exports.LAppWavFileHandler = LAppWavFileHandler;
var WavFileInfo = (function () {
    function WavFileInfo() {
        this._fileName = '';
        this._numberOfChannels = 0;
        this._bitsPerSample = 0;
        this._samplingRate = 0;
        this._samplesPerChannel = 0;
    }
    return WavFileInfo;
}());
exports.WavFileInfo = WavFileInfo;
var ByteReader = (function () {
    function ByteReader() {
        this._fileByte = null;
        this._fileDataView = null;
        this._fileSize = 0;
        this._readOffset = 0;
    }
    ByteReader.prototype.get8 = function () {
        var ret = this._fileDataView.getUint8(this._readOffset);
        this._readOffset++;
        return ret;
    };
    ByteReader.prototype.get16LittleEndian = function () {
        var ret = (this._fileDataView.getUint8(this._readOffset + 1) << 8) |
            this._fileDataView.getUint8(this._readOffset);
        this._readOffset += 2;
        return ret;
    };
    ByteReader.prototype.get24LittleEndian = function () {
        var ret = (this._fileDataView.getUint8(this._readOffset + 2) << 16) |
            (this._fileDataView.getUint8(this._readOffset + 1) << 8) |
            this._fileDataView.getUint8(this._readOffset);
        this._readOffset += 3;
        return ret;
    };
    ByteReader.prototype.get32LittleEndian = function () {
        var ret = (this._fileDataView.getUint8(this._readOffset + 3) << 24) |
            (this._fileDataView.getUint8(this._readOffset + 2) << 16) |
            (this._fileDataView.getUint8(this._readOffset + 1) << 8) |
            this._fileDataView.getUint8(this._readOffset);
        this._readOffset += 4;
        return ret;
    };
    ByteReader.prototype.getCheckSignature = function (reference) {
        var getSignature = new Uint8Array(4);
        var referenceString = new TextEncoder().encode(reference);
        if (reference.length != 4) {
            return false;
        }
        for (var signatureOffset = 0; signatureOffset < 4; signatureOffset++) {
            getSignature[signatureOffset] = this.get8();
        }
        return (getSignature[0] == referenceString[0] &&
            getSignature[1] == referenceString[1] &&
            getSignature[2] == referenceString[2] &&
            getSignature[3] == referenceString[3]);
    };
    return ByteReader;
}());
exports.ByteReader = ByteReader;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var lappdefine_1 = __webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts");
var lapplive2dmanager_1 = __webpack_require__(/*! ./lapplive2dmanager */ "./src/lapplive2dmanager.ts");
function printVersion() {
    console.log("欢迎使用 MeiDou 前端看板娘");
}
function start() {
    printVersion();
    if (lappdelegate_1.LAppDelegate.getInstance().initialize() == false) {
        return;
    }
    lappdelegate_1.LAppDelegate.getInstance().run();
}
function stop() {
    lappdelegate_1.LAppDelegate.releaseInstance();
}
function changeScene(index) {
    var manager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
    if (index < 0) {
        manager.randomScene();
    }
    else if (index > 0) {
        manager.changeScene(index - 1);
    }
    else if (index == 0) {
        manager.nextScene();
    }
}
module.exports = { start: start, stop: stop, changeScene: changeScene, resourcesConfig: lappdefine_1.resourcesConfig };


/***/ }),

/***/ "./src/touchmanager.ts":
/*!*****************************!*\
  !*** ./src/touchmanager.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TouchManager = void 0;
var TouchManager = (function () {
    function TouchManager() {
        this._startX = 0.0;
        this._startY = 0.0;
        this._lastX = 0.0;
        this._lastY = 0.0;
        this._lastX1 = 0.0;
        this._lastY1 = 0.0;
        this._lastX2 = 0.0;
        this._lastY2 = 0.0;
        this._lastTouchDistance = 0.0;
        this._deltaX = 0.0;
        this._deltaY = 0.0;
        this._scale = 1.0;
        this._touchSingle = false;
        this._flipAvailable = false;
    }
    TouchManager.prototype.getCenterX = function () {
        return this._lastX;
    };
    TouchManager.prototype.getCenterY = function () {
        return this._lastY;
    };
    TouchManager.prototype.getDeltaX = function () {
        return this._deltaX;
    };
    TouchManager.prototype.getDeltaY = function () {
        return this._deltaY;
    };
    TouchManager.prototype.getStartX = function () {
        return this._startX;
    };
    TouchManager.prototype.getStartY = function () {
        return this._startY;
    };
    TouchManager.prototype.getScale = function () {
        return this._scale;
    };
    TouchManager.prototype.getX = function () {
        return this._lastX;
    };
    TouchManager.prototype.getY = function () {
        return this._lastY;
    };
    TouchManager.prototype.getX1 = function () {
        return this._lastX1;
    };
    TouchManager.prototype.getY1 = function () {
        return this._lastY1;
    };
    TouchManager.prototype.getX2 = function () {
        return this._lastX2;
    };
    TouchManager.prototype.getY2 = function () {
        return this._lastY2;
    };
    TouchManager.prototype.isSingleTouch = function () {
        return this._touchSingle;
    };
    TouchManager.prototype.isFlickAvailable = function () {
        return this._flipAvailable;
    };
    TouchManager.prototype.disableFlick = function () {
        this._flipAvailable = false;
    };
    TouchManager.prototype.touchesBegan = function (deviceX, deviceY) {
        this._lastX = deviceX;
        this._lastY = deviceY;
        this._startX = deviceX;
        this._startY = deviceY;
        this._lastTouchDistance = -1.0;
        this._flipAvailable = true;
        this._touchSingle = true;
    };
    TouchManager.prototype.touchesMoved = function (deviceX, deviceY) {
        this._lastX = deviceX;
        this._lastY = deviceY;
        this._lastTouchDistance = -1.0;
        this._touchSingle = true;
    };
    TouchManager.prototype.getFlickDistance = function () {
        return this.calculateDistance(this._startX, this._startY, this._lastX, this._lastY);
    };
    TouchManager.prototype.calculateDistance = function (x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    };
    TouchManager.prototype.calculateMovingAmount = function (v1, v2) {
        if (v1 > 0.0 != v2 > 0.0) {
            return 0.0;
        }
        var sign = v1 > 0.0 ? 1.0 : -1.0;
        var absoluteValue1 = Math.abs(v1);
        var absoluteValue2 = Math.abs(v2);
        return (sign * (absoluteValue1 < absoluteValue2 ? absoluteValue1 : absoluteValue2));
    };
    return TouchManager;
}());
exports.TouchManager = TouchManager;


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Headers": function() { return /* binding */ Headers; },
/* harmony export */   "Request": function() { return /* binding */ Request; },
/* harmony export */   "Response": function() { return /* binding */ Response; },
/* harmony export */   "DOMException": function() { return /* binding */ DOMException; },
/* harmony export */   "fetch": function() { return /* binding */ fetch; }
/* harmony export */ });
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  (typeof global !== 'undefined' && global)

var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this)
        if (isConsumed) {
          return isConsumed
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EscUNBQXFDLDBCQUEwQjtBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLDBCQUEwQixlQUFlO0FBQ3RFOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzVsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdmUyZExvYWRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbGl2ZTJkTG9hZGVyLy4vc3JjL01vY01hcHBlci50cyIsIndlYnBhY2s6Ly9saXZlMmRMb2FkZXIvLi9zcmMvbGFwcGRlZmluZS50cyIsIndlYnBhY2s6Ly9saXZlMmRMb2FkZXIvLi9zcmMvbGFwcGRlbGVnYXRlLnRzIiwid2VicGFjazovL2xpdmUyZExvYWRlci8uL3NyYy9sYXBwbGl2ZTJkbWFuYWdlci50cyIsIndlYnBhY2s6Ly9saXZlMmRMb2FkZXIvLi9zcmMvbGFwcG1vZGVsLnRzIiwid2VicGFjazovL2xpdmUyZExvYWRlci8uL3NyYy9sYXBwcGFsLnRzIiwid2VicGFjazovL2xpdmUyZExvYWRlci8uL3NyYy9sYXBwdGV4dHVyZW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbGl2ZTJkTG9hZGVyLy4vc3JjL2xhcHB2aWV3LnRzIiwid2VicGFjazovL2xpdmUyZExvYWRlci8uL3NyYy9sYXBwd2F2ZmlsZWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vbGl2ZTJkTG9hZGVyLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vbGl2ZTJkTG9hZGVyLy4vc3JjL3RvdWNobWFuYWdlci50cyIsIndlYnBhY2s6Ly9saXZlMmRMb2FkZXIvLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovL2xpdmUyZExvYWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saXZlMmRMb2FkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpdmUyZExvYWRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpdmUyZExvYWRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpdmUyZExvYWRlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2xpdmUyZExvYWRlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbGl2ZTJkTG9hZGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsaXZlMmRMb2FkZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGl2ZTJkTG9hZGVyXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLyoqXG4gKiDlsIZNb2Pmlofku7bkuK3nmoRpZOWAvOWSjOi1hOa6kOaWh+S7tuWQjeensOWPiuWvueW6lOeahHVybOaYoOWwhOWIsOeoi+W6j+S4rVxuICovXG5pbXBvcnQge3Jlc291cmNlc0NvbmZpZyB9IGZyb20gJy4vbGFwcGRlZmluZSdcblxuZXhwb3J0IGNsYXNzIE1vY01hcHBlciB7XG4gICAgcHVibGljIHBhcmFtZXRlcklkTUFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcCgpO1xuICAgIHB1YmxpYyByZXNvdXJjZXNQYXRoVG9VcmxNYXAgPSBuZXcgTWFwKCk7XG4gICAgcHVibGljIGpzb25SZXNvdXJjZXMgPSBudWxsO1xuICAgIC8v5qih5Z6L55qE5pS+5aSn5YCN546HXG4gICAgcHVibGljIHNjYWxlID0gMTtcbiAgICBwdWJsaWMgc3RhdGljIG1hcHBlcjogTW9jTWFwcGVyID0gbnVsbDtcblxuLyoqXG4gKiDmoLnmja51cmzlnLDlnYDojrflj5botYTmupDot6/lvoTlkox1cmznmoTmmKDlsITlr7nosaFcbiAqIEBwYXJhbSB1cmwg5L+d5a2Y5pig5bCE5YWz57O755qEanNvbueahHVybOWcsOWdgFxuICovXG4gICAgcHVibGljIHN0YXRpYyAgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcHBlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm1hcHBlciA9IG5ldyBNb2NNYXBwZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tYXBwZXI7XG4gICAgfVxuXG4vL1xuXG4gICAgLyoqXG4gICAgICog5bCG5b2T5YmN5qih5Z6L55qEaWTlgLzkv53lrZjliLDplK7lgLzlr7nkuK1cbiAgICAgKiBAcGFyYW0gZGVmYXVsdFBhcmFtZXRlciDlrpjmlrnpu5jorqTnmoRpZOWAvFxuICAgICAqIEBwYXJhbSBjdXJyZW50TW9kUGFyYW1ldGVyICDlvZPliY3mqKHlnovkuK3kuI7lrpjmlrnpu5jorqTlgLzmlYjmnpznm7jlkIznmoRpZOWAvFxuICAgICAqIEBub3RlIOS4gOiIrOWPqumcgOimgeiuvue9riBQYXJhbUV5ZUJhbGxbWCxZXSAgUGFyYW1BbmdsZVtYLFksWl1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0UGFyYW1ldGVyKGRlZmF1bHRQYXJhbWV0ZXI6IHN0cmluZywgY3VycmVudE1vZFBhcmFtZXRlcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVySWRNQXAuc2V0KGRlZmF1bHRQYXJhbWV0ZXIsY3VycmVudE1vZFBhcmFtZXRlcilcbiAgICB9XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIGRlZmF1bHRQYXJhbWV0ZXIg5qC55o2u6buY6K6kaWTlgLzojrflj5blvZPliY3mqKHlnovlr7nlupTnmoRpZOWAvFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQYXJlbWV0ZXIoZGVmYXVsdFBhcmFtZXRlcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySWRNQXAuZ2V0KGRlZmF1bHRQYXJhbWV0ZXIpXG4gICAgfVxuLyoqXG4gKiBcbiAqIEBwYXJhbSByZXNvdXJjZXNQYXRoIG1vYzMuanNvbuS4reeahOi1hOa6kOi3r+W+hFxuICogQHBhcmFtIHVybCDmnI3liqHlmajkuK3or6Xot6/lvoTlr7nlupTmlofku7bnmoTorr/pl67lnLDlnYBcbiAqL1xuICAgIHB1YmxpYyBzZXRQYXRoVG9VcmwocmVzb3VyY2VzUGF0aDpzdHJpbmcsIHVybDpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNQYXRoVG9VcmxNYXAuc2V0KHJlc291cmNlc1BhdGgsIHVybCk7XG4gICAgfVxuXG4vKipcbiAqICDmoLnmja7otYTmupDot6/lvoTojrflj5Z1cmxcbiAqIOS4u+imgeeUqOS6juaYoOWwhOS4iuS8oOWIsOWvueixoeWtmOWCqOacjeWKoeWZqOeahOaWh+S7tuS4juWunumZheS4reeahOebruW9lee7k+aehFxuICogQHBhcmFtIHJlc291cmNlc1BhdGgg6LWE5rqQ6Lev5b6EXG4gKiBAcmV0dXJucyBcbiAqL1xuICAgIHB1YmxpYyBnZXRVcmwocmVzb3VyY2VzUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzUGF0aFRvVXJsTWFwLmdldChyZXNvdXJjZXNQYXRoKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRKc29uQ29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5qc29uUmVzb3VyY2VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaooeWei+eahOaUvuWkp+WAjeeOh1xuICAgICAqIEByZXR1cm5zIOe8qeaUvuWAjeeOh1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTY2FsZSgpIHsgcmV0dXJuIHRoaXMuc2NhbGV9XG4vKipcbiAqIOS7juaMh+WumnVybOivu+WPluaooeWei+ebruW9leS4reeahG1hcHBlci5qc29u44CQ6Ieq5a6a5LmJ55qE5Y+Y6YeP5pig5bCE5YWz57O75paH5Lu244CR5paH5Lu2XG4gKiBAcGFyYW0gdXJsIG1hcHBlcuaWh+S7tueahHVybFxuICovXG4gICAgcHVibGljIGFzeW5jIHNldE1hcHBlckpzb24odXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5qc29uUmVzb3VyY2VzID0gYXdhaXQgZmV0Y2godXJsKS50aGVuKGFzeW5jIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiBqc29uO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBhcnJheU9mcGFyYW1ldGVycyA9IHRoaXMuZ2V0SnNvbkNvbmZpZygpLnBhcmFtZXRlcjtcbiAgICAgICAgbGV0IGFycmF5T2ZVcmwgPSB0aGlzLmdldEpzb25Db25maWcoKS51cmw7XG4gICAgICAgIFxuICAgICAgICAvL+Wwhmlk5YC85a2Y5YWlbWFw5LitXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZnBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgaXRlbSA9IGFycmF5T2ZwYXJhbWV0ZXJzW2ldXG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyKGtleSxpdGVtW2tleV0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5bCG6LWE5rqQ6Lev5b6E5ZKMdXJs5pig5bCE5YWz57O75a2Y5YWlbWFw5LitXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZlVybC5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgbGV0IGl0ZW0gPSBhcnJheU9mVXJsW2ldXG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyKGtleSxpdGVtW2tleV0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy/orr7nva7mqKHlnovnmoTkuK3lv4PkvY3nva5cbiAgICAgICAgbGV0IGNlbnRlclBvaW50U2NhbCA9IHRoaXMuZ2V0SnNvbkNvbmZpZygpLmNlbnRlcjtcbiAgICAgICAgcmVzb3VyY2VzQ29uZmlnLnNldFhzY2FsZShjZW50ZXJQb2ludFNjYWxbMF0pO1xuICAgICAgICByZXNvdXJjZXNDb25maWcuc2V0WXNjYWxlKGNlbnRlclBvaW50U2NhbFsxXSk7XG4gICAgICAgIC8v5qih5Z6L55qE57yp5pS+5YCN546HXG4gICAgICAgIGxldCBtb2RlbF9zY2FsZSA9IHRoaXMuZ2V0SnNvbkNvbmZpZygpLm1vZGVsX3NjYWxlO1xuICAgICAgICBpZiAobW9kZWxfc2NhbGUgPT0gdW5kZWZpbmVkIHx8IG1vZGVsX3NjYWxlIDw9IDAgfHwgbW9kZWxfc2NhbGU+NTApIHtcbiAgICAgICAgICAgIG1vZGVsX3NjYWxlID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjYWxlID0gbW9kZWxfc2NhbGU7XG4gICAgICAgIHJlc291cmNlc0NvbmZpZy5zZXRNb2RlbFNjYWxlKG1vZGVsX3NjYWxlKTtcblxuICAgIH1cbn0iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBMb2dMZXZlbCB9IGZyb20gJ0BmcmFtZXdvcmsvbGl2ZTJkY3ViaXNtZnJhbWV3b3JrJztcblxuLyoqXG4gKiBTYW1wbGUgQXBw44Gn5L2/55So44GZ44KL5a6a5pWwXG4gKi9cblxuLy8gQ2FudmFzIHdpZHRoIGFuZCBoZWlnaHQgcGl4ZWwgdmFsdWVzLCBvciBkeW5hbWljIHNjcmVlbiBzaXplICgnYXV0bycpLlxuZXhwb3J0IGNvbnN0IENhbnZhc1NpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8ICdhdXRvJyA9ICdhdXRvJztcblxuLy8g55S76Z2iXG5leHBvcnQgY29uc3QgVmlld1NjYWxlID0gMjtcbmV4cG9ydCBjb25zdCBWaWV3TWF4U2NhbGUgPSA0LjA7XG5leHBvcnQgY29uc3QgVmlld01pblNjYWxlID0gMC40O1xuXG5leHBvcnQgY29uc3QgVmlld0xvZ2ljYWxMZWZ0ID0gLTEuMDtcbmV4cG9ydCBjb25zdCBWaWV3TG9naWNhbFJpZ2h0ID0gMS4wO1xuZXhwb3J0IGNvbnN0IFZpZXdMb2dpY2FsQm90dG9tID0gLTEuMDtcbmV4cG9ydCBjb25zdCBWaWV3TG9naWNhbFRvcCA9IDEuMDtcblxuZXhwb3J0IGNvbnN0IFZpZXdMb2dpY2FsTWF4TGVmdCA9IC0yLjA7XG5leHBvcnQgY29uc3QgVmlld0xvZ2ljYWxNYXhSaWdodCA9IDIuMDtcbmV4cG9ydCBjb25zdCBWaWV3TG9naWNhbE1heEJvdHRvbSA9IC0yLjA7XG5leHBvcnQgY29uc3QgVmlld0xvZ2ljYWxNYXhUb3AgPSAyLjA7XG5cbmNsYXNzIFJlc291cmNlQ29uZmlnIHtcbiAgICAvL+aooeWei+i1hOa6kOi3r+W+hFxuICAgIHB1YmxpYyByZXNvdXJjZXNQYXRoOiBzdHJpbmc7XG4gICAgLy/lnKjmqKHlnovnm67lvZXkuK3mg7PopoHnjrDlrp7nmoTmqKHlnovmlofku7blpLnlkI3lrZdcbiAgICBwdWJsaWMgbW9kZWxOYW1lczogc3RyaW5nW107XG4gICAgcHVibGljIG1vZGVsU2l6ZTogbnVtYmVyO1xuICAgIC8v5pi+56S6bGl2ZTJk5qih5Z6L55qEY2FudmFz55qEaWRcbiAgICBwdWJsaWMgY2FudmFzSWQ6IHN0cmluZyA9ICdsaXZlMmQnO1xuICAgIHB1YmxpYyB4X3NjYWxlOiBudW1iZXIgPSAyO1xuICAgIHB1YmxpYyB5X3NjYWxlOiBudW1iZXIgPSAxO1xuICAgIC8v5qih5Z6L55qE57yp5pS+5q+U5L6LXG4gICAgcHVibGljIG1vZGVsX3NjYWxlOiBudW1iZXIgPSAxO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlc291cmNlc1BhdGggPSAnLi4vLi4vUmVzb3VyY2VzLyc7XG4gICAgICAgIHRoaXMubW9kZWxOYW1lcyA9IFsnSGFydScsICdIaXlvcmknLCAnTWFyaycsICdOYXRvcmknLCAnUmljZSddO1xuICAgICAgICB0aGlzLm1vZGVsU2l6ZSA9IHRoaXMubW9kZWxOYW1lcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFJlc291cmNlc1BhdGgocGF0aDpzdHJpbmcpIHtcbiAgICAgICAgIHRoaXMucmVzb3VyY2VzUGF0aCA9IHBhdGg7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRDYW52YXNJZChjYW52YXNJZDpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jYW52YXNJZCA9IGNhbnZhc0lkO1xuICAgfVxuXG4gIFxuICAgIHB1YmxpYyBzZXRNb2RlbFNjYWxlKHNjYWxlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tb2RlbF9zY2FsZSA9IHNjYWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRNb2RlbFNjYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbF9zY2FsZVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBwdWJsaWMgc2V0TW9kZWxOYW1lcyhtb2RlbHM6c3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5tb2RlbE5hbWVzID0gbW9kZWxzO1xuICAgICAgICB0aGlzLnNldE1vZGVsU2l6ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRNb2RlbFNpemUoKSB7XG4gICAgICAgIHRoaXMubW9kZWxTaXplID0gdGhpcy5tb2RlbE5hbWVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmVzb3VyY2VzUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzUGF0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TW9kZWxOYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxOYW1lcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TW9kZWxTaXplKCkgeyByZXR1cm4gdGhpcy5tb2RlbFNpemU7fVxuICAgIHB1YmxpYyBnZXRDYW52YXNJZCgpIHtcbiAgICAgICByZXR1cm4gIHRoaXMuY2FudmFzSWRcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldFhzY2FsZShzY2FsZTpudW1iZXIpIHsgIHRoaXMueF9zY2FsZSA9IHNjYWxlIH1cbiAgICBwdWJsaWMgc2V0WXNjYWxlKHNjYWxlOm51bWJlcikgeyAgdGhpcy55X3NjYWxlID0gc2NhbGUgfVxuICAgIHB1YmxpYyBnZXRYc2NhbGUoKSB7IHJldHVybiB0aGlzLnhfc2NhbGUgfVxuICAgIHB1YmxpYyBnZXRZc2NhbGUoKSB7IHJldHVybiB0aGlzLnlfc2NhbGV9XG5cbn1cblxuZXhwb3J0IGNvbnN0IHJlc291cmNlc0NvbmZpZyA9IG5ldyBSZXNvdXJjZUNvbmZpZygpO1xuXG4vLyDnm7jlr77jg5Hjgrlcbi8vZXhwb3J0IGNvbnN0IFJlc291cmNlc1BhdGggPSAnLi4vLi4vUmVzb3VyY2VzLyc7XG5cbi8vIOODouODh+ODq+OBruW+jOOCjeOBq+OBguOCi+iDjOaZr+OBrueUu+WDj+ODleOCoeOCpOODq1xuZXhwb3J0IGNvbnN0IEJhY2tJbWFnZU5hbWUgPSAnJztcblxuLy8g5q2v6LuKXG5leHBvcnQgY29uc3QgR2VhckltYWdlTmFtZSA9ICcnO1xuXG4vLyDntYLkuobjg5zjgr/jg7NcbmV4cG9ydCBjb25zdCBQb3dlckltYWdlTmFtZSA9ICcnO1xuXG4vLyDlpJbpg6jlrprnvqnjg5XjgqHjgqTjg6vvvIhqc29u77yJ44Go5ZCI44KP44Gb44KLXG5leHBvcnQgY29uc3QgTW90aW9uR3JvdXBJZGxlID0gJ0lkbGUnOyAvLyDjgqLjgqTjg4njg6rjg7PjgrBcbmV4cG9ydCBjb25zdCBNb3Rpb25Hcm91cFRhcEJvZHkgPSAnVGFwQm9keSc7IC8vIOS9k+OCkuOCv+ODg+ODl+OBl+OBn+OBqOOBjVxuXG4vLyDlpJbpg6jlrprnvqnjg5XjgqHjgqTjg6vvvIhqc29u77yJ44Go5ZCI44KP44Gb44KLXG5leHBvcnQgY29uc3QgSGl0QXJlYU5hbWVIZWFkID0gJ0hlYWQnO1xuZXhwb3J0IGNvbnN0IEhpdEFyZWFOYW1lQm9keSA9ICdCb2R5JztcblxuLy8g44Oi44O844K344On44Oz44Gu5YSq5YWI5bqm5a6a5pWwXG5leHBvcnQgY29uc3QgUHJpb3JpdHlOb25lID0gMDtcbmV4cG9ydCBjb25zdCBQcmlvcml0eUlkbGUgPSAxO1xuZXhwb3J0IGNvbnN0IFByaW9yaXR5Tm9ybWFsID0gMjtcbmV4cG9ydCBjb25zdCBQcmlvcml0eUZvcmNlID0gMztcblxuLy8g44OH44OQ44OD44Kw55So44Ot44Kw44Gu6KGo56S644Kq44OX44K344On44OzXG5leHBvcnQgY29uc3QgRGVidWdMb2dFbmFibGUgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IERlYnVnVG91Y2hMb2dFbmFibGUgPSBmYWxzZTtcblxuLy8gRnJhbWV3b3Jr44GL44KJ5Ye65Yqb44GZ44KL44Ot44Kw44Gu44Os44OZ44Or6Kit5a6aXG5leHBvcnQgY29uc3QgQ3ViaXNtTG9nZ2luZ0xldmVsOiBMb2dMZXZlbCA9IExvZ0xldmVsLkxvZ0xldmVsX1ZlcmJvc2U7XG5cbi8vIOODh+ODleOCqeODq+ODiOOBruODrOODs+ODgOODvOOCv+ODvOOCsuODg+ODiOOCteOCpOOCulxuZXhwb3J0IGNvbnN0IFJlbmRlclRhcmdldFdpZHRoID0gMTkwMDtcbmV4cG9ydCBjb25zdCBSZW5kZXJUYXJnZXRIZWlnaHQgPSAxMDAwO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgQ3ViaXNtRnJhbWV3b3JrLCBPcHRpb24gfSBmcm9tICdAZnJhbWV3b3JrL2xpdmUyZGN1YmlzbWZyYW1ld29yayc7XG5cbmltcG9ydCAqIGFzIExBcHBEZWZpbmUgZnJvbSAnLi9sYXBwZGVmaW5lJztcbmltcG9ydCB7IExBcHBMaXZlMkRNYW5hZ2VyIH0gZnJvbSAnLi9sYXBwbGl2ZTJkbWFuYWdlcic7XG5pbXBvcnQgeyBMQXBwUGFsIH0gZnJvbSAnLi9sYXBwcGFsJztcbmltcG9ydCB7IExBcHBUZXh0dXJlTWFuYWdlciB9IGZyb20gJy4vbGFwcHRleHR1cmVtYW5hZ2VyJztcbmltcG9ydCB7IExBcHBWaWV3IH0gZnJvbSAnLi9sYXBwdmlldyc7XG5cbmV4cG9ydCBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IG51bGw7XG5leHBvcnQgbGV0IHNfaW5zdGFuY2U6IExBcHBEZWxlZ2F0ZSA9IG51bGw7XG5leHBvcnQgbGV0IGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgPSBudWxsO1xuZXhwb3J0IGxldCBmcmFtZUJ1ZmZlcjogV2ViR0xGcmFtZWJ1ZmZlciA9IG51bGw7XG5cbi8qKlxuICog44Ki44OX44Oq44Kx44O844K344On44Oz44Kv44Op44K544CCXG4gKiBDdWJpc20gU0RL44Gu566h55CG44KS6KGM44GG44CCXG4gKi9cbmV4cG9ydCBjbGFzcyBMQXBwRGVsZWdhdGUge1xuICAvKipcbiAgICog44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K577yI44K344Oz44Kw44Or44OI44Oz77yJ44KS6L+U44GZ44CCXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueOBjOeUn+aIkOOBleOCjOOBpuOBhOOBquOBhOWgtOWQiOOBr+WGhemDqOOBp+OCpOODs+OCueOCv+ODs+OCueOCkueUn+aIkOOBmeOCi+OAglxuICAgKlxuICAgKiBAcmV0dXJuIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMQXBwRGVsZWdhdGUge1xuICAgIGlmIChzX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgIHNfaW5zdGFuY2UgPSBuZXcgTEFwcERlbGVnYXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNfaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICog44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K577yI44K344Oz44Kw44Or44OI44Oz77yJ44KS6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBpZiAoc19pbnN0YW5jZSAhPSBudWxsKSB7XG4gICAgICBzX2luc3RhbmNlLnJlbGVhc2UoKTtcbiAgICB9XG5cbiAgICBzX2luc3RhbmNlID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBUFDjgavlv4XopoHjgarnianjgpLliJ3mnJ/ljJbjgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyBpbml0aWFsaXplKCk6IGJvb2xlYW4ge1xuICAgIC8vIOOCreODo+ODs+ODkOOCueOBruS9nOaIkFxuICAgIGNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChMQXBwRGVmaW5lLnJlc291cmNlc0NvbmZpZy5nZXRDYW52YXNJZCgpKTtcbiAgXG4gICAgLy8gZ2zjgrPjg7Pjg4bjgq3jgrnjg4jjgpLliJ3mnJ/ljJZcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7XG5cbiAgICBpZiAoIWdsKSB7XG4gICAgICBhbGVydCgnQ2Fubm90IGluaXRpYWxpemUgV2ViR0wuIFRoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0LicpO1xuICAgICAgZ2wgPSBudWxsO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9XG4gICAgICAgICdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgPGNvZGU+Jmx0O2NhbnZhcyZndDs8L2NvZGU+IGVsZW1lbnQuJztcblxuICAgICAgLy8gZ2zliJ3mnJ/ljJblpLHmlZdcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyDjgq3jg6Pjg7Pjg5DjgrnjgpIgRE9NIOOBq+i/veWKoFxuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuICAgIGlmICghZnJhbWVCdWZmZXIpIHtcbiAgICAgIGZyYW1lQnVmZmVyID0gZ2wuZ2V0UGFyYW1ldGVyKGdsLkZSQU1FQlVGRkVSX0JJTkRJTkcpO1xuICAgIH1cblxuICAgIC8vIOmAj+mBjuioreWumlxuICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XG4gICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4vKlxuICAgIGNvbnN0IHN1cHBvcnRUb3VjaDogYm9vbGVhbiA9ICdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudDtcblxuICAgICBpZiAoc3VwcG9ydFRvdWNoKSB7XG4gICAgLy8g44K/44OD44OB6Zai6YCj44Kz44O844Or44OQ44OD44Kv6Zai5pWw55m76YyyXG4gICAgZG9jdW1lbnQub250b3VjaHN0YXJ0ID0gb25Ub3VjaEJlZ2FuO1xuICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uVG91Y2hNb3ZlZDtcbiAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG9uVG91Y2hFbmRlZDtcbiAgICAvL2RvY3VtZW50Lm9udG91Y2hlbmQgPSBvblRvdWNoRW5kZWQ7XG4gICAgLy9jYW52YXMub250b3VjaGNhbmNlbCA9IG9uVG91Y2hDYW5jZWw7XG4gICAgIH0gZWxzZSB7XG4gICAgICAgKi9cbiAgICBcbiAgICAvLyDjg57jgqbjgrnplqLpgKPjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbDnmbvpjLJcbiAgICAvL+WPquiDveWcqGNhbnZhc+eahOS6i+S7tuS4iuiwg+eUqG9uKkVuZGVkKCnmlrnms5XvvIzkuI3nhLbkvJrlvbHlk43kurrniannmoTngrnlh7vmlYjmnpxcbiAgICAvL29ubW91c2Vtb3Zl5pa55rOV5Y+q6IO95Zyob25tb3VzZWRvd27lkoxvbm1vdXNldXDkuYvpl7TosIPnlKjvvIzkuI3nhLbmsqHmnInmlYjmnpxcbiAgICAvL2RvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25Nb3VzZU1vdmVkO1xuICAgIGNhbnZhcy5vbm1vdXNldXAgPSBvbkNsaWNrRW5kZWQ7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCFMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldykge1xuICAgICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShcInZpZXcgbm90Zm91bmRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vKDxFbGVtZW50PmUudGFyZ2V0KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIC8v6L+Z6YeM5Luj56CB5pS55LqG5LiA54K5XG4gICAgICAvL+S5i+WJjeaIkeaYr+S9v+eUqGRvY3VtZW50c+WvueixoeadpeiOt+WPlmNhbnZhc++8jOWFtuWunuW3sue7j+acieWFqOWxgOWPmOmHj+S6hu+8jOi/memHjOS5n+WPr+S7peebtOaOpeeUqFxuICAgICAgbGV0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBsZXQgcG9zWDogbnVtYmVyID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgbGV0IHBvc1k6IG51bWJlciA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJvbk1vdXNlTW92ZWQ6IGdhdGXmlofku7bkuK1wb3NZ5YC85Li677yaIOOAkFwiK3Bvc1krXCLjgJEgIGNhbnZhc+eahHRvcOi3neemu+S4uu+8mlwiK3JlY3QudG9wKTtcbiAgICAgIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3Lm9uVG91Y2hlc01vdmVkKHBvc1gsIHBvc1kpO1xuICAgIH0sIGZhbHNlKTtcbiAgICAvLyB9XG5cbiAgICAvL+WcqOi/memHjOWKoOS4ium8oOagh+emu+W8gOa1j+iniOWZqOWQju+8jOS4gOWIh+W9kuS9jVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy/pvKDmoIfnprvlvIBkb2N1bWVudOWQju+8jOWwhuWFtuS9jee9rue9ruS4uu+8iDDvvIww77yJICBcbiAgICAgIGxldCBsaXZlMkRNYW5hZ2VyOiBMQXBwTGl2ZTJETWFuYWdlciA9IExBcHBMaXZlMkRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICBsaXZlMkRNYW5hZ2VyLm9uRHJhZygwLjAsIDAuMCk7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgLy8gQXBwVmlld+OBruWIneacn+WMllxuICAgIHRoaXMuX3ZpZXcuaW5pdGlhbGl6ZSgpO1xuXG4gICAgLy8gQ3ViaXNtIFNES+OBruWIneacn+WMllxuICAgIHRoaXMuaW5pdGlhbGl6ZUN1YmlzbSgpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmVzaXplIGNhbnZhcyBhbmQgcmUtaW5pdGlhbGl6ZSB2aWV3LlxuICAgKi9cbiAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZUNhbnZhcygpO1xuICAgIHRoaXMuX3ZpZXcuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX3ZpZXcuaW5pdGlhbGl6ZVNwcml0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOino+aUvuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHJlbGVhc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fdGV4dHVyZU1hbmFnZXIucmVsZWFzZSgpO1xuICAgIHRoaXMuX3RleHR1cmVNYW5hZ2VyID0gbnVsbDtcbiAgICB0aGlzLl92aWV3LnJlbGVhc2UoKTtcbiAgICB0aGlzLl92aWV3ID0gbnVsbDtcblxuICAgIC8vIOODquOCveODvOOCueOCkuino+aUvlxuICAgIExBcHBMaXZlMkRNYW5hZ2VyLnJlbGVhc2VJbnN0YW5jZSgpO1xuICAgIC8vIEN1YmlzbSBTREvjga7op6PmlL5cbiAgICBDdWJpc21GcmFtZXdvcmsuZGlzcG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWun+ihjOWHpueQhuOAglxuICAgKi9cbiAgcHVibGljIHJ1bigpOiB2b2lkIHtcbiAgICAvLyDjg6HjgqTjg7Pjg6vjg7zjg5dcbiAgICBjb25zdCBsb29wID0gKCk6IHZvaWQgPT4ge1xuICAgICAgLy8g44Kk44Oz44K544K/44Oz44K544Gu5pyJ54Sh44Gu56K66KqNXG4gICAgICBpZiAoc19pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8g5pmC6ZaT5pu05pawXG4gICAgICBMQXBwUGFsLnVwZGF0ZVRpbWUoKTtcblxuICAgICAgLy8g55S76Z2i44Gu5Yid5pyf5YyWXG4gICAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDAuMCk7XG5cbiAgICAgIC8vIOa3seW6puODhuOCueODiOOCkuacieWKueWMllxuICAgICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xuXG4gICAgICAvLyDov5HjgY/jgavjgYLjgovniankvZPjga/jgIHpgaDjgY/jgavjgYLjgovniankvZPjgpLopobjgYTpmqDjgZlcbiAgICAgIGdsLmRlcHRoRnVuYyhnbC5MRVFVQUwpO1xuXG4gICAgICAvLyDjgqvjg6njg7zjg5Djg4Pjg5XjgqHjgoTmt7Hluqbjg5Djg4Pjg5XjgqHjgpLjgq/jg6rjgqLjgZnjgotcbiAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcblxuICAgICAgZ2wuY2xlYXJEZXB0aCgxLjApO1xuXG4gICAgICAvLyDpgI/pgY7oqK3lrppcbiAgICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XG4gICAgICBnbC5ibGVuZEZ1bmMoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcblxuICAgICAgLy8g5o+P55S75pu05pawXG4gICAgICB0aGlzLl92aWV3LnJlbmRlcigpO1xuXG4gICAgICAvLyDjg6vjg7zjg5fjga7jgZ/jgoHjgavlho3luLDlkbzjgbPlh7rjgZdcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICB9O1xuICAgIGxvb3AoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrfjgqfjg7zjg4Djg7zjgpLnmbvpjLLjgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyBjcmVhdGVTaGFkZXIoKTogV2ViR0xQcm9ncmFtIHtcbiAgICAvLyDjg5Djg7zjg4bjg4Pjgq/jgrnjgrfjgqfjg7zjg4Djg7zjga7jgrPjg7Pjg5HjgqTjg6tcbiAgICBjb25zdCB2ZXJ0ZXhTaGFkZXJJZCA9IGdsLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKTtcblxuICAgIGlmICh2ZXJ0ZXhTaGFkZXJJZCA9PSBudWxsKSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgnZmFpbGVkIHRvIGNyZWF0ZSB2ZXJ0ZXhTaGFkZXInKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnRleFNoYWRlcjogc3RyaW5nID1cbiAgICAgICdwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsnICtcbiAgICAgICdhdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjsnICtcbiAgICAgICdhdHRyaWJ1dGUgdmVjMiB1djsnICtcbiAgICAgICd2YXJ5aW5nIHZlYzIgdnV2OycgK1xuICAgICAgJ3ZvaWQgbWFpbih2b2lkKScgK1xuICAgICAgJ3snICtcbiAgICAgICcgICBnbF9Qb3NpdGlvbiA9IHZlYzQocG9zaXRpb24sIDEuMCk7JyArXG4gICAgICAnICAgdnV2ID0gdXY7JyArXG4gICAgICAnfSc7XG5cbiAgICBnbC5zaGFkZXJTb3VyY2UodmVydGV4U2hhZGVySWQsIHZlcnRleFNoYWRlcik7XG4gICAgZ2wuY29tcGlsZVNoYWRlcih2ZXJ0ZXhTaGFkZXJJZCk7XG5cbiAgICAvLyDjg5Xjg6njgrDjg6Hjg7Pjg4jjgrfjgqfjg7zjg4Djga7jgrPjg7Pjg5HjgqTjg6tcbiAgICBjb25zdCBmcmFnbWVudFNoYWRlcklkID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XG5cbiAgICBpZiAoZnJhZ21lbnRTaGFkZXJJZCA9PSBudWxsKSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgnZmFpbGVkIHRvIGNyZWF0ZSBmcmFnbWVudFNoYWRlcicpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZnJhZ21lbnRTaGFkZXI6IHN0cmluZyA9XG4gICAgICAncHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7JyArXG4gICAgICAndmFyeWluZyB2ZWMyIHZ1djsnICtcbiAgICAgICd1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlOycgK1xuICAgICAgJ3ZvaWQgbWFpbih2b2lkKScgK1xuICAgICAgJ3snICtcbiAgICAgICcgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodGV4dHVyZSwgdnV2KTsnICtcbiAgICAgICd9JztcblxuICAgIGdsLnNoYWRlclNvdXJjZShmcmFnbWVudFNoYWRlcklkLCBmcmFnbWVudFNoYWRlcik7XG4gICAgZ2wuY29tcGlsZVNoYWRlcihmcmFnbWVudFNoYWRlcklkKTtcblxuICAgIC8vIOODl+ODreOCsOODqeODoOOCquODluOCuOOCp+OCr+ODiOOBruS9nOaIkFxuICAgIGNvbnN0IHByb2dyYW1JZCA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbUlkLCB2ZXJ0ZXhTaGFkZXJJZCk7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW1JZCwgZnJhZ21lbnRTaGFkZXJJZCk7XG5cbiAgICBnbC5kZWxldGVTaGFkZXIodmVydGV4U2hhZGVySWQpO1xuICAgIGdsLmRlbGV0ZVNoYWRlcihmcmFnbWVudFNoYWRlcklkKTtcblxuICAgIC8vIOODquODs+OCr1xuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW1JZCk7XG5cbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW1JZCk7XG5cbiAgICByZXR1cm4gcHJvZ3JhbUlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFZpZXfmg4XloLHjgpLlj5blvpfjgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyBnZXRWaWV3KCk6IExBcHBWaWV3IHtcbiAgICByZXR1cm4gdGhpcy5fdmlldztcbiAgfVxuXG4gIHB1YmxpYyBnZXRUZXh0dXJlTWFuYWdlcigpOiBMQXBwVGV4dHVyZU1hbmFnZXIge1xuICAgIHJldHVybiB0aGlzLl90ZXh0dXJlTWFuYWdlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2NhcHR1cmVkID0gZmFsc2U7XG4gICAgdGhpcy5fbW91c2VYID0gMC4wO1xuICAgIHRoaXMuX21vdXNlWSA9IDAuMDtcbiAgICB0aGlzLl9pc0VuZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5fY3ViaXNtT3B0aW9uID0gbmV3IE9wdGlvbigpO1xuICAgIHRoaXMuX3ZpZXcgPSBuZXcgTEFwcFZpZXcoKTtcbiAgICB0aGlzLl90ZXh0dXJlTWFuYWdlciA9IG5ldyBMQXBwVGV4dHVyZU1hbmFnZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDdWJpc20gU0RL44Gu5Yid5pyf5YyWXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZUN1YmlzbSgpOiB2b2lkIHtcbiAgICAvLyBzZXR1cCBjdWJpc21cbiAgICB0aGlzLl9jdWJpc21PcHRpb24ubG9nRnVuY3Rpb24gPSBMQXBwUGFsLnByaW50TWVzc2FnZTtcbiAgICB0aGlzLl9jdWJpc21PcHRpb24ubG9nZ2luZ0xldmVsID0gTEFwcERlZmluZS5DdWJpc21Mb2dnaW5nTGV2ZWw7XG4gICAgQ3ViaXNtRnJhbWV3b3JrLnN0YXJ0VXAodGhpcy5fY3ViaXNtT3B0aW9uKTtcblxuICAgIC8vIGluaXRpYWxpemUgY3ViaXNtXG4gICAgQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKTtcblxuICAgIC8vIGxvYWQgbW9kZWxcbiAgICBMQXBwTGl2ZTJETWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuXG4gICAgTEFwcFBhbC51cGRhdGVUaW1lKCk7XG5cbiAgICB0aGlzLl92aWV3LmluaXRpYWxpemVTcHJpdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNpemUgdGhlIGNhbnZhcyB0byBmaWxsIHRoZSBzY3JlZW4uXG4gICAqL1xuICBwcml2YXRlIF9yZXNpemVDYW52YXMoKTogdm9pZCB7XG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIF9jdWJpc21PcHRpb246IE9wdGlvbjsgLy8gQ3ViaXNtIFNESyBPcHRpb25cbiAgX3ZpZXc6IExBcHBWaWV3OyAvLyBWaWV35oOF5aCxXG4gIF9jYXB0dXJlZDogYm9vbGVhbjsgLy8g44Kv44Oq44OD44Kv44GX44Gm44GE44KL44GLXG4gIF9tb3VzZVg6IG51bWJlcjsgLy8g44Oe44Km44K5WOW6p+aomVxuICBfbW91c2VZOiBudW1iZXI7IC8vIOODnuOCpuOCuVnluqfmqJlcbiAgX2lzRW5kOiBib29sZWFuOyAvLyBBUFDntYLkuobjgZfjgabjgYTjgovjgYtcbiAgX3RleHR1cmVNYW5hZ2VyOiBMQXBwVGV4dHVyZU1hbmFnZXI7IC8vIOODhuOCr+OCueODgeODo+ODnuODjeODvOOCuOODo+ODvFxufVxuXG4vKipcbiAqIOOCr+ODquODg+OCr+OBl+OBn+OBqOOBjeOBq+WRvOOBsOOCjOOCi+OAglxuICovXG5mdW5jdGlvbiBvbkNsaWNrQmVnYW4oZTogTW91c2VFdmVudCk6IHZvaWQge1xuICBpZiAoIUxBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3KSB7XG4gICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ3ZpZXcgbm90Zm91bmQnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX2NhcHR1cmVkID0gdHJ1ZTtcblxuICBjb25zdCBwb3NYOiBudW1iZXIgPSBlLnBhZ2VYO1xuICBjb25zdCBwb3NZOiBudW1iZXIgPSBlLnBhZ2VZO1xuXG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3Lm9uVG91Y2hlc0JlZ2FuKHBvc1gsIHBvc1kpO1xufVxuXG4vKipcbiAqIOODnuOCpuOCueODneOCpOODs+OCv+OBjOWLleOBhOOBn+OCieWRvOOBsOOCjOOCi+OAglxuICovXG5mdW5jdGlvbiBvbk1vdXNlTW92ZWQoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICBpZiAoIUxBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl9jYXB0dXJlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcpIHtcbiAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgndmlldyBub3Rmb3VuZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHBvc1g6IG51bWJlciA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgY29uc3QgcG9zWTogbnVtYmVyID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcub25Ub3VjaGVzTW92ZWQocG9zWCwgcG9zWSk7XG59XG5cbi8qKlxuICog44Kv44Oq44OD44Kv44GM57WC5LqG44GX44Gf44KJ5ZG844Gw44KM44KL44CCXG4gKi9cbmZ1bmN0aW9uIG9uQ2xpY2tFbmRlZChlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl9jYXB0dXJlZCA9IGZhbHNlO1xuICBpZiAoIUxBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3KSB7XG4gICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ3ZpZXcgbm90Zm91bmQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBwb3NYOiBudW1iZXIgPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gIGNvbnN0IHBvc1k6IG51bWJlciA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xuICAvLyBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldy5vblRvdWNoZXNCZWdhbihwb3NYLCBwb3NZKTtcbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcub25Ub3VjaGVzRW5kZWQocG9zWCwgcG9zWSk7XG59XG5cbi8qKlxuICog44K/44OD44OB44GX44Gf44Go44GN44Gr5ZG844Gw44KM44KL44CCXG4gKi9cbmZ1bmN0aW9uIG9uVG91Y2hCZWdhbihlOiBUb3VjaEV2ZW50KTogdm9pZCB7XG4gIGlmICghTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcpIHtcbiAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgndmlldyBub3Rmb3VuZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl9jYXB0dXJlZCA9IHRydWU7XG5cbiAgY29uc3QgcG9zWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gIGNvbnN0IHBvc1kgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuXG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3Lm9uVG91Y2hlc0JlZ2FuKHBvc1gsIHBvc1kpO1xufVxuXG4vKipcbiAqIOOCueODr+OCpOODl+OBmeOCi+OBqOWRvOOBsOOCjOOCi+OAglxuICovXG5mdW5jdGlvbiBvblRvdWNoTW92ZWQoZTogVG91Y2hFdmVudCk6IHZvaWQge1xuICBpZiAoIUxBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl9jYXB0dXJlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcpIHtcbiAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgndmlldyBub3Rmb3VuZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgY29uc3QgcG9zWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgY29uc3QgcG9zWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3Lm9uVG91Y2hlc01vdmVkKHBvc1gsIHBvc1kpO1xufVxuXG4vKipcbiAqIOOCv+ODg+ODgeOBjOe1guS6huOBl+OBn+OCieWRvOOBsOOCjOOCi+OAglxuICovXG5mdW5jdGlvbiBvblRvdWNoRW5kZWQoZTogVG91Y2hFdmVudCk6IHZvaWQge1xuICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fY2FwdHVyZWQgPSBmYWxzZTtcblxuICBpZiAoIUxBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3KSB7XG4gICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ3ZpZXcgbm90Zm91bmQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIGNvbnN0IHBvc1ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gIGNvbnN0IHBvc1kgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSByZWN0LnRvcDtcblxuICBMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldy5vblRvdWNoZXNFbmRlZChwb3NYLCBwb3NZKTtcbn1cblxuLyoqXG4gKiDjgr/jg4Pjg4HjgYzjgq3jg6Pjg7Pjgrvjg6vjgZXjgozjgovjgajlkbzjgbDjgozjgovjgIJcbiAqL1xuZnVuY3Rpb24gb25Ub3VjaENhbmNlbChlOiBUb3VjaEV2ZW50KTogdm9pZCB7XG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl9jYXB0dXJlZCA9IGZhbHNlO1xuXG4gIGlmICghTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcpIHtcbiAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgndmlldyBub3Rmb3VuZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgY29uc3QgcG9zWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgY29uc3QgcG9zWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gIExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3Lm9uVG91Y2hlc0VuZGVkKHBvc1gsIHBvc1kpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgQ3ViaXNtTWF0cml4NDQgfSBmcm9tICdAZnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0cml4NDQnO1xuaW1wb3J0IHsgQUN1YmlzbU1vdGlvbiB9IGZyb20gJ0BmcmFtZXdvcmsvbW90aW9uL2FjdWJpc21tb3Rpb24nO1xuaW1wb3J0IHsgY3NtVmVjdG9yIH0gZnJvbSAnQGZyYW1ld29yay90eXBlL2NzbXZlY3Rvcic7XG5pbXBvcnQgeyBNb2NNYXBwZXJ9ZnJvbSAnLi9Nb2NNYXBwZXInXG5pbXBvcnQgKiBhcyBMQXBwRGVmaW5lIGZyb20gJy4vbGFwcGRlZmluZSc7XG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuL2xhcHBkZWxlZ2F0ZSc7XG5pbXBvcnQgeyBMQXBwTW9kZWwgfSBmcm9tICcuL2xhcHBtb2RlbCc7XG5pbXBvcnQgeyBMQXBwUGFsIH0gZnJvbSAnLi9sYXBwcGFsJztcblxuZXhwb3J0IGxldCBzX2luc3RhbmNlOiBMQXBwTGl2ZTJETWFuYWdlciA9IG51bGw7XG5cbi8qKlxuICog44K144Oz44OX44Or44Ki44OX44Oq44Kx44O844K344On44Oz44Gr44GK44GE44GmQ3ViaXNtTW9kZWzjgpLnrqHnkIbjgZnjgovjgq/jg6njgrlcbiAqIOODouODh+ODq+eUn+aIkOOBqOegtOajhOOAgeOCv+ODg+ODl+OCpOODmeODs+ODiOOBruWHpueQhuOAgeODouODh+ODq+WIh+OCiuabv+OBiOOCkuihjOOBhuOAglxuICovXG5leHBvcnQgY2xhc3MgTEFwcExpdmUyRE1hbmFnZXIge1xuICAvKipcbiAgICog44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K577yI44K344Oz44Kw44Or44OI44Oz77yJ44KS6L+U44GZ44CCXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueOBjOeUn+aIkOOBleOCjOOBpuOBhOOBquOBhOWgtOWQiOOBr+WGhemDqOOBp+OCpOODs+OCueOCv+ODs+OCueOCkueUn+aIkOOBmeOCi+OAglxuICAgKlxuICAgKiBAcmV0dXJuIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiBcblxuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IExBcHBMaXZlMkRNYW5hZ2VyIHtcbiAgICBpZiAoc19pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICBzX2luc3RhbmNlID0gbmV3IExBcHBMaXZlMkRNYW5hZ2VyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNfaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICog44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K577yI44K344Oz44Kw44Or44OI44Oz77yJ44KS6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBpZiAoc19pbnN0YW5jZSAhPSBudWxsKSB7XG4gICAgICBzX2luc3RhbmNlID0gdm9pZCAwO1xuICAgIH1cblxuICAgIHNfaW5zdGFuY2UgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIOePvuWcqOOBruOCt+ODvOODs+OBp+S/neaMgeOBl+OBpuOBhOOCi+ODouODh+ODq+OCkui/lOOBmeOAglxuICAgKlxuICAgKiBAcGFyYW0gbm8g44Oi44OH44Or44Oq44K544OI44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAqIEByZXR1cm4g44Oi44OH44Or44Gu44Kk44Oz44K544K/44Oz44K544KS6L+U44GZ44CC44Kk44Oz44OH44OD44Kv44K55YCk44GM56+E5Zuy5aSW44Gu5aC05ZCI44GvTlVMTOOCkui/lOOBmeOAglxuICAgKi9cbiAgcHVibGljIGdldE1vZGVsKG5vOiBudW1iZXIpOiBMQXBwTW9kZWwge1xuICAgIGlmIChubyA8IHRoaXMuX21vZGVscy5nZXRTaXplKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2RlbHMuYXQobm8pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIOePvuWcqOOBruOCt+ODvOODs+OBp+S/neaMgeOBl+OBpuOBhOOCi+OBmeOBueOBpuOBruODouODh+ODq+OCkuino+aUvuOBmeOCi1xuICAgKi9cbiAgcHVibGljIHJlbGVhc2VBbGxNb2RlbCgpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX21vZGVscy5nZXRTaXplKCk7IGkrKykge1xuICAgICAgdGhpcy5fbW9kZWxzLmF0KGkpLnJlbGVhc2UoKTtcbiAgICAgIHRoaXMuX21vZGVscy5zZXQoaSwgbnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kZWxzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICog55S76Z2i44KS44OJ44Op44OD44Kw44GX44Gf5pmC44Gu5Yem55CGXG4gICAqXG4gICAqIEBwYXJhbSB4IOeUu+mdouOBrljluqfmqJlcbiAgICogQHBhcmFtIHkg55S76Z2i44GuWeW6p+aomVxuICAgKi9cbiAgcHVibGljIG9uRHJhZyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbW9kZWxzLmdldFNpemUoKTsgaSsrKSB7XG4gICAgICBjb25zdCBtb2RlbDogTEFwcE1vZGVsID0gdGhpcy5nZXRNb2RlbChpKTtcbiAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICBtb2RlbC5zZXREcmFnZ2luZyh4LCB5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog55S76Z2i44KS44K/44OD44OX44GX44Gf5pmC44Gu5Yem55CGXG4gICAq5a6Y5pa555qE54K55Ye75rWL6K+V6YOo5L2N77yM55Sx5LqO5pu05pS55ZCO5Yik5a6a5L2N572u5Ye6546w6ZSZ6K+v77yM5pS+5byD5L2/55SoXG4gICAqIFxuICAgKiBAcGFyYW0geCDnlLvpnaLjga5Y5bqn5qiZXG4gICAqIEBwYXJhbSB5IOeUu+mdouOBrlnluqfmqJlcbiAgICovXG4gIHB1YmxpYyBvbkRlZmF1bHRUYXAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoTEFwcERlZmluZS5EZWJ1Z0xvZ0VuYWJsZSkge1xuICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoXG4gICAgICAgIGBbQVBQXXRhcCBwb2ludDoge3g6ICR7eC50b0ZpeGVkKDIpfSB5OiAke3kudG9GaXhlZCgyKX19YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX21vZGVscy5nZXRTaXplKCk7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX21vZGVscy5hdChpKS5oaXRUZXN0KExBcHBEZWZpbmUuSGl0QXJlYU5hbWVIZWFkLCB4LCB5KSkge1xuICAgICAgICBpZiAoTEFwcERlZmluZS5EZWJ1Z0xvZ0VuYWJsZSkge1xuICAgICAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKFxuICAgICAgICAgICAgYFtBUFBdaGl0IGFyZWE6IFske0xBcHBEZWZpbmUuSGl0QXJlYU5hbWVIZWFkfV1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb2RlbHMuYXQoaSkuc2V0UmFuZG9tRXhwcmVzc2lvbigpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9tb2RlbHMuYXQoaSkuaGl0VGVzdChMQXBwRGVmaW5lLkhpdEFyZWFOYW1lQm9keSwgeCwgeSkpIHtcbiAgICAgICAgaWYgKExBcHBEZWZpbmUuRGVidWdMb2dFbmFibGUpIHtcbiAgICAgICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShcbiAgICAgICAgICAgIGBbQVBQXWhpdCBhcmVhOiBbJHtMQXBwRGVmaW5lLkhpdEFyZWFOYW1lQm9keX1dYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9kZWxzXG4gICAgICAgICAgLmF0KGkpXG4gICAgICAgICAgLnN0YXJ0UmFuZG9tTW90aW9uKFxuICAgICAgICAgICAgTEFwcERlZmluZS5Nb3Rpb25Hcm91cFRhcEJvZHksXG4gICAgICAgICAgICBMQXBwRGVmaW5lLlByaW9yaXR5Tm9ybWFsLFxuICAgICAgICAgICAgdGhpcy5fZmluaXNoZWRNb3Rpb25cbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuXG4gIC8qKlxuICAgKiDmm7TmlLl4eeS4reW/g+S9jee9ruWQju+8jOaXoOazleeUqOe7n+S4gOeahOaWueW8j+WIpOWumuWktOWSjOi6q+S9k+S6hlxuICAgKuaIkeS7rOi/memHjOWFqOmDqOS/ruaUueS4uueCueWHu+i6q+S9k+mDqOS9jVxuICAgKiBAcGFyYW0geCDnlLvpnaLjga5Y5bqn5qiZXG4gICAqIEBwYXJhbSB5IOeUu+mdouOBrlnluqfmqJlcbiAgICovXG4gICBwdWJsaWMgb25UYXAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoTEFwcERlZmluZS5EZWJ1Z0xvZ0VuYWJsZSkge1xuICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoXG4gICAgICAgIGBbQVBQXXRhcCBwb2ludDoge3g6ICR7eC50b0ZpeGVkKDIpfSB5OiAke3kudG9GaXhlZCgyKX19YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX21vZGVscy5nZXRTaXplKCk7IGkrKykge1xuICAgICAgaWYgKHggPiAtMSAmJiB4IDwgMSAmJiB5ID4gLTEgJiYgeSA8IDEpIHtcbiAgICAgICAgdGhpcy5fbW9kZWxzXG4gICAgICAgIC5hdChpKVxuICAgICAgICAuc3RhcnRSYW5kb21Nb3Rpb24oXG4gICAgICAgICAgTEFwcERlZmluZS5Nb3Rpb25Hcm91cFRhcEJvZHksXG4gICAgICAgICAgTEFwcERlZmluZS5Qcmlvcml0eU5vcm1hbCxcbiAgICAgICAgICB0aGlzLl9maW5pc2hlZE1vdGlvblxuICAgICAgICApOyAgXG4gICAgICB9XG4gICAgICAgXG4gICAgfVxuICB9XG5cblxuXG4gIC8qKlxuICAgKiDnlLvpnaLjgpLmm7TmlrDjgZnjgovjgajjgY3jga7lh6bnkIZcbiAgICog44Oi44OH44Or44Gu5pu05paw5Yem55CG5Y+K44Gz5o+P55S75Yem55CG44KS6KGM44GGXG4gICAqL1xuICBwdWJsaWMgb25VcGRhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXM7XG5cbiAgICBjb25zdCBwcm9qZWN0aW9uOiBDdWJpc21NYXRyaXg0NCA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xuICAgIGNvbnN0IG1vZGVsQ291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVscy5nZXRTaXplKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsQ291bnQ7ICsraSkge1xuICAgICAgY29uc3QgbW9kZWw6IExBcHBNb2RlbCA9IHRoaXMuZ2V0TW9kZWwoaSk7XG4gICAgICBpZiAobW9kZWwuZ2V0TW9kZWwoKSkge1xuICAgICAgICBpZiAobW9kZWwuZ2V0TW9kZWwoKS5nZXRDYW52YXNXaWR0aCgpID4gMS4wICYmIHdpZHRoIDwgaGVpZ2h0KSB7XG4gICAgICAgICAgLy8g5qiq44Gr6ZW344GE44Oi44OH44Or44KS57im6ZW344Km44Kj44Oz44OJ44Km44Gr6KGo56S644GZ44KL6Zqb44Oi44OH44Or44Gu5qiq44K144Kk44K644Gnc2NhbGXjgpLnrpflh7rjgZnjgotcbiAgICAgICAgICBtb2RlbC5nZXRNb2RlbE1hdHJpeCgpLnNldFdpZHRoKDIuMCk7XG4gICAgICAgICAgcHJvamVjdGlvbi5zY2FsZSgxLjAsIHdpZHRoIC8gaGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9qZWN0aW9uLnNjYWxlKGhlaWdodCAvIHdpZHRoLCAxLjApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5b+F6KaB44GM44GC44KM44Gw44GT44GT44Gn5LmX566XXG4gICAgICAgIGlmICh0aGlzLl92aWV3TWF0cml4ICE9IG51bGwpIHtcbiAgICAgICAgICBwcm9qZWN0aW9uLm11bHRpcGx5QnlNYXRyaXgodGhpcy5fdmlld01hdHJpeCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbW9kZWwudXBkYXRlKCk7XG4gICAgICBtb2RlbC5kcmF3KHByb2plY3Rpb24pOyAvLyDlj4LnhafmuKHjgZfjgarjga7jgadwcm9qZWN0aW9u44Gv5aSJ6LOq44GZ44KL44CCXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOasoeOBruOCt+ODvOODs+OBq+WIh+OCiuOBi+OBiOOCi1xuICAgKiDjgrXjg7Pjg5fjg6vjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7Pjgafjga/jg6Ljg4fjg6vjgrvjg4Pjg4jjga7liIfjgormm7/jgYjjgpLooYzjgYbjgIJcbiAgICovXG4gIHB1YmxpYyBuZXh0U2NlbmUoKTogdm9pZCB7XG4gICAgY29uc3Qgbm86IG51bWJlciA9ICh0aGlzLl9zY2VuZUluZGV4ICsgMSkgJSBMQXBwRGVmaW5lLnJlc291cmNlc0NvbmZpZy5nZXRNb2RlbFNpemUoKTtcbiAgICB0aGlzLmNoYW5nZVNjZW5lKG5vKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICog6ZqP5py65Yqg6L295qih5Z6LIFxuICAgKi9cbiAgIHB1YmxpYyByYW5kb21TY2VuZSgpOiB2b2lkIHtcbiAgICAgIC8v6K6+572u6ZqP5py655qE5qih5Z6L6YCJ6aG5XG4gICAgICBsZXQgcmFuZG9tTnVtPSBNYXRoLnJhbmRvbSgpKihMQXBwRGVmaW5lLnJlc291cmNlc0NvbmZpZy5nZXRNb2RlbFNpemUoKSsxKS8v5Y+W5YC86IyD5Zu0WzAsc2l6ZSsxKeWMheWQq+Wwj+aVsFxuICAgICAgLy/ovazkuLrmlbTmlbDlkI7lho3mrKHlj5bkvZnpmLLmraLlh7rnjrDmlbDnu4TotornlYzpl67pophcbiAgICAgIGxldCBpbmRleE9mTW9kZWwgPSBNYXRoLmZsb29yKHJhbmRvbU51bSklTEFwcERlZmluZS5yZXNvdXJjZXNDb25maWcuZ2V0TW9kZWxTaXplKClcbiAgICAgIHRoaXMuY2hhbmdlU2NlbmUoaW5kZXhPZk1vZGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrfjg7zjg7PjgpLliIfjgormm7/jgYjjgotcbiAgICog44K144Oz44OX44Or44Ki44OX44Oq44Kx44O844K344On44Oz44Gn44Gv44Oi44OH44Or44K744OD44OI44Gu5YiH44KK5pu/44GI44KS6KGM44GG44CCXG4gICAqL1xuICBwdWJsaWMgIGFzeW5jIGNoYW5nZVNjZW5lKGluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9zY2VuZUluZGV4ID0gaW5kZXg7XG4gICAgaWYgKExBcHBEZWZpbmUuRGVidWdMb2dFbmFibGUpIHtcbiAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKGBbQVBQXW1vZGVsIGluZGV4OiAke3RoaXMuX3NjZW5lSW5kZXh9YCk7XG4gICAgfVxuXG4gICAgLy8gTW9kZWxEaXJbXeOBq+S/neaMgeOBl+OBn+ODh+OCo+ODrOOCr+ODiOODquWQjeOBi+OCiVxuICAgIC8vIG1vZGVsMy5qc29u44Gu44OR44K544KS5rG65a6a44GZ44KL44CCXG4gICAgLy8g44OH44Kj44Os44Kv44OI44Oq5ZCN44GobW9kZWwzLmpzb27jga7lkI3liY3jgpLkuIDoh7TjgZXjgZvjgabjgYrjgY/jgZPjgajjgIJcbiAgICBjb25zdCBtb2RlbDogc3RyaW5nID0gTEFwcERlZmluZS5yZXNvdXJjZXNDb25maWcuZ2V0TW9kZWxOYW1lcygpW2luZGV4XTtcbiAgICBjb25zdCBtb2RlbFBhdGg6IHN0cmluZyA9IExBcHBEZWZpbmUucmVzb3VyY2VzQ29uZmlnLmdldFJlc291cmNlc1BhdGgoKSArIG1vZGVsICsgJy8nO1xuICAgIGxldCBtb2RlbEpzb25OYW1lOiBzdHJpbmcgPSBMQXBwRGVmaW5lLnJlc291cmNlc0NvbmZpZy5nZXRNb2RlbE5hbWVzKClbaW5kZXhdO1xuICAgIG1vZGVsSnNvbk5hbWUgKz0gJy5tb2RlbDMuanNvbic7XG5cbiAgICBsZXQgbWFwcGVySnNvbk9mTW9kZWwgPSBtb2RlbFBhdGggKyAnbWFwcGVyLmpzb24nO1xuICAgIGxldCBtYXBwZXIgPSBNb2NNYXBwZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICBhd2FpdCBtYXBwZXIuc2V0TWFwcGVySnNvbihtYXBwZXJKc29uT2ZNb2RlbClcbiAgICB0aGlzLnJlbGVhc2VBbGxNb2RlbCgpO1xuICAgIHRoaXMuX21vZGVscy5wdXNoQmFjayhuZXcgTEFwcE1vZGVsKCkpO1xuICAgIHRoaXMuX21vZGVscy5hdCgwKS5sb2FkQXNzZXRzKG1vZGVsUGF0aCwgbW9kZWxKc29uTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Vmlld01hdHJpeChtOiBDdWJpc21NYXRyaXg0NCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgdGhpcy5fdmlld01hdHJpeC5nZXRBcnJheSgpW2ldID0gbS5nZXRBcnJheSgpW2ldO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3ZpZXdNYXRyaXggPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcbiAgICB0aGlzLl9tb2RlbHMgPSBuZXcgY3NtVmVjdG9yPExBcHBNb2RlbD4oKTtcbiAgICB0aGlzLl9zY2VuZUluZGV4ID0gMDtcbiAgICB0aGlzLmNoYW5nZVNjZW5lKHRoaXMuX3NjZW5lSW5kZXgpO1xuICB9XG5cbiAgX3ZpZXdNYXRyaXg6IEN1YmlzbU1hdHJpeDQ0OyAvLyDjg6Ljg4fjg6vmj4/nlLvjgavnlKjjgYTjgot2aWV36KGM5YiXXG4gIF9tb2RlbHM6IGNzbVZlY3RvcjxMQXBwTW9kZWw+OyAvLyDjg6Ljg4fjg6vjgqTjg7Pjgrnjgr/jg7Pjgrnjga7jgrPjg7Pjg4bjg4pcbiAgX3NjZW5lSW5kZXg6IG51bWJlcjsgLy8g6KGo56S644GZ44KL44K344O844Oz44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gIC8vIOODouODvOOCt+ODp+ODs+WGjeeUn+e1guS6huOBruOCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICBfZmluaXNoZWRNb3Rpb24gPSAoc2VsZjogQUN1YmlzbU1vdGlvbik6IHZvaWQgPT4ge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCdNb3Rpb24gRmluaXNoZWQ6Jyk7XG4gICAgY29uc29sZS5sb2coc2VsZik7XG4gIH07XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XG5cbmltcG9ydCB7IEN1YmlzbURlZmF1bHRQYXJhbWV0ZXJJZCB9IGZyb20gJ0BmcmFtZXdvcmsvY3ViaXNtZGVmYXVsdHBhcmFtZXRlcmlkJztcbmltcG9ydCB7IEN1YmlzbU1vZGVsU2V0dGluZ0pzb24gfSBmcm9tICdAZnJhbWV3b3JrL2N1YmlzbW1vZGVsc2V0dGluZ2pzb24nO1xuaW1wb3J0IHsgTW9jTWFwcGVyIH0gZnJvbSAnLi4vLi4vRGVtby9zcmMvTW9jTWFwcGVyJ1xuaW1wb3J0IHtcbiAgQnJlYXRoUGFyYW1ldGVyRGF0YSxcbiAgQ3ViaXNtQnJlYXRoXG59IGZyb20gJ0BmcmFtZXdvcmsvZWZmZWN0L2N1YmlzbWJyZWF0aCc7XG5pbXBvcnQgeyBDdWJpc21FeWVCbGluayB9IGZyb20gJ0BmcmFtZXdvcmsvZWZmZWN0L2N1YmlzbWV5ZWJsaW5rJztcbmltcG9ydCB7IElDdWJpc21Nb2RlbFNldHRpbmcgfSBmcm9tICdAZnJhbWV3b3JrL2ljdWJpc21tb2RlbHNldHRpbmcnO1xuaW1wb3J0IHsgQ3ViaXNtSWRIYW5kbGUgfSBmcm9tICdAZnJhbWV3b3JrL2lkL2N1YmlzbWlkJztcbmltcG9ydCB7IEN1YmlzbUZyYW1ld29yayB9IGZyb20gJ0BmcmFtZXdvcmsvbGl2ZTJkY3ViaXNtZnJhbWV3b3JrJztcbmltcG9ydCB7IEN1YmlzbU1hdHJpeDQ0IH0gZnJvbSAnQGZyYW1ld29yay9tYXRoL2N1YmlzbW1hdHJpeDQ0JztcbmltcG9ydCB7IEN1YmlzbVVzZXJNb2RlbCB9IGZyb20gJ0BmcmFtZXdvcmsvbW9kZWwvY3ViaXNtdXNlcm1vZGVsJztcbmltcG9ydCB7XG4gIEFDdWJpc21Nb3Rpb24sXG4gIEZpbmlzaGVkTW90aW9uQ2FsbGJhY2tcbn0gZnJvbSAnQGZyYW1ld29yay9tb3Rpb24vYWN1YmlzbW1vdGlvbic7XG5pbXBvcnQgeyBDdWJpc21Nb3Rpb24gfSBmcm9tICdAZnJhbWV3b3JrL21vdGlvbi9jdWJpc21tb3Rpb24nO1xuaW1wb3J0IHtcbiAgQ3ViaXNtTW90aW9uUXVldWVFbnRyeUhhbmRsZSxcbiAgSW52YWxpZE1vdGlvblF1ZXVlRW50cnlIYW5kbGVWYWx1ZVxufSBmcm9tICdAZnJhbWV3b3JrL21vdGlvbi9jdWJpc21tb3Rpb25xdWV1ZW1hbmFnZXInO1xuaW1wb3J0IHsgY3NtTWFwIH0gZnJvbSAnQGZyYW1ld29yay90eXBlL2NzbW1hcCc7XG5pbXBvcnQgeyBjc21SZWN0IH0gZnJvbSAnQGZyYW1ld29yay90eXBlL2NzbXJlY3RmJztcbmltcG9ydCB7IGNzbVN0cmluZyB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21zdHJpbmcnO1xuaW1wb3J0IHsgY3NtVmVjdG9yIH0gZnJvbSAnQGZyYW1ld29yay90eXBlL2NzbXZlY3Rvcic7XG5pbXBvcnQgeyBDdWJpc21Mb2dJbmZvIH0gZnJvbSAnQGZyYW1ld29yay91dGlscy9jdWJpc21kZWJ1Zyc7XG5cbmltcG9ydCAqIGFzIExBcHBEZWZpbmUgZnJvbSAnLi9sYXBwZGVmaW5lJztcbmltcG9ydCB7IGNhbnZhcywgZnJhbWVCdWZmZXIsIGdsLCBMQXBwRGVsZWdhdGUgfSBmcm9tICcuL2xhcHBkZWxlZ2F0ZSc7XG5pbXBvcnQgeyBMQXBwUGFsIH0gZnJvbSAnLi9sYXBwcGFsJztcbmltcG9ydCB7IFRleHR1cmVJbmZvIH0gZnJvbSAnLi9sYXBwdGV4dHVyZW1hbmFnZXInO1xuaW1wb3J0IHsgTEFwcFdhdkZpbGVIYW5kbGVyIH0gZnJvbSAnLi9sYXBwd2F2ZmlsZWhhbmRsZXInO1xuXG5lbnVtIExvYWRTdGVwIHtcbiAgTG9hZEFzc2V0cyxcbiAgTG9hZE1vZGVsLFxuICBXYWl0TG9hZE1vZGVsLFxuICBMb2FkRXhwcmVzc2lvbixcbiAgV2FpdExvYWRFeHByZXNzaW9uLFxuICBMb2FkUGh5c2ljcyxcbiAgV2FpdExvYWRQaHlzaWNzLFxuICBMb2FkUG9zZSxcbiAgV2FpdExvYWRQb3NlLFxuICBTZXR1cEV5ZUJsaW5rLFxuICBTZXR1cEJyZWF0aCxcbiAgTG9hZFVzZXJEYXRhLFxuICBXYWl0TG9hZFVzZXJEYXRhLFxuICBTZXR1cEV5ZUJsaW5rSWRzLFxuICBTZXR1cExpcFN5bmNJZHMsXG4gIFNldHVwTGF5b3V0LFxuICBMb2FkTW90aW9uLFxuICBXYWl0TG9hZE1vdGlvbixcbiAgQ29tcGxldGVJbml0aWFsaXplLFxuICBDb21wbGV0ZVNldHVwTW9kZWwsXG4gIExvYWRUZXh0dXJlLFxuICBXYWl0TG9hZFRleHR1cmUsXG4gIENvbXBsZXRlU2V0dXBcbn1cblxuLyoqXG4gKiDjg6bjg7zjgrbjg7zjgYzlrp/pmpvjgavkvb/nlKjjgZnjgovjg6Ljg4fjg6vjga7lrp/oo4Xjgq/jg6njgrk8YnI+XG4gKiDjg6Ljg4fjg6vnlJ/miJDjgIHmqZ/og73jgrPjg7Pjg53jg7zjg43jg7Pjg4jnlJ/miJDjgIHmm7TmlrDlh6bnkIbjgajjg6zjg7Pjg4Djg6rjg7PjgrDjga7lkbzjgbPlh7rjgZfjgpLooYzjgYbjgIJcbiAqL1xuZXhwb3J0IGNsYXNzIExBcHBNb2RlbCBleHRlbmRzIEN1YmlzbVVzZXJNb2RlbCB7XG4gIC8qKlxuICAgKiBtb2RlbDMuanNvbuOBjOe9ruOBi+OCjOOBn+ODh+OCo+ODrOOCr+ODiOODquOBqOODleOCoeOCpOODq+ODkeOCueOBi+OCieODouODh+ODq+OCkueUn+aIkOOBmeOCi1xuICAgKiBAcGFyYW0gZGlyXG4gICAqIEBwYXJhbSBmaWxlTmFtZVxuICAgKi9cbiAgcHVibGljIGxvYWRBc3NldHMoZGlyOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9tb2RlbEhvbWVEaXIgPSBkaXI7XG5cbiAgICBmZXRjaChgJHt0aGlzLl9tb2RlbEhvbWVEaXJ9JHtmaWxlTmFtZX1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSlcbiAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcbiAgICAgICAgY29uc3Qgc2V0dGluZzogSUN1YmlzbU1vZGVsU2V0dGluZyA9IG5ldyBDdWJpc21Nb2RlbFNldHRpbmdKc29uKFxuICAgICAgICAgIGFycmF5QnVmZmVyLFxuICAgICAgICAgIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGhcbiAgICAgICAgKTtcblxuICAgICAgICAvLyDjgrnjg4bjg7zjg4jjgpLmm7TmlrBcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Mb2FkTW9kZWw7XG5cbiAgICAgICAgLy8g57WQ5p6c44KS5L+d5a2YXG4gICAgICAgIHRoaXMuc2V0dXBNb2RlbChzZXR0aW5nKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIG1vZGVsMy5qc29u44GL44KJ44Oi44OH44Or44KS55Sf5oiQ44GZ44KL44CCXG4gICAqIG1vZGVsMy5qc29u44Gu6KiY6L+w44Gr5b6T44Gj44Gm44Oi44OH44Or55Sf5oiQ44CB44Oi44O844K344On44Oz44CB54mp55CG5ryU566X44Gq44Gp44Gu44Kz44Oz44Od44O844ON44Oz44OI55Sf5oiQ44KS6KGM44GG44CCXG4gICAqXG4gICAqIEBwYXJhbSBzZXR0aW5nIElDdWJpc21Nb2RlbFNldHRpbmfjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICovXG4gIHByaXZhdGUgc2V0dXBNb2RlbChzZXR0aW5nOiBJQ3ViaXNtTW9kZWxTZXR0aW5nKTogdm9pZCB7XG4gICAgdGhpcy5fdXBkYXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9tb2RlbFNldHRpbmcgPSBzZXR0aW5nO1xuXG4gICAgLy8gQ3ViaXNtTW9kZWxcbiAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vZGVsRmlsZU5hbWUoKSAhPSAnJykge1xuICAgICAgY29uc3QgbW9kZWxGaWxlTmFtZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb2RlbEZpbGVOYW1lKCk7XG5cbiAgICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke21vZGVsRmlsZU5hbWV9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZE1vZGVsKGFycmF5QnVmZmVyKTtcbiAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRFeHByZXNzaW9uO1xuXG4gICAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgICBsb2FkQ3ViaXNtRXhwcmVzc2lvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZE1vZGVsO1xuICAgIH0gZWxzZSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgnTW9kZWwgZGF0YSBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICB9XG5cbiAgICAvLyBFeHByZXNzaW9uXG4gICAgY29uc3QgbG9hZEN1YmlzbUV4cHJlc3Npb24gPSAoKTogdm9pZCA9PiB7XG4gICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldEV4cHJlc3Npb25Db3VudCgpID4gMCkge1xuICAgICAgICBjb25zdCBjb3VudDogbnVtYmVyID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldEV4cHJlc3Npb25Db3VudCgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25OYW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldEV4cHJlc3Npb25OYW1lKGkpO1xuICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25GaWxlTmFtZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRFeHByZXNzaW9uRmlsZU5hbWUoXG4gICAgICAgICAgICBpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke2V4cHJlc3Npb25GaWxlTmFtZX1gKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbW90aW9uOiBBQ3ViaXNtTW90aW9uID0gdGhpcy5sb2FkRXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgICBhcnJheUJ1ZmZlcixcbiAgICAgICAgICAgICAgICBhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb25OYW1lXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuX2V4cHJlc3Npb25zLmdldFZhbHVlKGV4cHJlc3Npb25OYW1lKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgQUN1YmlzbU1vdGlvbi5kZWxldGUoXG4gICAgICAgICAgICAgICAgICB0aGlzLl9leHByZXNzaW9ucy5nZXRWYWx1ZShleHByZXNzaW9uTmFtZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuX2V4cHJlc3Npb25zLnNldFZhbHVlKGV4cHJlc3Npb25OYW1lLCBudWxsKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuX2V4cHJlc3Npb25zLnNldFZhbHVlKGV4cHJlc3Npb25OYW1lLCBtb3Rpb24pO1xuXG4gICAgICAgICAgICAgIHRoaXMuX2V4cHJlc3Npb25Db3VudCsrO1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLl9leHByZXNzaW9uQ291bnQgPj0gY291bnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRQaHlzaWNzO1xuXG4gICAgICAgICAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgICAgICAgICBsb2FkQ3ViaXNtUGh5c2ljcygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLldhaXRMb2FkRXhwcmVzc2lvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZFBoeXNpY3M7XG5cbiAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgbG9hZEN1YmlzbVBoeXNpY3MoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUGh5c2ljc1xuICAgIGNvbnN0IGxvYWRDdWJpc21QaHlzaWNzID0gKCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRQaHlzaWNzRmlsZU5hbWUoKSAhPSAnJykge1xuICAgICAgICBjb25zdCBwaHlzaWNzRmlsZU5hbWUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0UGh5c2ljc0ZpbGVOYW1lKCk7XG5cbiAgICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7cGh5c2ljc0ZpbGVOYW1lfWApXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRQaHlzaWNzKGFycmF5QnVmZmVyLCBhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcblxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Mb2FkUG9zZTtcblxuICAgICAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgICAgIGxvYWRDdWJpc21Qb3NlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuV2FpdExvYWRQaHlzaWNzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Mb2FkUG9zZTtcblxuICAgICAgICAvLyBjYWxsYmFja1xuICAgICAgICBsb2FkQ3ViaXNtUG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBQb3NlXG4gICAgY29uc3QgbG9hZEN1YmlzbVBvc2UgPSAoKTogdm9pZCA9PiB7XG4gICAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldFBvc2VGaWxlTmFtZSgpICE9ICcnKSB7XG4gICAgICAgIGNvbnN0IHBvc2VGaWxlTmFtZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRQb3NlRmlsZU5hbWUoKTtcblxuICAgICAgICBmZXRjaChgJHt0aGlzLl9tb2RlbEhvbWVEaXJ9JHtwb3NlRmlsZU5hbWV9YClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFBvc2UoYXJyYXlCdWZmZXIsIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLlNldHVwRXllQmxpbms7XG5cbiAgICAgICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgICAgICBzZXR1cEV5ZUJsaW5rKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuV2FpdExvYWRQb3NlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5TZXR1cEV5ZUJsaW5rO1xuXG4gICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgIHNldHVwRXllQmxpbmsoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRXllQmxpbmtcbiAgICBjb25zdCBzZXR1cEV5ZUJsaW5rID0gKCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRFeWVCbGlua1BhcmFtZXRlckNvdW50KCkgPiAwKSB7XG4gICAgICAgIHRoaXMuX2V5ZUJsaW5rID0gQ3ViaXNtRXllQmxpbmsuY3JlYXRlKHRoaXMuX21vZGVsU2V0dGluZyk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuU2V0dXBCcmVhdGg7XG4gICAgICB9XG5cbiAgICAgIC8vIGNhbGxiYWNrXG4gICAgICBzZXR1cEJyZWF0aCgpO1xuICAgIH07XG5cbiAgICAvLyBCcmVhdGhcbiAgICBjb25zdCBzZXR1cEJyZWF0aCA9ICgpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMuX2JyZWF0aCA9IEN1YmlzbUJyZWF0aC5jcmVhdGUoKTtcblxuICAgICAgY29uc3QgYnJlYXRoUGFyYW1ldGVyczogY3NtVmVjdG9yPEJyZWF0aFBhcmFtZXRlckRhdGE+ID0gbmV3IGNzbVZlY3RvcigpO1xuICAgICAgYnJlYXRoUGFyYW1ldGVycy5wdXNoQmFjayhcbiAgICAgICAgbmV3IEJyZWF0aFBhcmFtZXRlckRhdGEodGhpcy5faWRQYXJhbUFuZ2xlWCwgMC4wLCAxNS4wLCA2LjUzNDUsIDAuNSlcbiAgICAgICk7XG4gICAgICBicmVhdGhQYXJhbWV0ZXJzLnB1c2hCYWNrKFxuICAgICAgICBuZXcgQnJlYXRoUGFyYW1ldGVyRGF0YSh0aGlzLl9pZFBhcmFtQW5nbGVZLCAwLjAsIDguMCwgMy41MzQ1LCAwLjUpXG4gICAgICApO1xuICAgICAgYnJlYXRoUGFyYW1ldGVycy5wdXNoQmFjayhcbiAgICAgICAgbmV3IEJyZWF0aFBhcmFtZXRlckRhdGEodGhpcy5faWRQYXJhbUFuZ2xlWiwgMC4wLCAxMC4wLCA1LjUzNDUsIDAuNSlcbiAgICAgICk7XG4gICAgICBicmVhdGhQYXJhbWV0ZXJzLnB1c2hCYWNrKFxuICAgICAgICBuZXcgQnJlYXRoUGFyYW1ldGVyRGF0YSh0aGlzLl9pZFBhcmFtQm9keUFuZ2xlWCwgMC4wLCA0LjAsIDE1LjUzNDUsIDAuNSlcbiAgICAgICk7XG4gICAgICBicmVhdGhQYXJhbWV0ZXJzLnB1c2hCYWNrKFxuICAgICAgICBuZXcgQnJlYXRoUGFyYW1ldGVyRGF0YShcbiAgICAgICAgICBDdWJpc21GcmFtZXdvcmsuZ2V0SWRNYW5hZ2VyKCkuZ2V0SWQoXG4gICAgICAgICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1CcmVhdGhcbiAgICAgICAgICApLFxuICAgICAgICAgIDAuMCxcbiAgICAgICAgICAwLjUsXG4gICAgICAgICAgMy4yMzQ1LFxuICAgICAgICAgIDAuNVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB0aGlzLl9icmVhdGguc2V0UGFyYW1ldGVycyhicmVhdGhQYXJhbWV0ZXJzKTtcbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZFVzZXJEYXRhO1xuXG4gICAgICAvLyBjYWxsYmFja1xuICAgICAgbG9hZFVzZXJEYXRhKCk7XG4gICAgfTtcblxuICAgIC8vIFVzZXJEYXRhXG4gICAgY29uc3QgbG9hZFVzZXJEYXRhID0gKCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRVc2VyRGF0YUZpbGUoKSAhPSAnJykge1xuICAgICAgICBjb25zdCB1c2VyRGF0YUZpbGUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0VXNlckRhdGFGaWxlKCk7XG5cbiAgICAgICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7dXNlckRhdGFGaWxlfWApXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRVc2VyRGF0YShhcnJheUJ1ZmZlciwgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuU2V0dXBFeWVCbGlua0lkcztcblxuICAgICAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgICAgIHNldHVwRXllQmxpbmtJZHMoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLldhaXRMb2FkVXNlckRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLlNldHVwRXllQmxpbmtJZHM7XG5cbiAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgc2V0dXBFeWVCbGlua0lkcygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFeWVCbGlua0lkc1xuICAgIGNvbnN0IHNldHVwRXllQmxpbmtJZHMgPSAoKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCBleWVCbGlua0lkQ291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRFeWVCbGlua1BhcmFtZXRlckNvdW50KCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXllQmxpbmtJZENvdW50OyArK2kpIHtcbiAgICAgICAgdGhpcy5fZXllQmxpbmtJZHMucHVzaEJhY2soXG4gICAgICAgICAgdGhpcy5fbW9kZWxTZXR0aW5nLmdldEV5ZUJsaW5rUGFyYW1ldGVySWQoaSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5TZXR1cExpcFN5bmNJZHM7XG5cbiAgICAgIC8vIGNhbGxiYWNrXG4gICAgICBzZXR1cExpcFN5bmNJZHMoKTtcbiAgICB9O1xuXG4gICAgLy8gTGlwU3luY0lkc1xuICAgIGNvbnN0IHNldHVwTGlwU3luY0lkcyA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IGxpcFN5bmNJZENvdW50ID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldExpcFN5bmNQYXJhbWV0ZXJDb3VudCgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpcFN5bmNJZENvdW50OyArK2kpIHtcbiAgICAgICAgdGhpcy5fbGlwU3luY0lkcy5wdXNoQmFjayh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TGlwU3luY1BhcmFtZXRlcklkKGkpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuU2V0dXBMYXlvdXQ7XG5cbiAgICAgIC8vIGNhbGxiYWNrXG4gICAgICBzZXR1cExheW91dCgpO1xuICAgIH07XG5cbiAgICAvLyBMYXlvdXRcbiAgICBjb25zdCBzZXR1cExheW91dCA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IGxheW91dDogY3NtTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBjc21NYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgICB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TGF5b3V0TWFwKGxheW91dCk7XG4gICAgICB0aGlzLl9tb2RlbE1hdHJpeC5zZXR1cEZyb21MYXlvdXQobGF5b3V0KTtcbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZE1vdGlvbjtcblxuICAgICAgLy8gY2FsbGJhY2tcbiAgICAgIGxvYWRDdWJpc21Nb3Rpb24oKTtcbiAgICB9O1xuXG4gICAgLy8gTW90aW9uXG4gICAgY29uc3QgbG9hZEN1YmlzbU1vdGlvbiA9ICgpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuV2FpdExvYWRNb3Rpb247XG4gICAgICB0aGlzLl9tb2RlbC5zYXZlUGFyYW1ldGVycygpO1xuICAgICAgdGhpcy5fYWxsTW90aW9uQ291bnQgPSAwO1xuICAgICAgdGhpcy5fbW90aW9uQ291bnQgPSAwO1xuICAgICAgY29uc3QgZ3JvdXA6IHN0cmluZ1tdID0gW107XG5cbiAgICAgIGNvbnN0IG1vdGlvbkdyb3VwQ291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25Hcm91cENvdW50KCk7XG5cbiAgICAgIC8vIOODouODvOOCt+ODp+ODs+OBrue3j+aVsOOCkuaxguOCgeOCi1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Rpb25Hcm91cENvdW50OyBpKyspIHtcbiAgICAgICAgZ3JvdXBbaV0gPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uR3JvdXBOYW1lKGkpO1xuICAgICAgICB0aGlzLl9hbGxNb3Rpb25Db3VudCArPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uQ291bnQoZ3JvdXBbaV0pO1xuICAgICAgfVxuXG4gICAgICAvLyDjg6Ljg7zjgrfjg6fjg7Pjga7oqq3jgb/ovrzjgb9cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW90aW9uR3JvdXBDb3VudDsgaSsrKSB7XG4gICAgICAgIHRoaXMucHJlTG9hZE1vdGlvbkdyb3VwKGdyb3VwW2ldKTtcbiAgICAgIH1cblxuICAgICAgLy8g44Oi44O844K344On44Oz44GM44Gq44GE5aC05ZCIXG4gICAgICBpZiAobW90aW9uR3JvdXBDb3VudCA9PSAwKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZFRleHR1cmU7XG5cbiAgICAgICAgLy8g5YWo44Gm44Gu44Oi44O844K344On44Oz44KS5YGc5q2i44GZ44KLXG4gICAgICAgIHRoaXMuX21vdGlvbk1hbmFnZXIuc3RvcEFsbE1vdGlvbnMoKTtcblxuICAgICAgICB0aGlzLl91cGRhdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuICAgICAgICB0aGlzLnNldHVwVGV4dHVyZXMoKTtcbiAgICAgICAgdGhpcy5nZXRSZW5kZXJlcigpLnN0YXJ0VXAoZ2wpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog44OG44Kv44K544OB44Oj44Om44OL44OD44OI44Gr44OG44Kv44K544OB44Oj44KS44Ot44O844OJ44GZ44KLXG4gICAqL1xuICBwcml2YXRlIHNldHVwVGV4dHVyZXMoKTogdm9pZCB7XG4gICAgLy8gaVBob25l44Gn44Gu44Ki44Or44OV44Kh5ZOB6LOq5ZCR5LiK44Gu44Gf44KBVHlwZXNjcmlwdOOBp+OBr3ByZW11bHRpcGxpZWRBbHBoYeOCkuaOoeeUqFxuICAgIGNvbnN0IHVzZVByZW11bHRpcGx5ID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLl9zdGF0ZSA9PSBMb2FkU3RlcC5Mb2FkVGV4dHVyZSkge1xuICAgICAgLy8g44OG44Kv44K544OB44Oj6Kqt44G/6L6844G/55SoXG4gICAgICBjb25zdCB0ZXh0dXJlQ291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRUZXh0dXJlQ291bnQoKTtcblxuICAgICAgZm9yIChcbiAgICAgICAgbGV0IG1vZGVsVGV4dHVyZU51bWJlciA9IDA7XG4gICAgICAgIG1vZGVsVGV4dHVyZU51bWJlciA8IHRleHR1cmVDb3VudDtcbiAgICAgICAgbW9kZWxUZXh0dXJlTnVtYmVyKytcbiAgICAgICkge1xuICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6PlkI3jgYznqbrmloflrZfjgaDjgaPjgZ/loLTlkIjjga/jg63jg7zjg4njg7vjg5DjgqTjg7Pjg4nlh6bnkIbjgpLjgrnjgq3jg4Pjg5dcbiAgICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRUZXh0dXJlRmlsZU5hbWUobW9kZWxUZXh0dXJlTnVtYmVyKSA9PSAnJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRUZXh0dXJlRmlsZU5hbWUgbnVsbCcpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2ViR0zjga7jg4bjgq/jgrnjg4Hjg6Pjg6bjg4vjg4Pjg4jjgavjg4bjgq/jgrnjg4Hjg6PjgpLjg63jg7zjg4njgZnjgotcbiAgICAgICAgbGV0IHRleHR1cmVQYXRoID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldFRleHR1cmVGaWxlTmFtZShcbiAgICAgICAgICBtb2RlbFRleHR1cmVOdW1iZXJcbiAgICAgICAgKTtcbiAgICAgICAgdGV4dHVyZVBhdGggPSB0aGlzLl9tb2RlbEhvbWVEaXIgKyB0ZXh0dXJlUGF0aDtcblxuICAgICAgICAvLyDjg63jg7zjg4nlrozkuobmmYLjgavlkbzjgbPlh7rjgZnjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcbiAgICAgICAgY29uc3Qgb25Mb2FkID0gKHRleHR1cmVJbmZvOiBUZXh0dXJlSW5mbyk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuZ2V0UmVuZGVyZXIoKS5iaW5kVGV4dHVyZShtb2RlbFRleHR1cmVOdW1iZXIsIHRleHR1cmVJbmZvLmlkKTtcblxuICAgICAgICAgIHRoaXMuX3RleHR1cmVDb3VudCsrO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3RleHR1cmVDb3VudCA+PSB0ZXh0dXJlQ291bnQpIHtcbiAgICAgICAgICAgIC8vIOODreODvOODieWujOS6hlxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Db21wbGV0ZVNldHVwO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyDoqq3jgb/ovrzjgb9cbiAgICAgICAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKClcbiAgICAgICAgICAuZ2V0VGV4dHVyZU1hbmFnZXIoKVxuICAgICAgICAgIC5jcmVhdGVUZXh0dXJlRnJvbVBuZ0ZpbGUodGV4dHVyZVBhdGgsIHVzZVByZW11bHRpcGx5LCBvbkxvYWQpO1xuICAgICAgICB0aGlzLmdldFJlbmRlcmVyKCkuc2V0SXNQcmVtdWx0aXBsaWVkQWxwaGEodXNlUHJlbXVsdGlwbHkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLldhaXRMb2FkVGV4dHVyZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44KS5YaN5qeL56+J44GZ44KLXG4gICAqL1xuICBwdWJsaWMgcmVsb2FkUmVuZGVyZXIoKTogdm9pZCB7XG4gICAgdGhpcy5kZWxldGVSZW5kZXJlcigpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKTtcbiAgICB0aGlzLnNldHVwVGV4dHVyZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmm7TmlrBcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N0YXRlICE9IExvYWRTdGVwLkNvbXBsZXRlU2V0dXApIHJldHVybjtcblxuICAgIGNvbnN0IGRlbHRhVGltZVNlY29uZHM6IG51bWJlciA9IExBcHBQYWwuZ2V0RGVsdGFUaW1lKCk7XG4gICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzICs9IGRlbHRhVGltZVNlY29uZHM7XG5cbiAgICB0aGlzLl9kcmFnTWFuYWdlci51cGRhdGUoZGVsdGFUaW1lU2Vjb25kcyk7XG4gICAgdGhpcy5fZHJhZ1ggPSB0aGlzLl9kcmFnTWFuYWdlci5nZXRYKCk7XG4gICAgdGhpcy5fZHJhZ1kgPSB0aGlzLl9kcmFnTWFuYWdlci5nZXRZKCk7XG5cbiAgICAvLyDjg6Ljg7zjgrfjg6fjg7Pjgavjgojjgovjg5Hjg6njg6Hjg7zjgr/mm7TmlrDjga7mnInnhKFcbiAgICBsZXQgbW90aW9uVXBkYXRlZCA9IGZhbHNlO1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuX21vZGVsLmxvYWRQYXJhbWV0ZXJzKCk7IC8vIOWJjeWbnuOCu+ODvOODluOBleOCjOOBn+eKtuaFi+OCkuODreODvOODiVxuICAgIGlmICh0aGlzLl9tb3Rpb25NYW5hZ2VyLmlzRmluaXNoZWQoKSkge1xuICAgICAgLy8g44Oi44O844K344On44Oz44Gu5YaN55Sf44GM44Gq44GE5aC05ZCI44CB5b6F5qmf44Oi44O844K344On44Oz44Gu5Lit44GL44KJ44Op44Oz44OA44Og44Gn5YaN55Sf44GZ44KLXG4gICAgICB0aGlzLnN0YXJ0UmFuZG9tTW90aW9uKFxuICAgICAgICBMQXBwRGVmaW5lLk1vdGlvbkdyb3VwSWRsZSxcbiAgICAgICAgTEFwcERlZmluZS5Qcmlvcml0eUlkbGVcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdGlvblVwZGF0ZWQgPSB0aGlzLl9tb3Rpb25NYW5hZ2VyLnVwZGF0ZU1vdGlvbihcbiAgICAgICAgdGhpcy5fbW9kZWwsXG4gICAgICAgIGRlbHRhVGltZVNlY29uZHNcbiAgICAgICk7IC8vIOODouODvOOCt+ODp+ODs+OCkuabtOaWsFxuICAgIH1cbiAgICB0aGlzLl9tb2RlbC5zYXZlUGFyYW1ldGVycygpOyAvLyDnirbmhYvjgpLkv53lrZhcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyDjgb7jgbDjgZ/jgY1cbiAgICBpZiAoIW1vdGlvblVwZGF0ZWQpIHtcbiAgICAgIGlmICh0aGlzLl9leWVCbGluayAhPSBudWxsKSB7XG4gICAgICAgIC8vIOODoeOCpOODs+ODouODvOOCt+ODp+ODs+OBruabtOaWsOOBjOOBquOBhOOBqOOBjVxuICAgICAgICB0aGlzLl9leWVCbGluay51cGRhdGVQYXJhbWV0ZXJzKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTsgLy8g55uu44OR44OBXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V4cHJlc3Npb25NYW5hZ2VyICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX2V4cHJlc3Npb25NYW5hZ2VyLnVwZGF0ZU1vdGlvbih0aGlzLl9tb2RlbCwgZGVsdGFUaW1lU2Vjb25kcyk7IC8vIOihqOaDheOBp+ODkeODqeODoeODvOOCv+abtOaWsO+8iOebuOWvvuWkieWMlu+8iVxuICAgIH1cblxuICAgIC8vIOODieODqeODg+OCsOOBq+OCiOOCi+WkieWMllxuICAgIC8vIOODieODqeODg+OCsOOBq+OCiOOCi+mhlOOBruWQkeOBjeOBruiqv+aVtFxuICAgIHRoaXMuX21vZGVsLmFkZFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtQW5nbGVYLCB0aGlzLl9kcmFnWCAqIDMwKTsgLy8gLTMw44GL44KJMzDjga7lgKTjgpLliqDjgYjjgotcbiAgICB0aGlzLl9tb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5faWRQYXJhbUFuZ2xlWSwgdGhpcy5fZHJhZ1kgKiAzMCk7XG4gICAgdGhpcy5fbW9kZWwuYWRkUGFyYW1ldGVyVmFsdWVCeUlkKFxuICAgICAgdGhpcy5faWRQYXJhbUFuZ2xlWixcbiAgICAgIHRoaXMuX2RyYWdYICogdGhpcy5fZHJhZ1kgKiAtMzBcbiAgICApO1xuXG4gICAgLy8g44OJ44Op44OD44Kw44Gr44KI44KL5L2T44Gu5ZCR44GN44Gu6Kq/5pW0XG4gICAgdGhpcy5fbW9kZWwuYWRkUGFyYW1ldGVyVmFsdWVCeUlkKFxuICAgICAgdGhpcy5faWRQYXJhbUJvZHlBbmdsZVgsXG4gICAgICB0aGlzLl9kcmFnWCAqIDEwXG4gICAgKTsgLy8gLTEw44GL44KJMTDjga7lgKTjgpLliqDjgYjjgotcblxuICAgIC8vIOODieODqeODg+OCsOOBq+OCiOOCi+ebruOBruWQkeOBjeOBruiqv+aVtFxuICAgIHRoaXMuX21vZGVsLmFkZFBhcmFtZXRlclZhbHVlQnlJZCh0aGlzLl9pZFBhcmFtRXllQmFsbFgsIHRoaXMuX2RyYWdYKTsgLy8gLTHjgYvjgokx44Gu5YCk44KS5Yqg44GI44KLXG4gICAgdGhpcy5fbW9kZWwuYWRkUGFyYW1ldGVyVmFsdWVCeUlkKHRoaXMuX2lkUGFyYW1FeWVCYWxsWSwgdGhpcy5fZHJhZ1kpO1xuXG4gICAgLy8g5ZG85ZC444Gq44GpXG4gICAgaWYgKHRoaXMuX2JyZWF0aCAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9icmVhdGgudXBkYXRlUGFyYW1ldGVycyh0aGlzLl9tb2RlbCwgZGVsdGFUaW1lU2Vjb25kcyk7XG4gICAgfVxuXG4gICAgLy8g54mp55CG5ryU566X44Gu6Kit5a6aXG4gICAgaWYgKHRoaXMuX3BoeXNpY3MgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fcGh5c2ljcy5ldmFsdWF0ZSh0aGlzLl9tb2RlbCwgZGVsdGFUaW1lU2Vjb25kcyk7XG4gICAgfVxuXG4gICAgLy8g44Oq44OD44OX44K344Oz44Kv44Gu6Kit5a6aXG4gICAgaWYgKHRoaXMuX2xpcHN5bmMpIHtcbiAgICAgIGxldCB2YWx1ZSA9IDAuMDsgLy8g44Oq44Ki44Or44K/44Kk44Og44Gn44Oq44OD44OX44K344Oz44Kv44KS6KGM44GG5aC05ZCI44CB44K344K544OG44Og44GL44KJ6Z+z6YeP44KS5Y+W5b6X44GX44Gm44CBMH4x44Gu56+E5Zuy44Gn5YCk44KS5YWl5Yqb44GX44G+44GZ44CCXG5cbiAgICAgIHRoaXMuX3dhdkZpbGVIYW5kbGVyLnVwZGF0ZShkZWx0YVRpbWVTZWNvbmRzKTtcbiAgICAgIHZhbHVlID0gdGhpcy5fd2F2RmlsZUhhbmRsZXIuZ2V0Um1zKCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGlwU3luY0lkcy5nZXRTaXplKCk7ICsraSkge1xuICAgICAgICB0aGlzLl9tb2RlbC5hZGRQYXJhbWV0ZXJWYWx1ZUJ5SWQodGhpcy5fbGlwU3luY0lkcy5hdChpKSwgdmFsdWUsIDAuOCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g44Od44O844K644Gu6Kit5a6aXG4gICAgaWYgKHRoaXMuX3Bvc2UgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9zZS51cGRhdGVQYXJhbWV0ZXJzKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RlbC51cGRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvJXmlbDjgafmjIflrprjgZfjgZ/jg6Ljg7zjgrfjg6fjg7Pjga7lho3nlJ/jgpLplovlp4vjgZnjgotcbiAgICogQHBhcmFtIGdyb3VwIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+WQjVxuICAgKiBAcGFyYW0gbm8g44Kw44Or44O844OX5YaF44Gu55Wq5Y+3XG4gICAqIEBwYXJhbSBwcmlvcml0eSDlhKrlhYjluqZcbiAgICogQHBhcmFtIG9uRmluaXNoZWRNb3Rpb25IYW5kbGVyIOODouODvOOCt+ODp+ODs+WGjeeUn+e1guS6huaZguOBq+WRvOOBs+WHuuOBleOCjOOCi+OCs+ODvOODq+ODkOODg+OCr+mWouaVsFxuICAgKiBAcmV0dXJuIOmWi+Wni+OBl+OBn+ODouODvOOCt+ODp+ODs+OBruitmOWIpeeVquWPt+OCkui/lOOBmeOAguWAi+WIpeOBruODouODvOOCt+ODp+ODs+OBjOe1guS6huOBl+OBn+OBi+WQpuOBi+OCkuWIpOWumuOBmeOCi2lzRmluaXNoZWQoKeOBruW8leaVsOOBp+S9v+eUqOOBmeOCi+OAgumWi+Wni+OBp+OBjeOBquOBhOaZguOBr1stMV1cbiAgICovXG4gIHB1YmxpYyBzdGFydE1vdGlvbihcbiAgICBncm91cDogc3RyaW5nLFxuICAgIG5vOiBudW1iZXIsXG4gICAgcHJpb3JpdHk6IG51bWJlcixcbiAgICBvbkZpbmlzaGVkTW90aW9uSGFuZGxlcj86IEZpbmlzaGVkTW90aW9uQ2FsbGJhY2tcbiAgKTogQ3ViaXNtTW90aW9uUXVldWVFbnRyeUhhbmRsZSB7XG4gICAgaWYgKHByaW9yaXR5ID09IExBcHBEZWZpbmUuUHJpb3JpdHlGb3JjZSkge1xuICAgICAgdGhpcy5fbW90aW9uTWFuYWdlci5zZXRSZXNlcnZlUHJpb3JpdHkocHJpb3JpdHkpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX21vdGlvbk1hbmFnZXIucmVzZXJ2ZU1vdGlvbihwcmlvcml0eSkpIHtcbiAgICAgIGlmICh0aGlzLl9kZWJ1Z01vZGUpIHtcbiAgICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoXCJbQVBQXWNhbid0IHN0YXJ0IG1vdGlvbi5cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gSW52YWxpZE1vdGlvblF1ZXVlRW50cnlIYW5kbGVWYWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBtb3Rpb25GaWxlTmFtZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25GaWxlTmFtZShncm91cCwgbm8pO1xuXG4gICAgLy8gZXgpIGlkbGVfMFxuICAgIGNvbnN0IG5hbWUgPSBgJHtncm91cH1fJHtub31gO1xuICAgIGxldCBtb3Rpb246IEN1YmlzbU1vdGlvbiA9IHRoaXMuX21vdGlvbnMuZ2V0VmFsdWUobmFtZSkgYXMgQ3ViaXNtTW90aW9uO1xuICAgIGxldCBhdXRvRGVsZXRlID0gZmFsc2U7XG5cbiAgICBpZiAobW90aW9uID09IG51bGwpIHtcbiAgICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke21vdGlvbkZpbGVOYW1lfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcbiAgICAgICAgICBtb3Rpb24gPSB0aGlzLmxvYWRNb3Rpb24oXG4gICAgICAgICAgICBhcnJheUJ1ZmZlcixcbiAgICAgICAgICAgIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgb25GaW5pc2hlZE1vdGlvbkhhbmRsZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCBmYWRlVGltZTogbnVtYmVyID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkZhZGVJblRpbWVWYWx1ZShcbiAgICAgICAgICAgIGdyb3VwLFxuICAgICAgICAgICAgbm9cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKGZhZGVUaW1lID49IDAuMCkge1xuICAgICAgICAgICAgbW90aW9uLnNldEZhZGVJblRpbWUoZmFkZVRpbWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZhZGVUaW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkZhZGVPdXRUaW1lVmFsdWUoZ3JvdXAsIG5vKTtcbiAgICAgICAgICBpZiAoZmFkZVRpbWUgPj0gMC4wKSB7XG4gICAgICAgICAgICBtb3Rpb24uc2V0RmFkZU91dFRpbWUoZmFkZVRpbWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1vdGlvbi5zZXRFZmZlY3RJZHModGhpcy5fZXllQmxpbmtJZHMsIHRoaXMuX2xpcFN5bmNJZHMpO1xuICAgICAgICAgIGF1dG9EZWxldGUgPSB0cnVlOyAvLyDntYLkuobmmYLjgavjg6Hjg6Ljg6rjgYvjgonliYrpmaRcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdGlvbi5zZXRGaW5pc2hlZE1vdGlvbkhhbmRsZXIob25GaW5pc2hlZE1vdGlvbkhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vdm9pY2VcbiAgICBjb25zdCB2b2ljZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25Tb3VuZEZpbGVOYW1lKGdyb3VwLCBubyk7XG4gICAgaWYgKHZvaWNlLmxvY2FsZUNvbXBhcmUoJycpICE9IDApIHtcbiAgICAgIGxldCBwYXRoID0gdm9pY2U7XG4gICAgICBwYXRoID0gdGhpcy5fbW9kZWxIb21lRGlyICsgcGF0aDtcbiAgICAgIGNvbnNvbGUubG9nKFwibGFwcG1vZGVsLnRzIOWKoOi9veS6humfs+mikeaWh+S7tjpcIitwYXRoKVxuXG4gICAgICB0aGlzLl93YXZGaWxlSGFuZGxlci5zdGFydChwYXRoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGVidWdNb2RlKSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShgW0FQUF1zdGFydCBtb3Rpb246IFske2dyb3VwfV8ke25vfWApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbW90aW9uTWFuYWdlci5zdGFydE1vdGlvblByaW9yaXR5KFxuICAgICAgbW90aW9uLFxuICAgICAgYXV0b0RlbGV0ZSxcbiAgICAgIHByaW9yaXR5XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6njg7Pjg4Djg6DjgavpgbjjgbDjgozjgZ/jg6Ljg7zjgrfjg6fjg7Pjga7lho3nlJ/jgpLplovlp4vjgZnjgovjgIJcbiAgICogQHBhcmFtIGdyb3VwIOODouODvOOCt+ODp+ODs+OCsOODq+ODvOODl+WQjVxuICAgKiBAcGFyYW0gcHJpb3JpdHkg5YSq5YWI5bqmXG4gICAqIEBwYXJhbSBvbkZpbmlzaGVkTW90aW9uSGFuZGxlciDjg6Ljg7zjgrfjg6fjg7Plho3nlJ/ntYLkuobmmYLjgavlkbzjgbPlh7rjgZXjgozjgovjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbBcbiAgICogQHJldHVybiDplovlp4vjgZfjgZ/jg6Ljg7zjgrfjg6fjg7Pjga7orZjliKXnlarlj7fjgpLov5TjgZnjgILlgIvliKXjga7jg6Ljg7zjgrfjg6fjg7PjgYzntYLkuobjgZfjgZ/jgYvlkKbjgYvjgpLliKTlrprjgZnjgotpc0ZpbmlzaGVkKCnjga7lvJXmlbDjgafkvb/nlKjjgZnjgovjgILplovlp4vjgafjgY3jgarjgYTmmYLjga9bLTFdXG4gICAqL1xuICBwdWJsaWMgc3RhcnRSYW5kb21Nb3Rpb24oXG4gICAgZ3JvdXA6IHN0cmluZyxcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIG9uRmluaXNoZWRNb3Rpb25IYW5kbGVyPzogRmluaXNoZWRNb3Rpb25DYWxsYmFja1xuICApOiBDdWJpc21Nb3Rpb25RdWV1ZUVudHJ5SGFuZGxlIHtcbiAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkNvdW50KGdyb3VwKSA9PSAwKSB7XG4gICAgICByZXR1cm4gSW52YWxpZE1vdGlvblF1ZXVlRW50cnlIYW5kbGVWYWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBubzogbnVtYmVyID0gTWF0aC5mbG9vcihcbiAgICAgIE1hdGgucmFuZG9tKCkgKiB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW90aW9uQ291bnQoZ3JvdXApXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLnN0YXJ0TW90aW9uKGdyb3VwLCBubywgcHJpb3JpdHksIG9uRmluaXNoZWRNb3Rpb25IYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvJXmlbDjgafmjIflrprjgZfjgZ/ooajmg4Xjg6Ljg7zjgrfjg6fjg7PjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICpcbiAgICogQHBhcmFtIGV4cHJlc3Npb25JZCDooajmg4Xjg6Ljg7zjgrfjg6fjg7Pjga5JRFxuICAgKi9cbiAgcHVibGljIHNldEV4cHJlc3Npb24oZXhwcmVzc2lvbklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBtb3Rpb246IEFDdWJpc21Nb3Rpb24gPSB0aGlzLl9leHByZXNzaW9ucy5nZXRWYWx1ZShleHByZXNzaW9uSWQpO1xuXG4gICAgaWYgKHRoaXMuX2RlYnVnTW9kZSkge1xuICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoYFtBUFBdZXhwcmVzc2lvbjogWyR7ZXhwcmVzc2lvbklkfV1gKTtcbiAgICB9XG5cbiAgICBpZiAobW90aW9uICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX2V4cHJlc3Npb25NYW5hZ2VyLnN0YXJ0TW90aW9uUHJpb3JpdHkoXG4gICAgICAgIG1vdGlvbixcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIExBcHBEZWZpbmUuUHJpb3JpdHlGb3JjZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2RlYnVnTW9kZSkge1xuICAgICAgICBMQXBwUGFsLnByaW50TWVzc2FnZShgW0FQUF1leHByZXNzaW9uWyR7ZXhwcmVzc2lvbklkfV0gaXMgbnVsbGApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6njg7Pjg4Djg6DjgavpgbjjgbDjgozjgZ/ooajmg4Xjg6Ljg7zjgrfjg6fjg7PjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICovXG4gIHB1YmxpYyBzZXRSYW5kb21FeHByZXNzaW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9leHByZXNzaW9ucy5nZXRTaXplKCkgPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9leHByZXNzaW9ucy5nZXRTaXplKCkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9leHByZXNzaW9ucy5nZXRTaXplKCk7IGkrKykge1xuICAgICAgaWYgKGkgPT0gbm8pIHtcbiAgICAgICAgY29uc3QgbmFtZTogc3RyaW5nID0gdGhpcy5fZXhwcmVzc2lvbnMuX2tleVZhbHVlc1tpXS5maXJzdDtcbiAgICAgICAgdGhpcy5zZXRFeHByZXNzaW9uKG5hbWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOCpOODmeODs+ODiOOBrueZuueBq+OCkuWPl+OBkeWPluOCi1xuICAgKi9cbiAgcHVibGljIG1vdGlvbkV2ZW50RmlyZWQoZXZlbnRWYWx1ZTogY3NtU3RyaW5nKTogdm9pZCB7XG4gICAgQ3ViaXNtTG9nSW5mbygnezB9IGlzIGZpcmVkIG9uIExBcHBNb2RlbCEhJywgZXZlbnRWYWx1ZS5zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvZPjgZ/jgorliKTlrprjg4bjgrnjg4hcbiAgICog5oyH5a6a77yp77yk44Gu6aCC54K544Oq44K544OI44GL44KJ55+p5b2i44KS6KiI566X44GX44CB5bqn5qiZ44KS44GM55+p5b2i56+E5Zuy5YaF44GL5Yik5a6a44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBoaXRBcmVuYU5hbWUgIOW9k+OBn+OCiuWIpOWumuOCkuODhuOCueODiOOBmeOCi+WvvuixoeOBrklEXG4gICAqIEBwYXJhbSB4ICAgICAgICAgICAgIOWIpOWumuOCkuihjOOBhljluqfmqJlcbiAgICogQHBhcmFtIHkgICAgICAgICAgICAg5Yik5a6a44KS6KGM44GGWeW6p+aomVxuICAgKi9cbiAgcHVibGljIGhpdFRlc3QoaGl0QXJlbmFOYW1lOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgLy8g6YCP5piO5pmC44Gv5b2T44Gf44KK5Yik5a6a54Sh44GX44CCXG4gICAgaWYgKHRoaXMuX29wYWNpdHkgPCAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRIaXRBcmVhc0NvdW50KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0SGl0QXJlYU5hbWUoaSkgPT0gaGl0QXJlbmFOYW1lKSB7XG4gICAgICAgIGNvbnN0IGRyYXdJZDogQ3ViaXNtSWRIYW5kbGUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0SGl0QXJlYUlkKGkpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0hpdChkcmF3SWQsIHgsIHkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg7zjgrfjg6fjg7Pjg4fjg7zjgr/jgpLjgrDjg6vjg7zjg5flkI3jgYvjgonkuIDmi6zjgafjg63jg7zjg4njgZnjgovjgIJcbiAgICog44Oi44O844K344On44Oz44OH44O844K/44Gu5ZCN5YmN44Gv5YaF6YOo44GnTW9kZWxTZXR0aW5n44GL44KJ5Y+W5b6X44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBncm91cCDjg6Ljg7zjgrfjg6fjg7Pjg4fjg7zjgr/jga7jgrDjg6vjg7zjg5flkI1cbiAgICovXG4gIHB1YmxpYyBwcmVMb2FkTW90aW9uR3JvdXAoZ3JvdXA6IHN0cmluZyk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkNvdW50KGdyb3VwKTsgaSsrKSB7XG4gICAgICBjb25zdCBtb3Rpb25GaWxlTmFtZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25GaWxlTmFtZShncm91cCwgaSk7XG5cbiAgICAgIC8vIGV4KSBpZGxlXzBcbiAgICAgIGNvbnN0IG5hbWUgPSBgJHtncm91cH1fJHtpfWA7XG4gICAgICBpZiAodGhpcy5fZGVidWdNb2RlKSB7XG4gICAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKFxuICAgICAgICAgIGBbQVBQXWxvYWQgbW90aW9uOiAke21vdGlvbkZpbGVOYW1lfSA9PiBbJHtuYW1lfV1gXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke21vdGlvbkZpbGVOYW1lfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IHtcbiAgICAgICAgICBjb25zdCB0bXBNb3Rpb246IEN1YmlzbU1vdGlvbiA9IHRoaXMubG9hZE1vdGlvbihcbiAgICAgICAgICAgIGFycmF5QnVmZmVyLFxuICAgICAgICAgICAgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgbGV0IGZhZGVUaW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkZhZGVJblRpbWVWYWx1ZShncm91cCwgaSk7XG4gICAgICAgICAgaWYgKGZhZGVUaW1lID49IDAuMCkge1xuICAgICAgICAgICAgdG1wTW90aW9uLnNldEZhZGVJblRpbWUoZmFkZVRpbWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZhZGVUaW1lID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvbkZhZGVPdXRUaW1lVmFsdWUoZ3JvdXAsIGkpO1xuICAgICAgICAgIGlmIChmYWRlVGltZSA+PSAwLjApIHtcbiAgICAgICAgICAgIHRtcE1vdGlvbi5zZXRGYWRlT3V0VGltZShmYWRlVGltZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRtcE1vdGlvbi5zZXRFZmZlY3RJZHModGhpcy5fZXllQmxpbmtJZHMsIHRoaXMuX2xpcFN5bmNJZHMpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX21vdGlvbnMuZ2V0VmFsdWUobmFtZSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgQUN1YmlzbU1vdGlvbi5kZWxldGUodGhpcy5fbW90aW9ucy5nZXRWYWx1ZShuYW1lKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbW90aW9ucy5zZXRWYWx1ZShuYW1lLCB0bXBNb3Rpb24pO1xuXG4gICAgICAgICAgdGhpcy5fbW90aW9uQ291bnQrKztcbiAgICAgICAgICBpZiAodGhpcy5fbW90aW9uQ291bnQgPj0gdGhpcy5fYWxsTW90aW9uQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZFRleHR1cmU7XG5cbiAgICAgICAgICAgIC8vIOWFqOOBpuOBruODouODvOOCt+ODp+ODs+OCkuWBnOatouOBmeOCi1xuICAgICAgICAgICAgdGhpcy5fbW90aW9uTWFuYWdlci5zdG9wQWxsTW90aW9ucygpO1xuXG4gICAgICAgICAgICB0aGlzLl91cGRhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG4gICAgICAgICAgICB0aGlzLnNldHVwVGV4dHVyZXMoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVuZGVyZXIoKS5zdGFydFVwKGdsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICog44GZ44G544Gm44Gu44Oi44O844K344On44Oz44OH44O844K/44KS6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgcmVsZWFzZU1vdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5fbW90aW9ucy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWFqOOBpuOBruihqOaDheODh+ODvOOCv+OCkuino+aUvuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHJlbGVhc2VFeHByZXNzaW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLl9leHByZXNzaW9ucy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODh+ODq+OCkuaPj+eUu+OBmeOCi+WHpueQhuOAguODouODh+ODq+OCkuaPj+eUu+OBmeOCi+epuumWk+OBrlZpZXctUHJvamVjdGlvbuihjOWIl+OCkua4oeOBmeOAglxuICAgKi9cbiAgcHVibGljIGRvRHJhdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbW9kZWwgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgLy8g44Kt44Oj44Oz44OQ44K544K144Kk44K644KS5rih44GZXG4gICAgY29uc3Qgdmlld3BvcnQ6IG51bWJlcltdID0gWzAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF07XG5cbiAgICB0aGlzLmdldFJlbmRlcmVyKCkuc2V0UmVuZGVyU3RhdGUoZnJhbWVCdWZmZXIsIHZpZXdwb3J0KTtcbiAgICB0aGlzLmdldFJlbmRlcmVyKCkuZHJhd01vZGVsKCk7XG4gIH1cblxuICAvKipcbiAgICog44Oi44OH44Or44KS5o+P55S744GZ44KL5Yem55CG44CC44Oi44OH44Or44KS5o+P55S744GZ44KL56m66ZaT44GuVmlldy1Qcm9qZWN0aW9u6KGM5YiX44KS5rih44GZ44CCXG4gICAqL1xuICBwdWJsaWMgZHJhdyhtYXRyaXg6IEN1YmlzbU1hdHJpeDQ0KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX21vZGVsID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDlkIToqq3jgb/ovrzjgb/ntYLkuoblvoxcbiAgICBpZiAodGhpcy5fc3RhdGUgPT0gTG9hZFN0ZXAuQ29tcGxldGVTZXR1cCkge1xuICAgICAgbWF0cml4Lm11bHRpcGx5QnlNYXRyaXgodGhpcy5fbW9kZWxNYXRyaXgpO1xuXG4gICAgICB0aGlzLmdldFJlbmRlcmVyKCkuc2V0TXZwTWF0cml4KG1hdHJpeCk7XG5cbiAgICAgIHRoaXMuZG9EcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9tb2RlbFNldHRpbmcgPSBudWxsO1xuICAgIHRoaXMuX21vZGVsSG9tZURpciA9IG51bGw7XG4gICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzID0gMC4wO1xuXG4gICAgdGhpcy5fZXllQmxpbmtJZHMgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbUlkSGFuZGxlPigpO1xuICAgIHRoaXMuX2xpcFN5bmNJZHMgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbUlkSGFuZGxlPigpO1xuXG4gICAgdGhpcy5fbW90aW9ucyA9IG5ldyBjc21NYXA8c3RyaW5nLCBBQ3ViaXNtTW90aW9uPigpO1xuICAgIHRoaXMuX2V4cHJlc3Npb25zID0gbmV3IGNzbU1hcDxzdHJpbmcsIEFDdWJpc21Nb3Rpb24+KCk7XG5cbiAgICB0aGlzLl9oaXRBcmVhID0gbmV3IGNzbVZlY3Rvcjxjc21SZWN0PigpO1xuICAgIHRoaXMuX3VzZXJBcmVhID0gbmV3IGNzbVZlY3Rvcjxjc21SZWN0PigpO1xuICAgIGxldCBtYXBwZXIgPSBNb2NNYXBwZXIubWFwcGVyO1xuICAgIGlmIChtYXBwZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5faWRQYXJhbUFuZ2xlWCA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgICAgbWFwcGVyLmdldFBhcmVtZXRlcihcIlBhcmFtQW5nbGVYXCIpXG4gICAgICApO1xuICAgICAgdGhpcy5faWRQYXJhbUFuZ2xlWSA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgICAgbWFwcGVyLmdldFBhcmVtZXRlcihcIlBhcmFtQW5nbGVZXCIpXG4gICAgICApO1xuICAgICAgdGhpcy5faWRQYXJhbUFuZ2xlWiA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgICAgbWFwcGVyLmdldFBhcmVtZXRlcihcIlBhcmFtQW5nbGVaXCIpXG4gICAgICApO1xuICAgICAgdGhpcy5faWRQYXJhbUV5ZUJhbGxYID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgICBtYXBwZXIuZ2V0UGFyZW1ldGVyKFwiUGFyYW1FeWVCYWxsWFwiKVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2lkUGFyYW1FeWVCYWxsWSA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgICAgbWFwcGVyLmdldFBhcmVtZXRlcihcIlBhcmFtRXllQmFsbFlcIilcbiAgICAgICk7XG4gICAgICB0aGlzLl9pZFBhcmFtQm9keUFuZ2xlWCA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgICAgbWFwcGVyLmdldFBhcmVtZXRlcihcIlBhcmFtQm9keUFuZ2xlWFwiKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faWRQYXJhbUFuZ2xlWCA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQW5nbGVYXG4gICAgICApO1xuICAgICAgdGhpcy5faWRQYXJhbUFuZ2xlWSA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQW5nbGVZXG4gICAgICApO1xuICAgICAgdGhpcy5faWRQYXJhbUFuZ2xlWiA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQW5nbGVaXG4gICAgICApO1xuICAgICAgdGhpcy5faWRQYXJhbUV5ZUJhbGxYID0gQ3ViaXNtRnJhbWV3b3JrLmdldElkTWFuYWdlcigpLmdldElkKFxuICAgICAgICBDdWJpc21EZWZhdWx0UGFyYW1ldGVySWQuUGFyYW1FeWVCYWxsWFxuICAgICAgKTtcbiAgICAgIHRoaXMuX2lkUGFyYW1FeWVCYWxsWSA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtRXllQmFsbFlcbiAgICAgICk7XG4gICAgICB0aGlzLl9pZFBhcmFtQm9keUFuZ2xlWCA9IEN1YmlzbUZyYW1ld29yay5nZXRJZE1hbmFnZXIoKS5nZXRJZChcbiAgICAgICAgQ3ViaXNtRGVmYXVsdFBhcmFtZXRlcklkLlBhcmFtQm9keUFuZ2xlWFxuICAgICAgKTtcbiAgICB9XG4gXG4gICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Mb2FkQXNzZXRzO1xuICAgIHRoaXMuX2V4cHJlc3Npb25Db3VudCA9IDA7XG4gICAgdGhpcy5fdGV4dHVyZUNvdW50ID0gMDtcbiAgICB0aGlzLl9tb3Rpb25Db3VudCA9IDA7XG4gICAgdGhpcy5fYWxsTW90aW9uQ291bnQgPSAwO1xuICAgIHRoaXMuX3dhdkZpbGVIYW5kbGVyID0gbmV3IExBcHBXYXZGaWxlSGFuZGxlcigpO1xuICB9XG5cbiAgX21vZGVsU2V0dGluZzogSUN1YmlzbU1vZGVsU2V0dGluZzsgLy8g44Oi44OH44Or44K744OD44OG44Kj44Oz44Kw5oOF5aCxXG4gIF9tb2RlbEhvbWVEaXI6IHN0cmluZzsgLy8g44Oi44OH44Or44K744OD44OG44Kj44Oz44Kw44GM572u44GL44KM44Gf44OH44Kj44Os44Kv44OI44OqXG4gIF91c2VyVGltZVNlY29uZHM6IG51bWJlcjsgLy8g44OH44Or44K/5pmC6ZaT44Gu56mN566X5YCkW+enkl1cblxuICBfZXllQmxpbmtJZHM6IGNzbVZlY3RvcjxDdWJpc21JZEhhbmRsZT47IC8vIOODouODh+ODq+OBq+ioreWumuOBleOCjOOBn+eerOOBjeapn+iDveeUqOODkeODqeODoeODvOOCv0lEXG4gIF9saXBTeW5jSWRzOiBjc21WZWN0b3I8Q3ViaXNtSWRIYW5kbGU+OyAvLyDjg6Ljg4fjg6vjgavoqK3lrprjgZXjgozjgZ/jg6rjg4Pjg5fjgrfjg7Pjgq/mqZ/og73nlKjjg5Hjg6njg6Hjg7zjgr9JRFxuXG4gIF9tb3Rpb25zOiBjc21NYXA8c3RyaW5nLCBBQ3ViaXNtTW90aW9uPjsgLy8g6Kqt44G/6L6844G+44KM44Gm44GE44KL44Oi44O844K344On44Oz44Gu44Oq44K544OIXG4gIF9leHByZXNzaW9uczogY3NtTWFwPHN0cmluZywgQUN1YmlzbU1vdGlvbj47IC8vIOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ihqOaDheOBruODquOCueODiFxuXG4gIF9oaXRBcmVhOiBjc21WZWN0b3I8Y3NtUmVjdD47XG4gIF91c2VyQXJlYTogY3NtVmVjdG9yPGNzbVJlY3Q+O1xuXG4gIF9pZFBhcmFtQW5nbGVYOiBDdWJpc21JZEhhbmRsZTsgLy8g44OR44Op44Oh44O844K/SUQ6IFBhcmFtQW5nbGVYXG4gIF9pZFBhcmFtQW5nbGVZOiBDdWJpc21JZEhhbmRsZTsgLy8g44OR44Op44Oh44O844K/SUQ6IFBhcmFtQW5nbGVZXG4gIF9pZFBhcmFtQW5nbGVaOiBDdWJpc21JZEhhbmRsZTsgLy8g44OR44Op44Oh44O844K/SUQ6IFBhcmFtQW5nbGVaXG4gIF9pZFBhcmFtRXllQmFsbFg6IEN1YmlzbUlkSGFuZGxlOyAvLyDjg5Hjg6njg6Hjg7zjgr9JRDogUGFyYW1FeWVCYWxsWFxuICBfaWRQYXJhbUV5ZUJhbGxZOiBDdWJpc21JZEhhbmRsZTsgLy8g44OR44Op44Oh44O844K/SUQ6IFBhcmFtRXllQkFsbFlcbiAgX2lkUGFyYW1Cb2R5QW5nbGVYOiBDdWJpc21JZEhhbmRsZTsgLy8g44OR44Op44Oh44O844K/SUQ6IFBhcmFtQm9keUFuZ2xlWFxuXG4gIF9zdGF0ZTogbnVtYmVyOyAvLyDnj77lnKjjga7jgrnjg4bjg7zjgr/jgrnnrqHnkIbnlKhcbiAgX2V4cHJlc3Npb25Db3VudDogbnVtYmVyOyAvLyDooajmg4Xjg4fjg7zjgr/jgqvjgqbjg7Pjg4hcbiAgX3RleHR1cmVDb3VudDogbnVtYmVyOyAvLyDjg4bjgq/jgrnjg4Hjg6Pjgqvjgqbjg7Pjg4hcbiAgX21vdGlvbkNvdW50OiBudW1iZXI7IC8vIOODouODvOOCt+ODp+ODs+ODh+ODvOOCv+OCq+OCpuODs+ODiFxuICBfYWxsTW90aW9uQ291bnQ6IG51bWJlcjsgLy8g44Oi44O844K344On44Oz57eP5pWwXG4gIF93YXZGaWxlSGFuZGxlcjogTEFwcFdhdkZpbGVIYW5kbGVyOyAvL3dhduODleOCoeOCpOODq+ODj+ODs+ODieODqVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuLyoqXG4gKiDjg5fjg6njg4Pjg4jjg5Xjgqnjg7zjg6Dkvp3lrZjmqZ/og73jgpLmir3osaHljJbjgZnjgosgQ3ViaXNtIFBsYXRmb3JtIEFic3RyYWN0aW9uIExheWVyLlxuICpcbiAqIOODleOCoeOCpOODq+iqreOBv+i+vOOBv+OChOaZguWIu+WPluW+l+etieOBruODl+ODqeODg+ODiOODleOCqeODvOODoOOBq+S+neWtmOOBmeOCi+mWouaVsOOCkuOBvuOBqOOCgeOCi+OAglxuICovXG5leHBvcnQgY2xhc3MgTEFwcFBhbCB7XG4gIC8qKlxuICAgKiDjg5XjgqHjgqTjg6vjgpLjg5DjgqTjg4jjg4fjg7zjgr/jgajjgZfjgaboqq3jgb/jgZPjgoBcbiAgICpcbiAgICogQHBhcmFtIGZpbGVQYXRoIOiqreOBv+i+vOOBv+WvvuixoeODleOCoeOCpOODq+OBruODkeOCuVxuICAgKiBAcmV0dXJuXG4gICAqIHtcbiAgICogICAgICBidWZmZXIsICAg6Kqt44G/6L6844KT44Gg44OQ44Kk44OI44OH44O844K/XG4gICAqICAgICAgc2l6ZSAgICAgICAg44OV44Kh44Kk44Or44K144Kk44K6XG4gICAqIH1cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbG9hZEZpbGVBc0J5dGVzKFxuICAgIGZpbGVQYXRoOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s6IChhcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXIsIHNpemU6IG51bWJlcikgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICBmZXRjaChmaWxlUGF0aClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiBjYWxsYmFjayhhcnJheUJ1ZmZlciwgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOODh+ODq+OCv+aZgumWk++8iOWJjeWbnuODleODrOODvOODoOOBqOOBruW3ruWIhu+8ieOCkuWPluW+l+OBmeOCi1xuICAgKiBAcmV0dXJuIOODh+ODq+OCv+aZgumWk1ttc11cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVsdGFUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc19kZWx0YVRpbWU7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZVRpbWUoKTogdm9pZCB7XG4gICAgdGhpcy5zX2N1cnJlbnRGcmFtZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5zX2RlbHRhVGltZSA9ICh0aGlzLnNfY3VycmVudEZyYW1lIC0gdGhpcy5zX2xhc3RGcmFtZSkgLyAxMDAwO1xuICAgIHRoaXMuc19sYXN0RnJhbWUgPSB0aGlzLnNfY3VycmVudEZyYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODoeODg+OCu+ODvOOCuOOCkuWHuuWKm+OBmeOCi1xuICAgKiBAcGFyYW0gbWVzc2FnZSDmloflrZfliJdcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcHJpbnRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG5cbiAgc3RhdGljIGxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuXG4gIHN0YXRpYyBzX2N1cnJlbnRGcmFtZSA9IDAuMDtcbiAgc3RhdGljIHNfbGFzdEZyYW1lID0gMC4wO1xuICBzdGF0aWMgc19kZWx0YVRpbWUgPSAwLjA7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBjc21WZWN0b3IsIGl0ZXJhdG9yIH0gZnJvbSAnQGZyYW1ld29yay90eXBlL2NzbXZlY3Rvcic7XG5cbmltcG9ydCB7IGdsIH0gZnJvbSAnLi9sYXBwZGVsZWdhdGUnO1xuXG4vKipcbiAqIOODhuOCr+OCueODgeODo+euoeeQhuOCr+ODqeOCuVxuICog55S75YOP6Kqt44G/6L6844G/44CB566h55CG44KS6KGM44GG44Kv44Op44K544CCXG4gKi9cbmV4cG9ydCBjbGFzcyBMQXBwVGV4dHVyZU1hbmFnZXIge1xuICAvKipcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl90ZXh0dXJlcyA9IG5ldyBjc21WZWN0b3I8VGV4dHVyZUluZm8+KCk7XG4gIH1cblxuICAvKipcbiAgICog6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkIHtcbiAgICBmb3IgKFxuICAgICAgbGV0IGl0ZTogaXRlcmF0b3I8VGV4dHVyZUluZm8+ID0gdGhpcy5fdGV4dHVyZXMuYmVnaW4oKTtcbiAgICAgIGl0ZS5ub3RFcXVhbCh0aGlzLl90ZXh0dXJlcy5lbmQoKSk7XG4gICAgICBpdGUucHJlSW5jcmVtZW50KClcbiAgICApIHtcbiAgICAgIGdsLmRlbGV0ZVRleHR1cmUoaXRlLnB0cigpLmlkKTtcbiAgICB9XG4gICAgdGhpcy5fdGV4dHVyZXMgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIOeUu+WDj+iqreOBv+i+vOOBv1xuICAgKlxuICAgKiBAcGFyYW0gZmlsZU5hbWUg6Kqt44G/6L6844KA55S75YOP44OV44Kh44Kk44Or44OR44K55ZCNXG4gICAqIEBwYXJhbSB1c2VQcmVtdWx0aXBseSBQcmVtdWx05Yem55CG44KS5pyJ5Yq544Gr44GZ44KL44GLXG4gICAqIEByZXR1cm4g55S75YOP5oOF5aCx44CB6Kqt44G/6L6844G/5aSx5pWX5pmC44GvbnVsbOOCkui/lOOBmVxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVRleHR1cmVGcm9tUG5nRmlsZShcbiAgICBmaWxlTmFtZTogc3RyaW5nLFxuICAgIHVzZVByZW11bHRpcGx5OiBib29sZWFuLFxuICAgIGNhbGxiYWNrOiAodGV4dHVyZUluZm86IFRleHR1cmVJbmZvKSA9PiB2b2lkXG4gICk6IHZvaWQge1xuICBcbiAgICAvLyBzZWFyY2ggbG9hZGVkIHRleHR1cmUgYWxyZWFkeVxuICAgIGZvciAobGV0IGl0ZTogaXRlcmF0b3I8VGV4dHVyZUluZm8+ID0gdGhpcy5fdGV4dHVyZXMuYmVnaW4oKTtcbiAgICAgIGl0ZS5ub3RFcXVhbCh0aGlzLl90ZXh0dXJlcy5lbmQoKSk7XG4gICAgICBpdGUucHJlSW5jcmVtZW50KCkpXG4gICAge1xuICAgICAgaWYgKFxuICAgICAgICBpdGUucHRyKCkuZmlsZU5hbWUgPT0gZmlsZU5hbWUgJiZcbiAgICAgICAgaXRlLnB0cigpLnVzZVByZW11bHRwbHkgPT0gdXNlUHJlbXVsdGlwbHlcbiAgICAgICkge1xuICAgICAgICAvLyAy5Zue55uu5Lul6ZmN44Gv44Kt44Oj44OD44K344Ol44GM5L2/55So44GV44KM44KLKOW+heOBoeaZgumWk+OBquOBlylcbiAgICAgICAgLy8gV2ViS2l044Gn44Gv5ZCM44GYSW1hZ2Xjga5vbmxvYWTjgpLlho3luqblkbzjgbbjgavjga/lho3jgqTjg7Pjgrnjgr/jg7PjgrnjgYzlv4XopoFcbiAgICAgICAgLy8g6Kmz57Sw77yaaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUwMjQxODFcbiAgICAgICAgaXRlLnB0cigpLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpdGUucHRyKCkuaW1nLm9ubG9hZCA9ICgpOiB2b2lkID0+IGNhbGxiYWNrKGl0ZS5wdHIoKSk7XG4gICAgICAgIGl0ZS5wdHIoKS5pbWcuc3JjID0gZmlsZU5hbWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDjg4fjg7zjgr/jga7jgqrjg7Pjg63jg7zjg4njgpLjg4jjg6rjgqzjg7zjgavjgZnjgotcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcub25sb2FkID0gKCk6IHZvaWQgPT4ge1xuICAgICAgLy8g44OG44Kv44K544OB44Oj44Kq44OW44K444Kn44Kv44OI44Gu5L2c5oiQXG4gICAgICBjb25zdCB0ZXg6IFdlYkdMVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcblxuICAgICAgLy8g44OG44Kv44K544OB44Oj44KS6YG45oqeXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXgpO1xuXG4gICAgICAvLyDjg4bjgq/jgrnjg4Hjg6Pjgavjg5Tjgq/jgrvjg6vjgpLmm7jjgY3ovrzjgoBcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoXG4gICAgICAgIGdsLlRFWFRVUkVfMkQsXG4gICAgICAgIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUixcbiAgICAgICAgZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcbiAgICAgICk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcblxuICAgICAgLy8gUHJlbXVsdOWHpueQhuOCkuihjOOCj+OBm+OCi1xuICAgICAgaWYgKHVzZVByZW11bHRpcGx5KSB7XG4gICAgICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgMSk7XG4gICAgICB9XG5cbiAgICAgIC8vIOODhuOCr+OCueODgeODo+OBq+ODlOOCr+OCu+ODq+OCkuabuOOBjei+vOOCgFxuICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWcpO1xuXG4gICAgICAvLyDjg5/jg4Pjg5fjg57jg4Pjg5fjgpLnlJ/miJBcbiAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xuXG4gICAgICAvLyDjg4bjgq/jgrnjg4Hjg6PjgpLjg5DjgqTjg7Pjg4lcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xuXG4gICAgICBjb25zdCB0ZXh0dXJlSW5mbzogVGV4dHVyZUluZm8gPSBuZXcgVGV4dHVyZUluZm8oKTtcbiAgICAgIGlmICh0ZXh0dXJlSW5mbyAhPSBudWxsKSB7XG4gICAgICAgIHRleHR1cmVJbmZvLmZpbGVOYW1lID0gZmlsZU5hbWU7XG4gICAgICAgIHRleHR1cmVJbmZvLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICB0ZXh0dXJlSW5mby5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICB0ZXh0dXJlSW5mby5pZCA9IHRleDtcbiAgICAgICAgdGV4dHVyZUluZm8uaW1nID0gaW1nO1xuICAgICAgICB0ZXh0dXJlSW5mby51c2VQcmVtdWx0cGx5ID0gdXNlUHJlbXVsdGlwbHk7XG4gICAgICAgIHRoaXMuX3RleHR1cmVzLnB1c2hCYWNrKHRleHR1cmVJbmZvKTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2sodGV4dHVyZUluZm8pO1xuICAgIH07XG4gICAgaW1nLnNyYyA9IGZpbGVOYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOeUu+WDj+OBruino+aUvlxuICAgKlxuICAgKiDphY3liJfjgavlrZjlnKjjgZnjgovnlLvlg4/lhajjgabjgpLop6PmlL7jgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlVGV4dHVyZXMoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90ZXh0dXJlcy5nZXRTaXplKCk7IGkrKykge1xuICAgICAgdGhpcy5fdGV4dHVyZXMuc2V0KGksIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMuX3RleHR1cmVzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICog55S75YOP44Gu6Kej5pS+XG4gICAqXG4gICAqIOaMh+WumuOBl+OBn+ODhuOCr+OCueODgeODo+OBrueUu+WDj+OCkuino+aUvuOBmeOCi+OAglxuICAgKiBAcGFyYW0gdGV4dHVyZSDop6PmlL7jgZnjgovjg4bjgq/jgrnjg4Hjg6NcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlVGV4dHVyZUJ5VGV4dHVyZSh0ZXh0dXJlOiBXZWJHTFRleHR1cmUpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RleHR1cmVzLmdldFNpemUoKTsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5fdGV4dHVyZXMuYXQoaSkuaWQgIT0gdGV4dHVyZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdGV4dHVyZXMuc2V0KGksIG51bGwpO1xuICAgICAgdGhpcy5fdGV4dHVyZXMucmVtb3ZlKGkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOeUu+WDj+OBruino+aUvlxuICAgKlxuICAgKiDmjIflrprjgZfjgZ/lkI3liY3jga7nlLvlg4/jgpLop6PmlL7jgZnjgovjgIJcbiAgICogQHBhcmFtIGZpbGVOYW1lIOino+aUvuOBmeOCi+eUu+WDj+ODleOCoeOCpOODq+ODkeOCueWQjVxuICAgKi9cbiAgcHVibGljIHJlbGVhc2VUZXh0dXJlQnlGaWxlUGF0aChmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90ZXh0dXJlcy5nZXRTaXplKCk7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX3RleHR1cmVzLmF0KGkpLmZpbGVOYW1lID09IGZpbGVOYW1lKSB7XG4gICAgICAgIHRoaXMuX3RleHR1cmVzLnNldChpLCBudWxsKTtcbiAgICAgICAgdGhpcy5fdGV4dHVyZXMucmVtb3ZlKGkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfdGV4dHVyZXM6IGNzbVZlY3RvcjxUZXh0dXJlSW5mbz47XG59XG5cbi8qKlxuICog55S75YOP5oOF5aCx5qeL6YCg5L2TXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0dXJlSW5mbyB7XG4gIGltZzogSFRNTEltYWdlRWxlbWVudDsgLy8g55S75YOPXG4gIGlkOiBXZWJHTFRleHR1cmUgPSBudWxsOyAvLyDjg4bjgq/jgrnjg4Hjg6NcbiAgd2lkdGggPSAwOyAvLyDmqKrluYVcbiAgaGVpZ2h0ID0gMDsgLy8g6auY44GVXG4gIHVzZVByZW11bHRwbHk6IGJvb2xlYW47IC8vIFByZW11bHTlh6bnkIbjgpLmnInlirnjgavjgZnjgovjgYtcbiAgZmlsZU5hbWU6IHN0cmluZzsgLy8g44OV44Kh44Kk44Or5ZCNXG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBDdWJpc21NYXRyaXg0NCB9IGZyb20gJ0BmcmFtZXdvcmsvbWF0aC9jdWJpc21tYXRyaXg0NCc7XG5pbXBvcnQgeyBDdWJpc21WaWV3TWF0cml4IH0gZnJvbSAnQGZyYW1ld29yay9tYXRoL2N1YmlzbXZpZXdtYXRyaXgnO1xuXG5pbXBvcnQgKiBhcyBMQXBwRGVmaW5lIGZyb20gJy4vbGFwcGRlZmluZSc7XG5pbXBvcnQgeyBjYW52YXMsIGdsLCBMQXBwRGVsZWdhdGUgfSBmcm9tICcuL2xhcHBkZWxlZ2F0ZSc7XG5pbXBvcnQgeyBMQXBwTGl2ZTJETWFuYWdlciB9IGZyb20gJy4vbGFwcGxpdmUyZG1hbmFnZXInO1xuaW1wb3J0IHsgTEFwcFBhbCB9IGZyb20gJy4vbGFwcHBhbCc7XG5pbXBvcnQgeyBMQXBwU3ByaXRlIH0gZnJvbSAnLi9sYXBwc3ByaXRlJztcbmltcG9ydCB7IFRleHR1cmVJbmZvIH0gZnJvbSAnLi9sYXBwdGV4dHVyZW1hbmFnZXInO1xuaW1wb3J0IHsgVG91Y2hNYW5hZ2VyIH0gZnJvbSAnLi90b3VjaG1hbmFnZXInO1xuXG4vKipcbiAqIOaPj+eUu+OCr+ODqeOCueOAglxuICovXG5leHBvcnQgY2xhc3MgTEFwcFZpZXcge1xuICAvKipcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9wcm9ncmFtSWQgPSBudWxsO1xuICAgIHRoaXMuX2JhY2sgPSBudWxsO1xuICAgIHRoaXMuX2dlYXIgPSBudWxsO1xuXG4gICAgLy8g44K/44OD44OB6Zai5L+C44Gu44Kk44OZ44Oz44OI566h55CGXG4gICAgdGhpcy5fdG91Y2hNYW5hZ2VyID0gbmV3IFRvdWNoTWFuYWdlcigpO1xuXG4gICAgLy8g44OH44OQ44Kk44K55bqn5qiZ44GL44KJ44K544Kv44Oq44O844Oz5bqn5qiZ44Gr5aSJ5o+b44GZ44KL44Gf44KB44GuXG4gICAgdGhpcy5fZGV2aWNlVG9TY3JlZW4gPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcblxuICAgIC8vIOeUu+mdouOBruihqOekuuOBruaLoeWkp+e4ruWwj+OChOenu+WLleOBruWkieaPm+OCkuihjOOBhuihjOWIl1xuICAgIHRoaXMuX3ZpZXdNYXRyaXggPSBuZXcgQ3ViaXNtVmlld01hdHJpeCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMluOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXM7XG4gICAgLy/plb/lrr3mr5RcbiAgICBjb25zdCByYXRpbzogbnVtYmVyID0gd2lkdGggLyBoZWlnaHQ7XG4gICAgXG4gICAgY29uc3QgbGVmdDogbnVtYmVyID0gLXJhdGlvO1xuICAgIGNvbnN0IHJpZ2h0OiBudW1iZXIgPSByYXRpbztcbiAgICBjb25zdCBib3R0b206IG51bWJlciA9IExBcHBEZWZpbmUuVmlld0xvZ2ljYWxMZWZ0O1xuICAgIGNvbnN0IHRvcDogbnVtYmVyID0gTEFwcERlZmluZS5WaWV3TG9naWNhbFJpZ2h0O1xuXG4gICAgdGhpcy5fdmlld01hdHJpeC5zZXRTY3JlZW5SZWN0KGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCk7IC8vIOODh+ODkOOCpOOCueOBq+WvvuW/nOOBmeOCi+eUu+mdouOBruevhOWbsuOAgiBY44Gu5bem56uv44CBWOOBruWPs+err+OAgVnjga7kuIvnq6/jgIFZ44Gu5LiK56uvXG4gICAgLy/mlL7lpKfkurrnianmqKHlnotcbiAgICB0aGlzLl92aWV3TWF0cml4LnNjYWxlKExBcHBEZWZpbmUuVmlld1NjYWxlLCBMQXBwRGVmaW5lLlZpZXdTY2FsZSk7XG5cbiAgICB0aGlzLl9kZXZpY2VUb1NjcmVlbi5sb2FkSWRlbnRpdHkoKTtcbiAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcbiAgICAgIGNvbnN0IHNjcmVlblc6IG51bWJlciA9IE1hdGguYWJzKHJpZ2h0IC0gbGVmdCk7XG4gICAgICAvL+aOp+WItuS9oOm8oOagh+S9jee9ruaYoOWwhOaIkOeoi+W6j+WGhemDqOS9jee9ruWdkOagh+aXtueahOWAjeeOh++8jOWPr+S7peeugOWNleeQhuino+S4uuaOp+WItuS6uueJqeaooeWei+eahOWPjeW6lOmAn+W6plxuICAgICAgdGhpcy5fZGV2aWNlVG9TY3JlZW4uc2NhbGVSZWxhdGl2ZShzY3JlZW5XIC8gd2lkdGgsIC1zY3JlZW5XIC8gd2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY3JlZW5IOiBudW1iZXIgPSBNYXRoLmFicyh0b3AgLSBib3R0b20pO1xuICAgICAgdGhpcy5fZGV2aWNlVG9TY3JlZW4uc2NhbGVSZWxhdGl2ZShzY3JlZW5IIC8gaGVpZ2h0LCAtc2NyZWVuSCAvIGhlaWdodCk7XG4gICAgfVxuICAgIHRoaXMuX2RldmljZVRvU2NyZWVuLnRyYW5zbGF0ZVJlbGF0aXZlKC13aWR0aCowLjUsIC1oZWlnaHQgKiAwLjUpO1xuXG4gICAgLy8g6KGo56S656+E5Zuy44Gu6Kit5a6aXG4gICAgdGhpcy5fdmlld01hdHJpeC5zZXRNYXhTY2FsZShMQXBwRGVmaW5lLlZpZXdNYXhTY2FsZSk7IC8vIOmZkOeVjOaLoeW8teeOh1xuICAgIHRoaXMuX3ZpZXdNYXRyaXguc2V0TWluU2NhbGUoTEFwcERlZmluZS5WaWV3TWluU2NhbGUpOyAvLyDpmZDnlYznuK7lsI/njodcblxuICAgIC8vIOihqOekuuOBp+OBjeOCi+acgOWkp+evhOWbslxuICAgIHRoaXMuX3ZpZXdNYXRyaXguc2V0TWF4U2NyZWVuUmVjdChcbiAgICAgIExBcHBEZWZpbmUuVmlld0xvZ2ljYWxNYXhMZWZ0LFxuICAgICAgTEFwcERlZmluZS5WaWV3TG9naWNhbE1heFJpZ2h0LFxuICAgICAgTEFwcERlZmluZS5WaWV3TG9naWNhbE1heEJvdHRvbSxcbiAgICAgIExBcHBEZWZpbmUuVmlld0xvZ2ljYWxNYXhUb3BcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIOino+aUvuOBmeOCi1xuICAgKi9cbiAgcHVibGljIHJlbGVhc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fdmlld01hdHJpeCA9IG51bGw7XG4gICAgdGhpcy5fdG91Y2hNYW5hZ2VyID0gbnVsbDtcbiAgICB0aGlzLl9kZXZpY2VUb1NjcmVlbiA9IG51bGw7XG5cbiAgICB0aGlzLl9nZWFyLnJlbGVhc2UoKTtcbiAgICB0aGlzLl9nZWFyID0gbnVsbDtcblxuICAgIHRoaXMuX2JhY2sucmVsZWFzZSgpO1xuICAgIHRoaXMuX2JhY2sgPSBudWxsO1xuXG4gICAgZ2wuZGVsZXRlUHJvZ3JhbSh0aGlzLl9wcm9ncmFtSWQpO1xuICAgIHRoaXMuX3Byb2dyYW1JZCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICog5o+P55S744GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xuICAgIGdsLnVzZVByb2dyYW0odGhpcy5fcHJvZ3JhbUlkKTtcblxuICAgIGdsLmZsdXNoKCk7XG5cbiAgICBjb25zdCBsaXZlMkRNYW5hZ2VyOiBMQXBwTGl2ZTJETWFuYWdlciA9IExBcHBMaXZlMkRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5cbiAgICBsaXZlMkRNYW5hZ2VyLnNldFZpZXdNYXRyaXgodGhpcy5fdmlld01hdHJpeCk7XG5cbiAgICBsaXZlMkRNYW5hZ2VyLm9uVXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICog55S75YOP44Gu5Yid5pyf5YyW44KS6KGM44GG44CCXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZVNwcml0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB3aWR0aDogbnVtYmVyID0gY2FudmFzLndpZHRoO1xuICAgIGNvbnN0IGhlaWdodDogbnVtYmVyID0gY2FudmFzLmhlaWdodDtcblxuICAgIGNvbnN0IHRleHR1cmVNYW5hZ2VyID0gTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkuZ2V0VGV4dHVyZU1hbmFnZXIoKTtcbiAgICBjb25zdCByZXNvdXJjZXNQYXRoID0gTEFwcERlZmluZS5yZXNvdXJjZXNDb25maWcuZ2V0UmVzb3VyY2VzUGF0aCgpO1xuXG5cbiAgICAvLyDjgrfjgqfjg7zjg4Djg7zjgpLkvZzmiJBcbiAgICBpZiAodGhpcy5fcHJvZ3JhbUlkID09IG51bGwpIHtcbiAgICAgIHRoaXMuX3Byb2dyYW1JZCA9IExBcHBEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLmNyZWF0ZVNoYWRlcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgr/jg4Pjg4HjgZXjgozjgZ/mmYLjgavlkbzjgbDjgozjgovjgIJcbiAgICpcbiAgICogQHBhcmFtIHBvaW50WCDjgrnjgq/jg6rjg7zjg7NY5bqn5qiZXG4gICAqIEBwYXJhbSBwb2ludFkg44K544Kv44Oq44O844OzWeW6p+aomVxuICAgKi9cbiAgcHVibGljIG9uVG91Y2hlc0JlZ2FuKHBvaW50WDogbnVtYmVyLCBwb2ludFk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3RvdWNoTWFuYWdlci50b3VjaGVzQmVnYW4ocG9pbnRYLCBwb2ludFkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCv+ODg+ODgeOBl+OBpuOBhOOCi+OBqOOBjeOBq+ODneOCpOODs+OCv+OBjOWLleOBhOOBn+OCieWRvOOBsOOCjOOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gcG9pbnRYIOOCueOCr+ODquODvOODs1jluqfmqJlcbiAgICogQHBhcmFtIHBvaW50WSDjgrnjgq/jg6rjg7zjg7NZ5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgb25Ub3VjaGVzTW92ZWQocG9pbnRYOiBudW1iZXIsIHBvaW50WTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgdmlld1g6IG51bWJlciA9IHRoaXMudHJhbnNmb3JtVmlld1godGhpcy5fdG91Y2hNYW5hZ2VyLmdldFgoKSk7XG4gICAgY29uc3Qgdmlld1k6IG51bWJlciA9IHRoaXMudHJhbnNmb3JtVmlld1kodGhpcy5fdG91Y2hNYW5hZ2VyLmdldFkoKSk7XG5cbiAgICB0aGlzLl90b3VjaE1hbmFnZXIudG91Y2hlc01vdmVkKHBvaW50WCwgcG9pbnRZKTtcblxuICAgIGNvbnN0IGxpdmUyRE1hbmFnZXI6IExBcHBMaXZlMkRNYW5hZ2VyID0gTEFwcExpdmUyRE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICBsaXZlMkRNYW5hZ2VyLm9uRHJhZyh2aWV3WCwgdmlld1kpO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCv+ODg+ODgeOBjOe1guS6huOBl+OBn+OCieWRvOOBsOOCjOOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gcG9pbnRYIOOCueOCr+ODquODvOODs1jluqfmqJlcbiAgICogQHBhcmFtIHBvaW50WSDjgrnjgq/jg6rjg7zjg7NZ5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgb25Ub3VjaGVzRW5kZWQocG9pbnRYOiBudW1iZXIsIHBvaW50WTogbnVtYmVyKTogdm9pZCB7XG4gICAgLy8g44K/44OD44OB57WC5LqGXG4gICAgY29uc3QgbGl2ZTJETWFuYWdlcjogTEFwcExpdmUyRE1hbmFnZXIgPSBMQXBwTGl2ZTJETWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIC8vbGl2ZTJETWFuYWdlci5vbkRyYWcoMC4wLCAwLjApO1xuXG4gICAge1xuICAgICAgLy8g44K344Oz44Kw44Or44K/44OD44OXXG4gICAgICBjb25zdCB4OiBudW1iZXIgPSB0aGlzLl9kZXZpY2VUb1NjcmVlbi50cmFuc2Zvcm1YKFxuICAgICAgICB0aGlzLl90b3VjaE1hbmFnZXIuZ2V0WCgpXG4gICAgICApOyAvLyDoq5bnkIbluqfmqJnlpInmj5vjgZfjgZ/luqfmqJnjgpLlj5blvpfjgIJcbiAgICAgIGNvbnN0IHk6IG51bWJlciA9IHRoaXMuX2RldmljZVRvU2NyZWVuLnRyYW5zZm9ybVkoXG4gICAgICAgIHRoaXMuX3RvdWNoTWFuYWdlci5nZXRZKClcbiAgICAgICk7IC8vIOirlueQhuW6p+aomeWkieWMluOBl+OBn+W6p+aomeOCkuWPluW+l+OAglxuXG4gICAgICBpZiAoTEFwcERlZmluZS5EZWJ1Z1RvdWNoTG9nRW5hYmxlKSB7XG4gICAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKGBbQVBQXXRvdWNoZXNFbmRlZCB4OiAke3h9IHk6ICR7eX1gKTtcbiAgICAgIH1cbiAgICAgIGxpdmUyRE1hbmFnZXIub25UYXAoeCwgeSk7XG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogWOW6p+aomeOCklZpZXfluqfmqJnjgavlpInmj5vjgZnjgovjgIJcbiAgICpcbiAgICogQHBhcmFtIGRldmljZVgg44OH44OQ44Kk44K5WOW6p+aomVxuICAgKi9cbiAgcHVibGljIHRyYW5zZm9ybVZpZXdYKGRldmljZVg6IG51bWJlcik6IG51bWJlciB7XG4gICAgXG4gICAgY29uc3Qgc2NyZWVuWDogbnVtYmVyID0gdGhpcy5fZGV2aWNlVG9TY3JlZW4udHJhbnNmb3JtWChkZXZpY2VYKTsgLy8g6KuW55CG5bqn5qiZ5aSJ5o+b44GX44Gf5bqn5qiZ44KS5Y+W5b6X44CCXG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdNYXRyaXguaW52ZXJ0VHJhbnNmb3JtWChzY3JlZW5YKTsgLy8g5ouh5aSn44CB57iu5bCP44CB56e75YuV5b6M44Gu5YCk44CCXG4gIH1cblxuICAvKipcbiAgICogWeW6p+aomeOCklZpZXfluqfmqJnjgavlpInmj5vjgZnjgovjgIJcbiAgICpcbiAgICogQHBhcmFtIGRldmljZVkg44OH44OQ44Kk44K5WeW6p+aomVxuICAgKi9cbiAgcHVibGljIHRyYW5zZm9ybVZpZXdZKGRldmljZVk6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc2NyZWVuWTogbnVtYmVyID0gdGhpcy5fZGV2aWNlVG9TY3JlZW4udHJhbnNmb3JtWShkZXZpY2VZKTsgLy8g6KuW55CG5bqn5qiZ5aSJ5o+b44GX44Gf5bqn5qiZ44KS5Y+W5b6X44CCXG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdNYXRyaXguaW52ZXJ0VHJhbnNmb3JtWShzY3JlZW5ZKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBY5bqn5qiZ44KSU2NyZWVu5bqn5qiZ44Gr5aSJ5o+b44GZ44KL44CCXG4gICAqIEBwYXJhbSBkZXZpY2VYIOODh+ODkOOCpOOCuVjluqfmqJlcbiAgICovXG4gIHB1YmxpYyB0cmFuc2Zvcm1TY3JlZW5YKGRldmljZVg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZVRvU2NyZWVuLnRyYW5zZm9ybVgoZGV2aWNlWCk7XG4gIH1cblxuICAvKipcbiAgICogWeW6p+aomeOCklNjcmVlbuW6p+aomeOBq+WkieaPm+OBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gZGV2aWNlWSDjg4fjg5DjgqTjgrlZ5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgdHJhbnNmb3JtU2NyZWVuWShkZXZpY2VZOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kZXZpY2VUb1NjcmVlbi50cmFuc2Zvcm1ZKGRldmljZVkpO1xuICB9XG5cbiAgX3RvdWNoTWFuYWdlcjogVG91Y2hNYW5hZ2VyOyAvLyDjgr/jg4Pjg4Hjg57jg43jg7zjgrjjg6Pjg7xcbiAgX2RldmljZVRvU2NyZWVuOiBDdWJpc21NYXRyaXg0NDsgLy8g44OH44OQ44Kk44K544GL44KJ44K544Kv44Oq44O844Oz44G444Gu6KGM5YiXXG4gIF92aWV3TWF0cml4OiBDdWJpc21WaWV3TWF0cml4OyAvLyB2aWV3TWF0cml4XG4gIF9wcm9ncmFtSWQ6IFdlYkdMUHJvZ3JhbTsgLy8g44K344Kn44O844OASURcbiAgX2JhY2s6IExBcHBTcHJpdGU7IC8vIOiDjOaZr+eUu+WDj1xuICBfZ2VhcjogTEFwcFNwcml0ZTsgLy8g44Ku44Ki55S75YOPXG4gIF9jaGFuZ2VNb2RlbDogYm9vbGVhbjsgLy8g44Oi44OH44Or5YiH44KK5pu/44GI44OV44Op44KwXG4gIF9pc0NsaWNrOiBib29sZWFuOyAvLyDjgq/jg6rjg4Pjgq/kuK1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7IExBcHBQYWwgfSBmcm9tICcuL2xhcHBwYWwnO1xuXG5leHBvcnQgbGV0IHNfaW5zdGFuY2U6IExBcHBXYXZGaWxlSGFuZGxlciA9IG51bGw7XG5cbmV4cG9ydCBjbGFzcyBMQXBwV2F2RmlsZUhhbmRsZXIge1xuICAvKipcbiAgICog44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K577yI44K344Oz44Kw44Or44OI44Oz77yJ44KS6L+U44GZ44CCXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueOBjOeUn+aIkOOBleOCjOOBpuOBhOOBquOBhOWgtOWQiOOBr+WGhemDqOOBp+OCpOODs+OCueOCv+ODs+OCueOCkueUn+aIkOOBmeOCi+OAglxuICAgKlxuICAgKiBAcmV0dXJuIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMQXBwV2F2RmlsZUhhbmRsZXIge1xuICAgIGlmIChzX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgIHNfaW5zdGFuY2UgPSBuZXcgTEFwcFdhdkZpbGVIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNfaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICog44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K577yI44K344Oz44Kw44Or44OI44Oz77yJ44KS6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBpZiAoc19pbnN0YW5jZSAhPSBudWxsKSB7XG4gICAgICBzX2luc3RhbmNlID0gdm9pZCAwO1xuICAgIH1cblxuICAgIHNfaW5zdGFuY2UgPSBudWxsO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkZWx0YVRpbWVTZWNvbmRzOiBudW1iZXIpIHtcbiAgICBsZXQgZ29hbE9mZnNldDogbnVtYmVyO1xuICAgIGxldCBybXM6IG51bWJlcjtcblxuICAgIC8vIOODh+ODvOOCv+ODreODvOODieWJjS/jg5XjgqHjgqTjg6vmnKvlsL7jgavpgZTjgZfjgZ/loLTlkIjjga/mm7TmlrDjgZfjgarjgYRcbiAgICBpZiAoXG4gICAgICB0aGlzLl9wY21EYXRhID09IG51bGwgfHxcbiAgICAgIHRoaXMuX3NhbXBsZU9mZnNldCA+PSB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxlc1BlckNoYW5uZWxcbiAgICApIHtcbiAgICAgIHRoaXMuX2xhc3RSbXMgPSAwLjA7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8g57WM6YGO5pmC6ZaT5b6M44Gu54q25oWL44KS5L+d5oyBXG4gICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzICs9IGRlbHRhVGltZVNlY29uZHM7XG4gICAgZ29hbE9mZnNldCA9IE1hdGguZmxvb3IoXG4gICAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgKiB0aGlzLl93YXZGaWxlSW5mby5fc2FtcGxpbmdSYXRlXG4gICAgKTtcbiAgICBpZiAoZ29hbE9mZnNldCA+IHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbCkge1xuICAgICAgZ29hbE9mZnNldCA9IHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbDtcbiAgICB9XG5cbiAgICAvLyBSTVPoqIjmuKxcbiAgICBybXMgPSAwLjA7XG4gICAgZm9yIChcbiAgICAgIGxldCBjaGFubmVsQ291bnQgPSAwO1xuICAgICAgY2hhbm5lbENvdW50IDwgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHM7XG4gICAgICBjaGFubmVsQ291bnQrK1xuICAgICkge1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IHNhbXBsZUNvdW50ID0gdGhpcy5fc2FtcGxlT2Zmc2V0O1xuICAgICAgICBzYW1wbGVDb3VudCA8IGdvYWxPZmZzZXQ7XG4gICAgICAgIHNhbXBsZUNvdW50KytcbiAgICAgICkge1xuICAgICAgICBjb25zdCBwY20gPSB0aGlzLl9wY21EYXRhW2NoYW5uZWxDb3VudF1bc2FtcGxlQ291bnRdO1xuICAgICAgICBybXMgKz0gcGNtICogcGNtO1xuICAgICAgfVxuICAgIH1cbiAgICBybXMgPSBNYXRoLnNxcnQoXG4gICAgICBybXMgL1xuICAgICAgICAodGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHMgKlxuICAgICAgICAgIChnb2FsT2Zmc2V0IC0gdGhpcy5fc2FtcGxlT2Zmc2V0KSlcbiAgICApO1xuXG4gICAgdGhpcy5fbGFzdFJtcyA9IHJtcztcbiAgICB0aGlzLl9zYW1wbGVPZmZzZXQgPSBnb2FsT2Zmc2V0O1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0KGZpbGVQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyDjgrXjg7Pjg5fjg6vkvY3lj4LnhafkvY3nva7jgpLliJ3mnJ/ljJZcbiAgICB0aGlzLl9zYW1wbGVPZmZzZXQgPSAwO1xuICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyA9IDAuMDtcblxuICAgIC8vIFJNU+WApOOCkuODquOCu+ODg+ODiFxuICAgIHRoaXMuX2xhc3RSbXMgPSAwLjA7XG5cbiAgICBpZiAoIXRoaXMubG9hZFdhdkZpbGUoZmlsZVBhdGgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFJtcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0Um1zO1xuICB9XG5cbiAgcHVibGljIGxvYWRXYXZGaWxlKGZpbGVQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgcmV0ID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5fcGNtRGF0YSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnJlbGVhc2VQY21EYXRhKCk7XG4gICAgfVxuXG4gICAgLy8g5Yqg6L295paH5Lu2XG4gICAgY29uc3QgYXN5bmNGaWxlTG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBmZXRjaChmaWxlUGF0aCkudGhlbihyZXNwb25jZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25jZS5hcnJheUJ1ZmZlcigpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgYXN5bmNXYXZGaWxlTWFuYWdlciA9IChhc3luYyAoKSA9PiB7XG4gICAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZSA9IGF3YWl0IGFzeW5jRmlsZUxvYWQoKTtcbiAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVEYXRhVmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZSk7XG4gICAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlU2l6ZSA9IHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVCeXRlLmJ5dGVMZW5ndGg7XG4gICAgICB0aGlzLl9ieXRlUmVhZGVyLl9yZWFkT2Zmc2V0ID0gMDtcblxuICAgICAgLy8g5aaC5p6c5paH5Lu25Yqg6L295aSx6LSl77yM5oiW6ICF5rKh5pyJ5aSn5bCP55qE5byA5aS0562+5ZCN4oCcUklGRuKAne+8jOWImeWksei0peOAglxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZSA9PSBudWxsIHx8XG4gICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVTaXplIDwgNFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8g44OV44Kh44Kk44Or5ZCNXG4gICAgICB0aGlzLl93YXZGaWxlSW5mby5fZmlsZU5hbWUgPSBmaWxlUGF0aDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g44K344Kw44ON44OB44OjIFwiUklGRlwiXG4gICAgICAgIGlmICghdGhpcy5fYnl0ZVJlYWRlci5nZXRDaGVja1NpZ25hdHVyZSgnUklGRicpKSB7XG4gICAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBTaWduZXR1cmUgXCJSSUZGXCIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g44OV44Kh44Kk44Or44K144Kk44K6LTjvvIjoqq3jgb/po5vjgbDjgZfvvIlcbiAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5nZXQzMkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAvLyDjgrfjgrDjg43jg4Hjg6MgXCJXQVZFXCJcbiAgICAgICAgaWYgKCF0aGlzLl9ieXRlUmVhZGVyLmdldENoZWNrU2lnbmF0dXJlKCdXQVZFJykpIHtcbiAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFNpZ25ldHVyZSBcIldBVkVcIi4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjgrfjgrDjg43jg4Hjg6MgXCJmbXQgXCJcbiAgICAgICAgaWYgKCF0aGlzLl9ieXRlUmVhZGVyLmdldENoZWNrU2lnbmF0dXJlKCdmbXQgJykpIHtcbiAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFNpZ25ldHVyZSBcImZtdFwiLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZtdOODgeODo+ODs+OCr+OCteOCpOOCulxuICAgICAgICBjb25zdCBmbXRDaHVua1NpemUgPSB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIOODleOCqeODvOODnuODg+ODiElE44GvMe+8iOODquODi+OColBDTe+8ieS7peWkluWPl+OBkeS7mOOBkeOBquOBhFxuICAgICAgICBpZiAodGhpcy5fYnl0ZVJlYWRlci5nZXQxNkxpdHRsZUVuZGlhbigpICE9IDEpIHtcbiAgICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpbGUgaXMgbm90IGxpbmVhciBQQ00uJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g44OB44Oj44Oz44ON44Or5pWwXG4gICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQxNkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAvLyDjgrXjg7Pjg5fjg6rjg7PjgrDjg6zjg7zjg4hcbiAgICAgICAgdGhpcy5fd2F2RmlsZUluZm8uX3NhbXBsaW5nUmF0ZSA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MzJMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgLy8g44OH44O844K/6YCf5bqmW2J5dGUvc2VjXe+8iOiqreOBv+mjm+OBsOOBl++8iVxuICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLmdldDMyTGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIOODluODreODg+OCr+OCteOCpOOCuu+8iOiqreOBv+mjm+OBsOOBl++8iVxuICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLmdldDE2TGl0dGxlRW5kaWFuKCk7XG4gICAgICAgIC8vIOmHj+WtkOWMluODk+ODg+ODiOaVsFxuICAgICAgICB0aGlzLl93YXZGaWxlSW5mby5fYml0c1BlclNhbXBsZSA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MTZMaXR0bGVFbmRpYW4oKTtcbiAgICAgICAgLy8gZm1044OB44Oj44Oz44Kv44Gu5ouh5by16YOo5YiG44Gu6Kqt44G/6aOb44Gw44GXXG4gICAgICAgIGlmIChmbXRDaHVua1NpemUgPiAxNikge1xuICAgICAgICAgIHRoaXMuX2J5dGVSZWFkZXIuX3JlYWRPZmZzZXQgKz0gZm10Q2h1bmtTaXplIC0gMTY7XG4gICAgICAgIH1cbiAgICAgICAgLy8gXCJkYXRhXCLjg4Hjg6Pjg7Pjgq/jgYzlh7rnj77jgZnjgovjgb7jgafoqq3jgb/po5vjgbDjgZdcbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICF0aGlzLl9ieXRlUmVhZGVyLmdldENoZWNrU2lnbmF0dXJlKCdkYXRhJykgJiZcbiAgICAgICAgICB0aGlzLl9ieXRlUmVhZGVyLl9yZWFkT2Zmc2V0IDwgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZVNpemVcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5fcmVhZE9mZnNldCArPVxuICAgICAgICAgICAgdGhpcy5fYnl0ZVJlYWRlci5nZXQzMkxpdHRsZUVuZGlhbigpICsgNDtcbiAgICAgICAgfVxuICAgICAgICAvLyDjg5XjgqHjgqTjg6vlhoXjgatcImRhdGFcIuODgeODo+ODs+OCr+OBjOWHuuePvuOBl+OBquOBi+OBo+OBn1xuICAgICAgICBpZiAodGhpcy5fYnl0ZVJlYWRlci5fcmVhZE9mZnNldCA+PSB0aGlzLl9ieXRlUmVhZGVyLl9maWxlU2l6ZSkge1xuICAgICAgICAgIHJldCA9IGZhbHNlO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgXCJkYXRhXCIgQ2h1bmsuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g44K144Oz44OX44Or5pWwXG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBkYXRhQ2h1bmtTaXplID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQzMkxpdHRsZUVuZGlhbigpO1xuICAgICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbCA9XG4gICAgICAgICAgICAoZGF0YUNodW5rU2l6ZSAqIDgpIC9cbiAgICAgICAgICAgICh0aGlzLl93YXZGaWxlSW5mby5fYml0c1BlclNhbXBsZSAqXG4gICAgICAgICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDpoJjln5/norrkv51cbiAgICAgICAgdGhpcy5fcGNtRGF0YSA9IG5ldyBBcnJheSh0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscyk7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgbGV0IGNoYW5uZWxDb3VudCA9IDA7XG4gICAgICAgICAgY2hhbm5lbENvdW50IDwgdGhpcy5fd2F2RmlsZUluZm8uX251bWJlck9mQ2hhbm5lbHM7XG4gICAgICAgICAgY2hhbm5lbENvdW50KytcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5fcGNtRGF0YVtjaGFubmVsQ291bnRdID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgIHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5rOi5b2i44OH44O844K/5Y+W5b6XXG4gICAgICAgIGZvciAoXG4gICAgICAgICAgbGV0IHNhbXBsZUNvdW50ID0gMDtcbiAgICAgICAgICBzYW1wbGVDb3VudCA8IHRoaXMuX3dhdkZpbGVJbmZvLl9zYW1wbGVzUGVyQ2hhbm5lbDtcbiAgICAgICAgICBzYW1wbGVDb3VudCsrXG4gICAgICAgICkge1xuICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICBsZXQgY2hhbm5lbENvdW50ID0gMDtcbiAgICAgICAgICAgIGNoYW5uZWxDb3VudCA8IHRoaXMuX3dhdkZpbGVJbmZvLl9udW1iZXJPZkNoYW5uZWxzO1xuICAgICAgICAgICAgY2hhbm5lbENvdW50KytcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuX3BjbURhdGFbY2hhbm5lbENvdW50XVtzYW1wbGVDb3VudF0gPSB0aGlzLmdldFBjbVNhbXBsZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAvL+WwhmFycmF5YnVmZmVy5a+56LGh6L2s5Li6YXVkaW9cbiAgICAgICAgICAgY29uc3QgYXVkaW9Db250ZXh0ID0gbmV3IHdpbmRvdy5BdWRpb0NvbnRleHQoKTtcbiAgICAgICAgICAgLy8g5o6n5Yi26Z+z6aKRXG4gICAgICAgICAgIGNvbnN0IGF1ZGlvU291cmNlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpXG4gICAgICAgICAgIGNvbnN0IGdhaW5Ob2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgICAgYXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YSh0aGlzLl9ieXRlUmVhZGVyLl9maWxlQnl0ZSwgZnVuY3Rpb24oYnVmZmVyKXtcbiAgICAgICAgICAgICBhdWRpb1NvdXJjZS5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgICAgLy8g6K6+572u6Z+z6YeP5Li6IFswLDFdXG4gICAgICAgICAgICBnYWluTm9kZS5nYWluLnZhbHVlID0gMVxuICAgICAgICAgICAgIGF1ZGlvU291cmNlLmNvbm5lY3QoZ2Fpbk5vZGUpO1xuICAgICAgICAgICAgIGdhaW5Ob2RlLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAvLyDmkq3mlL5cbiAgICAgICAgICAgICBhdWRpb1NvdXJjZS5zdGFydCgpXG4gICAgICAgICAgIH0pXG4gICAgICAgIHJldCA9IHRydWU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbi8qKlxuXG4gKi9cblxuICBwdWJsaWMgZ2V0UGNtU2FtcGxlKCk6IG51bWJlciB7XG4gICAgbGV0IHBjbTMyO1xuXG4gICAgLy8gMzLjg5Pjg4Pjg4jluYXjgavmi6HlvLXjgZfjgabjgYvjgoktMe+9njHjga7nr4Tlm7LjgavkuLjjgoHjgotcbiAgICBzd2l0Y2ggKHRoaXMuX3dhdkZpbGVJbmZvLl9iaXRzUGVyU2FtcGxlKSB7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHBjbTMyID0gdGhpcy5fYnl0ZVJlYWRlci5nZXQ4KCkgLSAxMjg7XG4gICAgICAgIHBjbTMyIDw8PSAyNDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE2OlxuICAgICAgICBwY20zMiA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MTZMaXR0bGVFbmRpYW4oKSA8PCAxNjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI0OlxuICAgICAgICBwY20zMiA9IHRoaXMuX2J5dGVSZWFkZXIuZ2V0MjRMaXR0bGVFbmRpYW4oKSA8PCA4O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIOWvvuW/nOOBl+OBpuOBhOOBquOBhOODk+ODg+ODiOW5hVxuICAgICAgICBwY20zMiA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBwY20zMiAvIDIxNDc0ODM2NDc7IC8vTnVtYmVyLk1BWF9WQUxVRTtcbiAgfVxuXG4gIHB1YmxpYyByZWxlYXNlUGNtRGF0YSgpOiB2b2lkIHtcbiAgICBmb3IgKFxuICAgICAgbGV0IGNoYW5uZWxDb3VudCA9IDA7XG4gICAgICBjaGFubmVsQ291bnQgPCB0aGlzLl93YXZGaWxlSW5mby5fbnVtYmVyT2ZDaGFubmVscztcbiAgICAgIGNoYW5uZWxDb3VudCsrXG4gICAgKSB7XG4gICAgICBkZWxldGUgdGhpcy5fcGNtRGF0YVtjaGFubmVsQ291bnRdO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fcGNtRGF0YTtcbiAgICB0aGlzLl9wY21EYXRhID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3BjbURhdGEgPSBudWxsO1xuICAgIHRoaXMuX3VzZXJUaW1lU2Vjb25kcyA9IDAuMDtcbiAgICB0aGlzLl9sYXN0Um1zID0gMC4wO1xuICAgIHRoaXMuX3NhbXBsZU9mZnNldCA9IDAuMDtcbiAgICB0aGlzLl93YXZGaWxlSW5mbyA9IG5ldyBXYXZGaWxlSW5mbygpO1xuICAgIHRoaXMuX2J5dGVSZWFkZXIgPSBuZXcgQnl0ZVJlYWRlcigpO1xuICB9XG5cbiAgX3BjbURhdGE6IEFycmF5PEZsb2F0MzJBcnJheT47XG4gIF91c2VyVGltZVNlY29uZHM6IG51bWJlcjtcbiAgX2xhc3RSbXM6IG51bWJlcjtcbiAgX3NhbXBsZU9mZnNldDogbnVtYmVyO1xuICBfd2F2RmlsZUluZm86IFdhdkZpbGVJbmZvO1xuICBfYnl0ZVJlYWRlcjogQnl0ZVJlYWRlcjtcbiAgX2xvYWRGaWxldG9CeXRlcyA9IChhcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXIsIGxlbmd0aDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5fYnl0ZVJlYWRlci5fZmlsZUJ5dGUgPSBhcnJheUJ1ZmZlcjtcbiAgICB0aGlzLl9ieXRlUmVhZGVyLl9maWxlRGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5fYnl0ZVJlYWRlci5fZmlsZUJ5dGUpO1xuICAgIHRoaXMuX2J5dGVSZWFkZXIuX2ZpbGVTaXplID0gbGVuZ3RoO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgV2F2RmlsZUluZm8ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9maWxlTmFtZSA9ICcnO1xuICAgIHRoaXMuX251bWJlck9mQ2hhbm5lbHMgPSAwO1xuICAgIHRoaXMuX2JpdHNQZXJTYW1wbGUgPSAwO1xuICAgIHRoaXMuX3NhbXBsaW5nUmF0ZSA9IDA7XG4gICAgdGhpcy5fc2FtcGxlc1BlckNoYW5uZWwgPSAwO1xuICB9XG5cbiAgX2ZpbGVOYW1lOiBzdHJpbmc7IC8vLzwg44OV44Kh44Kk44Or5ZCNXG4gIF9udW1iZXJPZkNoYW5uZWxzOiBudW1iZXI7IC8vLzwg44OB44Oj44Oz44ON44Or5pWwXG4gIF9iaXRzUGVyU2FtcGxlOiBudW1iZXI7IC8vLzwg44K144Oz44OX44Or44GC44Gf44KK44OT44OD44OI5pWwXG4gIF9zYW1wbGluZ1JhdGU6IG51bWJlcjsgLy8vPCDjgrXjg7Pjg5fjg6rjg7PjgrDjg6zjg7zjg4hcbiAgX3NhbXBsZXNQZXJDaGFubmVsOiBudW1iZXI7IC8vLzwgMeODgeODo+ODs+ODjeODq+OBguOBn+OCiue3j+OCteODs+ODl+ODq+aVsFxufVxuXG5leHBvcnQgY2xhc3MgQnl0ZVJlYWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2ZpbGVCeXRlID0gbnVsbDtcbiAgICB0aGlzLl9maWxlRGF0YVZpZXcgPSBudWxsO1xuICAgIHRoaXMuX2ZpbGVTaXplID0gMDtcbiAgICB0aGlzLl9yZWFkT2Zmc2V0ID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYnJpZWYgOOODk+ODg+ODiOiqreOBv+i+vOOBv1xuICAgKiBAcmV0dXJuIENzbTo6Y3NtVWludDgg6Kqt44G/5Y+W44Gj44GfOOODk+ODg+ODiOWApFxuICAgKi9cbiAgcHVibGljIGdldDgoKTogbnVtYmVyIHtcbiAgICBjb25zdCByZXQgPSB0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCk7XG4gICAgdGhpcy5fcmVhZE9mZnNldCsrO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGJyaWVmIDE244OT44OD44OI6Kqt44G/6L6844G/77yI44Oq44OI44Or44Ko44Oz44OH44Kj44Ki44Oz77yJXG4gICAqIEByZXR1cm4gQ3NtOjpjc21VaW50MTYg6Kqt44G/5Y+W44Gj44GfMTbjg5Pjg4Pjg4jlgKRcbiAgICovXG4gIHB1YmxpYyBnZXQxNkxpdHRsZUVuZGlhbigpOiBudW1iZXIge1xuICAgIGNvbnN0IHJldCA9XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAxKSA8PCA4KSB8XG4gICAgICB0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCk7XG4gICAgdGhpcy5fcmVhZE9mZnNldCArPSAyO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGJyaWVmIDI044OT44OD44OI6Kqt44G/6L6844G/77yI44Oq44OI44Or44Ko44Oz44OH44Kj44Ki44Oz77yJXG4gICAqIEByZXR1cm4gQ3NtOjpjc21VaW50MzIg6Kqt44G/5Y+W44Gj44GfMjTjg5Pjg4Pjg4jlgKTvvIjkuIvkvY0yNOODk+ODg+ODiOOBq+ioreWumu+8iVxuICAgKi9cbiAgcHVibGljIGdldDI0TGl0dGxlRW5kaWFuKCk6IG51bWJlciB7XG4gICAgY29uc3QgcmV0ID1cbiAgICAgICh0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCArIDIpIDw8IDE2KSB8XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAxKSA8PCA4KSB8XG4gICAgICB0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCk7XG4gICAgdGhpcy5fcmVhZE9mZnNldCArPSAzO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogQGJyaWVmIDMy44OT44OD44OI6Kqt44G/6L6844G/77yI44Oq44OI44Or44Ko44Oz44OH44Kj44Ki44Oz77yJXG4gICAqIEByZXR1cm4gQ3NtOjpjc21VaW50MzIg6Kqt44G/5Y+W44Gj44GfMzLjg5Pjg4Pjg4jlgKRcbiAgICovXG4gIHB1YmxpYyBnZXQzMkxpdHRsZUVuZGlhbigpOiBudW1iZXIge1xuICAgIGNvbnN0IHJldCA9XG4gICAgICAodGhpcy5fZmlsZURhdGFWaWV3LmdldFVpbnQ4KHRoaXMuX3JlYWRPZmZzZXQgKyAzKSA8PCAyNCkgfFxuICAgICAgKHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0ICsgMikgPDwgMTYpIHxcbiAgICAgICh0aGlzLl9maWxlRGF0YVZpZXcuZ2V0VWludDgodGhpcy5fcmVhZE9mZnNldCArIDEpIDw8IDgpIHxcbiAgICAgIHRoaXMuX2ZpbGVEYXRhVmlldy5nZXRVaW50OCh0aGlzLl9yZWFkT2Zmc2V0KTtcbiAgICB0aGlzLl9yZWFkT2Zmc2V0ICs9IDQ7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYnJpZWYg44K344Kw44ON44OB44Oj44Gu5Y+W5b6X44Go5Y+C54Wn5paH5a2X5YiX44Go44Gu5LiA6Ie044OB44Kn44OD44KvXG4gICAqIEBwYXJhbVtpbl0gcmVmZXJlbmNlIOaknOafu+WvvuixoeOBruOCt+OCsOODjeODgeODo+aWh+Wtl+WIl1xuICAgKiBAcmV0dmFsICB0cnVlICAgIOS4gOiHtOOBl+OBpuOBhOOCi1xuICAgKiBAcmV0dmFsICBmYWxzZSAgIOS4gOiHtOOBl+OBpuOBhOOBquOBhFxuICAgKi9cbiAgcHVibGljIGdldENoZWNrU2lnbmF0dXJlKHJlZmVyZW5jZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZ2V0U2lnbmF0dXJlOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoNCk7XG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nOiBVaW50OEFycmF5ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHJlZmVyZW5jZSk7XG4gICAgaWYgKHJlZmVyZW5jZS5sZW5ndGggIT0gNCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGxldCBzaWduYXR1cmVPZmZzZXQgPSAwOyBzaWduYXR1cmVPZmZzZXQgPCA0OyBzaWduYXR1cmVPZmZzZXQrKykge1xuICAgICAgZ2V0U2lnbmF0dXJlW3NpZ25hdHVyZU9mZnNldF0gPSB0aGlzLmdldDgoKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGdldFNpZ25hdHVyZVswXSA9PSByZWZlcmVuY2VTdHJpbmdbMF0gJiZcbiAgICAgIGdldFNpZ25hdHVyZVsxXSA9PSByZWZlcmVuY2VTdHJpbmdbMV0gJiZcbiAgICAgIGdldFNpZ25hdHVyZVsyXSA9PSByZWZlcmVuY2VTdHJpbmdbMl0gJiZcbiAgICAgIGdldFNpZ25hdHVyZVszXSA9PSByZWZlcmVuY2VTdHJpbmdbM11cbiAgICApO1xuICB9XG5cbiAgX2ZpbGVCeXRlOiBBcnJheUJ1ZmZlcjsgLy8vPCDjg63jg7zjg4njgZfjgZ/jg5XjgqHjgqTjg6vjga7jg5DjgqTjg4jliJdcbiAgX2ZpbGVEYXRhVmlldzogRGF0YVZpZXc7XG4gIF9maWxlU2l6ZTogbnVtYmVyOyAvLy88IOODleOCoeOCpOODq+OCteOCpOOCulxuICBfcmVhZE9mZnNldDogbnVtYmVyOyAvLy88IOODleOCoeOCpOODq+WPgueFp+S9jee9rlxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgTEFwcERlbGVnYXRlIH0gZnJvbSAnLi9sYXBwZGVsZWdhdGUnO1xuaW1wb3J0IHsgcmVzb3VyY2VzQ29uZmlnfSBmcm9tICcuL2xhcHBkZWZpbmUnO1xuaW1wb3J0IHsgTEFwcExpdmUyRE1hbmFnZXIgfSBmcm9tICcuL2xhcHBsaXZlMmRtYW5hZ2VyJ1xuaW1wb3J0IHtCYW5uZXJ9IGZyb20gJy4vYmFubmVycyc7XG5cblxuZnVuY3Rpb24gcHJpbnRWZXJzaW9uKCkge1xuICBjb25zb2xlLmxvZyhcIuasoui/juS9v+eUqCBNZWlEb3Ug5YmN56uv55yL5p2/5aiYXCIpXG4gIC8vQmFubmVyLnByaW50QmFubmVyKCk7XG59XG5cbmZ1bmN0aW9uICBzdGFydCgpIHtcbiAgcHJpbnRWZXJzaW9uKClcbiAgIC8vIGNyZWF0ZSB0aGUgYXBwbGljYXRpb24gaW5zdGFuY2VcbiAgIGlmIChMQXBwRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5pbml0aWFsaXplKCkgPT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgTEFwcERlbGVnYXRlLmdldEluc3RhbmNlKCkucnVuKCk7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG4gIExBcHBEZWxlZ2F0ZS5yZWxlYXNlSW5zdGFuY2UoKTtcbn1cbi8qKlxuICog5qC55o2uaW5kZXjmnaXmjqfliLbliIfmjaLmqKHlnovvvIzlj6rog73loavmlbTmlbBcbiAqIEBwYXJhbSBpbmRleCDmqKHlnovnmoTmrKHluo9cbiAqIOS7jjHlvIDlp4vjgIIg5bCP5LqOMO+8mumaj+acuuWKoOi9vVxuICogPjDliqDovb3mlbDnu4TkuIvmoIfkuLppbmRleC0x55qE5qih5Z6LXG4gKiA9PTAg5Yqg6L295LiL5LiA5Liq5qih5Z6LXG4gKi9cbmZ1bmN0aW9uIGNoYW5nZVNjZW5lKGluZGV4OiBudW1iZXIpIHtcbiAgbGV0IG1hbmFnZXIgPSBMQXBwTGl2ZTJETWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgbWFuYWdlci5yYW5kb21TY2VuZSgpO1xuICB9IGVsc2UgaWYgKGluZGV4ID4gMCApIHtcbiAgICBtYW5hZ2VyLmNoYW5nZVNjZW5lKGluZGV4LTEpXG4gIH0gZWxzZSBpZiAoaW5kZXggPT0wKSB7XG4gICAgbWFuYWdlci5uZXh0U2NlbmUoKTtcbiAgfVxuICBcblxuXG5cbn1cbm1vZHVsZS5leHBvcnRzID0geyBzdGFydCAsIHN0b3AgLCBjaGFuZ2VTY2VuZSAsIHJlc291cmNlc0NvbmZpZ31cbiIsIlxuLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFRvdWNoTWFuYWdlciB7XG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3N0YXJ0WCA9IDAuMDtcbiAgICB0aGlzLl9zdGFydFkgPSAwLjA7XG4gICAgdGhpcy5fbGFzdFggPSAwLjA7XG4gICAgdGhpcy5fbGFzdFkgPSAwLjA7XG4gICAgdGhpcy5fbGFzdFgxID0gMC4wO1xuICAgIHRoaXMuX2xhc3RZMSA9IDAuMDtcbiAgICB0aGlzLl9sYXN0WDIgPSAwLjA7XG4gICAgdGhpcy5fbGFzdFkyID0gMC4wO1xuICAgIHRoaXMuX2xhc3RUb3VjaERpc3RhbmNlID0gMC4wO1xuICAgIHRoaXMuX2RlbHRhWCA9IDAuMDtcbiAgICB0aGlzLl9kZWx0YVkgPSAwLjA7XG4gICAgdGhpcy5fc2NhbGUgPSAxLjA7XG4gICAgdGhpcy5fdG91Y2hTaW5nbGUgPSBmYWxzZTtcbiAgICB0aGlzLl9mbGlwQXZhaWxhYmxlID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2VudGVyWCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDZW50ZXJZKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RZO1xuICB9XG5cbiAgcHVibGljIGdldERlbHRhWCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kZWx0YVg7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGVsdGFZKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbHRhWTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTdGFydFgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRYO1xuICB9XG5cbiAgcHVibGljIGdldFN0YXJ0WSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdGFydFk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0WCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRZKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RZO1xuICB9XG5cbiAgcHVibGljIGdldFgxKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RYMTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRZMSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sYXN0WTE7XG4gIH1cblxuICBwdWJsaWMgZ2V0WDIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFgyO1xuICB9XG5cbiAgcHVibGljIGdldFkyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xhc3RZMjtcbiAgfVxuXG4gIHB1YmxpYyBpc1NpbmdsZVRvdWNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b3VjaFNpbmdsZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0ZsaWNrQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mbGlwQXZhaWxhYmxlO1xuICB9XG5cbiAgcHVibGljIGRpc2FibGVGbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9mbGlwQXZhaWxhYmxlID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICog44K/44OD44OB6ZaL5aeL5pmC44Kk44OZ44Oz44OIXG4gICAqIEBwYXJhbSBkZXZpY2VYIOOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnjjga7lgKRcbiAgICogQHBhcmFtIGRldmljZVkg44K/44OD44OB44GX44Gf55S76Z2i44GueeOBruWApFxuICAgKi9cbiAgcHVibGljIHRvdWNoZXNCZWdhbihkZXZpY2VYOiBudW1iZXIsIGRldmljZVk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX2xhc3RYID0gZGV2aWNlWDtcbiAgICB0aGlzLl9sYXN0WSA9IGRldmljZVk7XG4gICAgdGhpcy5fc3RhcnRYID0gZGV2aWNlWDtcbiAgICB0aGlzLl9zdGFydFkgPSBkZXZpY2VZO1xuICAgIHRoaXMuX2xhc3RUb3VjaERpc3RhbmNlID0gLTEuMDtcbiAgICB0aGlzLl9mbGlwQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLl90b3VjaFNpbmdsZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICog44OJ44Op44OD44Kw5pmC44Gu44Kk44OZ44Oz44OIXG4gICAqIEBwYXJhbSBkZXZpY2VYIOOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnjjga7lgKRcbiAgICogQHBhcmFtIGRldmljZVkg44K/44OD44OB44GX44Gf55S76Z2i44GueeOBruWApFxuICAgKi9cbiAgcHVibGljIHRvdWNoZXNNb3ZlZChkZXZpY2VYOiBudW1iZXIsIGRldmljZVk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX2xhc3RYID0gZGV2aWNlWDtcbiAgICB0aGlzLl9sYXN0WSA9IGRldmljZVk7XG4gICAgdGhpcy5fbGFzdFRvdWNoRGlzdGFuY2UgPSAtMS4wO1xuICAgIHRoaXMuX3RvdWNoU2luZ2xlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5Xjg6rjg4Pjgq/jga7ot53pm6LmuKzlrppcbiAgICogQHJldHVybiDjg5Xjg6rjg4Pjgq/ot53pm6JcbiAgICovXG4gIHB1YmxpYyBnZXRGbGlja0Rpc3RhbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UoXG4gICAgICB0aGlzLl9zdGFydFgsXG4gICAgICB0aGlzLl9zdGFydFksXG4gICAgICB0aGlzLl9sYXN0WCxcbiAgICAgIHRoaXMuX2xhc3RZXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDngrnvvJHjgYvjgonngrnvvJLjgbjjga7ot53pm6LjgpLmsYLjgoHjgotcbiAgICpcbiAgICogQHBhcmFtIHgxIO+8keOBpOebruOBruOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnjjga7lgKRcbiAgICogQHBhcmFtIHkxIO+8keOBpOebruOBruOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnnjga7lgKRcbiAgICogQHBhcmFtIHgyIO+8kuOBpOebruOBruOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnjjga7lgKRcbiAgICogQHBhcmFtIHkyIO+8kuOBpOebruOBruOCv+ODg+ODgeOBl+OBn+eUu+mdouOBrnnjga7lgKRcbiAgICovXG4gIHB1YmxpYyBjYWxjdWxhdGVEaXN0YW5jZShcbiAgICB4MTogbnVtYmVyLFxuICAgIHkxOiBudW1iZXIsXG4gICAgeDI6IG51bWJlcixcbiAgICB5MjogbnVtYmVyXG4gICk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgoeDEgLSB4MikgKiAoeDEgLSB4MikgKyAoeTEgLSB5MikgKiAoeTEgLSB5MikpO1xuICB9XG5cbiAgLyoqXG4gICAqIO+8kuOBpOebruOBruWApOOBi+OCieOAgeenu+WLlemHj+OCkuaxguOCgeOCi+OAglxuICAgKiDpgZXjgYbmlrnlkJHjga7loLTlkIjjga/np7vli5Xph4/vvJDjgILlkIzjgZjmlrnlkJHjga7loLTlkIjjga/jgIHntbblr77lgKTjgYzlsI/jgZXjgYTmlrnjga7lgKTjgpLlj4LnhafjgZnjgovjgIJcbiAgICpcbiAgICogQHBhcmFtIHYxIO+8keOBpOebruOBruenu+WLlemHj1xuICAgKiBAcGFyYW0gdjIg77yS44Gk55uu44Gu56e75YuV6YePXG4gICAqXG4gICAqIEByZXR1cm4g5bCP44GV44GE5pa544Gu56e75YuV6YePXG4gICAqL1xuICBwdWJsaWMgY2FsY3VsYXRlTW92aW5nQW1vdW50KHYxOiBudW1iZXIsIHYyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICh2MSA+IDAuMCAhPSB2MiA+IDAuMCkge1xuICAgICAgcmV0dXJuIDAuMDtcbiAgICB9XG5cbiAgICBjb25zdCBzaWduOiBudW1iZXIgPSB2MSA+IDAuMCA/IDEuMCA6IC0xLjA7XG4gICAgY29uc3QgYWJzb2x1dGVWYWx1ZTEgPSBNYXRoLmFicyh2MSk7XG4gICAgY29uc3QgYWJzb2x1dGVWYWx1ZTIgPSBNYXRoLmFicyh2Mik7XG4gICAgcmV0dXJuIChcbiAgICAgIHNpZ24gKiAoYWJzb2x1dGVWYWx1ZTEgPCBhYnNvbHV0ZVZhbHVlMiA/IGFic29sdXRlVmFsdWUxIDogYWJzb2x1dGVWYWx1ZTIpXG4gICAgKTtcbiAgfVxuXG4gIF9zdGFydFk6IG51bWJlcjsgLy8g44K/44OD44OB44KS6ZaL5aeL44GX44Gf5pmC44GueOOBruWApFxuICBfc3RhcnRYOiBudW1iZXI7IC8vIOOCv+ODg+ODgeOCkumWi+Wni+OBl+OBn+aZguOBrnnjga7lgKRcbiAgX2xhc3RYOiBudW1iZXI7IC8vIOOCt+ODs+OCsOODq+OCv+ODg+ODgeaZguOBrnjjga7lgKRcbiAgX2xhc3RZOiBudW1iZXI7IC8vIOOCt+ODs+OCsOODq+OCv+ODg+ODgeaZguOBrnnjga7lgKRcbiAgX2xhc3RYMTogbnVtYmVyOyAvLyDjg4Djg5bjg6vjgr/jg4Pjg4HmmYLjga7kuIDjgaTnm67jga5444Gu5YCkXG4gIF9sYXN0WTE6IG51bWJlcjsgLy8g44OA44OW44Or44K/44OD44OB5pmC44Gu5LiA44Gk55uu44GueeOBruWApFxuICBfbGFzdFgyOiBudW1iZXI7IC8vIOODgOODluODq+OCv+ODg+ODgeaZguOBruS6jOOBpOebruOBrnjjga7lgKRcbiAgX2xhc3RZMjogbnVtYmVyOyAvLyDjg4Djg5bjg6vjgr/jg4Pjg4HmmYLjga7kuozjgaTnm67jga5544Gu5YCkXG4gIF9sYXN0VG91Y2hEaXN0YW5jZTogbnVtYmVyOyAvLyAy5pys5Lul5LiK44Gn44K/44OD44OB44GX44Gf44Go44GN44Gu5oyH44Gu6Led6ZuiXG4gIF9kZWx0YVg6IG51bWJlcjsgLy8g5YmN5Zue44Gu5YCk44GL44KJ5LuK5Zue44Gu5YCk44G444GueOOBruenu+WLlei3nembouOAglxuICBfZGVsdGFZOiBudW1iZXI7IC8vIOWJjeWbnuOBruWApOOBi+OCieS7iuWbnuOBruWApOOBuOOBrnnjga7np7vli5Xot53pm6LjgIJcbiAgX3NjYWxlOiBudW1iZXI7IC8vIOOBk+OBruODleODrOODvOODoOOBp+aOm+OBkeWQiOOCj+OBm+OCi+aLoeWkp+eOh+OAguaLoeWkp+aTjeS9nOS4reS7peWkluOBrzHjgIJcbiAgX3RvdWNoU2luZ2xlOiBib29sZWFuOyAvLyDjgrfjg7PjgrDjg6vjgr/jg4Pjg4HmmYLjga90cnVlXG4gIF9mbGlwQXZhaWxhYmxlOiBib29sZWFuOyAvLyDjg5Xjg6rjg4Pjg5fjgYzmnInlirnjgYvjganjgYbjgYtcbn1cbiIsInZhciBnbG9iYWwgPVxuICAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbFRoaXMpIHx8XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZikgfHxcbiAgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbClcblxudmFyIHN1cHBvcnQgPSB7XG4gIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gZ2xvYmFsLFxuICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gZ2xvYmFsICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICBibG9iOlxuICAgICdGaWxlUmVhZGVyJyBpbiBnbG9iYWwgJiZcbiAgICAnQmxvYicgaW4gZ2xvYmFsICYmXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBnbG9iYWwsXG4gIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIGdsb2JhbFxufVxuXG5mdW5jdGlvbiBpc0RhdGFWaWV3KG9iaikge1xuICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbn1cblxuaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gIF1cblxuICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPVxuICAgIEFycmF5QnVmZmVyLmlzVmlldyB8fFxuICAgIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgfVxuICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5eX2B8fiFdL2kudGVzdChuYW1lKSB8fCBuYW1lID09PSAnJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lOiBcIicgKyBuYW1lICsgJ1wiJylcbiAgfVxuICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG5mdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICB9XG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvclxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpdGVyYXRvclxufVxuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gIHRoaXMubWFwID0ge31cblxuICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgIH0sIHRoaXMpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKVxuICAgIH0sIHRoaXMpXG4gIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICB9LCB0aGlzKVxuICB9XG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSArICcsICcgKyB2YWx1ZSA6IHZhbHVlXG59XG5cbkhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IFtdXG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgIGl0ZW1zLnB1c2gobmFtZSlcbiAgfSlcbiAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGl0ZW1zID0gW11cbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaXRlbXMucHVzaCh2YWx1ZSlcbiAgfSlcbiAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IFtdXG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgIGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSlcbiAgfSlcbiAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxufVxuXG5pZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xufVxuXG5mdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICB9XG4gIGJvZHkuYm9keVVzZWQgPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICB9XG4gICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICByZXR1cm4gcHJvbWlzZVxufVxuXG5mdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgcmV0dXJuIHByb21pc2Vcbn1cblxuZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICB9XG4gIHJldHVybiBjaGFycy5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgaWYgKGJ1Zi5zbGljZSkge1xuICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgfSBlbHNlIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gIH1cbn1cblxuZnVuY3Rpb24gQm9keSgpIHtcbiAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgLypcbiAgICAgIGZldGNoLW1vY2sgd3JhcHMgdGhlIFJlc3BvbnNlIG9iamVjdCBpbiBhbiBFUzYgUHJveHkgdG9cbiAgICAgIHByb3ZpZGUgdXNlZnVsIHRlc3QgaGFybmVzcyBmZWF0dXJlcyBzdWNoIGFzIGZsdXNoLiBIb3dldmVyLCBvblxuICAgICAgRVM1IGJyb3dzZXJzIHdpdGhvdXQgZmV0Y2ggb3IgUHJveHkgc3VwcG9ydCBwb2xseWZpbGxzIG11c3QgYmUgdXNlZDtcbiAgICAgIHRoZSBwcm94eS1wb2xseWZpbGwgaXMgdW5hYmxlIHRvIHByb3h5IGFuIGF0dHJpYnV0ZSB1bmxlc3MgaXQgZXhpc3RzXG4gICAgICBvbiB0aGUgb2JqZWN0IGJlZm9yZSB0aGUgUHJveHkgaXMgY3JlYXRlZC4gVGhpcyBjaGFuZ2UgZW5zdXJlc1xuICAgICAgUmVzcG9uc2UuYm9keVVzZWQgZXhpc3RzIG9uIHRoZSBpbnN0YW5jZSwgd2hpbGUgbWFpbnRhaW5pbmcgdGhlXG4gICAgICBzZW1hbnRpYyBvZiBzZXR0aW5nIFJlcXVlc3QuYm9keVVzZWQgaW4gdGhlIGNvbnN0cnVjdG9yIGJlZm9yZVxuICAgICAgX2luaXRCb2R5IGlzIGNhbGxlZC5cbiAgICAqL1xuICAgIHRoaXMuYm9keVVzZWQgPSB0aGlzLmJvZHlVc2VkXG4gICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgaWYgKCFib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGJvZHkpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHZhciBpc0NvbnN1bWVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKGlzQ29uc3VtZWQpIHtcbiAgICAgICAgICByZXR1cm4gaXNDb25zdW1lZFxuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodGhpcy5fYm9keUFycmF5QnVmZmVyKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnVmZmVyLnNsaWNlKFxuICAgICAgICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnl0ZU9mZnNldCxcbiAgICAgICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ5dGVPZmZzZXQgKyB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnl0ZUxlbmd0aFxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbnZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICByZXR1cm4gbWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEgPyB1cGNhc2VkIDogbWV0aG9kXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXF1ZXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BsZWFzZSB1c2UgdGhlIFwibmV3XCIgb3BlcmF0b3IsIHRoaXMgRE9NIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uJylcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICB9XG4gICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgdGhpcy5zaWduYWwgPSBpbnB1dC5zaWduYWxcbiAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgfVxuXG4gIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ3NhbWUtb3JpZ2luJ1xuICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gIH1cbiAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICB0aGlzLnNpZ25hbCA9IG9wdGlvbnMuc2lnbmFsIHx8IHRoaXMuc2lnbmFsXG4gIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgfVxuICB0aGlzLl9pbml0Qm9keShib2R5KVxuXG4gIGlmICh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykge1xuICAgIGlmIChvcHRpb25zLmNhY2hlID09PSAnbm8tc3RvcmUnIHx8IG9wdGlvbnMuY2FjaGUgPT09ICduby1jYWNoZScpIHtcbiAgICAgIC8vIFNlYXJjaCBmb3IgYSAnXycgcGFyYW1ldGVyIGluIHRoZSBxdWVyeSBzdHJpbmdcbiAgICAgIHZhciByZVBhcmFtU2VhcmNoID0gLyhbPyZdKV89W14mXSovXG4gICAgICBpZiAocmVQYXJhbVNlYXJjaC50ZXN0KHRoaXMudXJsKSkge1xuICAgICAgICAvLyBJZiBpdCBhbHJlYWR5IGV4aXN0cyB0aGVuIHNldCB0aGUgdmFsdWUgd2l0aCB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgIHRoaXMudXJsID0gdGhpcy51cmwucmVwbGFjZShyZVBhcmFtU2VhcmNoLCAnJDFfPScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSBhZGQgYSBuZXcgJ18nIHBhcmFtZXRlciB0byB0aGUgZW5kIHdpdGggdGhlIGN1cnJlbnQgdGltZVxuICAgICAgICB2YXIgcmVRdWVyeVN0cmluZyA9IC9cXD8vXG4gICAgICAgIHRoaXMudXJsICs9IChyZVF1ZXJ5U3RyaW5nLnRlc3QodGhpcy51cmwpID8gJyYnIDogJz8nKSArICdfPScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5SZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywge2JvZHk6IHRoaXMuX2JvZHlJbml0fSlcbn1cblxuZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICBib2R5XG4gICAgLnRyaW0oKVxuICAgIC5zcGxpdCgnJicpXG4gICAgLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gIHJldHVybiBmb3JtXG59XG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAvLyBSZXBsYWNlIGluc3RhbmNlcyBvZiBcXHJcXG4gYW5kIFxcbiBmb2xsb3dlZCBieSBhdCBsZWFzdCBvbmUgc3BhY2Ugb3IgaG9yaXpvbnRhbCB0YWIgd2l0aCBhIHNwYWNlXG4gIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMwI3NlY3Rpb24tMy4yXG4gIHZhciBwcmVQcm9jZXNzZWRIZWFkZXJzID0gcmF3SGVhZGVycy5yZXBsYWNlKC9cXHI/XFxuW1xcdCBdKy9nLCAnICcpXG4gIC8vIEF2b2lkaW5nIHNwbGl0IHZpYSByZWdleCB0byB3b3JrIGFyb3VuZCBhIGNvbW1vbiBJRTExIGJ1ZyB3aXRoIHRoZSBjb3JlLWpzIDMuNi4wIHJlZ2V4IHBvbHlmaWxsXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gvaXNzdWVzLzc0OFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNzUxXG4gIHByZVByb2Nlc3NlZEhlYWRlcnNcbiAgICAuc3BsaXQoJ1xccicpXG4gICAgLm1hcChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgIHJldHVybiBoZWFkZXIuaW5kZXhPZignXFxuJykgPT09IDAgPyBoZWFkZXIuc3Vic3RyKDEsIGhlYWRlci5sZW5ndGgpIDogaGVhZGVyXG4gICAgfSlcbiAgICAuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgcmV0dXJuIGhlYWRlcnNcbn1cblxuQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG5leHBvcnQgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc3BvbnNlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BsZWFzZSB1c2UgdGhlIFwibmV3XCIgb3BlcmF0b3IsIHRoaXMgRE9NIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uJylcbiAgfVxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfVxuXG4gIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzID09PSB1bmRlZmluZWQgPyAyMDAgOiBvcHRpb25zLnN0YXR1c1xuICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gIHRoaXMuc3RhdHVzVGV4dCA9IG9wdGlvbnMuc3RhdHVzVGV4dCA9PT0gdW5kZWZpbmVkID8gJycgOiAnJyArIG9wdGlvbnMuc3RhdHVzVGV4dFxuICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG59XG5cbkJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cblJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICB1cmw6IHRoaXMudXJsXG4gIH0pXG59XG5cblJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gIHJldHVybiByZXNwb25zZVxufVxuXG52YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG59XG5cbmV4cG9ydCB2YXIgRE9NRXhjZXB0aW9uID0gZ2xvYmFsLkRPTUV4Y2VwdGlvblxudHJ5IHtcbiAgbmV3IERPTUV4Y2VwdGlvbigpXG59IGNhdGNoIChlcnIpIHtcbiAgRE9NRXhjZXB0aW9uID0gZnVuY3Rpb24obWVzc2FnZSwgbmFtZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdmFyIGVycm9yID0gRXJyb3IobWVzc2FnZSlcbiAgICB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2tcbiAgfVxuICBET01FeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpXG4gIERPTUV4Y2VwdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBET01FeGNlcHRpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoKGlucHV0LCBpbml0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuXG4gICAgaWYgKHJlcXVlc3Quc2lnbmFsICYmIHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IERPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpXG4gICAgfVxuXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICBmdW5jdGlvbiBhYm9ydFhocigpIHtcbiAgICAgIHhoci5hYm9ydCgpXG4gICAgfVxuXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICB9XG4gICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXhVcmwodXJsKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdXJsID09PSAnJyAmJiBnbG9iYWwubG9jYXRpb24uaHJlZiA/IGdsb2JhbC5sb2NhdGlvbi5ocmVmIDogdXJsXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgZml4VXJsKHJlcXVlc3QudXJsKSwgdHJ1ZSlcblxuICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnb21pdCcpIHtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIpIHtcbiAgICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgc3VwcG9ydC5hcnJheUJ1ZmZlciAmJlxuICAgICAgICByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSAmJlxuICAgICAgICByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nKSAhPT0gLTFcbiAgICAgICkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbml0ICYmIHR5cGVvZiBpbml0LmhlYWRlcnMgPT09ICdvYmplY3QnICYmICEoaW5pdC5oZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGluaXQuaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIG5vcm1hbGl6ZVZhbHVlKGluaXQuaGVhZGVyc1tuYW1lXSkpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3Quc2lnbmFsKSB7XG4gICAgICByZXF1ZXN0LnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKVxuXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIERPTkUgKHN1Y2Nlc3Mgb3IgZmFpbHVyZSlcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgcmVxdWVzdC5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gIH0pXG59XG5cbmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxuXG5pZiAoIWdsb2JhbC5mZXRjaCkge1xuICBnbG9iYWwuZmV0Y2ggPSBmZXRjaFxuICBnbG9iYWwuSGVhZGVycyA9IEhlYWRlcnNcbiAgZ2xvYmFsLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIGdsb2JhbC5SZXNwb25zZSA9IFJlc3BvbnNlXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9