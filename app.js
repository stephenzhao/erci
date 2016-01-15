const saikou = require('saikou')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<div style="text-align:center; position:relative; top:50%; margin-top:-50px;"><h1>'+saikou()+'</h1> <br /><br /><a href="/">随机一句</a></div>')
})

const server = app.listen(3000,  () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
module.exports = saikou;