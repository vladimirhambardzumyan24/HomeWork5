function parseFloat(number) {
    number = number.trim().toLowerCase().split("");
    let newStr = [];
    if (number[0] == "-") {
      var minus = number.shift();
    }
    for (let i = 0; i < number.length; i++) {
      if (number[0] != Number(number[0])) {
        return "Nan";
      }
      if (number[i] == Number(number[i]) && number[i] != " " || number[i]==".") {
        newStr.push(number[i]);
      } else {
        break;
      }
    }
    let isFirstZero = true;
    while (isFirstZero) {
      if (newStr[0] === "0") {
        newStr.shift();
      } else {
        isFirstZero = false;
      }
    }
    if (minus) {
      newStr.unshift(minus);
    }
    return newStr.join("");
  }
  console.log(parseFloat("-000070.05 k44.6g45h54"));