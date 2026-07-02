const express=require('express');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

app.post('/api/auth/registerSeller',(req,res)=>{
  console.log('REGISTER:',req.body);
  res.json({
    success:true,
    message:'Seller registration received',
    received:req.body
  });
});

app.post('/api/auth/loginSeller',(req,res)=>{
  console.log('LOGIN:',req.body);
  res.json({
    success:true,
    token:'mock-jwt-token',
    user:req.body
  });
});

app.post('/api/auth/verify-otp',(req,res)=>{
  console.log('OTP:',req.body);
  res.json({
    success:true,
    message:'OTP verified',
    otp:req.body
  });
});

app.get('/',(req,res)=>res.send('Mock Backend Running'));

app.listen(8080,()=>console.log('Mock API running on http://localhost:8080'));
