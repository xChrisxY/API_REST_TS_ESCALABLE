import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";

// Orquestación entre infraestructura y lógica de negocio
// Los controladores solo deben enterarse de las cosas que vienen de http
// Es decir del Request y del Response, de recibir y responder algo
// NO debe saber de lógica de negocio
interface RequestExt extends Request {
      
      user?: string | JwtPayload

}

const getItems = async (req: RequestExt, res: Response ) => {

      try {


            res.send({
                  data : 'Estos solo lo ve las personas con session / JWT',
                  user : req.user
            });
            
      } catch (error) {
            
            handleHttp(res, 'ERROR_GET_ITEMS')

      }
};

export { getItems };