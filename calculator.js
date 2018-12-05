let displayString = '';
let resultString = '';

let numbers = document.getElementsByClassName("numberInput");

for (let item of numbers) {
        item.addEventListener('click', (e) => {
            let value = e.srcElement.innerHTML;
            displayString += value;
            document.getElementById('result').innerHTML = value
            document.getElementById('display').innerHTML = displayString
    })    
};

let operators = document.getElementsByClassName("operatorInput");

for (let item of operators) {
        item.addEventListener('click', (e) => {
            let value = e.srcElement.innerHTML;
            let doubleOp = displayString.slice(-2);
            if (doubleOp.includes('+') || doubleOp.includes('-')
                || doubleOp.includes('*') || doubleOp.includes('/')) {
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

document.getElementById('AC').addEventListener('click', (e) => {
    window.location.reload();
});