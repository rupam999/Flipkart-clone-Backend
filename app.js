const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const fs = require('fs')
const moment = require('moment')
const expressStatusMonitor = require('express-status-monitor');

/****************DOTENV****************/ 
const dotenv = require('dotenv')
dotenv.config({
  path: path.join(__dirname, '.env')
});


const app = express();
const router = express.Router();

app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.use(expressStatusMonitor());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/****************CROS****************/ 
const cors = require('cors')
app.use(cors({
  origin: '*'
}))
app.options('*', cors())

/****************TOKEN****************/ 
const { middleware } = require('./middleware/authMiddleware');
app.use(middleware);

/*********DEFAULT API ENDPOINT*********/ 
app.use('/api', router);

/********DATABASE CONNECTION***********/
const DB = require('./DB/config');
DB.connectDB();

/****************SERVER****************/ 
if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    res.status(500).send({
      error: 1,
      err,
      message: 'Internal Server Error'
    });
  });
}

app.listen(app.get('port'), () => {
  console.log('Node.js App is running at http://localhost:%d', app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
});

// Root
app.get('/', (req, res) => {
  res.send({
    msg: "sever running"
  });
});


/***********STATIC CONTENT************/ 
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

/***************************************************************/
/************************ALL Routes****************************/
/*************************************************************/
const SignUpIn = require('./routes/signInUp');
const AllProduct = require('./routes/product');
const Payment = require('./routes/payment');
const Orders = require('./routes/orders');

SignUpIn(router);
AllProduct(router);
Payment(router);
Orders(router);




module.exports = app;