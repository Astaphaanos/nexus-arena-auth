import User from '../models/userModel.js'
import bcrypt from 'bcrypt'

class AuthController {

    //* CREATE login (GET)
    static loginUser(req, res) {
        res.render('login')
    }

    //* CREATE login (POST)
    static async createUser(req,res) {
        try {
            const usuario = {user, email, password, confirmPassword} = req.body

            // Verificando se as senhas são iguais
            if(password !== confirmPassword) {
                res.render('register', {
                    message: 'As senhas não coincidem, por favor verifique-a'
                })
            }

            // Verificando se o email já está registrado no db
            const userExist = await User.findOne({where: {email}})

            if(userExist) {
                res.render('register', {
                    message: 'E-mail já registrado. Tente outro e-mail'
                })
            }

            let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
            if(!password.test(regex)) {
                res.render('register', {
                    message: 'Senha inválida, ela não preenche todos os requisitos'
                })
            }
            // Fazendo hash da senha
            const salt = await bcrypt.genSalt(12)
            const hashedPassword = await bcrypt.hash(password, salt)



            // Criando o usuario
            await User.create({
                name: user,
                email,
                password: hashedPassword
            })
            
        } catch (error) {
            console.log('Erro ao criar usuário',error)
            res.status(500).send('Erro ao criar usuário')
        }
    }

    //* CREATE cadastro (GET)
     static registerUser(req, res) {
        res.render('register')
    }

    //* CREATE cadastro (POST)

}

export default AuthController;