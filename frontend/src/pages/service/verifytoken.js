import jwt_decode from "jwt-decode";

export function VeryfyToken(token){
    try{
        const decoded = jwt_decode(token)
        return decoded
    }catch(error){
        alert(error)
    }
}