"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const zod_1 = require("zod");
exports.orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email('Please provide a valid email address'),
    productId: zod_1.z.string().length(24, 'Product ID must be exactly 24 characters long'),
    price: zod_1.z.number().nonnegative('Price must be a non-negative number'),
    quantity: zod_1.z.number().int('Quantity must be an integer').positive('Quantity must be a positive number')
});
