const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const productRoutes = require("./routes/productRoutes");
const HttpError = require("./models/http-error");

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
}); //headers for CORS means send http request on local machine


app.use("/api/product", productRoutes);

// app.use((req, res, next) => {
//     const error = new HttpError("Given route not found", 404);
//     throw error;
// });


app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || "An unknown error occurred" });
});
mongoose
    .connect(
        "mongodb+srv://superman:dcmarvelcomics1728@cluster0.5uvtmey.mongodb.net/warehouse?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("connection successful");
        app.listen(5000);
    })
    .catch((err) => {
        console.log(err);
    });