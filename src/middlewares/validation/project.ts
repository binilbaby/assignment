import Joi from "@hapi/joi";
export const validateCreateProjectRequest = () =>
  Joi.object({
    name: Joi.string()
      .required()
      .trim()
      .messages({
        "string.base": `VALUE_STRING_TYPE_ERROR`,
        "string.empty": `EMPTY_VALUE`,
        "any.required": `PROJECT_NAME_MISSING`
      }),
    email: Joi.string()
      .trim()
      .messages({
        "string.base": `VALUE_STRING_TYPE_ERROR`
      }),
    location: Joi.string()
      .trim()
      .messages({
        "string.base": `VALUE_STRING_TYPE_ERROR`
      }),
    phone: Joi.string()
      .trim()
      .messages({
        "string.base": `VALUE_STRING_TYPE_ERROR`
      }),
    primaryContact: Joi.string()
      .trim()
      .messages({
        "string.base": `VALUE_STRING_TYPE_ERROR`
      }),
    startDate: Joi.date().messages({
      "string.base": `VALUE_STRING_TYPE_ERROR`
    })
  });
