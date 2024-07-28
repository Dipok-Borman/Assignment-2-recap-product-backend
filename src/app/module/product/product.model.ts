import mongoose, { Schema } from 'mongoose';
import { IProduct, TProductMethods, ProductModel } from './product.interface';

// Define variant schema
const VariantSchema = new Schema({
    type: { type: String, required: true },
    value: { type: String, required: true }
});

// Define inventory schema
const InventorySchema = new Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
});

// Define main product schema
const ProductSchema = new Schema<IProduct,ProductModel, TProductMethods>({
    productId : {type : String, required : true},
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [VariantSchema], required: true },
    inventory: { type: InventorySchema, required: true }
});


ProductSchema.methods.isProductExist = async function (id:string) {
    const existingProduct = await Product.findOne({productId : id})
    return existingProduct
}
// ProductSchema.methods.isProductExist = async function (id:string) {
//     const existingProduct = await Product.findOne({id})
//     return existingProduct;
// }


const Product = mongoose.model<IProduct, ProductModel>('Product', ProductSchema);

export default Product;
