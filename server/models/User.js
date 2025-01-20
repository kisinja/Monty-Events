import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: "user",
    },
    tickets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ticket"
        }
    ],
    imgUrl: {
        type: String,
        default:"https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg"
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;