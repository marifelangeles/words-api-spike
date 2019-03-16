require('dotenv').config();
// const axios = require('axios');
const unirest = require('unirest');

const express = require('express');
const router = express.Router();


// https://stackoverflow.com/questions/52561002/make-unirest-get-request-with-node-js-express
router.get('/', (req, res) => {
    console.log('in get /word');
    unirest.get("https://wordsapiv1.p.rapidapi.com/words/?random=true")
        .header("X-RapidAPI-Key", process.env.WORDS_API_KEY)
        .end((response) => {
            console.log('from words api:', response.body);            
            res.send(response.body);
        });
});





module.exports = router;