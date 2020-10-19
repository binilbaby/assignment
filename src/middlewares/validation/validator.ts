import { NextFunction, Request, Response } from "express";
import responseHelper from "../../utils/response_helper";

export const validateSchema = schema => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = {
    ...req.body,
    ...req.query
  };
  const result = schema.validate(payload, {
    abortEarly: false,
    escapeHtml: true,
    errors: {
      wrap: {
        label: false
      }
    }
  });
  if (result.error) {
    const response = errorFormatter(req, result.error.details);
    responseHelper.errorResponse(res, 422)(req.t("VALIDATION_ERROR"), response);
  } else {
    return next();
  }
};

const errorFormatter = (req, errorList) =>
  errorList.map(error => {
    return {
      message: req.t(error.message),
      key: error.context.key
    };
  });
