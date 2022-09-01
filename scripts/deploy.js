async function run() {
    const util = require('node:util');
    const exec = util.promisify(require('node:child_process').exec);
    const { username, host, path } = require('../config/server');
    const { stdout, stderr } = await exec(`cd ./dist && scp -r ./* ${username}@${host}:${path}"`);
    
    console.log(stdout);
    
    if(stderr) {
        console.log(stderr);
    } else {
        console.log('部署成功 @v@ ~\n');
    }
}

run();