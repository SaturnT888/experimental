
const readline = require ('readline');

const consoleInput = function (questionText, callback) {
    const inputLine = readline.createInterface ({
        input: process.stdin,
        output: process.stdout
    });

    let commands = [];

    inputLine.question (questionText, (inputCommand) => {
        
        commands.push (inputCommand ?.toString ());
        inputLine.close ();

        if (!commands [0]) {
            /*...*/
            callback (null, 'Command is empty');
        } else if (commands [0].toLowerCase () === 'exit') {
            /*...*/
            callback (new Error ('Command is \'exit\''));
        } else {
            /*...*/
            callback (null, commands [0]);
        }
    });
}

module.exports = consoleInput;