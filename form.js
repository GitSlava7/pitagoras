

function hypotenuseCalc(){
  var legA = document.getElementById("leg_a").value;
  var legB = document.getElementById("leg_b").value;
  var h = Math.sqrt(Math.pow(legA,2) + Math.pow(legB,2));
  document.getElementById("result").innerHTML = "hypotenuse = " + h.toFixed(2);
    
}  
