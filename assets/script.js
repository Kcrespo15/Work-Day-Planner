// setting variable

var currentDay = $('#currentDay');

// function to display date and time 
function displayTime() {
   var currentTime = moment().format("MMMM  Do, YYYY hh:mm:ss ")
   $("#currentDay").text(currentTime);
}



// function for time block

function timeBlocks () {
   var currentHour = moment().hour();

   $(".time-block").each(function(){
      var hour = parseInt($(this).attr('id'));
      // console.log(hour)
      // console.log(currentHour)

      if ( currentHour < hour ) {
         $(this).addClass("future");
        
      } else if (currentHour === hour){
        
         $(this).addClass("present");

      } else {
         $(this).addClass('past')
      }
      
      })

}

// function to save local storage 
$('.saveBtn').on('click' , function () {
   var cTime = $(this).parent().attr("id");
   var textArea = $(this).siblings('.col-10').val();


   // console.log(textArea);

  
   

   localStorage.setItem(cTime , textArea);

   console.log('Hello World')
})


$("#txtN9").val(localStorage.getItem("9"));
$("#txtN10").val(localStorage.getItem("10"));
$("#txtN11").val(localStorage.getItem("11"));
$("#txt12").val(localStorage.getItem("12"));
$("#txtN13").val(localStorage.getItem("13"));
$("#txtN14").val(localStorage.getItem("14"));
$("#txtN15").val(localStorage.getItem("15"));
$("#txtN16").val(localStorage.getItem("16"));
$("#txtN17").val(localStorage.getItem("17"));
// call functions

setInterval(displayTime);

timeBlocks();
