function fibonacci(n){
    let tot = n + 1, a = 0, b = 1, c = n;
    
    //exception
    if (n == 0) {
        return "O número percente a sequência de fibonacci";
    }

    for(i = 2; i <= tot; i++) {
      c = a + b;
      a = b;
      b = c;

      if (c == n) {
        return "O número percente a sequência de fibonacci";
      }
    }
    
    return "O número NÃO percente a sequência de fibonacci";
  };

let number = 8;
document.querySelector("#number").innerHTML= "O número é: " + number;
document.querySelector("#result").innerHTML= fibonacci(number);