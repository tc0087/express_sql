const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')

/* Require controllers */

const errorController = require('./controllers/error')

/* Create the app */
const app = express()

/* Use body-parser to easily parse request bodies */
app.use(bodyParser.urlencoded({extended: true}))

/* Provide access to the public directory via the filesystem */
app.use(express.static(path.join(__dirname, 'public')))

/* Create the hbs engine, specify path to layouts & path to default layout */
app.engine('hbs', hbs({layoutsDir: path.join(__dirname, 'views/layouts'), defaultLayout: 'main.hbs'}))
/* Set the view engine */
app.set('view engine', 'hbs')
/* Specify the path to the views */
app.set('views', path.join(__dirname, 'views'))

/* Import your routes */
const adminRoutes = require('./routes/admin')
const publicRoutes = require('./routes/public')

/* Use your routes w/ a default error route */
app.use('/admin', adminRoutes)
app.use(publicRoutes)
app.use(errorController.get404)

/* Instruct the app to listen on port 3000 */
app.listen(3000)