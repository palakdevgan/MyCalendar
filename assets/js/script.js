$(currentDay).html(moment().format("dddd, MMMM Do"));

$(".time-block").each(function() {
    var currentHour = moment().hours();
    var blockHour = parseInt($(this).attr("id"));
    if (currentHour > blockHour) 
    {
      $(this).find("textarea").removeClass("present");
      $(this).find("textarea").addClass("past");
    } 
    else if(currentHour == blockHour) 
    {
      $(this).find("textarea").removeClass("future");
      $(this).find("textarea").addClass("present");
    } 
    else 
    {
      $(this).find("textarea").removeClass("past") ;
      $(this).find("textarea").addClass("future");
    }
  
  });

  function setEvents(array){
    var getEvents= JSON.parse(localStorage.getItem("events"));
    if(getEvents === null) getEvents = [];
    var allEvents = getEvents.concat(array);
     localStorage.setItem("events",JSON.stringify(allEvents));
    
    
};

$(".time-block").on("click","textarea",function(){
    var getElementId =  $(this).attr("id");
    var getText=$(this).attr("id").val();
    console.log(getText);
})