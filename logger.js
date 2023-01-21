var url = 'http://mylogger.io/log'; // learning Modules

function log(message){
    // send a http request 
    console.log(message);
}

// Here url and log have limited scope that is to this module only.
// to make them public we use 
module.exports.loggerr = log;