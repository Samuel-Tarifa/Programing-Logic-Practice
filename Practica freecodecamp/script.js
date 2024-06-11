function romanConvert(number) {
  if (number < 1) return "Please enter a number greater than or equal to 1";
  if (number > 3999) return "Please enter a number less than or equal to 3999";
  const romanos = [
    { valor: 1000, numeral: "M" },
    { valor: 900, numeral: "CM" },
    { valor: 500, numeral: "D" },
    { valor: 400, numeral: "CD" },
    { valor: 100, numeral: "C" },
    { valor: 90, numeral: "XC" },
    { valor: 50, numeral: "L" },
    { valor: 40, numeral: "XL" },
    { valor: 10, numeral: "X" },
    { valor: 9, numeral: "IX" },
    { valor: 5, numeral: "V" },
    { valor: 4, numeral: "IV" },
    { valor: 1, numeral: "I" },
  ];
  let result = "";
  for (let i = 0; i < romanos.length; i++) {

    while (number >= romanos[i].valor) {
      result += romanos[i].numeral;
      number -= romanos[i].valor;
    }
  }

  return result;
}

console.log(romanConvert(24));
