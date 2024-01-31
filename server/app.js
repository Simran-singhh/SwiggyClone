const express=require('express');
const app=express();
const mongoose=require('mongoose');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const passport=require('passport');
const User = require('./Models/user');
const cors = require('cors');
const Cart = require('./Models/cart');
const mongoDBUri =process.env.DB_URI;

mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
})
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: 'simran', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({ credentials: true, origin: 'http://localhost:1234' }));
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());


app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
         const newUser = new User({ email, username });
         await User.register(newUser, password);
         res.json({ success: true, user: newUser, });  
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ success: true, user: req.user });
});

app.get('/logout', (req, res) => {
    req.logout(() => {});
res.json({ success: true, message: 'Logout successful' });
});

app.post('/:id/addToCart',async(req,res)=>{
  const {id}=req.params;
  console.log(id);
  const user=await User.findById(id);
  const cart=new Cart(req.body);
  user.cart.push(cart);
  const savedItem = await cart.save();
  await user.save();
  res.json({savedItem});
  console.log("data added")
})

app.get('/:id/fetchFromCart',async(req,res)=>{
  const {id}=req.params;
  console.log(id);
  const user=await User.findById(id).populate({
    path:'cart'}) ;
  console.log("user")
  res.send(user)
})
app.post('/:id/:itemId/updateItem',async(req,res)=>{
  const{id,itemId}=req.params;
    await Cart.findByIdAndUpdate(itemId,{quantity:req.body.quantity});
    console.log("item updated successfully")
})

app.post('/:id/:itemId/deleteItem',async(req,res)=>{
  console.log("delete")
  const{id,itemId}=req.params;
    await User.findByIdAndUpdate(id,{$pull:{cart:itemId}});
    await Cart.findByIdAndDelete(itemId);
    console.log("item removed successfully")
})

app.post('/:id/deleteCart',async(req,res)=>{
  console.log("delete cart")
  const{id}=req.params;
  const user=await User.findById(id);
   const userCartItems = user.cart;

  // Delete each cart item
  for (const itemId of userCartItems) {
    await Cart.findByIdAndDelete(itemId);
  }

  // Clear the cart array of the user
  user.cart = [];

  // Save the updated user
  await user.save();
  console.log("successfully deleted all items")
})
app.listen(3000,()=>{
    console.log("Listening on port 3000")
})

