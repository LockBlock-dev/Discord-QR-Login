# Discord QR Login

[![puppeteer](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/Discord-QR-Login/puppeteer-core)](https://www.npmjs.com/package/puppeteer-core)

[![GitHub stars](https://img.shields.io/github/stars/LockBlock-dev/Discord-QR-Login.svg)](https://github.com/LockBlock-dev/Discord-QR-Login/stargazers)

Powerful NodeJS script to login into Discord without using a phone.


## Disclaimer

• This repository is an unofficial use of the [Discord's API](https://discord.com/developers/docs/intro). Bugs can occur.

• You must also use your token in the process, something [prohibited by Discord](https://discord.com/developers/docs/topics/oauth2#bot-vs-user-accounts) : `"Automating normal user accounts [...] can result in an account termination"`. I can not be held responsible for the use of this script, nor any ban of your account.


## How to use

• Download [NPM](https://www.npmjs.com/get-npm) and [NodeJS](https://nodejs.org)

• Download the project or clone it

• Go to the Discord QR Login folder and do `npm install`

• Edit the [config](./config.js) :
```js
chromePath: "",
//path to chrome.exe
//example : C:/Program Files/Google/Chrome/Application/chrome.exe
discordToken: "",
//your Discord token
debug: false
//debug logs
```

• Run it by doing `node login.js`

• You are logged into your Chrome instance


## Copyright

Discord's API : https://discord.com/developers/docs/intro

See the [license](/LICENSE).
