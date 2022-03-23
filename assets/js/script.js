$(currentDay).html(moment().format("dddd, MMMM Do"));

$(".time-block").each(function () {
  var currentHour = moment().hours();
  var blockHour = parseInt($(this).attr("id"));
  if (currentHour > blockHour) {
    $(this).find("textarea").removeClass("present");
    $(this).find("textarea").addClass("past");
  }
  else if (currentHour == blockHour) {
    $(this).find("textarea").removeClass("future");
    $(this).find("textarea").addClass("present");
  }
  else {
    $(this).find("textarea").removeClass("past");
    $(this).find("textarea").addClass("future");
  }

});

function setEvents() {
  $('.saveBtn').on('click', function () {
    var value = $(this)
      .siblings('.description')
      .val();
    var time = $(this)
      .parent()
      .attr('id');
  localStorage.setItem(time, value);
  });
  $('#9 .description').val(localStorage.getItem('9'));
  $('#10 .description').val(localStorage.getItem('10'));
  $('#11 .description').val(localStorage.getItem('11'));
  $('#12 .description').val(localStorage.getItem('12'));
  $('#13 .description').val(localStorage.getItem('13'));
  $('#14 .description').val(localStorage.getItem('14'));
  $('#15 .description').val(localStorage.getItem('15'));
  $('#16 .description').val(localStorage.getItem('16'));
  $('#17 .description').val(localStorage.getItem('17'));
};

setEvents();