import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import Word Page components
import Word from '../Word/Word';

class App extends Component {

  // problem: how to hide definition search process from user?
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


  render() {
   
    return (
      <div>
        <Word getRandomWord={this.getRandomWord}/>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(App);
