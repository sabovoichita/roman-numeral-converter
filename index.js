const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
// console.log(inputNumber);
// console.log(convertBtn);
// console.log(output);

const checkUserInput = () => {
  const inputValue = parseInt(inputNumber.value);
  if (!inputValue) {
    output.textContent = "Please enter a valid number";
  } else if (inputValue < 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (inputValue > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999.";
  } else {
    output.textContent = `Coverting:  ${inputValue}`;
    return;
  }
  inputNumber.value = "";
};

convertBtn.addEventListener("click", checkUserInput);
