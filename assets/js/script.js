$(currentDay).html(moment().format("dddd, MMMM Do"));

var auditTime=function(rowEl){
var currentTime=moment().format("MMMM Do, YYYY");
var labelTime=$(rowEl).find("label").text().trim();
var currentlabelTime=currentTime.concat(labelTime);
console.log(currentlabelTime);
if(moment(currentTime).isBefore(labelTime)){
    alert("Hello");
    //$(rowEl).addClass("future");
}
}

setInterval(function() {
    $(".row").each(function(index, el) {
      auditTime(el);
    });
  },  1000);