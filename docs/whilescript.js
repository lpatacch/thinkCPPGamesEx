

// Selecting button element
var btn = document.getElementById("check");

// Assigning event listeners to the button
btn.addEventListener("click", checkFunction);

function validOp(val) {
	if (val == "+")
		return true;
	if (val == "-")
		return true;
	if (val == "*")
		return true;
	if (val == "/")
		return true;
	if (val == "%")
		return true;
	return false;
}

function modify(num1, op, num2)
{
	if (op == "+")
		return num1 + num2;
	if (op == "-")
		return num1 - num2;
	if (op == "*")
		return num1 * num2;
	if (op == "/")   // this was to have it do int divison
		return (~~(num1 / num2));
	if (op == "%")
		return num1 % num2;	
}

function validCond(val) {
	if (val == "<")
		return true;
	if (val == "<=")
		return true;
	if (val == ">")
		return true;
	if (val == ">=")
		return true;
	if (val == "==")
		return true;
	if (val == "!=")
		return true;
	return false;
}

function useCond(num1, val, num2) {
	if (val == "<")
		return (num1 < num2)
	if (val == ">")
		return (num1 > num2)
	if (val == ">=")
		return (num1 >= num2)
	if (val == "<=")
		return (num1 <= num2)
	if (val == "==")
		return (num1 == num2)
	if (val == "!=")
		return (num1 != num2)	
}
	
function checkFunction() {
  let beg = document.getElementById("begval").value;
  let end = document.getElementById("endval").value;
  let change = document.getElementById("changeval").value;
  let endc = document.getElementById("endcond").value;
  let opp = document.getElementById("operator").value;
  let hints = document.getElementById("hints");
  let topVal = parseInt(end);
  let incVal = parseInt(change);
  
  let printVal = "";
  num = parseInt(beg);
  if (!validCond(endc))
  {
	  hints.innerHTML = "Sorry, while condition is not valid";
	  return;
  }
  if (!validOp(opp))
  {
	  hints.innerHTML = "Sorry, operator is not valid";
	  return;
  }
  let count = 0;
  while (useCond(num, endc, topVal))
  {
	  printVal += num + " ";
	  num = modify(num, opp, incVal);
	  count=count+1;
	  if (count >= 150)
	  {
		  // to prevent hanging if infinite loop
		  printVal += "<br>stopped loop at 150 iterations ";
		  break;
	  }
  }
  printVal += "done";
  hints.innerHTML = printVal;
  
}
