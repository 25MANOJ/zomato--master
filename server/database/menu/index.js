import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
    menu:[
        {
            name: {type: String, requried:true},
            items:[ {
                type: mongoose.Type.ObjectId,
                ref: "Foods"
            }
        ]
        }
    ] ,
recommended: [
    {
        type: mongoose.Types.ObjectId,
        ref: "Foods",
        unique: true
    }

]
},
{
    timestamps: true
}
);

export const MenuModel = mongoose.model("Menu",MenuSchema);