require('dotenv').config();
const axios = require('axios');

const express = require('express');
const router = express.Router();

router.get('/word', (req, res) => {
    axios({
        method: 'GET',
        url: "https://wordsapiv1.p.rapidapi.com/words/?random=true",
        params: {
            key: process.env.WORDS_API_KEY,
        }
    }).then( response => {
        console.log('response', response.data);
        res.sendStatus(200);
    }).catch( error => {
        console.log('error with getting WORDS API', error);
    });
})

module.exports = router;