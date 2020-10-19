import { Router } from "express";
import retailController from "../controllers/retailData";
import { catchErrors } from "../middlewares/error_handler";

const retailRouter = Router({
    mergeParams: true
});

const retailRouters = {
    retail: "/data"
};

retailRouter.post(
    retailRouters.retail,
    catchErrors(retailController.postRetailsInfo)
);

export default retailRouter;
