import mongoose from "mongoose";

const { Schema } = mongoose

const contact_schema = new Schema({    
    username: String,
    usermobile: Number,
    useremail: String,
    group_id:String
})

const contact_modal = mongoose.model('contacts', contact_schema)
export default contact_modal;