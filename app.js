const express = require("express");
const path= require('path');
const fs = require("fs");
const app = express();
const port = 8000;

app.use("/static", express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/', (req, res)=>{
    
    const params = {}
    res.status(200).render('Home.pug', params);})
app.get('/Membership', (req, res)=>{
    
    const params = {}
    res.status(200).render('Membership.pug', params);})
app.get('/Members', (req, res)=>{
    
    const params = {}
    res.status(200).render('Members.pug', params);})
app.get('/Register', (req, res)=>{
    
    const params = {}
    res.status(200).render('Register.pug', params);})

    app.post('/register', (req, res)=>{
    
        naame = req.body.name
        age = req.body.age
        gender = req.body.gender
        email = req.body.email
        address = req.body.address
        mem = req.body.mymembership
        
        let outputToWrite = `the name of the client is ${naame}, ${age} years old, ${gender},email : ${email} , residing at ${address}. Membership they want: ${mem}`
        fs.writeFileSync(`${naame}.txt`, outputToWrite)
        const params = {'message': 'Your form has been submitted successfully'}
        res.status(200).render('demo.pug', params);
        
    })

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});