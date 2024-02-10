import { NextFunction, Request, Response } from "express";

// El middleware es un puente entre nuestras rutas y nuestros controladores
// Los middlewares son quienes deciden que controladores se pueden ejecutar

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {

      const header = req.headers;
      const userAgent = header["user-agent"];
      console.log("user agent: ", userAgent);
      next();

};

export { logMiddleware };