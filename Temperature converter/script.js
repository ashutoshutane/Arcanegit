function convertTemperature() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let result;

  if (fromUnit === "celsius" && toUnit === "fahrenheit") {
    result = (inputValue * 9/5) + 32;
  } else if (fromUnit === "celsius" && toUnit === "kelvin") {
    result = inputValue + 273.15;
  } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
    result = (inputValue - 32) * 5/9;
  } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
    result = (inputValue - 32) * 5/9 + 273.15;
  } else if (fromUnit === "kelvin" && toUnit === "celsius") {
    result = inputValue - 273.15;
  } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
    result = (inputValue - 273.15) * 9/5 + 32;
  } else {
    result = inputValue; 
  }

  document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)} ${toUnit}`;
}

