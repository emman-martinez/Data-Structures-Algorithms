function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
    case "-":
      result = num1 - num2;
    case "*":
      result = num1 * num2;
    case "/":
      result = num1 / num2;
    default:
      throw new Error("Invalid operator");
  }
}

module.exports = calculator;
