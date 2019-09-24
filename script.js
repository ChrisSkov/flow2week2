var names = ["Mert", "Warløkke", "Bhalesh", "Arrax", "Chrillebob"];

var result = names.filter(name => name.includes("a"));

console.log(result);
var x = names.map(name => strReverse(name));
//var reverseMap = names.map(name.reverseString(names));
console.log(x);

function strReverse(str) {
    return str.split("").reverse().join("");
}
var all = ["Lars", "Peter", "Jan", "Bo"];
var y = all.join("*" + " " + ",");
console.log(y);
var numbers = [2, 3, 67, 33];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers.reduce(reducer));

var thisVariable = {
    prop: 42,
    thisFunc: function () {
        return this.prop + 10;
    },
};

console.log(thisVariable.thisFunc());
