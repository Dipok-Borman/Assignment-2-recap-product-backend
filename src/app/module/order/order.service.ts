import { IOrder } from "./order.interface";
import Order from "./order.model";

const createOrderIntoDb = async (orderData: IOrder) => {
    const result = await Order.create(orderData);
    return result;
}

const getAllOrderFromDb = async () => {
    const result = await Order.find();
    return result;
}

const getOrderByEmailFromDb = async (customarEmail : string) => {
    const result = await Order.find({email : customarEmail}).exec();
    return result;
}

export const orderServices = {
    createOrderIntoDb,
    getAllOrderFromDb,
    getOrderByEmailFromDb
}