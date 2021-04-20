const puppeteer = require('puppeteer-core')
const config = require('./config')

const options = {
    headless: false,
    executablePath: config.chromePath,
    defaultViewport: null
}

const x_super = Buffer.from(`{"browser":"Discord Android","browser_user_agent":"Discord-Android/1516","client_build_number":1516,"client_version":"70.6","device":"AOSP on IA Emulator, sdk_gphone_x86_arm","os":"Android","os_sdk_version":"28","os_version":"9","system_locale":"en-US","accessibility_support_enabled":false,"accessibility_features":128}`).toString("base64")
var fingerprint

const start = async () => {

    const browser = await puppeteer.launch(options)
    const page = await browser.newPage()

    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36")

    await page.goto("https://discord.com/login")

    page.on('console', message => {

        if (config.debug) {
            console.log(`new : ${message.text()}`)
        }

        if (message.text().includes("connected, handshaking with fingerprint")) {
            fingerprint = message.text().split("\n")[3].split("fingerprint: ")[1]
        }

        if (fingerprint) {

            if (message.text().includes("awaiting remote")) {
                console.log("Got fingerprint !")

                require('./auth.js')(config.discordToken, x_super, fingerprint)
            }
        }
    })

}

start()