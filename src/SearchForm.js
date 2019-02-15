import React, {Component} from 'react'

export default class SearchForm extends Component{
  state={
    formValid: false,
    errorMessage: 'Yub nub! Please enter a character name'
  }
  validateForm(input){
    let errorMessage = '';
    let formValid = false;
    if(input.length === 0){
      formValid = false;
      errorMessage= 'Yub nub! Please enter a character name'
    } else{
      errorMessage = '';
      formValid = true;
    }
    this.setState({formValid, errorMessage})
  }

  render(){

    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          if(this.state.formValid){
          this.props.sendSearchRequest(this.props.searchTerm)}}}>
          <label>Enter character name 
            <input onChange={(e) => {
              this.props.updateSearchTerm(e.target.value);
              this.validateForm(e.target.value)
              }}>
            </input>
          </label>
          <button type="submit">Search</button>
        </form>
        <div>
          <p style={{color:"purple"}}>{this.state.errorMessage}</p>
        </div>
      </div>
    )
  }
}