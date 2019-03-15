import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    this.getWord();
  }

  getWord = () => {
    console.log('getting word from server');
    axios.get({
      method: 'GET',
      url: '/word'
    }).then( response => {
      console.log('back from GET', response.data);
      
    })
  }

  render() {
    return (
      <div >
        <p>Write a haiku with the word</p>
        <p>intuitive</p>
        <p>adjective</p>
        <p>definition</p>
      </div>
    );
  }
}

export default App;
