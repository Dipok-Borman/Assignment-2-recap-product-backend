"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControllers = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = require("./order.validation");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        // zod validation
        const orderParseData = order_validation_1.orderValidationSchema.parse(orderData);
        const result = yield order_service_1.orderServices.createOrderIntoDb(orderParseData);
        res.status(200).json({
            success: true,
            message: 'Order is created successfully',
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error
        });
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderServices.getAllOrderFromDb();
        res.status(200).json({
            success: true,
            message: 'Order is retrived successfully',
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error
        });
    }
});
const getOrderByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const result = yield order_service_1.orderServices.getOrderByEmailFromDb(email);
        res.status(200).json({
            success: true,
            message: 'Get Orders By Customar Email is retrived successfully',
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error
        });
    }
});
exports.orderControllers = {
    createOrder,
    getAllOrder,
    getOrderByEmail
};
