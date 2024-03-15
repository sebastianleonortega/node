import { checkSchema } from "express-validator";


export const postProductValidator = checkSchema({
nombre : {
    errorMessage: 'nombre no valido',
    notEmpty: true,
    isLength: {
        options: {min:5},
        errorMessage: 'el nomre dee ser minimo de 5 letras'
    }

},
detalle : {

},
valor : {
    matches: {options: /^[0-9]+$/},
    errorMessage: 'El valor es solo numero'

}
}, ["body"])