const express = require('express');
require("dotenv").config();
const sequelize = require('./db')
const models = require('./models/models')   
const cors = require('cors');
const router = require('./routes/index')
const fileUpload = require('express-fileupload');
// const errorHandler = require('./middleware/errorHandlingMiddleware')
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//Обработка ошибок, должна быть в конце
// app.use(errorHandler)

const start = async function() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log("Server starts on 5000"));
    } catch (e) {
        console.log(e);
    }
}
start();