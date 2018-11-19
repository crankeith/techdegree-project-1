/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

let quotes = [
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
        source: "Mark Twain",
        tags: ["Writer", "Inspiration"]
    },
    {
        quote: "Get busy living or get busy dying.",
        source: "Stephen King",
        tags: ["Writer", "Fun"]
    },
    {
        quote: "I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.",
        source: "Abraham Lincoln",
        tags: ["Politician", "Inspiration"]
    },
    {
        quote: "It is our choices, that show what we truly are, far more than our abilities.",
        source: "J.K Rowling",
        tags: ["Writer", "Philosophical"]
    },
    {
        quote: "Do or do not. There is no try.",
        source: "Yoda",
        citation: "Star Wars: Episode V - The Empire Strikes Back",
        year: 1980,
        tags: ["Fictional", "Inspiration"]
    },
    {
        quote: "Welcome to the party, Pal!",
        source: "John Mclean",
        citation: "Die Hard",
        year: 1988,
        tags: ["Fictional", "Fun"]
    }
]

//Automatically change quote every 5 secs
let timer = setInterval(printQuote, 5000);

// Function that returns a random quote object from the 'quotes' array
function getRandomQuote(arr) {
    let randomNum = randomNumber(0, arr.length-1);
    return arr[randomNum];
}

// Function to print a random quote to the 'quote-box' div
function printQuote(){
    let quote = getRandomQuote(quotes);
    let html = '<p class="quote">';
    html += quote.quote + '</p>';
    html += '<p class="source">' + quote.source;

    //Check if quote has a citation and add if available
    if (quote.citation) {
        html += '<span class="citation">' + quote.citation + '</span>';
    }
    //Check if quote has a year and add if available
    if (quote.year) {
        html += '<span class="year">' + quote.year + '</span>';
    }
    //Check if quote has tags property and add if available
    if (quote.tags) {
        html += '<span class="tags">Categories: '
        for(let i = 0; i < quote.tags.length; i++){
            html += '<span class="tag">' + quote.tags[i] + '</span>'
        }
        html += '</span>'
    }

    html += '</p>';

    document.getElementById('quote-box').innerHTML = html;

    //Change the background color of body and button
    let newColor = randomDarkRgb();
    document.querySelector('body').style.backgroundColor = newColor;
    document.getElementById('loadQuote').style.backgroundColor = newColor;

    //Reset timer
    clearInterval(timer);
    timer = setInterval(printQuote, 5000);
}

//Generate a random darker RGB color
function randomDarkRgb(){
    let r = randomNumber(0, 150);
    let g = randomNumber(0, 150);
    let b = randomNumber(0, 150);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Generate a random number between two numbers
function randomNumber(lower, upper){
   return Math.floor((Math.random() * ((upper - lower) + 1) + lower));
}

// Add click listener to button

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
