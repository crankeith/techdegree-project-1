/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

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

// Function that returns a random quote object from the 'quotes' array
function getRandomQuote(arr) {
    let randomNum = Math.floor(Math.random() * arr.length);
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

    if (quote.tags) {
        html += '<span class="tags">Categories: '
        for(let i = 0; i < quote.tags.length; i++){
            html += '<span class="tag">' + quote.tags[i] + '</span>'
        }
        html += '</span>'
    }

    html += '</p>';

    document.getElementById('quote-box').innerHTML = html;
}

// Add click listener to button

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

