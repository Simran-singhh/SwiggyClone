const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema({
    item:[],
    quantity:Number
});


module.exports = mongoose.model('Cart', Cart);