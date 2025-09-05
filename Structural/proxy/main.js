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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var _this = this;
var RealProductService = /** @class */ (function () {
    function RealProductService() {
    }
    RealProductService.prototype.getProduct = function (productId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("\uD83D\uDD0D Buscando produto ".concat(productId, " na API..."));
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 2000); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, "Produto ".concat(productId, " - Detalhes do produto da API")];
                }
            });
        });
    };
    return RealProductService;
}());
var ProductServiceProxy = /** @class */ (function () {
    function ProductServiceProxy() {
        this.realService = new RealProductService();
        this.cache = new Map();
    }
    ProductServiceProxy.prototype.getProduct = function (productId) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.cache.has(productId)) {
                            console.log("\u26A1 Retornando produto ".concat(productId, " do cache."));
                            return [2 /*return*/, this.cache.get(productId)];
                        }
                        return [4 /*yield*/, this.realService.getProduct(productId)];
                    case 1:
                        product = _a.sent();
                        this.cache.set(productId, product);
                        return [2 /*return*/, product];
                }
            });
        });
    };
    return ProductServiceProxy;
}());
(function () { return __awaiter(_this, void 0, void 0, function () {
    var productService, _a, _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                productService = new ProductServiceProxy();
                _b = (_a = console).log;
                return [4 /*yield*/, productService.getProduct("123")];
            case 1:
                _b.apply(_a, [_g.sent()]);
                _d = (_c = console).log;
                return [4 /*yield*/, productService.getProduct("123")];
            case 2:
                _d.apply(_c, [_g.sent()]);
                _f = (_e = console).log;
                return [4 /*yield*/, productService.getProduct("456")];
            case 3:
                _f.apply(_e, [_g.sent()]);
                return [2 /*return*/];
        }
    });
}); })();
