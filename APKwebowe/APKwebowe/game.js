const readline = require('readline'); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
}); 
 
// Generowanie losowej liczby z zakresu 1-100 
const randomNumber = Math.floor(Math.random() * 100) + 1; 
let attempts = 0; 
 
function guessNum() { 
  rl.question('Odgadnij liczbę z zakresu od 1 do 100): ', (input) => { 
    const guessedNum = parseInt(input); 
 
    if (isNaN(guessedNum)) { 
      console.log('To nie jest liczba. Spróbuj jeszcze raz.'); 
    } else { 
      attempts++; 
 
      if (guessedNum === randomNumber) { 
        console.log(`Gratulacje! Odgadłeś liczbę ${randomNum} w ${attempts} próbach.`); 
        rl.close(); 
      } else if (guessedNum < randomNumber) { 
        console.log('Za mało! Spróbuj ponownie.'); 
        guessNum(); 
      } else { 
        console.log('Za dużo! Spróbuj ponownie.'); 
        guessNum(); 
      } 
    } 
  }); 
} 
 
console.log('Witaj w grze zgadywania liczby!'); 
guessNum(); 