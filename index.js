const logg = require('./logger');
const paths = require('path');
const osmods = require('os');
const fs = require('fs');

function hello(name){
    console.log('Hello ' + name );

}
hello('Shridhar');

logg.loggerr('Honey');

// path module
var pathblah = paths.parse(__filename);

console.log(pathblah);

//os module

var TotalMemory = osmods.totalmem();
var freeMemory = osmods.freemem();

console.log(TotalMemory);
console.log(freeMemory);

//file modules;

 fs.readdir('./', function(err,files){
    if(err){
        console.log(`Error:  ${err}`);
    }else{
        console.log(`Results: ${files}`)
    }
 }); 
