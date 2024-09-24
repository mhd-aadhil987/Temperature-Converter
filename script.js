const numberBox = document.getElementById("numberBox");
const C = document.getElementById("C");
const F = document.getElementById("F");
const result = document.getElementById("result");

let temp;

function convert(){
    if(C.checked){
        temp = Number(numberBox.value);
        temp =  (temp - 32) * 5/9;
        result.textContent = temp.toFixed(2) + " ℃";
    }
    else if(F.checked){
        temp = Number(numberBox.value);
        temp =  temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(2) + " ℉";
    }
    else{
        result.textContent = "Please select a unit!";
    }
}