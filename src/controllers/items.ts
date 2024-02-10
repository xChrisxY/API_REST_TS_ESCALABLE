import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item";

// Orquestación entre infraestructura y lógica de negocio
// Los controladores solo deben enterarse de las cosas que vienen de http
// Es decir del Request y del Response, de recibir y responder algo
// NO debe saber de lógica de negocio

const getItem = async ({ params }: Request, res: Response ) => {

      try {
            
            const { id } = params;
            
            const response = await getCar(id);

            const data = response ? response : 'NOT_FOUND';

            res.send(data);

      } catch (error) {
            
            handleHttp(res, 'ERROR_GET_ITEM')

      }

};

const postItem = async (req: Request, res: Response) => {

      try {
            
            const { body } = req;
            const a = await insertCar(body);
            res.status(200).send(a);
            

      } catch (error) {

            handleHttp(res, 'ERRR_POST_ITEM', error)
            
      }

}

const getItems = async (req: Request, res: Response ) => {

      try {

            const response = await getCars();
            res.send(response);
            
      } catch (error) {
            
            handleHttp(res, 'ERROR_GET_ITEMS')

      }
};

const updateItem = async({params, body}: Request, res: Response ) => {

      try {

            const { id } = params;

            const responseItem = await updateCar(id, body);
            res.status(200).send(responseItem);
            
      } catch (error) {
            
            handleHttp(res, 'ERROR_UPDATE_ITEM')

      }
};

const deleteItem = async ({ params } : Request, res: Response ) => {

      try {
            
            const { id } = params;

            const responseItem = await deleteCar(id);

            res.status(200).send(responseItem);
            
      } catch (error) {
            
            handleHttp(res, 'ERROR_DELETE_ITEM')

      }

};

export { getItem, postItem ,getItems, updateItem, deleteItem };