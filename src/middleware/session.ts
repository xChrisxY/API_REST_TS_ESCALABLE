import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {

      user? : string | JwtPayload;

};

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {

      try {
            
            const jwtByUser = req.headers.authorization || "";
            const jwt = jwtByUser.split(" ").pop();
            
            const isUser = verifyToken(`${jwt}`);
            console.log(isUser);

            if (!isUser) {

                  res.status(401).send('NO TIENES UN JWT VALIDO');
            
            } else {

                  req.user = isUser;
                  next();
            }

      } catch (error) {

            console.log({ error });            
            res.status(400).send('SESSION_NO_VALIDA')
      }

};

export { checkJwt };