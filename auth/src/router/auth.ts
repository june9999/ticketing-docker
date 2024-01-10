import express  from 'express'
import { body, Result, validationResult } from 'express-validator'
import { RequestValidationError } from '../errors/validationError'
import { ConnectionError } from '../errors/connectionError'
const router = express.Router()


router.get('/currentuser',(req,res)=>{
    //  cookies -> return some user information 
    res.send("hello")
})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body;
    // get username, password -> return cookies
    res.send("this is signin")
})


router.post('/signout',(req,res)=>{
    // clean the saved ?  what should be posted ?  
    res.send("this is signout")
})

router.post('/signup',body('email').isEmail()
,(req,res)=>{
    console.log("new post")
    const errors= validationResult(req).array();
    if (errors.length>0){
        console.log(errors)
        throw new RequestValidationError (errors)
    }
    const {email,password} = req.body;
    throw new ConnectionError()
    res.send("this is signup")
})  

export {router as authRouter}