
const readline = require ('readline');

const consoleInput = function (questionText) {

    return new Promise ((resolve, reject) => {

        const inputLine = readline.createInterface ({
            input: process.stdin,
            output: process.stdout
        });

        let commands = [];

        inputLine.question (questionText, (inputCommand) => {
        
            commands.push (inputCommand ?.toString () || '');
            inputLine.close ();

            if (!commands [0]) {
                /*...*/
                reject (new Error ('Command is empty'));
            } else if (commands [0].toLowerCase () === 'exit') {
                /*...*/
                resolve ('Command is \'exit\'!');
            } else {
                /*...*/
                resolve (commands [0]);
            }
        });
    });
}

module.exports = consoleInput;