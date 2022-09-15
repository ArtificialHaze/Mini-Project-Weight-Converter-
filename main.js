// VARIABLES

let pounds = document.querySelector(".pounds");
let kilograms = document.querySelector(".kilograms");
let grams = document.querySelector(".grams");
let ounces = document.querySelector(".ounces");
const form = document.querySelector("form");

// MAIN FUNCTION

const convertWeight = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("pounds")) {
    let inputPoundVal = e.target.value;
    kilograms.value = (inputPoundVal / 2.2046).toFixed(2);
    grams.value = (inputPoundVal / 0.0022046).toFixed(2);
    ounces.value = (inputPoundVal * 16).toFixed(2);
  }
  if (e.target.classList.contains("kilograms")) {
    let inputKilogramVal = e.target.value;
    pounds.value = inputKilogramVal * 2.2046;
    grams.value = inputKilogramVal * 1000;
    ounces.value = inputKilogramVal * 35.274;
  }
  if (e.target.classList.contains("grams")) {
    let inputGramVal = e.target.value;
    kilograms.value = inputGramVal / 1000;
    pounds.value = inputGramVal * 0.0022046;
    ounces.value = inputGramVal * 0.035274;
  }
  if (e.target.classList.contains("ounces")) {
    let inputOunceVal = e.target.value;
    kilograms.value = inputOunceVal / 35.274;
    grams.value = inputOunceVal / 0.035274;
    pounds.value = inputOunceVal * 0.0625;
  }
};

// EVENT LISTENER

form.addEventListener("input", convertWeight);
