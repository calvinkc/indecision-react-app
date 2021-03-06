import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    document.getElementById("input").value = "";
    this.setState(() => ({ error }));
    if (!error) {
      document.getElementById("input").value = "";
  //  e.target.elements.option.value = '';
    }
  };
  render() { 
    return (
      <div>
        { this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}> 
          <input className="add-option__input" type="text" name="option" id="input"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}