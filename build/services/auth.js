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
exports.loginUser = exports.registerNewUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
// Aquí es donde debe haber conexión directa con la base de datos
const registerNewUser = ({ email, password, name }) => __awaiter(void 0, void 0, void 0, function* () {
    const checkIs = yield user_1.default.findOne({ email });
    if (checkIs)
        return 'ALREADY_USER';
    // Creando contraseña encriptada
    const passwordHash = yield (0, bcrypt_handle_1.encryptPassword)(password);
    const registerNewUser = yield user_1.default.create({ email, password: passwordHash, name });
    return registerNewUser;
});
exports.registerNewUser = registerNewUser;
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const checkIs = yield user_1.default.findOne({ email });
    if (!checkIs)
        return 'NOT_FOUND_USER';
    const passwordHash = checkIs.password;
    const isCorrect = yield (0, bcrypt_handle_1.verifyPassword)(password, passwordHash);
    if (!isCorrect)
        return 'PASSWORD_INCORRECT';
    const token = yield (0, jwt_handle_1.generateToken)(checkIs.email);
    const data = {
        token,
        user: checkIs
    };
    return data;
});
exports.loginUser = loginUser;
