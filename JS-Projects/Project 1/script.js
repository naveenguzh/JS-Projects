
const randomno = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;


const no = document.getElementById("input");
const btn = document.getElementById("btn");
const h3 = document.getElementById("h3");


btn.onclick = function () {
    const input = parseInt(no.value, 10); 
    
    if (isNaN(input) || input < 1 || input > 100) {
        h3.textContent = "Please enter a valid number between 1 and 100.";
        h3.style.color = "orange";
        return;
    }

    
    attempts++;

    
    if (input === randomno) {
        h3.textContent = "🎉 Congratulations! You guessed it right!";
        h3.style.color = "green";
        btn.disabled = true; 
        no.disabled = true; 
    } else if (attempts >= maxAttempts) {
        h3.textContent = `😢 Game Over! The correct number was ${randomno}.`;
        h3.style.color = "red";
        btn.disabled = true; 
        no.disabled = true; 
    } else if (input > randomno) {
        h3.textContent = `Too high! You have ${maxAttempts - attempts} attempts left.`;
        h3.style.color = "red";
    } else {
        h3.textContent = `Too low! You have ${maxAttempts - attempts} attempts left.`;
        h3.style.color = "red";
    }

    
    no.value = "";
};
