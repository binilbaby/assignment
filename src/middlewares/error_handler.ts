import { NextFunction, Request, Response } from "express";
import responseHelper from "../utils/response_helper";

/*
  Catch Errors Handler

  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch and errors they throw, and pass it along to our express middleware with next()
*/

export function catchErrors(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch(next);
  };
}

export function handleErrors() {
  return (err: any, _req: Request, res: Response, next: NextFunction) => {
    if (!err) {
      next();
    }

    let error = {
      message:
        err.message && err.message.indexOf("_") !== -1
          ? err.message
          : "SERVER_ERROR"
    };

    if (process.env.NODE_ENV === "development") {
      error = err;
    }
    responseHelper.errorResponse(res)(_req.t(error.message), error);
  };
}
