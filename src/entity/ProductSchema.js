const Product = require('../models/Product').Product

const EntitySchema = require('typeorm').EntitySchema

module.exports = new EntitySchema({
    name: "Product",
    target: Product,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        name: {
            type: 'varchar',
            length: 255
        },
        code: {
            type: 'varchar',
            length: 255
        },
        price: {
            type: 'float'
        },
        stock: {
            type: 'int'
        }
    }
    //TODO: relation many to one
})
