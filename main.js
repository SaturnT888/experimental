
/* main.js */
const consoleInput = require ('./modules/console-input.js');

/* Implementation via Promise
consoleInput ('Enter: ').then (
    message => console.log (`Entered: ${message}`)
).catch (
    err => console.log (`Error: ${err.message}`)
);
*/

/* Implementation via async-await */
async function consInp () {
    let message;

    try {
        message = await consoleInput ('Enter: ');
        console.log (`Entered: ${message}`);
    } catch (err) {
        console.log (`Error: ${err.message}`);
    }

    return 0;
};

consInp ();