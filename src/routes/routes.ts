import { Router } from "express";

const routes = Router();

import userCreateController from "../controllers/users/userCreate.controller";
/*
import userDeleteSelfController from "../controllers/users/userDeleteSelf.controller";
*/
import userUpdateController from "../controllers/users/userUpdate.controller";
import userLoginController from "../controllers/users/userLogin.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controller";
import { authUser } from "../middleware/authUser.middleware";

routes.get("/users", userListController);
routes.get("/users/:id", userListOneController);

routes.post("/users", userCreateController);
routes.post("/users/login", userLoginController);

routes.patch("/users/:id", userUpdateController);

//routes.delete("/users/:id", authUser, userDeleteSelfController);

export default routes;
