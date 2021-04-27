const customEspress = require('./config/customEspress')
const Tables = require('./infra/Tables')
const connect = require('./infra/connection')

connect.connect(error => {
    if(error) {
        console.log(error)
        return
    }

    const app = customEspress()
    Tables.init(connect)
    app.listen(4000)
})