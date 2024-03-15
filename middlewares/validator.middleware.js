import { validationResult } from "express-validator"

export const validate = (validations) => async (req, res, next) => {
    await Promise.all(validations.map( (val)=> val.run() ))


    const error = validationResult(req);
    if (error.isEmpty) {
        return next();
    }

      res.status(422).json({
        errors: error.array(),
        success: false
    });

}