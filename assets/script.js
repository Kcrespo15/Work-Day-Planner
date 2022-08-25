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


$("#txtN9").val(localStorage.getItem('random'));
$("#txtN10").val(localStorage.getItem('random'));

// call functions

setInterval(displayTime);

timeBlocks();
