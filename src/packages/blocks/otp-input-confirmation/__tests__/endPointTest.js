const { exec } = require("child_process");
let config = require('../src/config')
let host = require('../../../framework/src/config').baseURL.replace("http://", '').replace("https://", '');

exec(`cd ../../../.. && node endPointTest.js --host ${host} --path ${config.apiVerifyOtpEndPoint}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`EndPoint Returned Error: ${error}`);
    }
    
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

exec(`cd ../../../.. && node endPointTest.js --host ${host} --path ${config.apiVerifyForgotPasswordOtpEndPoint}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`EndPoint Returned Error: ${error}`);
    }
    
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});