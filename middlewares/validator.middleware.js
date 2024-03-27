import { validationResult } from "express-validator"

export const validate = (validations) => async (req, res, next) => {
    await Promise.all(
        validations.map((val) => {
            return val.run(req)
        })
    )

    const error = validationResult(req);
    if( error.isEmpty()){
        return next();
    }

    res.status(422).json({
        success: false,
        errors: error
    })
}