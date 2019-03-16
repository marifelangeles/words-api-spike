import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';


class App extends Component {

  componentDidMount() {
    this.getRandomWord();
  }

  getRandomWord = () => {
    console.log('getting word from server');
    axios({
      method: 'GET',
      url: '/word'
    }).then( response => {
      console.log('back from GET', response.data);
      this.props.dispatch({
        type: 'SET_WORD',
        payload: response.data,
      })
    }).catch(error => {
      console.log('error with GET word request', error);
    });
  }

  // getDefinition = () => {
  //   const results = this.props.word.results;
  //   const definition = results.find(item => results.definition);
  //   console.log(definition);

  // }

  getDefinition = () => {
    const wordResults = this.props.word.results;

    // find random word with definition only
    if (wordResults) {
      console.log('wordResults', wordResults);
      const definition = wordResults[0].definition;
      return definition;
    } else {
      this.getRandomWord();
    }
  }
  
  render() {
    
    // const results = this.props.word.results;
    // const definition = results[0].definition;
    // console.log('hello', results);
    // // console.log('definition', definition);
    // console.log('type', typeof results);
    
    
    

    return (
      <div >
        {JSON.stringify(this.props.word)}
        
        <p>Write a haiku with the word</p>
        <p>Word {JSON.stringify(this.props.word.word)}</p>
        <p>Definition {this.getDefinition()}{/*JSON.stringify(this.props.word.results)*/}</p>
        <p>Pronunciation {JSON.stringify(this.props.word.pronunciation)}</p>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(App);
