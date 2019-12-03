import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className='input'>
        <form action=''>
          <label htmlFor='wishLabel' className='visually-hidden'>
            Enter your holiday wish!
          </label>
          <input
            onChange={this.props.whenChange}
            type='text'
            placeholder='Enter your holiday wish!'
            value={this.props.userValue}
            id='wishLabel'
            className='input__field'
          />
          <button onClick={this.props.userClick} className='input__button'>
            Send your wish
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
