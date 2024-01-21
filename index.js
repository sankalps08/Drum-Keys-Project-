// Finding length of the buttons by using the queryselectorall function from javascript.
var lengthOfButtons = document.querySelectorAll(".drum").length


// Running a loop through the length for the buttons, So we can add event to the buttons by using event listner click functionality.
// We create a variable ion which we will store the element value by using innerHTMl and by this we will find the value of element in drum class.

for (var i = 0; i< lengthOfButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
      var buttonInnerHTMl = this.innerHTML;

      makeSound(buttonInnerHTMl);
      buttonAnimation(buttonInnerHTMl);
    
});

}

// We use the keydown function to find the button pressed by the user keyboard.

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});



// We create a function and use the switch loop and pass the key as a parameter. Now whenever we press a key or click a button the sound attached to it will play.

function makeSound(key){

       switch (key) {
        
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
        case "k":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
        case "l":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
        default: console.log(buttonInnerHTML);
      
      }
        
}

// We write a function buttonAnimation to add the animnation to the button whenever it is pressed or clicked, we use classlist function to add the pressed class to the activebutton.
// We use the set timeout function to set the time for which that class applied to the button and then remove that class after that period of time 

function buttonAnimation(e){
    var activeButton = document.querySelector("."+ e);
    activeButton.classList. add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed")
    } ,100);
}