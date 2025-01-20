import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    },
    ticketCount: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imgUrl: {
        type: String
    }
}, { timestamps: true });

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;