import { Response } from "express";

const handleHttp = (res: Response, error : String, errorRaw? : any) => {

      console.log(errorRaw);
      res.status(500).send({error});

}

export { handleHttp }; 