import React from 'react';

class Input extends React.Component {
  render() {
    const { label, type, maxlength } = this.props;
    return (
      <label>
        {label}
        <input type={type} maxlength={maxlength}></input>
      </label>
    );
  }
}

export default Input;
