import express from 'express';
const ContactRoute = express.Router();

import {AddContact,showContact,updateContact,deleteContact,showcontactById} from '../Controllers/ContactControllers.js';

ContactRoute

    .post("/add-contact", AddContact)
    .get("/show-contact", showContact)
    .get('/show-contact-By-Id/:grpid', showcontactById)
    .put("/:contactid", updateContact)
    .delete("/:contactid",deleteContact)
   



export default ContactRoute ;