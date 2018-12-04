// if a button is pressed -> push number from value into a display array (innerHTML from id with whitespace)

// if clear is pressed -> delete all values in display array

// if equals is pressed -> do the math of array and push result with calculation into array (reduce?)

// make sure to keep the whole calculations in array with the result.

// make sure that if there are several operators (+-*/) only the only the last one counts


let displayArray = [];

let buttonsId = document.getElementsByClassName("validInput");

for (let item of buttonsId) {
        item.addEventListener('click', (e) => {
        let value = e.srcElement.innerHTML;
        displayArray.push(value);
        console.log(displayArray)
        document.getElementById('display').innerHTML = displayArray
    })
    
};

document.getElementById('equals').addEventListener('click', (e) => {
   document.getElementById('display').innerHTML = eval(displayArray.join(' '));
})




// let testArray = ['20', '+', '6', '*', '+', '10'];


// console.log(eval(testArray.join(' ')))

// console.log(20+6*+10)

// PROBLEM: if multiple operators are entered, only use last one (maybe add classes and exception in buttons for of loop)


