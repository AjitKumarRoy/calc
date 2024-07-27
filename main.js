let calculation = '';

		function appendToCalculation(value) {
			calculation += value;
			updateLogger();
			console.log(calculation);
		}

		function evaluateCalculation() {
			if (calculation !== '') {
				calculation = eval(calculation).toString();
			}

			updateLogger();
			console.log(calculation);
		}

		function clearCalculation() {
			calculation = '';
			updateLogger();
			console.log(calculation);
		}

		function updateLogger() {
			document.getElementById('logger').innerHTML = calculation;
		}



		document.addEventListener('keydown', function(event) {
            const key = event.key;
            if ((key >= '0' && key <= '9') || key === '.') {
                appendToCalculation(key);
            } else if (key === '+' || key === '-' || key === '*' || key === '/') {
                appendToCalculation(' ' + key + ' ');
            } else if (key === 'Enter') {
                evaluateCalculation();
            } else if (key === 'Backspace') {
                calculation = calculation.slice(0, -1);
                updateLogger();
            } else if (key === 'Escape') {
                clearCalculation();
            }
        });