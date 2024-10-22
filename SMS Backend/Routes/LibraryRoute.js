import express from 'express';
const libraryRoute = express.Router();

import {AddLibrary,showLibrary,updateLibrary,deleteLibrary} from '../Controllers/LibraryControllers.js';

libraryRoute

    .post("/add-library", AddLibrary)
    .get("/show-library", showLibrary)
    .put("/:libraryid", updateLibrary)
    .delete("/:libraryid", deleteLibrary)



export default libraryRoute;