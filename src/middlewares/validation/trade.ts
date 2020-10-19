import Joi from "@hapi/joi";
export const tradeCreationValidation = () =>
  Joi.object({
    name: Joi.string()
      // .required()
      .messages({
        "string.base": `VALUE_STRING_TYPE_ERROR`,
        "string.empty": `EMPTY_VALUE`,
        "any.required": `TRADE_NAME_MISSING`,
      })
  });


