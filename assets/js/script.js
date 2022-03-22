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

$(".saveBtn").on("click",function(){
    var getElementId =  $(this).siblings("textarea").attr("id");
    var getElementText =  $(this).siblings("textarea").val();
    //console.log(getElementId);
    //console.log(getElementText);
    var event =
        {
        ID: getElementId,
        Text: getElementText
        }
        setEvents(event);
});

function loadEvents(){
    var myEvents = localStorage.getItem("events");

    if(!myEvents){
        return false;
    }
   
    myEvents=JSON.parse(myEvents);
    //console.log(myEvents);
    $.each(myEvents, function(list, arr) {
        //console.log(arr);
        
        arr.forEach(function() {
            console.log(arr.ID);
            //$(arr.ID).Text(arr.Text);
          });
        
      });
};

loadEvents();