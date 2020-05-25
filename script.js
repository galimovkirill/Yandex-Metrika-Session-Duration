function readCookie(name) {
  var name_cook = name + "=";
  var spl = document.cookie.split(";");

  for (var i = 0; i < spl.length; i++) {
    var c = spl[i];

    while (c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(name_cook) == 0) {
      return c.substring(name_cook.length, c.length);
    }
  }
  return null;
}

// Яндекс Метрика
function sessionDurationTimer() {
  sessionTime = readCookie("sessionTime");
  if (!sessionTime) {
    document.cookie = "sessionTime=1";
  }
  setInterval(() => {
    document.cookie = `sessionTime=${sessionTime++}`;
    if (sessionTime == 60) {
      console.log("ДЛИТЕЛЬНОСТЬ СЕАНСА БОЛЬШЕ ОДНОЙ МИНУТЫ");
      yaCounter4557025.reachGoal("TIME_over_2");
    }
    if (sessionTime == 120) {
      console.log("ДЛИТЕЛЬНОСТЬ СЕАНСА БОЛЬШЕ ДВУХ МИНУТ");
      yaCounter4557025.reachGoal("TIME_over_3");
    }
  }, 1000);
}
sessionDurationTimer();
