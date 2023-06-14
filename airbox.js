const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const xml2js = require('xml2js');
const chalk = require("chalk");

var cookie;
var data;

const high = chalk.green.inverse.bold;
const medium = chalk.yellow.inverse.bold;
const low = chalk.red.inverse.bold;

const refreshDelay = 5000;

function wait(milleseconds) {
  return new Promise(resolve => setTimeout(resolve, milleseconds))
}

async function GetSessionID() {

  const request = await fetch("http://192.168.1.1/home/index.html");

  cookie = (request.headers.get('set-cookie')).replace("path=/; HttpOnly;").replace("undefined", "").trim();

  GetAllValues();

}

async function GetAllValues() {

  do {

    const response = await fetch("http://192.168.1.1/api/monitoring/status", {
      "headers": {
        "cookie": cookie
      },
      "method": "GET"
    });

    data = await response.text()

    xml2js.parseString(data, (err, res) => {
      if (err) {
        console.error('Error parsing XML:', err);
      } else {
        const json = JSON.stringify(res);
        res = JSON.parse(json);

        PrintAllValues(res.response)

      }
    });

    await wait(refreshDelay)

  }

  while (1)
}

async function PrintAllValues(Values) {

  let BatteryPercent = Values.BatteryPercent[0];
  let CurrentWifiUser = Values.CurrentWifiUser[0];

  console.clear();


  //BatteryPercent
  if (BatteryPercent >= 50) {
    console.log("Battery : " + high(BatteryPercent + "%"));
  }
  else if (BatteryPercent <= 50 || BatteryPercent >= 26) {
    console.log("Battery : " + medium(BatteryPercent + "%"));
  }
  else if (BatteryPercent <= 25 || BatteryPercent >= 0) {
    console.log("Battery Level : " + low(BatteryPercent + "%"));
  }

    //CurrentWifiUser
  console.log("User(s) connected : " + high(CurrentWifiUser));

}

GetSessionID();