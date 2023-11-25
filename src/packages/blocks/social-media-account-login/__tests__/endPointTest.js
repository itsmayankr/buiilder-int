const { exec } = require("child_process");

let config = require('../../social-media-account/src/config')
let host = require('../../../framework/src/config').baseURL.replace("http://", '').replace("https://", '');        

let data = JSON.stringify({
    data: {
        type: "social_account",
        attributes: {
            email: 'a@b.com',
            password: 'password',
            unique_auth_id: 'unique_auth_id'
        }
    }
})

exec(`cd ../../../.. && node endPointTest.js --host ${host} --path ${config.loginAccountURL} --body '${data}'`, (error, stdout, stderr) => {
    if (error) {
        console.log(`EndPoint Returned Error: ${error}`);
    }
    
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});