import {checkSchema} from "express-validator";


export const postProductValidator = checkSchema({
    nombre: {
        errorMessage: 'Nombre no valido',
        notEmpty: true,
        isLength: {
            options: {min: 3},
            errorMessage: 'El nombre debe tener minimo 3 letras'
        }

    },
    detalle: {},
    valor: {
        matches: {options: /^[0-9]+$/},
        errorMessage: 'Valor no valido'
    }
}, ["body"])