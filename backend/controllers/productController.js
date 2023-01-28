const Product = require('../models/productModel');
const HttpError = require('../models/http-error')
// const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const addNew = (req, res, next) => {

    const makeProduct = async (createProduct) => {
        try {
            await createProduct.save();
            const sess = await mongoose.startSession();
            sess.startTransaction();
            await createProduct.save({ session: sess });
            await sess.commitTransaction();
        } catch (err) {
            const error = new HttpError(
                'Creating product failed, please try again.',
                500
            );
        }
    }

    const { name, category, perishable } = req.body;
    const createProduct = new Product({
        name,
        category,
        perishable
    });
    console.log(createProduct);
    makeProduct(createProduct);
    res.status(201).json({ createProduct });
}

exports.addNew = addNew