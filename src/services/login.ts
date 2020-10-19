import { Op } from "sequelize";
import DB from "../models";
import authHelper from "../utils/authHelper";
async function userLogin(params) {
    const userDetails = await DB.Users.findOne({
        where: {
            userName: {
                [Op.eq]: params.userName
            },
            isActive: {
                [Op.eq]: true
            },
        },
        raw: true
    });
    return userDetails;
}
async function formatUserData(user: any) {
    const tokenData = {
        id: user.id,
    };
    const output = {
        id: user.id,
        token: await authHelper.createAccessToken(tokenData)
    };
    return output;
}
export default {
    userLogin,
    formatUserData
};
