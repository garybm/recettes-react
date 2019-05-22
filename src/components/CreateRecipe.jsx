import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../store/actions/recipeActions'

class CreateRecipe extends Component {
  state = {
    title: '',
    content: '',
    description: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createRecipe(this.state);
  }
  render() {
    return (
      <div className="container">
        <style jsx>{`
          button {
            background-color: #95a00d;
            color: white;
            border: none;
            border-radius: 25px;
            width: 254px;
            height: 50px;
            cursor: pointer;
          }
          input[type=text]:not(.browser-default):focus:not([readonly]),
          input[type=email]:not(.browser-default):focus:not([readonly]),
          input[type=password]:not(.browser-default):focus:not([readonly]),
          textarea.materialize-textarea:focus:not([readonly]){
            border-color: #95a00d;
            box-shadow: none;
          }
          input[type=text]:not(.browser-default):focus:not([readonly]) + label,
          textarea.materialize-textarea:focus:not([readonly]) + label,
          input[type=email]:not(.browser-default):focus:not([readonly]) + label,
          input[type=password]:not(.browser-default):focus:not([readonly]) + label{
            color: #95a00d !important;
          }
          `}</style>
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add New Recipe</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Recipe Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Ingredient</label>
          </div>
          <div className="input-field">
            <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="description">Description</label>
          </div>
          <div className="input-field">
            <button class="button">ADD</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRecipe: (recipe) => dispatch(createRecipe(recipe))
  }
}

export default connect(null, mapDispatchToProps)(CreateRecipe)
