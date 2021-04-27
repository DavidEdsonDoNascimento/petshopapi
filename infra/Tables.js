class Tables 
{
    init(connection) {

        this.connection = connection
        this.createSchedules()
    }

    /**
     * createSchedule
     * pt-br: cria tabela de agendamentos
     */
    createSchedules() {
        this.connection.query(`CREATE TABLE IF NOT EXISTS schedules (
            id int NOT NULL AUTO_INCREMENT,
            client varchar(48) NOT NULL,
            pet varchar(22) NOT NULL,
            service varchar(22) NOT NULL,
            create_in datetime NOT NULL,
            scheduled_for datetime NOT NULL,
            status tinyint(1) default 1,
            obs varchar(255),
            PRIMARY KEY(id)
        )`, error => {
            
            if(error){
                console.log(error)
                return
            }

            this.messageCreateTableSuccess('schedules')
        })
    }

    messageCreateTableSuccess(tableName){
        //deixei assim pq quando eu for criar os logs será mais facil
        console.log(`Table: ${tableName}, successfully created`)
    }
}

module.exports = new Tables