const today_date=document.getElementById("Date")

const getCurrentDate = () => {
    let curr_time = new Date();
    var weekday = [
      "SUN",
      "MON",
      "TUE",
      "WED",
      "FRI",
      "SAT",
    ];
    var months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUNE",
      "JULY",
      "AUG",
      "SEPT",
      "OCT",
      "NOV",
      "DEC",
    ];
  
    var month = months[curr_time.getMonth()];
  
    var date = curr_time.getDate();
  
    let hour = curr_time.getHours();
    let min = curr_time.getMinutes();
    var day = weekday[curr_time.getDay()];
    let period = "AM";
    if (hour > 11) {
      period = "PM";
      if (hour > 12) hour -= 12;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if(period==="AM"){
    return `${day} | ${month} ${date} | ${hour}:${min} ${period}&nbsp <i class="fas fa-sun"></i>`;
    }
    if(period==="PM"){
      return `${day} | ${month} ${date} | ${hour}:${min} ${period}&nbsp <i class="fas fa-moon"></i>`;
      }
  };
  
  today_date.innerHTML = getCurrentDate();
   