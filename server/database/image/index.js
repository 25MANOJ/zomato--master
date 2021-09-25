import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    images: [
        {
            location: {type: String, requries: true}
        }
    ]
},
{
    timestamps: true
}
);

export const ImageModel = mongoose.model("images",ImageSchema);