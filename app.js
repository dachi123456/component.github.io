const slider = document.getElementById("slider")
const output = document.getElementById("output")

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = '$' + this.value;
}

