const request = require('request')

module.exports = (discordToken, x_super, handshake) => {

    const reqBody = `{\"handshake_token\":\"${handshake}\",\"temporary\": true}`
    
    request({
        url: "https://discord.com/api/v8/users/@me/remote-auth/finish",
        method: "POST",
        headers: {
            "User-Agent": "Discord-Android/1516",                  
            "Accept-Language": "en-US",
            "Content-Type": "application/json; charset=UTF-8",
            "Content-Length": Buffer.byteLength(reqBody),
            "Authorization": `${discordToken}`,
            "X-Super-Properties": `${x_super}`
        },
        body: reqBody

    }, (err, res) => {
        if (!err) {
            if (res.statusCode == "204") {
                console.log("Logged in !")
            }

        } else {
            console.log(`Error : ${err}`)
        }
    })
}
