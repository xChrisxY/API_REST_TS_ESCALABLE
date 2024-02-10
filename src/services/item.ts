import ItemModel from "../models/items";
import { Car } from "../interfaces/car.interface";

const insertCar = async (item: Car) => {

      const responseInsert = await ItemModel.create(item);
      return responseInsert;

};

const getCars = async () => {

      const responseItem = await ItemModel.find({});
      return responseItem;

};

const getCar = async (id: string) => {

      const responseItem = await ItemModel.findOne({_id : id});
      return responseItem;

};

const updateCar = async (id : string, data : Car) => {

      const updatedCar = await ItemModel.findByIdAndUpdate({_id : id}, data, {
            new : true
      });

      return updatedCar;

};

const deleteCar = async (id: string) => {

      const responseItem = await ItemModel.deleteOne({_id : id})
      return responseItem;

};

export { insertCar, getCars, getCar, updateCar, deleteCar };