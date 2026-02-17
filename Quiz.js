const slider = document.getElementById("slider");
const result = document.getElementById("result");

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("slider");
    const result = document.getElementById("result");
slider.addEventListener("input", () => {
    result.textContent = slider.value;
});
    result.textContent = slider.value;
});




const slider2 = document.getElementById("slider2");
const result2 = document.getElementById("result2");

slider2.addEventListener("input", () => {
    result2.textContent = slider2.value;
});
result2.textContent = slider2.value;



const slider3 = document.getElementById("slider3");
const result3 = document.getElementById("result3");

slider3.addEventListener("input", () => {
    result3.textContent = slider3.value;
});
result3.textContent = slider3.value;


const seesuggestions = document.getElementById("seesuggestions");
const suggestions = document.getElementById("suggestions");
seesuggestions.addEventListener("click",() => {
    const valeur =parseInt(slider.value)
    if (valeur <=4) {
        suggestions.textContent="bass énergie ";
    }else  {
        suggestions.textContent="haute énergie";}
});
