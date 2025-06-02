
"use server";
import Razorpay from "razorpay"
import payment from "../model/payment"
import user from "../model/user"
import connectDB from "../db/connectDb"


export const initiate = async (amount, to_username, paymentfrom) => {
  try {
    await connectDB();

       let User = await user.findOne({username: to_username})
 const secret = User.razorpaysecret
 const id = User.razorpayid
    
    var instance = new Razorpay({ key_id: id, key_secret: secret })

    let options = {
      amount: Number.parseInt(amount),
      currency: "INR",
    }

    // let x = await instance.orders.create(options)
    let x = await instance.orders.create(options)
    await payment.create({
      oid: x.id,
      amount: amount/100,
      to_user: to_username,
      name: paymentfrom.name,        // This should match form field
      message: paymentfrom.message,
    })
    return x;
  } catch (error) {
    throw error;
  }
}

export const feachuser = async (username) => {
  await connectDB();

  let u = await user.findOne({ username: username });

  let User = u.toObject({ flattenObjectIds: true })
 
  return User
}

export const feachpayment = async (username) => {

  await connectDB()

  let p = await payment.find({ to_user: username , done:true }).sort({ amount: -1 }).limit(7).lean()
 const s = JSON.parse(JSON.stringify(p))
  return s;

}

export const updateprofile = async (data , oldusername) =>{
  await connectDB();
   
  let ndata = Object.fromEntries(data)
  if(oldusername !== ndata.username){
    let us= await user.findOne({ username:ndata.username})
  if(us){
return {error:" UserName is Alrady Exists"}

  }
  
await user.updateOne({email: ndata.email},ndata)
await payment.updateMany({to_user: oldusername},{to_user: ndata.username})
}
else{
  
  await user.updateOne({email: ndata.email},ndata)
  
}

}
