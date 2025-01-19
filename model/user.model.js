import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true // Corrected 'require' to 'required'
    },
    email: {
        type: String,
        required: true,
        unique: true, // Consider adding a unique constraint for email too
        lowercase: true, // Ensures emails are stored in lowercase
        trim: true // Trims whitespace
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const User = mongoose.model("Users", userSchema); // Changed model name to singular
export default User;
