import { Op } from "sequelize";
import DB from "../models";
async function duplicateCheck(params) {
    const where = {
        [Op.or]: [{
            inTime: {
                [Op.between]: [params.inTime, params.outTime]
            }
        }, {
            outTime: {
                [Op.between]: [params.inTime, params.outTime]
            }
        }]
    };
    return await DB.UserData.findOne(where)
}
async function createData(params) {
    const userDetails = await DB.UserData.create(params)
    return userDetails;
}

export default {
    duplicateCheck,
    createData

};
