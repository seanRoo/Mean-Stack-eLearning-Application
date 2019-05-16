const Express = require('express');
const Parser = require('body-parser');
const RequestLogger = require('morgan');
const Mongoose = require('mongoose');
const passport = require('passport');
const UserAPI = require('./User/user-api');
const AuthAPI = require('./Authentication/authentication-api');
const ClassAPI = require('./Classes/class-api');
const GroupAPI = require('./Groups/group-api');
const UploadAPI = require('./Uploads/uploads-api');
const AnnotateAPI = require('./Annotations/annotation-api');
const ActivityAPI = require('./Activity/activity-api');
const config = require('./Config/database');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage=require('multer-gridfs-storage');
const Grid=require('gridfs-stream');
const methodOverride = require('method-override');

const Generator = require('express-oas-generator');
//"mongodb://127.0.0.1:27017/Classroom-Dev-Cluster-2"
//const mongoURI = 'mongodb+srv://SeanRoo:Celtic88@classroom-isery.mongodb.net/test?retryWrites=true';
//const conn = Mongoose.connect(config.database, {useNewUrlParser: true});
Mongoose.connect(process.env.MONGODB_URI);


let App = Express();


Mongoose.set('debug', true);
App.use(Parser.json());
App.use(Parser.urlencoded( {extended: true} ));
App.use(RequestLogger('dev')); // Replace with some good logging library eventually

App.use(Express.static(__dirname + '/public'));

App.get('/', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/public/index.html'));
    });


// Passport Middleware
App.use(passport.initialize());
App.use(passport.session());
require('./Config/passport')(passport);

App.use(methodOverride('_method'));



App.use(function(req, res, next) { //allow cross origin requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers, x-api-key");
    
    next();
});





App.use('/', UserAPI);
App.use('/', AuthAPI);
App.use('/', ClassAPI);
App.use('/', GroupAPI);
App.use('/', UploadAPI);
App.use('/', AnnotateAPI);
App.use('/', ActivityAPI);

//App.use(cors());

Generator.init(App, {});

App.listen(process.env.PORT || 8080, console.log("Classroom Service Started"));
