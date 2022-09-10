const express = require("express");
const cors = require("cors");
const {
    connectDb
} = require("../dbConfig/dbConnection");
const productRoutes = require('../routes/Product')
class Server {
    constructor() {
        this.app = express();
        this.port = 5000;
        this.paths = {
            productsPath: '/'
        };
        this.conectarDb();
        this.app.use(cors());
        //Parseo y lectura del body
        this.app.use(express.json());
        //rutas de la app
        this.routes();
    }
    async conectarDb() {
        await connectDb();
    }
    routes() {
        this.app.use(this.paths.productsPath, productRoutes)
    }
    listen() {
        this.app.listen(this.port)
    }
}
module.exports = Server;