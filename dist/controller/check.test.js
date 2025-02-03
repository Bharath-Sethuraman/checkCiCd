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
const globals_1 = require("@jest/globals");
const check_1 = __importDefault(require("./check"));
(0, globals_1.test)('should return success when data is present', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, check_1.default)();
    (0, globals_1.expect)(response).toHaveProperty('status', 'Success');
    (0, globals_1.expect)(response).toHaveProperty('msg', 'data retrieved');
    (0, globals_1.expect)(response).toHaveProperty('data');
    (0, globals_1.expect)(Array.isArray(response.data)).toBe(true);
    (0, globals_1.expect)(response.data.length).toBeGreaterThan(0);
}));
(0, globals_1.test)('should return failed when data is missing', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, check_1.default)();
    (0, globals_1.expect)(response).toHaveProperty('status', 'Failed');
    (0, globals_1.expect)(response).toHaveProperty('msg', 'No data retrieved');
    (0, globals_1.expect)(response).not.toHaveProperty('data'); // Ensures 'data' does not exist
}));
