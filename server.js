const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const quotes = require('./Quotes.json')
console.log(quotes.length)
let quotesLength = quotes.length
let randomQuoteIndex;
app.get('/', (req, res)=> {
    randomQuoteIndex = (Math.random()*quotesLength)|0; 
    res.send(quotes[randomQuoteIndex]);
    res.send('Hello, world!');
})
app.listen(8080, ()=>{
    console.log('Server started at https:/local host:8080');
})
