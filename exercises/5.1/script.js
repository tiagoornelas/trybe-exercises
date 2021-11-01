document.querySelector("#header-container h1").style.background = "#61bba5";

document.querySelector(".emergency-tasks").style.background = "pink";

document.querySelector(".no-emergency-tasks").style.background = "yellow";

for (let key = 0; key <=1; key += 1) {
document.querySelectorAll('.emergency-tasks div h3')[key].style.background = "purple";
}

for (let key = 0; key <=1; key += 1) {
    document.querySelectorAll('.no-emergency-tasks div h3')[key].style.background = "black";
}

document.querySelector('footer div').style.background = "#61bba5";