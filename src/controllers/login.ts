
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import loginService from "../services/login";
import responseHelper from "../utils/response_helper";
async function login(req: Request, res: Response) {
  try {
    const user = await loginService.userLogin(req.body);
    const passwordMatch = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordMatch) {
      return responseHelper.errorResponse(res, 400)("Invalid credentials");
    }
    const output = await loginService.formatUserData(user);
    responseHelper.successResponse(res)(output);
  } catch (error) {
    responseHelper.errorResponse(res, 400)("Failed to login");
  }
}
export default {
  login,
};



