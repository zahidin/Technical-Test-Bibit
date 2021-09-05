const AppServer = require('./bin/app/server')
const config = require('./bin/config/config')
const appServer = new AppServer()

appServer.server.listen(config.port, () => {
    console.log(`APP LISTEN IN PORT ${config.port}`)
})