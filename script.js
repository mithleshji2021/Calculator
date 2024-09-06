let display = document.getElementById("display");

function appendCharacter(char) {
    display.value += char;
    
}

display.addEventListener("keydown",function(event){
    event.preventDefault();
})

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        const history = display.value
        
        
        display.value = `${eval(display.value)} 
        ${history}`
        
        

    } catch (error) {
        display.vlue = "Error";
    }
}