
import React from 'react'
import PaymentPage from '../Components/PaymentPage'
import { notFound } from 'next/navigation';
import User from '../model/user';
import connectDB from '../db/connectDb';

const username = async({params}) => {

 
  

  const rparams = await params;
  
  
  const checkUser= async ()=>{
await connectDB()
let u = await User.findOne({username: rparams.userName})
    if(!u){
      return notFound();
    }
  }
  await checkUser()


  return (
   <>
   
<PaymentPage username={rparams.userName}/>
   </>
  )
}

export const metadata = {
  title: 'Payment- this payment page for user pay a payment',
  description: 'Payment- this payment page for user to order a chai and pay a payment',
}

export default username



