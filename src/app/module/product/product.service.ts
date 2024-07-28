import { IProduct } from "./product.interface";
import Product from "./product.model";

const createProductIntoDb = async (productData: IProduct) => {
    // const result = await Product.create(productData);
    // return result;
    const product = new Product(productData); //create an instance


    if (await product.isProductExist(productData.productId)) {
        throw new Error('Product already Exists')
    }

    const result = await product.save(); //build in instant methode
    return result;
}

const getAllProductFromDb = async () => {
    const result = await Product.find();
    return result;
}

const getSingleProductFromDb = async (id: string) => {
    const result = await Product.find({ productId: id });
    return result;
}

const updateSingleProductFromDb = async (id: string, updatingData: IProduct) => {
    // const filter = { productId: id };
    // const update = { updatingData };
    const result = await Product.findByIdAndUpdate(id, updatingData, {new : true});
    return result;
}

const deleteSingleProductFromDb = async (id: string) => {
    const result = await Product.findByIdAndDelete(id);
    return result;
}

const searchProductFromDb = async (productName: string) => {
    const result = await Product.find({name : { $regex : productName}});
    return result;
}

export const productServices = {
    createProductIntoDb,
    getAllProductFromDb,
    getSingleProductFromDb,
    updateSingleProductFromDb,
    deleteSingleProductFromDb,
    searchProductFromDb
}