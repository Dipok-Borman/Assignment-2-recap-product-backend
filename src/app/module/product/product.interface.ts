import { Model } from "mongoose";

export interface IProduct {
    productId : string;
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: {
        type: string;
        value: string;
    }[];
    inventory: {
        quantity: number;
        inStock: boolean;
    };
}


export type TProductMethods = {
    isProductExist(id : string) : Promise<IProduct | null>
}

export type ProductModel = Model<IProduct, Record<string, never>, TProductMethods>