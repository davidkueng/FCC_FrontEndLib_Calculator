let displayString = '';
let resultString = '';

let numbers = document.getElementsByClassName("numberInput");

for (let num of numbers) {
        num.addEventListener('click', (e) => {
            let value = e.srcElement.innerHTML;
            if (displayString.includes('0') && displayString.length === 1 && value != '.' 
            || value ==='.' && displayString.includes('.') && !/[+,\-,*,\/]/.test(displayString)) {
                displayString = displayString
            } else {
                displayString += value;
            }
            document.getElementById('result').innerHTML = value
            document.getElementById('display').innerHTML = displayString
    })    
};

let operators = document.getElementsByClassName("operatorInput");

for (let op of operators) {
        op.addEventListener('click', (e) => {
            let value = e.srcElement.innerHTML;
            let singleInput = displayString.slice(-2);   
            if (/[+,\-,*,\/]/.test(singleInput)) {
                let tempArr = [...displayString]
                tempArr.splice(-2,1, value)
                displayString = tempArr.join('')
            } else {
            displayString += ' ' + value + ' ';
            }
            document.getElementById('result').innerHTML = value
            document.getElementById('display').innerHTML = displayString
    })    
};

document.getElementById('equals').addEventListener('click', (e) => {
   let result = eval(displayString);
   document.getElementById('result').innerHTML = result;
   document.getElementById('display').innerHTML = result;
   resultString = displayString = result + ' ';
});

document.getElementById('clear').addEventListener('click', (e) => {
    document.getElementById('display').innerHTML = 'calc';
    document.getElementById('result').innerHTML = 0;
    displayString = resultString = '';
});