import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

/*const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

const jokeInput = document.getElementById("jokeInput");
const outputJoke = document.getElementById("jokeOutput");

jokeInput.oninput = getJokeByID;

function getJokeByID()
{
    outputJoke.innerText = jokes.getJokeById(jokeInput.value);
}


const addJokeInput = document.getElementById("addJokeInput");
document.getElementById("addJokeButton").addEventListener("click", addJokeFromInput);

function addJokeFromInput()
{
    let addJoke = addJokeInput.value;
    jokes.addJoke(addJoke);
};
*/
var quoteButton = document.getElementById("hourQuoteButton").addEventListener("click", getQuote());
var quoteOutput = document.getElementById("hourlyQuote");



function getQuote()
{
    const promise1 = fetch('https://studypoints.info/jokes/api/jokes/period/hour');
    const promise2 = promise1.then(function(response){
        return response.json();
    })
    promise2.then(function(data){
        quoteOutput.innerHTML = data.joke;
    })
}

//code below can 100% be done more efficiently. just to stupid to figure it out
var north = document.getElementById("north");
var south = document.getElementById("south");
var east = document.getElementById("east");
var west = document.getElementById("west");

north.addEventListener("click", function(){
    alert("North");
})
south.addEventListener("click", function(){
    alert("South");
})
east.addEventListener("click", function(){
    alert("East");
})
west.addEventListener("click", function(){
    alert("West");
})
