require('../../media/settings/config')
const { runtime } = require("../../library/myfunc");
let speed = require('performance-now')
let timestampe = speed();
let latensie = speed() - timestampe              


module.exports = {
    command: ['ping', 'runtime'],
    exec: async (m, fuzzy, from) => {
        await m.reply(`runtime : ${runtime(process.uptime())}\nspeed : ${latensie.toFixed(4)} detik`)
     }
}