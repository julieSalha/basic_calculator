// Functions
function addition(numberA, numberB) {
    return numberA + numberB;
}

function multiplication(numberA, numberB) {
    return numberA * numberB;
}

function substraction(numberA, numberB) {
    return numberA - numberB;
}

function division(numberA, numberB) {
    // Exception
    if (numberB == 0) {
        throw new Error('Forbidden to divide by zero !');
    } 

    return numberA / numberB;
}

// Variables
let choice, firstNumber, secondNumber, finalResult;

function calculator() {
    // Choice calcul mode

    do {
        choice = Number(prompt('What do you want to do ? \n\n 1 - Addition \n 2- Multiplication \n 3- Substraction \n 4- Division'));

    } while (choice != 1 && choice != 2 && choice != 3 && choice != 4);

    // Request two numbers for calcul

    do {
        firstNumber     = Number(prompt('Enter a first number'));
        
    } while (isNaN(firstNumber) || firstNumber == '');

    do {
        secondNumber    = Number(prompt('Enter a second number'));
        
    } while (isNaN(secondNumber) || secondNumber == '');


    // Call functions to use

    try {
        switch(choice) {

            case 1:
                finalResult = addition(firstNumber, secondNumber);
                break;
        
            case 2:
                finalResult = multiplication(firstNumber ,secondNumber);
                break;
        
            case 3:
                finalResult = substraction(firstNumber, secondNumber);
                break;
        
            case 4:
                finalResult = division(firstNumber, secondNumber);
                break;

            default:
                // Exception
                throw new Error('There is an error during calcul')
        }
        // Display result
        alert('Result is : ' + finalResult);
        
    } catch (error) {
        alert(error);
    }
}

calculator();

// Suggest redoing a calculation
let restart;

restart = confirm('Do you want to do a new calcul ? ');

if(restart) {
    calculator();
}