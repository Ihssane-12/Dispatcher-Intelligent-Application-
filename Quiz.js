// // document.addEventListener("DOMContentLoaded", function() {

// const slider = document.getElementById("slider");
// const result = document.getElementById("result");

// const slider2 = document.getElementById("slider2");
// const result2 = document.getElementById("result2");

// const slider3 = document.getElementById("slider3");
// const result3 = document.getElementById("result3");

// const seesuggestions = document.getElementById("seesuggestions");
// const suggestions = document.getElementById("suggestions");


// // sliders
// result.textContent = slider.value;
// slider.addEventListener("input", () => {
//     result.textContent = slider.value;
// });

// result2.textContent = slider2.value;
// slider2.addEventListener("input", () => {
//     result2.textContent = slider2.value;
// });

// result3.textContent = slider3.value;
// slider3.addEventListener("input", () => {
//     result3.textContent = slider3.value;
// });


// // moyenne + suggestion
// seesuggestions.addEventListener("click", () => {

//     let somme =
//         parseInt(result.value) +
//         parseInt(result2.value) +
//         parseInt(result3.value);

//     let moyen = somme / 3;
// });
//  let container = document.getElementById('calcule');
//     container.innerHTML = `Moyenne: ${moyen.toFixed(2)}`;


// document.addEventListener("DOMContentLoaded", function() {

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


// moyenne + suggestion
let moyenneStockee = 0;

function checkSomm() {

    let val1 = parseInt(slider.value);
    let val2 = parseInt(slider2.value);
    let val3 = parseInt(slider3.value);

    let somme = val1 + val2 + val3;
     moyenneStockee = somme / 3;

}
seesuggestion.addEventListener("click", function() {
    checkSomm();
    console.log("moyenne stockee",moyenneStockee);
});



