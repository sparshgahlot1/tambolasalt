import {model, Schema} from "mongoose"

const ContestSchema = new Schema({
    title:{type:String, required:true},
    date: Date,
    ticket:Number,
    prizePool:Number,
    entry:Number,
})

export const Contest = model('Contest', ContestSchema);