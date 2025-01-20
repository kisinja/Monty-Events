import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    availableTickets: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    policy: {
        type: String,
    },
    ticket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
    }
}, { timestamps: true });

const Event = mongoose.model("Event", eventSchema);

export default Event;