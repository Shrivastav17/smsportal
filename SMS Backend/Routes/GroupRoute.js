import express from "express";
const GroupRoute = express.Router();

import {AddGroup,showGroup,updateGroup,deleteGroup } from '../Controllers/GroupControllers.js';

GroupRoute

    .post("/add-group", AddGroup)
    .get("/show-group", showGroup)
    .put("/:groupid", updateGroup)
    .delete("/:groupid", deleteGroup)



export default GroupRoute;