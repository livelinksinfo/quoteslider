const quotes = [{
        name: "Stephen King",
        quote: "Get busy living or get busy dying"
    },
    {
        name: "Prophet Muhammad",
        quote: "Surely for Allah are ninety - nine names "
    },
    {
        name: 'Leonardo Da Vinci',
        quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them.They went out and happened to things'
    },
    {
        name: 'Leo Talstoy',
        quote: 'If you want to be happy, be!'
    },
    {
        name: 'John Kennedy',
        quote: 'Those who dare to fail miserably, can achieve greatly'
    },
    {
        name: 'Abraham Lincoln',
        quote: `I'm a success today because I had a friend who believed in me and I don't have the heart to let him down`
    }
]
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');


quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}