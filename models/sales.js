const mongoose = require('mongoose')

const salesSchema = new mongoose.Schema({
    date:{
        type: Date,
        default: Date.now
    },
    products:[{
        name:{
            type: String,
            require: true
        },
        quantity: {
            type: Number,
            require: true
        }
    }],
    value:{
        type: Number,
        require: true
    }
})

const sale = mongoose.model('sales', salesSchema)

module.exports = sale