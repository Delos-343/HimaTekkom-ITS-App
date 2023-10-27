document.addEventListener("DOMContentLoaded", function() {
    const screen = document.querySelector(".screen-calculator");
    let currentInput = "";
    let runningTotal = null;  // Use null to indicate it's not set
    let operator = "";
    let shouldReset = false;

    document.querySelector(".body-calculator").addEventListener("click", function(event) {
        const value = event.target.textContent;
        const classList = event.target.classList;

        if (classList.contains("button")) {
            if (value >= '0' && value <= '9' || value === '.') {
                if (shouldReset) {
                    currentInput = "";
                    shouldReset = false;
                }
                currentInput += value;
            } else {
                switch (value) {
                    case "DEL":
                        currentInput = currentInput.slice(0, -1);
                        break;
                    case "reset":
                        currentInput = "";
                        runningTotal = null;
                        operator = "";
                        break;
                    case "+":
                    case "-":
                    case "x":
                    case "/":
                        if (runningTotal !== null && currentInput && operator) {
                            compute();
                            screen.textContent = runningTotal;
                            currentInput = runningTotal;
                        }
                        operator = value;
                        if (runningTotal === null) {
                            runningTotal = currentInput;
                        }
                        shouldReset = true;
                        break;
                    case "=":
                        compute();
                        screen.textContent = runningTotal;
                        runningTotal = null;
                        operator = "";
                        shouldReset = true;
                        break;
                }
            }
            screen.textContent = currentInput;
        }
    });

    function compute() {
        if (runningTotal === null || !operator || !currentInput) {
            return;
        }

        const a = parseFloat(runningTotal);
        const b = parseFloat(currentInput);
        let result;

        console.log(operator, '<<<< operator');
        switch (operator) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "x":
                result = a * b;
                break;
            case "/":
                if (b === 0) {
                    result = "Error";
                } else {
                    result = a / b;
                }
                break;
        }

        runningTotal = result.toString();
        currentInput = runningTotal;
    }
});


