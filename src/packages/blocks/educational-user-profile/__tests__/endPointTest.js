const { exec } = require("child_process");
let config = require('../src/config')
let host = require('../../../framework/src/config').baseURL.replace("http://", '').replace("https://", '');

let cmd = `cd ../../../../ && node endPointTest.js --host ${host} --path ${config.getAwardsApiEndPoint} --method GET`

console.log(cmd);

exec(cmd, (error, stdout, stderr) => {
    if (error) {
        console.error(`EndPoint Failed::${error}`);
        process.exit(-1);
    }
    
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
