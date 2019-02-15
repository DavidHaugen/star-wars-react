import React, { Component } from 'react';
import ResulstList from './ResultsList'
import SearchForm from './SearchForm'
import './App.css';

class App extends Component {
  state = {
    searchTerm: '',
    searchResults: [],
    errorMessage: ''
  }

  updateSearchTerm = (input) => {
    this.setState({searchTerm: input})
  }

  sendSearchRequest = (searchTerm) => {
    fetch(`https://swapi.co/api/people/?search=${searchTerm}`)
      .then(res =>{ 
        if(!res.ok) {
          throw new Error('These aren\'t the droids you\'re looking for. Sorry about the error. There must be a mynock causing problems somewhere...')
        }  
        return res.json()
      })
      .then (data => {
        if(data.results.length === 0){
          this.setState({searchResults: [{name: 'What a desolate place this is. No results found.'}]})
        } else {
        this.setState({searchResults: data.results})}})
      .catch(err => this.setState({errorMessage: err.message}))
      
  }

  render() {
    return (
      <div className="App">
        <h1>
          STAR WARS SEARCH
        </h1>
       <SearchForm updateSearchTerm= {this.updateSearchTerm} sendSearchRequest={this.sendSearchRequest} searchTerm={this.state.searchTerm} />
       <button onClick={()=> this.setState({searchResults: []})}>Clear</button>
        <ResulstList results={this.state.searchResults} />
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}

export default App;