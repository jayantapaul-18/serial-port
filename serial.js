const express = require('express');
const app = express();
const serverPort = 4000 ;
const os = require('os');
const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline
const networkinfo = os.networkInterfaces();

const device = '/dev/tty.usbmodem143201';
const serialPort = new SerialPort(device, function (err) {
    if (err) {
      return console.log('Error: ', err.message)
    }
    else{
        console.log('Serial communication is on with ',device);
    }
    baudRate: 57600
  })
  
const parser = new Readline()
serialPort.pipe(parser)
parser.on('data', function (data) {
  console.log('data received: ' + data)
})

app.all('/serialPort', (req,res) => {
res.send("serialPort response "); // Need to work on the API 
})

app.all('/networkinfo', (req,res) => {
    res.send(JSON.stringify(networkinfo));
    })

app.listen(serverPort,() => console.log(`Serial server started on port : ${serverPort}`));
