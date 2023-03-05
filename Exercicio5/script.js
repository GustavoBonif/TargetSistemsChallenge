function myReverse(str) {
    let reversedString = "";
    for (let index = str.length - 1; index >= 0; index--) {
        reversedString += str[index];
    }

    return reversedString;
}

function invertString(str) {
    var stringSplit = str.split("");
    var reversedString = myReverse(stringSplit);
    return reversedString;
}

let text = "TargetSistemas";
document.querySelector("#text").innerHTML= "String: " + text;
document.querySelector("#result").innerHTML= "String invertida: " + invertString(text);