import React, { Component } from 'react';

const App = () => <Counter></Counter>;

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  plus = () => {
    // stateを変更するときは、setStateを必ず使用する
    // setStateを呼ぶとrender()が呼び出される
    this.setState({ count: this.state.count + 1 });
  }

  minus = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.plus}>+1</button>
        <button onClick={this.minus}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;