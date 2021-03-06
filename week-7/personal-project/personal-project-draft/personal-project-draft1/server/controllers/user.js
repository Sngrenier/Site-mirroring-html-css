const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {username, password, email, profile_pic, first_name, last_name, phone_number} = req.body
        console.log(req.body)
        const db = req.app.get('db')
        const result = await db.user.find_user_by_username([username])
        const newUser = result[0]
        if (newUser){
            return res.status(409).send('Username taken!')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const createdUser = await db.user.create_user([ username, hash, email, profile_pic, first_name, last_name, phone_number])
        const user = createdUser[0]
        req.session.user = { id: user.id, username: user.username, profile_pic: user.profile_pic, email:user.email, first_name:user.first_name, last_name:user.last_name, phone_number:user.phone_number }
        return res.status(201).send(req.session.user)
    },

    login: async (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        const foundUser = await db.user.find_user_by_username([username])
        const user = foundUser[0]
        if (!user) {
            return res.status(401).send(`Ooops! User not found. Looks like you need to register!`)
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if(isAuthenticated){
            req.session.user = {
                id: user.id, 
                username: user.username, 
                profile_pic: user.profile_pic, 
                email:user.email,
                first_name:user.first_name,
                last_name:user.last_name,
                phone_number:user.phone_number
            }
            res.status(200).send(req.session.user)
        } else{
            return res.status(401).send('Ooops. Incorrect Login Info. Please try again!')
        }
        // if(!isAuthenticated){
        //     return res.status(403).send(`Incorrect Email or Password`)
        // }
    },
    
    logout: (req, res) => {
        req.session.destroy()
        return res.sendStatus(200)
        // res.redirect('http://localhost:4001')
    },

    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        }else {
            res.status(404).send('Please Log In')
        }
    }
}
