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

const getProducts = (req, res, next) => {
    // const getAll = async () => {
    //     const all = await Product.find();
    //     if (all) {
    //         return all;
    //     }
    // }
    // const all = getAll();

    // console.log(all);

    // res.json({ all })
    Product.find().then(all => {
        res.json(all)
    })
}

exports.addNew = addNew
exports.getProducts = getProducts