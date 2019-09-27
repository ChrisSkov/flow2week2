import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
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
