import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';


class App extends Component {

  // problem: how to hide definition search process from user
  componentDidMount() {
    this.getRandomWord();
  }

  getRandomWord = () => {
    console.log('getting word from server');
    // get random word for <Word /> in app
    // word will be used in <Haiku />
    axios({
      method: 'GET',
      url: '/word'
    }).then( response => {
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


  getDefinition = () => {
    const wordResults = this.props.word.results;
    // get random word only if definition exists --> definition needed for MVP
    // if so, return first definition 
    if (wordResults) {
      console.log('wordResults', wordResults);
      const definition = wordResults[0].definition;
      return definition;
    } else {
      this.getRandomWord();
    }
  }

  getPartOfSpeech = () => {
    const wordResults = this.props.word.results;
    // part of speech not necessary for MVP
    if (wordResults) {
      if (wordResults[0].partOfSpeech) {
        return wordResults[0].partOfSpeech;
      }
    }
  }
  
  
  render() {
   
    return (
      <div >
        {JSON.stringify(this.props.word)}
        
        <p>Write a haiku with the word</p>
        <p>Word: {this.props.word.word}</p>
        <p>Part of Speech: {this.getPartOfSpeech()}</p>
        <p>Definition: {this.getDefinition()}</p>
        <p>Pronunciation: {this.getPronunciation()} {JSON.stringify(this.props.word.pronunciation)}</p>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(App);
