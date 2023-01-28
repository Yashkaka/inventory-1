const HttpError = require('../models/http-error')
// const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const Delivery = require('../models/deliveryModel');

const addDelivery = (req, res, next) => {
    const { productName, estimatedDeliTime, actualDeliTime, noOfPallet } = req.body;
    const makeDelivery = async (createDelivery) => {
        try {
            await createDelivery.save();
            const sess = await mongoose.startSession();
            sess.startTransaction();
            await createDelivery.save({ session: sess });
            await sess.commitTransaction();
        } catch (err) {
            const error = new HttpError(
                'Creating delivery failed, please try again.',
                500
            );
        }
    }
    const productId = "63d532ea2aca218c200185e4"
    const createDelivery = new Delivery({
        productName,
        estimatedDeliTime,
        actualDeliTime,
        noOfPallet,
        productId
    })
    makeDelivery(createDelivery);
    res.status(201).json({ createDelivery });

}

exports.addDelivery = addDelivery