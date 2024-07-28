import { Request, Response } from "express";
import { productServices } from "./product.service";
import ProductValidationSchema from "./product.validation";

const createProduct = async (req : Request, res : Response) => {
    try {
        const productData = req.body.product;

        // zod validation
        const productParseData = ProductValidationSchema.parse(productData);

        const result = await productServices.createProductIntoDb(productParseData);
        res.status(200).json({
            success : true,
            message : 'Product is created successfully',
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

const getAllProduct = async (req : Request, res : Response) => {
    try {
        const result = await productServices.getAllProductFromDb();
        res.status(200).json({
            success : true,
            message : 'Product is retrived successfully',
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

const getSingleProduct = async (req : Request, res : Response) => {
    try {
        const id = req.params.productId;
        const result = await productServices.getSingleProductFromDb(id);
        res.status(200).json({
            success : true,
            message : 'Single Product is retrived successfully',
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

const updateSingleProduct = async (req : Request, res : Response) => {
    try {
        const {id} = req.params;
        const updatingData = req.body.product;
        const result = await productServices.updateSingleProductFromDb(id, updatingData);
        res.status(200).json({
            success : true,
            message : 'Single Product is Updated successfully',
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

const deleteSingleProduct = async (req : Request, res : Response) => {
    try {
        const {id} = req.params;
        const result = await productServices.deleteSingleProductFromDb(id);
        res.status(200).json({
            success : true,
            message : 'Single Product is Deleted successfully',
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

const searchProduct = async (req : Request, res : Response) => {
    try {
        const name = req.query.name as string;
        const result = await productServices.searchProductFromDb(name);
        res.status(200).json({
            success : true,
            message : 'Search Products is retrived successfully',
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

export const productControllers = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
    searchProduct
}