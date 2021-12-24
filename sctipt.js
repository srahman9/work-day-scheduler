$(document).ready(function () {
  let hour1 = $("#div1");
  let hour2 = $("#div2");
  let hour3 = $("#div3");
  let hour4 = $("#div4");
  let hour5 = $("#div5");
  let hour12 = $("#div12");
  let hour11 = $("#div11");
  let hour10 = $("#div10");
  let hour9 = $("#div9");
  let timeNow = parseInt(moment().format("HH"));

  //Timeblock section showing which hour is past, present and future
  if (parseInt(hour12.attr("data-hour")) > timeNow) {
    hour12.removeClass("past present future");
    hour12.addClass("future");
  } else if (parseInt(hour12.attr("data-hour")) === timeNow) {
    hour12.removeClass("past present future");
    hour12.addClass("present");
  } else {
    hour12.removeClass("past present future");
    hour12.addClass("past");
  }

  if (parseInt(hour1.attr("data-hour")) > timeNow) {
    hour1.removeClass("past present future");
    hour1.addClass("future");
  } else if (parseInt(hour1.attr("data-hour")) === timeNow) {
    hour1.removeClass("past present future");
    hour1.addClass("present");
  } else {
    hour1.removeClass("past present future");
    hour1.addClass("past");
  }

  if (parseInt(hour2.attr("data-hour")) > timeNow) {
    hour2.removeClass("past present future");
    hour2.addClass("future");
  } else if (parseInt(hour2.attr("data-hour")) === timeNow) {
    hour2.removeClass("past present future");
    hour2.addClass("present");
  } else {
    hour2.removeClass("past present future");
    hour2.addClass("past");
  }

  if (parseInt(hour3.attr("data-hour")) > timeNow) {
    hour3.removeClass("past present future");
    hour3.addClass("future");
  } else if (parseInt(hour3.attr("data-hour")) === timeNow) {
    hour3.removeClass("past present future");
    hour3.addClass("present");
  } else {
    hour3.removeClass("past present future");
    hour3.addClass("past");
  }

  if (parseInt(hour4.attr("data-hour")) > timeNow) {
    hour4.removeClass("past present future");
    hour4.addClass("future");
  } else if (parseInt(hour4.attr("data-hour")) === timeNow) {
    hour4.removeClass("past present future");
    hour4.addClass("present");
  } else {
    hour4.removeClass("past present future");
    hour4.addClass("past");
  }

  if (parseInt(hour5.attr("data-hour")) > timeNow) {
    hour5.removeClass("past present future");
    hour5.addClass("future");
  } else if (parseInt(hour5.attr("data-hour")) === timeNow) {
    hour5.removeClass("past present future");
    hour5.addClass("present");
  } else {
    hour5.removeClass("past present future");
    hour5.addClass("past");
  }

  if (parseInt(hour9.attr("data-hour")) > timeNow) {
    hour9.removeClass("past present future");
    hour9.addClass("future");
  } else if (parseInt(hour9.attr("data-hour")) === timeNow) {
    hour9.removeClass("past present future");
    hour9.addClass("present");
  } else {
    hour9.removeClass("past present future");
    hour9.addClass("past");
  }

  if (parseInt(hour10.attr("data-hour")) > timeNow) {
    hour10.removeClass("past present future");
    hour10.addClass("future");
  } else if (parseInt(hour10.attr("data-hour")) === timeNow) {
    hour10.removeClass("past present future");
    hour10.addClass("present");
  } else {
    hour10.removeClass("past present future");
    hour10.addClass("past");
  }

  if (parseInt(hour11.attr("data-hour")) > timeNow) {
    hour11.removeClass("past present future");
    hour11.addClass("future");
  } else if (parseInt(hour11.attr("data-hour")) === timeNow) {
    hour11.removeClass("past present future");
    hour11.addClass("present");
  } else {
    hour11.removeClass("past present future");
    hour11.addClass("past");
  }

  hour1.val(localStorage.getItem("Entry1"));
  hour2.val(localStorage.getItem("Entry2"));
  hour3.val(localStorage.getItem("Entry3"));
  hour4.val(localStorage.getItem("Entry4"));
  hour5.val(localStorage.getItem("Entry5"));
  hour9.val(localStorage.getItem("Entry9"));
  hour10.val(localStorage.getItem("Entry10"));
  hour11.val(localStorage.getItem("Entry11"));
  hour12.val(localStorage.getItem("Entry12"));

  let button9 = $("#hour9");
  let button10 = $("#hour10");
  let button11 = $("#hour11");
  let button12 = $("#hour12");
  let button1 = $("#hour1");
  let button2 = $("#hour2");
  let button3 = $("#hour3");
  let button4 = $("#hour4");
  let button5 = $("#hour5");

  //buttons when clicked are able to save data entered by user into localstorage
  button9.on("click", function () {
    if (hour9.val() !== "") {
      localStorage.setItem("Entry9", hour9.val());
    }
  });

  button10.on("click", function () {
    if (hour10.val() !== "") {
      localStorage.setItem("Entry10", hour10.val());
    }
  });

  button11.on("click", function () {
    if (hour11.val() !== "") {
      localStorage.setItem("Entry11", hour11.val());
    }
  });

  button12.on("click", function () {
    if (hour12.val() !== "") {
      localStorage.setItem("Entry12", hour12.val());
    }
  });

  button1.on("click", function () {
    if (hour1.val() !== "") {
      localStorage.setItem("Entry1", hour1.val());
    }
  });

  button2.on("click", function () {
    if (hour2.val() !== "") {
      localStorage.setItem("Entry2", hour2.val());
    }
  });

  button3.on("click", function () {
    if (hour3.val() !== "") {
      localStorage.setItem("Entry3", hour3.val());
    }
  });

  button4.on("click", function () {
    if (hour4.val() !== "") {
      localStorage.setItem("Entry4", hour4.val());
    }
  });

  button5.on("click", function () {
    if (hour5.val() !== "") {
      localStorage.setItem("Entry5", hour5.val());
    }
  });

  //Proivdes the current date for the user
  let dayEl = $("<p>");

  currentDate();
  setInterval(currentDate, 1000);

  function currentDate() {
    dayEl.text(moment().format("LLLL"));

    $(".jumbotron").append(dayEl);
  }
});
