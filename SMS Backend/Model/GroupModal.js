import mongoose from "mongoose";

const { Schema } = mongoose

const group_schema = new Schema({    
    group_name: String
})

const group_model = mongoose.model('groups', group_schema)
export default group_model;