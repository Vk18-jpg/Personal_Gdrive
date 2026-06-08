const express= require('express');
const app= express();
const userRouter =require('./routes/user.routes');
const dotenv =require('dotenv');
const connectToDB=require('./config/db');
const cookieparse=require('cookie-parser')
const indexRouter =require('./routes/index.routes')
dotenv.config();
connectToDB();




app.set('view engine','ejs');
app.use(express.json())
app.use(cookieparse())
app.use(express.urlencoded({extended:true}))
app.use('/',indexRouter)
app.use('/user',userRouter)

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})