import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


function getRandomWord() {
    console.log('getting word from server');
    // get random word for <Word /> in app
    // word will be used in <Haiku />
    axios({
        method: 'GET',
        url: '/word'
    }).then(response => {
        // expect object with up to 4 properties: 'word', 'results', 'syllables', 'pronunciation'
        // 'results' include definition and part of speech
        console.log('back from GET', response.data);
        this.props.dispatch({
            type: 'SET_WORD',
            payload: response.data,
        })
    }).catch(error => {
        console.log('error with GET word request', error);
    });

}
    

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(getRandomWord);
