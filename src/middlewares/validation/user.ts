import Joi from "@hapi/joi";
// sample
export const validateLoginRequest = () =>
  Joi.object({
    phone: Joi.string()
      .required()
      .min(8)
      .max(11)
      .regex(/^[0-9]+$/)
      .messages({
        "string.base": `VALUE_STRING_TYPE_ERROR`,
        "string.min": `PHONE_MIN_LENGTH`,
        "string.max": `PHONE_MAX_LENGTH`,
        "string.empty": `EMPTY_VALUE`,
        "any.required": `PHONE_MISSING`,
        "string.pattern.base": `VALUE_NUMBER_TYPE_ERROR`
      }),
    code: Joi.string()
      .trim()
      .allow("")
      .optional()
      .messages({
        "string.base": `VALUE_STRING_TYPE_ERROR`
      })
  });


