import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
        minlength:[3,"First name must contain at least 3 characters"],
        maxlength:[20,"First name must not exceed 20 characters"],     
    },
      LasttName: {
        type: String,
        required: true,
        minlength:[3,"Last name must contain at least 3 characters"],
        maxlength:[20,"Last name must not exceed 20 characters"],     
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail,"Please enter a valid email address"],
    },
    phoneNumber:{
        type: String,
        required: true,
        minlength:[10,"Phone number must contain at least 10 characters"],
        maxlength:[15,"Phone number must not exceed 15 characters"],     
    },
    time :{
        type: String,
        required: true,
    },
     date:{
        type: String,
        required: true,
    },
});
 export const Reservation = mongoose.model("Reservation", reservationSchema);
 