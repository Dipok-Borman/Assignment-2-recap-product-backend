
// Define the TypeScript interface for the Order document
export interface IOrder{
  email: string;
  productId: string;
  price: number;
  quantity: number;
}

// Create the Mongoose schema for the Order model
