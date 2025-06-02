
import mongoose,{Schema,model} from "mongoose";

const userSchema = new Schema({
    email : { type: String , require: true},
    name : { type: String },
    username : { type: String , require: true},
    profilepic : { type: String , require : true },
    coverpic : { type: String },
   razorpayid: { type: String },
    razorpaysecret : { type: String },
    createdAt : { type: Date , default : Date.now},
    updateAt: { type: Date , default : Date.now},
});

let User=  mongoose.models.user || mongoose.model("user", userSchema)


export default User;
