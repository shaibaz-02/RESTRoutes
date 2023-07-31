const express=require('express')
const app=express()
const path=require('path');
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//const { v4: uuid } = require('uuid'); 
let comments = [
    {
        //id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        //id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        //id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        //id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]
app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments});
})
app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
})
app.post('/comments',(req,res)=>{
    const {username,comment}=req.body;
    comments.push({username,comment})
    res.redirect("/comments")
})
app.get('/tacos',(req,res)=>{
    const {meat,qty}=req.body;
    res.send(`you are having  ${qty} ${meat} tacos in get`)
    //res.send("get /tacos response")
})
app.post('/tacos',(req,res)=>{
    const {meat,qty}=req.body;
    res.send(`you are having  ${qty} ${meat} tacos in post`)
    //res.send("POST /tacos response")
})
app.listen(8000,()=>{
    console.log("listening to the port 8000");
})