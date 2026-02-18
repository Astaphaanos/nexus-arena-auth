import express from 'express'
import exphbs from 'express-handlebars'
import session from 'express-session'

import db from './db/conn.js'
import authRoutes from './routes/authRoutes.js'

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

app.use(
  session({
    secret: 'meuSegredoSuperSeguro',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false // true só em HTTPS
    }
  })
)

app.get('/', (req,res) => {
    res.redirect('/auth')
})
app.use('/auth', authRoutes)


db.sync().then(() => {
    console.log('Conectado ao Banco de Dados...')
    app.listen(3000, () => {
        console.log("Servidor rodando em http://localhost:3000")
    })
}).catch((error) => console.log(error)) 