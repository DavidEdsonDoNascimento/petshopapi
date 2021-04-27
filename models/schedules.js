const connect = require('../infra/connection')
const moment = require('moment')
/**
 * Schedule
 * pt-br: classe que representa o model de agendamento
 */
class Schedules {
    
    list(res){
        connect.query(`SELECT * FROM schedules`, (error, result) => {
            return error ? res.status(400).json(error) : res.status(200).json(result)
        })
    }

    insert(newAppointment, res){
        
        const newAppointmentFormat = { 
            ...newAppointment, 
            create_in : moment().format('YYYY-MM-DD HH:MM:SS'), 
            scheduled_for: moment(newAppointment.scheduled_for, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        connect.query(`INSERT INTO schedules SET ?`, newAppointmentFormat, (error, result) => {
            return error ? res.status(400).json(error) : res.status(200).json(result)
        })
    }

    findById(id, res){
        connect.query(`SELECT * FROM schedules WHERE id = ?`, id, (error, result) => {
            return error ? res.status(400).json(error) : res.status(200).json(result)
        })
    }
}

module.exports = new Schedules