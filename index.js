const customEspress = require('./config/customEspress')
const Tables = require('./infra/Tables')
const connect = require('./infra/connection')
const config = require('config')

connect.connect(error => {
    if(error) {
        console.log(error)
        return
    }

    const app = customEspress()
    Tables.init(connect)
    app.listen(config.get('api.port'))
})