import * as jwt from "jsonwebtoken";
import constant from "../config/constants";

const createAccessToken = tokenData => {
    const token = jwt.sign(tokenData, constant.JWT_SECRET, {
        expiresIn: constant.ACCESS_EXPIRES_IN
    });
    return token;
};

export default {
    createAccessToken
};
