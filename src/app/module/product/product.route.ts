import express from 'express';
import { productControllers } from './product.controller';

const router = express.Router();

router.get('/search', productControllers.searchProduct);
router.post('/', productControllers.createProduct);
router.get('/', productControllers.getAllProduct);
router.get('/:productId', productControllers.getSingleProduct);
router.put('/:id', productControllers.updateSingleProduct);
router.delete('/:id', productControllers.deleteSingleProduct);

export const productRoute = router;