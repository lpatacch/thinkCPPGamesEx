let randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNum2 = Math.floor(Math.random() * 20) + 1;
let tries = 0;
const totallow = 5;

// Selecting button element
var btn = document.getElementById("check");
var btn2 = document.getElementById("try");
var eqn = document.getElementById("equation");
 
// Assigning event listeners to the button
btn.addEventListener("click", checkFunction);
btn2.addEventListener("click", tryFunction);

// change the text to an equation that will be checked
// eqn.style.color = "red";
eqn.innerHTML = randomNumber + " % " + randomNum2 + " = ";
//eqn.innerHTML = "blah";
function tryFunction() {
    location.reload();
}
 
function checkFunction() {
  let sol = document.getElementById("solution").value;
  let hints = document.getElementById("hints");
  tries += 1;
  
  num = parseInt(sol);
  if (isNaN(num))
  {
    hints.innerHTML = "The value needs to be a number. ";
  } else
  if (num == (randomNumber % randomNum2))
  {
    hints.innerHTML = "Yay! You got it right! Click the Try Another button to see another problem";
        return;
  } else 
  if (num > randomNum2)
  {
    hints.innerHTML = "Sorry, that is not correct. Remember, the solution is always less than the second number. ";
  }
  else {
    hints.innerHTML = "Sorry, that is not correct. "    
  }

  if (tries < totallow)
  {
    hints.innerHTML += (totallow - tries) + " tries left. Try again!";
  }
  else {
    hints.innerHTML += "The solution is " + randomNumber % randomNum2 + ". <br> Click the Try Another button to see another problem";
  }
  
}
