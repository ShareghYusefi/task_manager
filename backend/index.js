// The required function returns a function, so we call and give it an argument: The argument is the arbitrary namespace defince for debugging
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
// Import environment config object
const config = require('config');
// Import tasks router object 
const tasks = require('./routes/tasks');
const Task = require ('./models/Tasks');
// Allow different URL's to communicate with our server through CORS middleware
const cors = require('cors');
app.use(cors());
// Middleware to handle json and url encoded requests
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// any path starting with '/tasks' use tasks router
app.use('/tasks',tasks)

if(app.get('env') === 'development'){
    // Test different configurations
    startupDebugger('Config Testing enabled');

    console.log('Application Name: ' + config.get('name'));
    console.log('Mail Server: ' + config.get('mail.host'));
    // Stored environment variable can be mapped to custom envrionment variables define by config package for referening through the config object
    // console.log('Mail Password: ' + config.get('mail.password'));
}

// global process object has property variable env 
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is on port 3000...');
},);