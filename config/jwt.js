import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

if(!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET não definido no .env")
}

const SECRET = process.env.JWT_SECRET

export function generateToken(user) {
    return jwt.sign(
        { // colocando os dados dentro do token
            id: user.id,
            email: user.email,
        },
        SECRET, // assinatura digital
        {expiresIn: '1h'} // token terá validade de 1h, depois vai ter que fazer login de novo
    )
}

export function verifyToken(token) {
    return jwt.verify(token, SECRET) // verificando o token para ver se ele tem a assinatura 
}