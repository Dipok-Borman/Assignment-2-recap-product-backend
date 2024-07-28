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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body.product;
        // zod validation
        const productParseData = product_validation_1.default.parse(productData);
        const result = yield product_service_1.productServices.createProductIntoDb(productParseData);
        res.status(200).json({
            success: true,
            message: 'Product is created successfully',
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
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productServices.getAllProductFromDb();
        res.status(200).json({
            success: true,
            message: 'Product is retrived successfully',
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
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_service_1.productServices.getSingleProductFromDb(id);
        res.status(200).json({
            success: true,
            message: 'Single Product is retrived successfully',
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
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatingData = req.body.product;
        const result = yield product_service_1.productServices.updateSingleProductFromDb(id, updatingData);
        res.status(200).json({
            success: true,
            message: 'Single Product is Updated successfully',
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
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield product_service_1.productServices.deleteSingleProductFromDb(id);
        res.status(200).json({
            success: true,
            message: 'Single Product is Deleted successfully',
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
const searchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.query.name;
        const result = yield product_service_1.productServices.searchProductFromDb(name);
        res.status(200).json({
            success: true,
            message: 'Search Products is retrived successfully',
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
exports.productControllers = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
    searchProduct
};
