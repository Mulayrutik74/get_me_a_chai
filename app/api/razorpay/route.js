import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/app/model/payment";
import Razorpay from "razorpay";
import connectDB from "@/app/db/connectDb";
import user from "@/app/model/user";

export const POST = async (req)=>{
    await connectDB();
    let body=await req.formData()
    body=Object.fromEntries(body)
   

    let p=await payment.findOne({oid: body.razorpay_order_id})

    if(!p){
         return NextResponse.json({success: false, message:"order id not found"})
    }

    let User = await user.findOne({username: p.to_user})
 const secret = User.razorpaysecret
    let xx=validatePaymentVerification(
    {
        "order_id": body.razorpay_order_id,
        "payment_id": body.razorpay_payment_id
    },
    body.razorpay_signature,  
    secret
)

    if(xx){
        const updatedpayment = await payment.findOneAndUpdate({oid: body.razorpay_order_id},{done:true},{new:true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedpayment.to_user}?paymentdone=true`)
    }
    else{
        return NextResponse.json({success: false, message:"payment virification failed"})
    }
}