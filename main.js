// F to C Converter
// 06 JUN 2021
// Source: https://youtu.be/rDbnadbF9MY

// Event listener to the button
document.getElementById('convert-btn').addEventListener('click', convertFahrToCelsius);

// Event function
function convertFahrToCelsius(){
    // INPUT
    // Plus sign below converts string value to a number!
    let fahrTemp = +document.getElementById('fahr-temp').value;
    console.log(`Degrees Fahrenheit: ${fahrTemp}`);
    
    // PROCESSING
    let celsiusTemp = (fahrTemp - 32) * 5 / 9;
    
    // OUTPUT 
    document.getElementById('celsius_output').innerHTML = celsiusTemp;
    
}
