const display = document.getElementById("display");

function equal(){
   try{
      display.innerText = eval(display.innerText);
   }catch{
      display.innerText = "Error";
   }
}

function clearDisplay(){
   display.innerText = "";
}

function cancel() {
   display.innerText = display.innerText.slice(0, -1);
}



function get(value){
  display.innerText += value;
}

