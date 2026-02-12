import User from '../models/userModel.js'

class AuthController {

    //* CREATE login (GET)
    static loginUser(req, res) {
        res.render('login')
    }

    //* CREATE login (POST)



    //* CREATE cadastro (GET)
     static registerUser(req, res) {
        res.render('register')
    }

    //* CREATE cadastro (POST)

}

export default AuthController;