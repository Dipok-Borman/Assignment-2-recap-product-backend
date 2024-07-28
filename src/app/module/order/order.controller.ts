import { Request, Response } from "express";
import { orderServices } from "./order.service";
import { orderValidationSchema } from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;

        // zod validation
        const orderParseData = orderValidationSchema.parse(orderData);

        const result = await orderServices.createOrderIntoDb(orderParseData);
        res.status(200).json({
            success: true,
            message: 'Order is created successfully',
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error
        })
    }
}

const getAllOrder = async (req : Request, res : Response) => {
    try {
        const result = await orderServices.getAllOrderFromDb();
        res.status(200).json({
            success : true,
            message : 'Order is retrived successfully',
            data : result
        })
    } catch (error : any) {
        res.status(500).json({
            success : false,
            message : error.message || 'Something went wrong',
            error : error
        })
    }
}

const getOrderByEmail = async (req : Request, res : Response) => {
    try {
        const email = req.query.email as string;
        const result = await orderServices.getOrderByEmailFromDb(email);
        res.status(200).json({
            success : true,
            message : 'Get Orders By Customar Email is retrived successfully',
            data : result
        })
    } catch (error : any) {
        res.status(500).json({
            success : false,
            message : error.message || 'Something went wrong',
            error : error
        })
    }
}

export const orderControllers = {
    createOrder,
    getAllOrder,
    getOrderByEmail
}