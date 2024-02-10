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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCtrl = exports.registerCtrl = void 0;
const auth_1 = require("../services/auth");
// El controlador es el encargado de recibir y responder
// más no hacer la lógica de negocio
// la lógica de negocio está en el servicio
const registerCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUser = yield (0, auth_1.registerNewUser)(body);
    res.status(200).send(responseUser);
});
exports.registerCtrl = registerCtrl;
const loginCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = body;
    const response = yield (0, auth_1.loginUser)({ email, password });
    if (response === 'PASSWORD_INCORRECT') {
        res.status(403).send(response);
    }
    else {
        res.status(200).send(response);
    }
});
exports.loginCtrl = loginCtrl;
