"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const pluralize_1 = __importDefault(require("pluralize"));
class Service {
    constructor() {
        // private -> sadece sınıf içerisinden ulaşılabilir, dışarıya kapalıdır. default public -> dışarıdan ulaşılabilir.
        this.tableName = (0, pluralize_1.default)(this.constructor.name.replace("Service", ""));
    }
    get(id, url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url);
            const data = (yield response.json());
            return data;
        });
    }
    getAll(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url);
            const data = (yield response.json());
            return data;
        });
    }
}
exports.Service = Service;
