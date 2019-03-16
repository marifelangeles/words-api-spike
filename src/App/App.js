import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import {Grid, Button} from '@material-ui/core';
// import Word Page components
import Header from '../Word/Header';


class App extends Component {

  // problem: how to hide definition search process from user?
  
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
  
  getPronunciation = () => {
    const pronunciation = this.props.word.pronunciation;
    if (pronunciation) {
      return pronunciation.all;
    }
  }

  handleNewWord = () => {
    console.log('in handleNewWord');
    this.getRandomWord();
  }
  
  render() {
   
    return (
      <div>
        <Grid container spacing={8}>
          <Grid container>
            <Header />
          </Grid>
          <Grid container>
            <Grid item sm={12}>
              <h1>{this.props.word.word}</h1>
            </Grid>
          </Grid>
          <Grid container spacing={16}>
            <Grid item sm={6}>
              <p>{this.getPartOfSpeech()}</p>
            </Grid>
            <Grid item sm={6}>
              <p>{this.getPronunciation()}</p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sm={12}>
              <p>{this.getDefinition()}</p>
            </Grid>
          </Grid>
          <Grid>
            <Grid item sm={12}>
              <Button 
                onClick={this.handleNewWord}
                color="primary"
              >
                New Word
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(App);
