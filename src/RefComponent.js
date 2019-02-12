import React from 'react';

export class RefComponent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  focusTextInput = (e) => {
    e.preventDefault();
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.textInput}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}


