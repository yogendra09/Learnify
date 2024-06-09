// SDK initialization

var ImageKit = require("imagekit");


exports.intiImagekit = function (){

    var imagekit = new ImageKit({
        publicKey : process.env.PUBLIC_KEY_IMAGEKIT,
        privateKey : process.env.PRIVEAT_KEY,
        urlEndpoint : process.env.ENDPOINT_URL
    });

    return imagekit;
}
