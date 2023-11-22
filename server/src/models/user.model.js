import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, `username is a required field.`],
        unique: true
    },
    email: {
        type: String,
        required: [true, `email is a required field.`],
        unique: true
    },
    username: {
        type: String,
        required: [true, `password is a required field.`],
    },
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema);

export default User;