
import { verifyToken } from "../config/jwt.js";

function checkToken(req,res, next) {
    // lendo o cookie, o navagador vai direto nele
    const token = req.cookies.token

    if(!token) {
        return res.redirect('/login')
    }

    try {
        const decoded = verifyToken(token) // verificando o token se ele tem assinatura
        req.user = decoded // anexa a requisição
        next() // libera acesso
    } catch (error) {
        console.log(error)
        return res.redirect('/login')
    }
}

export default checkToken