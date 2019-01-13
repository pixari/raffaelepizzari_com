var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    username: $FTPUSERNAME,
    password: $FTPPASS,
    host: $FTPHOST,
    port: 21,
    localRoot: __dirname + "/../dist/",
    remoteRoot: "/",
    include: ['*']
}
    
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});