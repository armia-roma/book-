const fs = require('fs');
const path = require('path')
const exist = fs.existsSync('./log');
if(!exist) {
    fs.mkdir('./log',(err) => console.log(err))
}
const time = new Date()
let logTime = `${time.getFullYear()}-${time.getMonth()}-${time.getDay()} ${time.getHours()}:${time.getMinutes()}:${time.getMinutes()}`
// fs.appendFileSync(`./${logTime}.log`,'sorry error')

