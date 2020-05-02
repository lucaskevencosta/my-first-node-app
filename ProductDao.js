const Sequelize = require('sequelize')

const sequelize = new Sequelize('database', 'root', '123456', {
    dialect: 'sqlite',
    storage: 'db/database.db'
})

const Product = sequelize.define('product', {
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE(7,2),
        allowNull: false
    }
})

sequelize.sync()

sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully')
})
.catch(err => {
    console.error('Unable to connect to the database: ', err)
})

module.exports.saveProduct = (description, price) => {
    Product.create({description: description, price: price})
    .then(item => {
        console.log(`Item's auto-genereted ID: ${item.id}`)
    })
}

module.exports.findAll = async () => {
    return await Product.findAll({raw: true})
}