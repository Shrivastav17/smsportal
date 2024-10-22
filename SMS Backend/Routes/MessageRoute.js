import express from 'express';
const MessageRoute = express.Router();

import {AddMessage,showMessage,  show_message_by_id} from '../Controllers/MessageControllers.js ';

MessageRoute

    .post("/add-message", AddMessage)
    .get("/show-message", showMessage)
    .get('/showById/:libid', show_message_by_id)
    // .put("/update-message", updateMessage)
    // .delete("/delete-message", deleteMessage)



export default  MessageRoute;