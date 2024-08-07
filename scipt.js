

function convert(){
    const textbox = document.getElementById("textBox");
    const toFaranhite = document.getElementById("toFaranhite");
    const toCelcius = document.getElementById("toCelcius");
    const result = document.getElementById("result");
    const resulting = document.getElementById("resulting");
    let temp;
    let converter;

    if(toFaranhite.checked){
        result.textContent = `Select a Faranhite!`
        temp = textbox.value;
        converter = ((temp * 1.8) + 32);
        resulting.textContent =`Temperature is ${converter}°F`;


    }
    else if(toCelcius.checked){
        result.textContent = `Select a Celcius!`
        temp = textbox.value;
        converter =  (1/9*((temp-32)*5));
        resulting.textContent =`Temperature is ${converter}°C`;

    }
    else{
        result.textContent = `Select a unit pleace!`
    }
}

