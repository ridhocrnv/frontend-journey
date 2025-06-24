const layar = document.getElementById("layar");
const tombol = document.querySelectorAll(".button");

let currentInput = "";

tombol.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "C") {
            currentInput = "";
            layar.textContent = "0";
        } else if (button.textContent === "=") {
            try {
                layar.textContent = eval(currentInput);
            } catch (error) {
                layar.textContent = "Error";
            }
        } else {
            currentInput += button.textContent;
            layar.textContent = currentInput;
        }
    });
});

clear.forEach(button => {
    button.addEventListener("click", () => {
        currentInput = "";
        layar.textContent = "0";
    });
});