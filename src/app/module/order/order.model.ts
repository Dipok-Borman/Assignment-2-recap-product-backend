import mongoose, { Schema } from "mongoose";
import { IOrder } from "./order.interface";

export const orderSchema: Schema = new Schema({
    email: {
      type: String,
      required: true,
      trim: true,
      match: [/.+@.+\..+/, 'Please provide a valid email address']
    },
    productId: {
      type: String,
      required: true,
      minlength: 24,
      maxlength: 24,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price must be a positive number']
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1'],
      integer: true
    }
  });
  
  // Create the Mongoose model for the Order schema
  const Order = mongoose.model<IOrder>('Order', orderSchema);
  
  export default Order;