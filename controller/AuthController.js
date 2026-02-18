import User from '../models/userModel.js'
import bcrypt from 'bcrypt'

class AuthController {
    //* Renderizar handlebars de login
    static loginUser(req, res) {
        res.render('login')
    }

    //* Renderizar handlebars de cadastro
     static registerUser(req, res) {
        res.render('register')
    }

    //* Renderizar o handlebars do dashboard do usuário
    static dashboardUser(req, res) {
        res.render('dashboard')
    }

    //* Registrar usuário
    static async createUser(req,res) {
        try {
            const {user, email, password, confirmPassword} = req.body
            console.log(req.body)

            if(!user || !email || !password || !confirmPassword) {
                errors.general = 'Preencha todos os campos'
            }

            let errors = {}

            // Verificando se as senhas são iguais
            if(password !== confirmPassword) {
                errors.password = 'As senhas não coincidem'
            }

            // Verificando se o email já está registrado no db
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailRegex.test(email)) {
                errors.email = 'Digite um e-mail válido'
            } else {       
                const emailExist = await User.findOne({where: {email}})
                if(emailExist) {
                    errors.email = 'E-mail já registrado, tente outro.'
                }
            }


            const userExist = await User.findOne({where: {user}})
            if(userExist) {
                errors.user = 'Usuário já existe'
            }

            if (Object.keys(errors).length > 0) {
                    return res.render('register', {
                    errors,
                    user,
                    email
                })
            }

            // Fazendo hash da senha
            const salt = await bcrypt.genSalt(12)
            const hashedPassword = await bcrypt.hash(password, salt)

            // Criando o usuario
            await User.create({
                user,
                email,
                password: hashedPassword
            })

            return res.redirect('/auth/login')
            
        } catch (error) {
            if(error.name === 'SequelizeValidationError') {
                return res.render('register', {
                    errors: {
                        email: 'Formato do e-mail inválido'
                    }
                })
            }
            console.log('Erro ao criar usuário',error)
            res.status(500).send('Erro ao criar usuário')
        }
    }

    //* Login do usuário
    static async userLogin(req,res) {
        try {
            const {email, password} = req.body

            let errors = {}

            const user = await User.findOne({where: {email}})
            if(!user) {
                errors.email = 'E-mail não encontrado'
            } else {
                const passwordMatch = await bcrypt.compare(password, user.password)
                if(!passwordMatch) {
                    errors.password = 'Senha inválida'
                }
            }


            if (Object.keys(errors).length > 0) {
                    return res.render('register', {
                    errors,
                    email,
                })
            }

            return res.render('dashboard', {
                user: user.user
            })

        } catch (error) {
            console.log('Erro ao logar usuário',error)
            res.status(500).send('Erro ao logar usuário')
        }
    }
    
    //* Fazendo logout do usuário
    static logout(req,res) {
        try {
            if (!req.session) {
                return res.redirect('/auth/login')
            }
            req.session.destroy((err) => {
                if(err) {
                    console.log('Erro ao fazer logout', err)
                    return res.redirect('/dashboard')
                }
            })

            // limpa cookie da sessão
            res.clearCookie('connect.sid', {
                path: '/'
            }) 
            res.redirect('/auth/login')
        } catch (error) {
            console.log('Erro ao fazer logout do usuário',error)
            res.status(500).send('Erro ao fazer logout do usuário')
        }
    }
}

export default AuthController;