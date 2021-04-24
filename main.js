
/* main.js */
const consoleInput = require ('./modules/console-input.js');

consoleInput ('Enter: ', (error, message) => {
    if (error) {
        console.log (`Error: ${error.message}`);
    } else {
        console.log (`Entered: ${message}`);
    }
});
