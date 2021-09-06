let day, hour, minutes = 0;
function elapsedTime(s) {
  if (isNaN(s)) return `${s} is not a number`;

  day = Math.floor(s / 86400);
  hour = Math.floor(s % 86400 / 3600);
  minutes = Math.floor((s % 86400 % 3600) / 60);

  return `${day} hari ${hour} jam ${minutes} menit ${s % 60} detik`;
}

console.log(elapsedTime("700005A"));
console.log(elapsedTime("700005"));