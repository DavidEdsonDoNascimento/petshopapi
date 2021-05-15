module.exports = app => {
    app.get('/checkapi', (req, res) => {
        res.status(200).json({ message: 'API operando a todo vapor.' })
    })
}