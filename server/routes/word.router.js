require('dotenv').config();
// const axios = require('axios');
const unirest = require('unirest');

const express = require('express');
const router = express.Router();

// router.get('/word', (req, res) => {
//     axios({
//         method: 'GET',
//         url: "https://wordsapiv1.p.rapidapi.com/words/?random=true",
//         params: {
//             key: process.env.WORDS_API_KEY,
//         }
//     }).then( response => {
//         console.log('response', response.data);
//         res.sendStatus(200);
//     }).catch( error => {
//         console.log('error with getting WORDS API', error);
//     });
// });

unirest.get("https://wordsapiv1.p.rapidapi.com/words/?random=true")
    .header("X-RapidAPI-Key", process.env.WORDS_API_KEY)
    .end(function (result) {
        console.log('result.status', result.status);
        console.log('result.headers', result.headers);
        console.log('result.body', result.body);
        
        
    });



module.exports = router;