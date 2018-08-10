module.exports = {
    createUser: (req, res) => {
        let db = req.app.get('db')
        let { username, password } = req.body
        // let newUser = { username, password }
        // let users = db.create_user(newUser)
        // let user = users[0]
        // res.send(user)
        let newUser = {username, password}
        db.create_user(newUser).then(results => {
            res.status(200).send(results)
            // console.log(438479534, results)
        }
        ).catch((error) => {
            res.status(500).send("Could not PUT", error)
        })
    }
}