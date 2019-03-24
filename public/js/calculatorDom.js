var val1 = document.querySelector("#add1");
var val2 = document.querySelector("#add2");
var button = document.querySelector("#addsubmit");
var result = document.querySelector(".addresult");
console.log(val1.value);

function final(){
    result.innerHTML = adder(parseFloat(val1.value), parseFloat(val2.value))
}



button.addEventListener("click", final)