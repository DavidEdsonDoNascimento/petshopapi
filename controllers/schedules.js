const Schedules = require('./../models/schedules')

module.exports = app => {


    app.get('/schedules', (req, res) => {
        
        Schedules.list(res)

    })

    app.get('/schedules/:id', (req, res) => {
        const { id } = req.params

        Schedules.findById(id, res)
    })
    
    app.post('/schedules', (req, res) => {
        const newAppointment = req.body
        Schedules.insert(newAppointment, res)
    })

    app.patch('/schedules/:id', (req, res) => {
        const { id } = req.params
        const appointmentToChange = req.body
        Schedules.update(id, appointmentToChange, res)
    })

    app.delete('/schedules/:id', (req, res) => {
        const { id } = req.params

        Schedules.delete(id, res)
    })
}