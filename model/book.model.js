import mongoose from "mongoose";

const ebooksSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true, // Corrected 'require' to 'required'
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt fields

const ebooks = mongoose.model("ebooks", ebooksSchema); // Changed model name to singular
export default ebooks;
