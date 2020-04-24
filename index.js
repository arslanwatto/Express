'use strict';
const express =require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('helo!,there');
});
app.listen(3000,()=>{console.log('application started');});