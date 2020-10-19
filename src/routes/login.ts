import { Router } from "express";
import loginController from "../controllers/login";
import { catchErrors } from "../middlewares/error_handler";
const loginRouter = Router({
  mergeParams: true
});

const loginRouters = {
  login: "/login"
};
loginRouter.post(loginRouters.login, catchErrors(loginController.login));

export default loginRouter;
