const request = require('request')

module.exports = (discordToken, x_super, fingerprint) => {

    const reqBody = `{\"fingerprint\":\"${fingerprint}\"}`

    request({
        url: "https://discord.com/api/v8/users/@me/remote-auth",
        method: "POST",
        headers: {
            "User-Agent": "Discord-Android/1516",                  
            "Accept-Language": "en-US",
            "Content-Type": "application/json; charset=UTF-8",
            "Content-Length": Buffer.byteLength(reqBody),
            "Authorization": `${DiscordToken}`,
            "X-Super-Properties": `${x_super}`
        },
        body: reqBody

    }, async (err, res, body) => {
        if (!err) {
            if (res.statusCode == "200") {
                console.log("Got handshake token !")

                const handshake_token = body.split("\"")[3]

                require('./finish.js')(discordToken, x_super, handshake_token)
            }
            
        } else {
            console.log(`Error : ${err}`)
        }
    })
}
