import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

// Orquestación entre infraestructura y lógica de negocio
// Los controladores solo deben enterarse de las cosas que vienen de http
// Es decir del Request y del Response, de recibir y responder algo
// NO debe saber de lógica de negocio

const getBlog = (req: Request, res: Response ) => {

      try {
            

      } catch (error) {
            
            handleHttp(res, 'ERROR_GET_Blog')

      }

};

const postBlog = (req: Request, res: Response) => {

      try {
            
            const { body } = req;

            res.status(200).send(body);

      } catch (error) {

            handleHttp(res, 'ERRR_POST_BlOGS')
            
      }

}

const getBlogs = (req: Request, res: Response ) => {

      try {
            
      } catch (error) {
            
            handleHttp(res, 'ERROR_GET_BLOGS')

      }
};

const updateBlog = (req: Request, res: Response ) => {

      try {
            
      } catch (error) {
            
            handleHttp(res, 'ERROR_UPDATE_Blog')

      }
};

const deleteBlog = (req: Request, res: Response ) => {

      try {
            
      } catch (error) {
            
            handleHttp(res, 'ERROR_DELETE_Blog')

      }

};

export { getBlog, getBlogs, postBlog, updateBlog, deleteBlog };