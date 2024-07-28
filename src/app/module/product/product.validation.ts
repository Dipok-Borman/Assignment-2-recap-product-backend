import { z } from 'zod';

// Define Zod schema for a product
const ProductValidationSchema = z.object({
    productId : z.string(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(
        z.object({
            type: z.string(),
            value: z.string()
        })
    ),
    inventory: z.object({
        quantity: z.number(),
        inStock: z.boolean()
    })
});

export default ProductValidationSchema;

