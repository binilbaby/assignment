import jwt from "jsonwebtoken";
import constants from "../config/constants";
import responseHelper from "../utils/response_helper";
const authenticate = async (req, res, next) => {
  const bearerToken = req.headers.authorization;
  try {
    const user = await getUserFromToken(bearerToken);
    if (!user) {
      return responseHelper.errorResponse(res, 401)("Token not found");
    }
    req.user = user;
    next();
  } catch (e) {
    return responseHelper.errorResponse(res, 401)("Token not found");
  }
};

const getUserFromToken = async bearerToken => {
  try {
    return jwt.verify(bearerToken, constants.JWT_SECRET);
  } catch (e) {
    throw new Error("token-not-found");
  }
};

export default {
  authenticate
};
