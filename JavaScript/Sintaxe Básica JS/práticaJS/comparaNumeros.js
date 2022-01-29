function numeros(num1, num2) {
  if (num1 && num2 < 0){return "Defina Valores Válidos!"}
  const soma = num1 + num2;
  const menor10 = soma < 10;
  const menor20 = soma < 20;

  if (num1 != num2 && menor10 && menor20){
    return `Os números ${num1} e ${num2} não são iguais. A soma desses números é ${soma} que é menor que 10 e menor que 20.`
  } else if (num1 != num2 && !menor10 && !menor20){
      return `Os números ${num1} e ${num2} não são iguais. A soma desses números é ${soma} que é maior que 10 e maior que 20.`
  } else if (num1 != num2 && !menor10 && menor20){
      return `Os números ${num1} e ${num2} não são iguais. A soma desses números é ${soma} que é maior que 10 e menor que 20.`  
  } else if (num1 === num2 && menor10 && menor20){
      return `Os números ${num1} e ${num2} são iguais. A soma desses números é ${soma} que é menor que 10 e menor que 20.`
  } else if (num1 === num2 && !menor10 && !menor20){
      return `Os números ${num1} e ${num2} são iguais. A soma desses números é ${soma} que é maior que 10 e maior que 20.`
  } else if (num1 === num2 && !menor10 && menor20){
      return `Os números ${num1} e ${num2} são iguais. A soma desses números é ${soma} que é maior que 10 e menor que 20.`
  }
}

console.log(numeros(2, 7));