import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { CarServices } from "./car.service";
//create car 
const createCar = catchAsync(async (req: Request, res: Response) => {
    const result = await CarServices.createCarIntoDB(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Car created successfully",
        data: result,
    });
});
// get All car 
const getAllCar = catchAsync(async (req: Request, res: Response) => {
    const result = await CarServices.getAllCarFromDB();
    if (!result) {
        res.status(httpStatus.NOT_FOUND).json({
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "No Data Found",
            data: [],
        });
    }
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Cars retrieved successfully",
        data: result,
    });
});

// get single car 
const getSingleCar = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await CarServices.getSingleCarFromDB(id);
    if (!result) {
        res.status(httpStatus.NOT_FOUND).json({
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "No Data Found",
            data: [],
        });
    }
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "A Car retrieved successfully",
        data: result,
    });
});

// exprt car controller
export const CarController = {
    createCar,
    getAllCar,
    getSingleCar
};