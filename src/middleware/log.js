"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
// El middleware es un puente entre nuestras rutas y nuestros controladores
// Los middlewares son quienes deciden que controladores se pueden ejecutar
const logMiddleware = (req, res, next) => {
    const header = req.headers;
    const userAgent = header["user-agent"];
    console.log("user agent: ", userAgent);
    next();
};
exports.logMiddleware = logMiddleware;
