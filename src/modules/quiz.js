const slider = document.getElementById("slider");
const result = document.getElementById("result");

const slider2 = document.getElementById("slider2");
const result2 = document.getElementById("result2");

const slider3 = document.getElementById("slider3");
const result3 = document.getElementById("result3");

const seesuggestion = document.getElementById("seesuggestion");
const suggestions = document.getElementById("suggestion");

slider.addEventListener("input", () => {
    result.textContent = slider.value;
    checkSomm();
});

slider2.addEventListener("input", () => {
    result2.textContent = slider2.value;
    checkSomm();
});

slider3.addEventListener("input", () => {
    result3.textContent = slider3.value;
    checkSomm();
});