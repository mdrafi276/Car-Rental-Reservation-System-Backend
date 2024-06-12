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

// export car services
export const CarServices = {
    createCarIntoDB,
    getAllCarFromDB,
    getSingleCarFromDB,
};  