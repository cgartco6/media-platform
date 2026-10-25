const fs = require("fs");
const path = require("path");

const stations = [
  { name: "Bok Radio", url: "http://radiostream.co.za:9104/;" },
  { name: "5FM", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/5FM.mp3" },
  { name: "Jacaranda FM", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/JACARANDA.mp3" },
  { name: "KFM 94.5", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KFM.mp3" },
  { name: "Good Hope FM", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/GOODHOPEFM.mp3" }
];

let m3u = "#EXTM3U\n";
stations.forEach((s) => {
  m3u += `#EXTINF:-1,\( {s.name}\n \){s.url}\n`;
});

fs.writeFileSync(path.join(__dirname, "../content/radio/stations.m3u"), m3u);
console.log("stations.m3u generated");
