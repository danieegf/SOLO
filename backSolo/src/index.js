const express = require('express')
const routes = require('../routes');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');





//settings
app.set('port', process.env.PORT || 4001)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json());

//routes
app.use('/api', routes());




//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
});