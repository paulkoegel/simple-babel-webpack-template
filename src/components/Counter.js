import React from 'react';

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  add() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return(
      <div>
        <h1>Counter</h1>
        <button onClick={ this.add.bind(this) }>
         +
        </button>
        <p>Count:
          { this.state.count }
        </p>
      </div>
    );
  }
}
