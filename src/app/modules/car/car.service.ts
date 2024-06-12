import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TCar } from "./car.interface";
import { Car } from "./car.model";

//create car service
const createCarIntoDB = async (carData: TCar) => {
    const result = await Car.create(carData);
    return result;
};
const getAllCarFromDB = async () => {
    const result = await Car.find();

    return result;
};
// get single car form database 
const getSingleCarFromDB = async (id: string) => {
    const result = await Car.findById(id);
    return result;
};

//update car into database
const updateCarIntoDB = async (id: string, payload: Partial<TCar>) => {
    const isCarExists = await Car.findById(id);
    if (!isCarExists) {
        throw new AppError(httpStatus.NOT_FOUND, "Car is not found !");
    }
    const result = await Car.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

const deleteCarFromDB = async (id: string) => {
    const isCarExists = await Car.findById(id);
    if (!isCarExists) {
        throw new AppError(httpStatus.NOT_FOUND, "Car is not found !");
    }
    const result = await Car.findByIdAndUpdate(
        id,
        { isDeleted: true },
        { new: true }
    );
    return result;
};
// export car services
export const CarServices = {
    createCarIntoDB,
    getAllCarFromDB,
    getSingleCarFromDB,
    updateCarIntoDB,
    deleteCarFromDB
};  
