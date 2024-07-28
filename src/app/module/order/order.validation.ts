import { z } from 'zod';

export const orderValidationSchema = z.object({
    email: z.string().email('Please provide a valid email address'),
    productId: z.string().length(24, 'Product ID must be exactly 24 characters long'),
    price: z.number().nonnegative('Price must be a non-negative number'),
    quantity: z.number().int('Quantity must be an integer').positive('Quantity must be a positive number')
});