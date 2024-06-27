function showDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.toLocaleString("default", { month: "long" });
    var year = currentDate.getFullYear();
    var formattedDate = day + "/" + month + "/" + year;
    document.getElementById("dateDisplay").textContent = formattedDate;
  }
  function showTime() {
    var currentDate = new Date();
    var formattedDate = currentDate.toString();
    document.getElementById("timeDisplay").textContent = formattedDate;
  }