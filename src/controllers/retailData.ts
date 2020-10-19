
import { Request, Response } from "express";
import retailService from "../services/retailData";
import logger from "../utils/logger";
import responseHelper from "../utils/response_helper";
async function postRetailsInfo(req: Request, res: Response) {
    try {
        const duplicateCheck = await retailService.duplicateCheck(req.body);
        if (duplicateCheck) {
            return responseHelper.errorResponse(res, 400)("Already exists");
        }
        const output = await retailService.createData(req.body);
        logger.debug("User login success", output);
        responseHelper.successResponse(res)(output);
    } catch (error) {
        responseHelper.errorResponse(res, 400)("Failed to add data");
    }
}

export default {
    postRetailsInfo,
};



