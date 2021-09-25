import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
    Menu:[
        {
            name: {type: String, requried:true},
            items:[ {
                type: mongoose.TYpe.ObjectId,
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

export const MenuModel = mongoose.Model("menu",MenuSchema);