var names = ["Mert", "Warløkke", "Bhalesh", "Arrax", "Chrillebob"];

var result = names.filter(name => name.includes("a"));

console.log(result);
//var x = names.map(name => name.name
var reverseMap = names.reverse();
console.log(reverseMap);

function reverseString(str) {
    return str.split("").reverse().join("");
}
