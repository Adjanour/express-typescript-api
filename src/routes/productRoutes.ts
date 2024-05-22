import {Router } from  "express"
import pkg from 'mongodb';
const  ObjectID  = pkg.ObjectId;
import Product  from '../models/product';

const router = Router()

router.route("/products")
    .get(
        async (req, res) => {
            const products = await Product.find()
            res.json(products)
        }
    )
    .post()
    .put()
    .delete()


export default router