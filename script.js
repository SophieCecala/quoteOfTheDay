const quotes = [
    {
        name: 'Oscar Wild',
        quote: 'Be yourself; everyone else is already taken.'
    },
    {
        name: 'Albert Einstein',
        quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
    },
    {
        name: 'Mae West',
        quote: 'You only live once, but if you do it right, once is enough.'
    }
];

function getQuote() {

    const random_index = Math.floor(Math.random() * quotes.length);
    const random_quote = quotes[random_index];

    alert(`${random_quote.name}, ${random_quote.quote}`);
}

console.log(getQuote());