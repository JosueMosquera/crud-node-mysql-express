const typeorm = require('typeorm')

const dataSource = new typeorm.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.DATABASEUSER,
    database: process.env.DATABASENAME,
    password: process.env.DATABASEPASS,
    synchronize: true,
    logging: true,
    entities: [require('../entity/ProductSchema')]
})
dataSource.initialize()
module.exports = {
    dataSource
} 