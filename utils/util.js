const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  // return year.toString()+month.toString()+day.toString()+hour.toString()+minute.toString()+second.toString()
  var a= [year, month, day].map(formatNumber)+ [hour, minute, second].map(formatNumber)
  a = a.replace(/\,/g,"");
  return a
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

const wxuuid = function () {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 6; i++) 
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  var uuid = s.join("");
  return uuid
}
 
//一定要在这里面注册，否则没有用
module.exports = {
  formatTime: formatTime,
  wxuuid: wxuuid
}

