"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
;
const checkJwt = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop();
        const isUser = (0, jwt_handle_1.verifyToken)(`${jwt}`);
        console.log(isUser);
        if (!isUser) {
            res.status(401).send('NO TIENES UN JWT VALIDO');
        }
        else {
            req.user = isUser;
            next();
        }
    }
    catch (error) {
        console.log({ error });
        res.status(400).send('SESSION_NO_VALIDA');
    }
};
exports.checkJwt = checkJwt;
