async function run() {
    const util = require('node:util');
    const exec = util.promisify(require('node:child_process').exec);
    const { username, host, path } = require('../config/server');
    console.log(`\n------- 部署中...\n`);
    let result = await exec(`scp -r ./dist ${username}@${host}:${path}":`);
    printResult(result, '部署成功 @v@ ~\n');
    console.log(`\n------- 启动中...\n`);
    result = await exec(`ssh ${username}@${host} "/root/deploy-blog-backend.sh" `);
    printResult(result, '启动成功 @v@ ~\n')    
}
function printResult(result, successMessage) {
    let { stdout, stderr } = result;
    
    console.log(stdout);
    
    if(stderr) {
        console.log(stderr);
    } else {
        console.log(successMessage);
    }
}
run();