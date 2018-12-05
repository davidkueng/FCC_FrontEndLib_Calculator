let displayString = '';
let resultString = '';

let numbers = document.getElementsByClassName("numberInput");

for (let item of numbers) {
        item.addEventListener('click', (e) => {
            let value = e.srcElement.innerHTML;
            let singleInput = displayString.slice(-1)
            if (singleInput.includes('0') && displayString.length === 1 && value != '.') {
                let tempArr = [...displayString]
                tempArr.splice(-1,1, value)
                displayString = tempArr.join('')
            } else if (value ==='.' && displayString.includes('.')) {                
                displayString = displayString
            } else {
                displayString += value;
            }
            document.getElementById('result').innerHTML = value
            document.getElementById('display').innerHTML = displayString
    })    
};

let operators = document.getElementsByClassName("operatorInput");

for (let item of operators) {
        item.addEventListener('click', (e) => {
            let value = e.srcElement.innerHTML;
            let singleInput = displayString.slice(-2);
            if (singleInput.includes('+') || singleInput.includes('-')
                || singleInput.includes('*') || singleInput.includes('/')) {
                let tempArr = [...displayString]
                tempArr.splice(-2,1, value)
                displayString = tempArr.join('')
            } else {
            displayString += ' ' + value + ' ';
            }
            document.getElementById('display').innerHTML = displayString
    })    
};

document.getElementById('equals').addEventListener('click', (e) => {
   let result = eval(displayString);
   document.getElementById('result').innerHTML = result;
   resultString = result + ' '
   document.getElementById('display').innerHTML += ' = ' + result;
   displayString = result + ' ';
});

document.getElementById('clear').addEventListener('click', (e) => {
    document.getElementById('display').innerHTML = 0;
    displayString = '';
    document.getElementById('result').innerHTML = 0;
    resultString = ''
});


// Tests not passing:
// ===============
// - decimal can only be entered once
// - operations with decimal point
// - several operators entered -> only last counts
// - pressing = shows result and you can perform new calculation
