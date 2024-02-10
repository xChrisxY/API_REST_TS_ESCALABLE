import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

// El controlador es el encargado de recibir y responder
// más no hacer la lógica de negocio
// la lógica de negocio está en el servicio

const registerCtrl = async ({ body }: Request, res : Response) => {

      const responseUser = await registerNewUser(body);
      res.status(200).send(responseUser);

};

const loginCtrl = async ({ body } : Request, res: Response) => {

      const { email, password } = body;
      const response = await loginUser({ email, password });

      if (response === 'PASSWORD_INCORRECT') {

            res.status(403).send(response);

      } else { 

            res.status(200).send(response);
            
      }

      
};

export { registerCtrl, loginCtrl };

