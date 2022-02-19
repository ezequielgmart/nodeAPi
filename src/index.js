const express = require('express')

const app = express()

// settings
/** define server */
/** NOTES */
/**
 * process.env.port = si un OS nos está ofreciendo un puerto, que lo tome, de lo contrario que use el puerto 3000
 * 
 * 
 * 
 */

app.set('port', process.env.PORT || 3000)

// middelwares 
app.use(express.json())

// routes
app.use(require('./routes/employees'))

app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
})