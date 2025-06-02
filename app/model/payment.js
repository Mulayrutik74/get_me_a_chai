
import mongoose from "mongoose";
import { Schema } from "mongoose";


const paymentSchema = new Schema({
     name : { type: String , require:true},
    to_user : { type: String , require:true},
    oid : { type: String , require:true},
      message: { 
    type: String,
    required: true
  },
    amount : { type: Number , require:true},
    createdAt : { type: Date , default : Date.now},
    updateAt: { type: Date , default : Date.now},
    done: { type: Boolean , default : false},
})



let payment=  mongoose.models.payment || mongoose.model("payment", paymentSchema)


export default payment;
