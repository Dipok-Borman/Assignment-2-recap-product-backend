"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.get('/search', product_controller_1.productControllers.searchProduct);
router.post('/', product_controller_1.productControllers.createProduct);
router.get('/', product_controller_1.productControllers.getAllProduct);
router.get('/:productId', product_controller_1.productControllers.getSingleProduct);
router.put('/:id', product_controller_1.productControllers.updateSingleProduct);
router.delete('/:id', product_controller_1.productControllers.deleteSingleProduct);
exports.productRoute = router;
