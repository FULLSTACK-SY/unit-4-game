var minNumber = 0;
var maxNumber = 0;
var targetNumber = 0;
var numberOptions = [];
var counter = 0;
var wins=0;
var losses=0;
var result="";
function randomNumberFromRange(min,max)
      {
         return Math.floor(Math.random()*(max-min+1)+min);
      }

 function initiateNoAndCrystal() {
   minNumber = 19;
   maxNumber = 120;

   targetNumber = randomNumberFromRange(minNumber, maxNumber);
   $("#number-to-guess").text(targetNumber);

   minNumber = 1;
   maxNumber = 12;
   numberOptions = [];
   for (var i=0; i<4;i++) {
   numberOptions[i] = randomNumberFromRange(minNumber, maxNumber);
   }
  }

initiateNoAndCrystal();

 // We begin by expanding our array to include four options.
 const createCrystals = function(){
   $("#crystals").empty();
    numberOptions.forEach(function(value, i){
     // For each iteration, we will create an imageCrystal
     var imageCrystal = $("<img>");
     // First each crystal will be given the class ".crystal-image".
     // This will allow the CSS to take effect.
     imageCrystal.addClass("crystal-image");
     // Each imageCrystal will be given a src link to the crystal image
     imageCrystal.attr("src", "./assets/images/crystal"+(i+1)+".jpg");
     // Each imageCrystal will be given a data attribute called data-crystalValue.
     // This data attribute will be set equal to the array value.
     imageCrystal.attr("data-crystalvalue", value);
     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
     $("#crystals").append(imageCrystal);
    });
 };
 // Next we create a for loop to create crystals for every numberOption.
 for (var i = 0; i < numberOptions.length; i++) {
   createCrystals();
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(document).on("click", ".crystal-image", function() {

 // Determining the crystal's value requires us to extract the value from the data attribute.
 // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
 // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
 // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
   var crystalValue = ($(this).attr("data-crystalvalue"));
   crystalValue = parseInt(crystalValue);
 // We then add the crystalValue to the user's "counter" which is a global variable.
 // Every click, from every crystal adds to the global counter.
   counter += crystalValue;
 // All of the same game win-lose logic applies. So the rest remains unchanged.
 // alert("New score: " + counter);
   $("#newscore").text(counter);

 if (counter === targetNumber) {
     wins++;
     $("#wins").text("wins : "+ wins);
     $("#newscore").text(counter);
     $("#result").text("You won!!")

     counter =0;
     $("#newscore").text(counter);

     initiateNoAndCrystal();

     for (var i = 0; i < numberOptions.length; i++) {
       createCrystals();
     }
 }


 if (counter > targetNumber) {
   losses++;
   $("#losses").text("losses : " + losses);
   $("#newscore").text(counter);
   $("#result").text("You lost!!")

   counter =0;
   $("#newscore").text(counter);

   initiateNoAndCrystal();
  //  alert(targetNumber + " => "+ numberOptions.join(','));

   for (var i = 0; i < numberOptions.length; i++) {
     createCrystals();
   }
 }


});
