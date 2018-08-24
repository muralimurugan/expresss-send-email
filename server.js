const express=require('express');
const app=express();
const nodemailer=require('nodemailer');
const port=process.env.PORT || 3003;
console.log(process.env.PORT);

const smtpTransport=nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "muralisvasam@gmail.com",
        pass: "muralirevathy"
    }
});

const mailOptions={
    to : 'mmurali4756@gmail.com',
    subject : 'Hello Murali!',
    text : 'this is email comes from nodemailer with express'
 }

app.get('/',(req,res)=>{
    res.sendfile('./index.html');
})
app.get('/email',(req,res)=>{
    smtpTransport.sendMail(mailOptions,(error,response)=>{
        if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
    })
    // res.send('sweloms email page');
})

app.listen(port,()=>{
    console.log(`server running on port %d `,port)
})