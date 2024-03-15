import  Jwt  from "jsonwebtoken"

export const generateToken = (data)=> {


    let token = Jwt.sing({
        data: data,
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, '')

}