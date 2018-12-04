let displayString = '';
let resultString = '';

let numbers = document.getElementsByClassName("numberInput");

for (let item of numbers) {
        item.addEventListener('click', (e) => {
            let value = e.srcElement.innerHTML;
            displayString += value;
            console.log(displayString)
            document.getElementById('display').innerHTML = displayString
    })    
};

let operators = document.getElementsByClassName("operatorInput");

for (let item of operators) {
        item.addEventListener('click', (e) => {
            let value = e.srcElement.innerHTML;
            console.log(displayString.slice(0))
            if (displayString.slice(-2).includes('+') || displayString.slice(-2).includes('-')
                || displayString.slice(-2).includes('*') || displayString.slice(-2).includes('/')) {
                let tempString = [...displayString]
                tempString.splice(-2,1, value)
                displayString = tempString.join('')
                document.getElementById('display').innerHTML = displayString
            } else {
            displayString += ' ' + value + ' ';
            document.getElementById('display').innerHTML = displayString
            console.log(displayString)
            }
    })    
}

document.getElementById('equals').addEventListener('click', (e) => {
   let result = eval(displayString);
   document.getElementById('result').innerHTML = result;
   resultString = result + ' '
   document.getElementById('display').innerHTML += ' = ' + result;
   displayString = result + ' ';
});

document.getElementById('clear').addEventListener('click', (e) => {
    window.location.reload();
});