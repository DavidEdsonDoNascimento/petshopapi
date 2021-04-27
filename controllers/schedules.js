const Schedules = require('./../models/schedules')

module.exports = app => {


    app.get('/schedules', (req, res) => {
        
        Schedules.list(res)

    })

    app.post('/schedules', (req, res) => {
        const newAppointment = req.body
        Schedules.insert(newAppointment, res)
    })

    app.get('/schedules/:id', (req, res) => {
        const { id } = req.params

        Schedules.findById(id, res)
    })

}