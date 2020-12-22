
// Change scale label (Metric or Imperial) and respective units using slider checkbox 
function changeText() {
    var checkbox = document.getElementById("scaleCheckbox");    
    var scaleLabel = document.getElementById("scale");
    var scaleTemp = document.getElementById("scale-temp");
    var scaleSpeed = document.getElementById("scale-speed");

    // Metric label and units
    if (!checkbox.checked) {
        scaleLabel.innerHTML = "Metric";
        scaleTemp.innerHTML = "°C";
        scaleSpeed.innerHTML = "kph";
    }
    // Imperial label and units
    else {
        scaleLabel.innerHTML = "English";
        scaleTemp.innerHTML = "°F";
        scaleSpeed.innerHTML = "mph";
    }
}

function validateFields() {
    var windSpeed = document.getElementById("windspeed").value;
    var temperature = document.getElementById("temp").value;

    if (windSpeed == "" || windSpeed == null) {
        alert("Please enter both the temperature and wind speed to calculate the wind chill.");
        return false;
    }
    else if (temperature == "" || temperature == null) {
        alert("Please enter both the temperature and wind speed to calculate the wind chill.");
        return false;
    }
}

function calculateWindchill() {
    var checkbox = document.getElementById("scaleCheckbox");    
    var windSpeed = document.getElementById("windspeed").value;
    var temperature = document.getElementById("temp").value;

    // Metric calculation 
    if (!checkbox.checked) {
        windChill = 13.12 + 0.6215 * temperature - 11.37 * windSpeed**0.16 + 0.3965 * temperature * windSpeed**0.16;
        // Bonus requirement: Error upon wind chill >= actual temperature
        if (windChill >= temperature && (windSpeed != "" && temperature != "")) {
            alert("Calculation contains an internal error. Wind chill cannot be greater than actual temperature.");
            return false;
        }
        else {
            document.getElementById("result").innerHTML = "It will feel like " + Math.round(windChill) + "  °C";  
        }
    }
    // Imperial/English calculation
    else {
        windChill = 35.74 + 0.6215 * temperature - 35.75 * windSpeed**0.16 + 0.4275 * temperature * windSpeed**0.16;
        // Bonus requirement: Error upon wind chill >= actual temperature
        if (windChill >= temperature && (windSpeed != "" && temperature != "")) {
            alert("Calculation contains an internal error. Wind chill cannot be greater than actual temperature.");
            return false;
        }
        else {
            document.getElementById("result").innerHTML = "It will feel like " + Math.round(windChill) + "  °F";
        }
    }
}

