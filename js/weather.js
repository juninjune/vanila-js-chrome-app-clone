const API_KEY =
  "P7%2FVymmSnh3Ss5b81jdEuTbodZIIV7cpY1IBsJ%2FhFSjXv%2BokaQNRJQ0Dd1vzo2d7myvmASzewBpR6KQDXia3SA%3D%3D";

function onGeoOk(position) {
  const date = new Date();
  date.setTime(Date.now() - 1800000);
  const yearMonthDate =
    date.getFullYear().toString() +
    (date.getMonth() + 1).toString().padStart(2, "0)") +
    date.getDate().toString();
  const hours =
    date.getHours().toString().padStart(2, "0") +
    date.getMinutes().toString().padStart(2, "0");

  const lat = Math.floor(position.coords.latitude);
  const lon = Math.floor(position.coords.longitude);
  const nx = dfs_xy_conv(lat, lon).x;
  const ny = dfs_xy_conv(lat, lon).y;

  // const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${yearMonthDate}&base_time=${hours}&nx=${nx}&ny=${ny}`;
  const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=json&base_date=${yearMonthDate}&base_time=${hours}&nx=${nx}&ny=${ny}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      paintWeather(
        data.response.body.items.item[24].fcstValue,
        data.response.body.items.item[18].fcstValue,
        data.response.body.items.item[6].fcstValue
      );
    });
}
function onGeoError(error) {
  console.error(error);
}

function paintWeather(_temperature, _sky, _rain) {
  let weatherIcon;

  if (_sky === "1") {
    weatherIcon = "☀️";
  } else {
    weatherIcon = "☁️";
  }

  if (_rain === "1") {
    weatherIcon = "☔";
  } else if (_rain === "2" || _rain === "3") {
    weatherIcon = "❄️";
  }

  const temperature = document.querySelector("#weather span:first-child");
  const weather = document.querySelector("#weather span:last-child");

  temperature.innerText = `${_temperature}°C`;
  weather.innerText = weatherIcon;
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// (사용 예)
// var rs = dfs_xy_conv("toLL","60","127");
// console.log(rs.lat, rs.lng);

//
// LCC DFS 좌표변환을 위한 기초 자료
//
const RE = 6371.00877; // 지구 반경(km)
const GRID = 5.0; // 격자 간격(km)
const SLAT1 = 30.0; // 투영 위도1(degree)
const SLAT2 = 60.0; // 투영 위도2(degree)
const OLON = 126.0; // 기준점 경도(degree)
const OLAT = 38.0; // 기준점 위도(degree)
const XO = 43; // 기준점 X좌표(GRID)
const YO = 136; // 기1준점 Y좌표(GRID)
//
// LCC DFS 좌표변환 ( code : "toXY"(위경도->좌표, v1:위도, v2:경도), "toLL"(좌표->위경도,v1:x, v2:y) )
//

function dfs_xy_conv(v1, v2) {
  const DEGRAD = Math.PI / 180.0;
  const RADDEG = 180.0 / Math.PI;

  const re = RE / GRID;
  const slat1 = SLAT1 * DEGRAD;
  const slat2 = SLAT2 * DEGRAD;
  const olon = OLON * DEGRAD;
  const olat = OLAT * DEGRAD;

  let sn =
    Math.tan(Math.PI * 0.25 + slat2 * 0.5) /
    Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
  let sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
  let ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  ro = (re * sf) / Math.pow(ro, sn);
  let rs = {};

  rs["lat"] = v1;
  rs["lng"] = v2;
  var ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5);
  ra = (re * sf) / Math.pow(ra, sn);
  var theta = v2 * DEGRAD - olon;
  if (theta > Math.PI) theta -= 2.0 * Math.PI;
  if (theta < -Math.PI) theta += 2.0 * Math.PI;
  theta *= sn;
  rs["x"] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
  rs["y"] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);

  return rs;
}
