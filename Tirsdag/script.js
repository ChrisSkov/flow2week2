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


var numbers = [1, 3, 5, 10, 11];

//var result = number.map();noget med at loope igennem og add?

var joinMe = "<nav>\n" + names.map(x => "<a href=\"\">" + x + "</a>").join('\n') + "\n</nav>";

console.log(joinMe);


var names = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];
var tables = "<table> \n <tr> \n <th>name</th> \n <th>phone</th> \n </tr> \n <tr>" 
+ names.map(x => "\n <td>" + x.name + "</td> \n <td>" + x.phone + "</td>")
.join('\n') + "\n</tr> \n</table>";

console.log(tables);