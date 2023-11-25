const { exec } = require("child_process");

let config = require('../src/config')
let host = require('../../../framework/src/config').baseURL.replace("http://", '').replace("https://", '');        

let data = JSON.stringify({
    data: {
        type: "email_account",
        attributes: {
            email: 'a@b.com',
            password: 'password'
        }
    }
})

exec(`cd ../../../.. && node endPointTest.js --host ${host} --path ${config.loginAPiEndPoint} --body '${data}'`, (error, stdout, stderr) => {
    if (error) {
        console.log(`EndPoint Returned Error: ${error}`);
    }
    
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});