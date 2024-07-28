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
exports.productServices = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const createProductIntoDb = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await Product.create(productData);
    // return result;
    const product = new product_model_1.default(productData); //create an instance
    if (yield product.isProductExist(productData.productId)) {
        throw new Error('Product already Exists');
    }
    const result = yield product.save(); //build in instant methode
    return result;
});
const getAllProductFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.find();
    return result;
});
const getSingleProductFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.find({ productId: id });
    return result;
});
const updateSingleProductFromDb = (id, updatingData) => __awaiter(void 0, void 0, void 0, function* () {
    // const filter = { productId: id };
    // const update = { updatingData };
    const result = yield product_model_1.default.findByIdAndUpdate(id, updatingData, { new: true });
    return result;
});
const deleteSingleProductFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndDelete(id);
    return result;
});
const searchProductFromDb = (productName) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.find({ name: { $regex: productName } });
    return result;
});
exports.productServices = {
    createProductIntoDb,
    getAllProductFromDb,
    getSingleProductFromDb,
    updateSingleProductFromDb,
    deleteSingleProductFromDb,
    searchProductFromDb
};
