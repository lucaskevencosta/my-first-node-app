const productDao = require('./ProductDao')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/product', async (req, res) => {
    const product = req.body
    
    productDao.saveProduct(product.description, product.price)
    
    let listProduct = await productDao.findAll()

    res.json(listProduct)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))