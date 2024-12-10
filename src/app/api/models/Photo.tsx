import { Schema, model, models } from "mongoose";

const photoModel = new Schema({
    title: {
        type: String,
        required: [true]
    },
    url: {
        type: String,
        required: [true]
    }
}, {
    timestamps: true
});

export default models.Photo || model('Photo', photoModel);