import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import { Provider, connect} from 'react-redux'
import { createStore }from 'redux'
import manageCounter from './reducers/manageCounter.js'

const store = createStore(manageCounter)
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Counter />
//       </div>
//     );
//   }
// }

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'INCREASE_COUNT'}),
    decrement: () => dispatch({type: 'DECREASE_COUNT'})
  }
}

const Counter = connect(mapStateToProps, mapDispatchToProps)(class extends Component {

  renderDescription = () => {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.count + upToNext}`;
  };

  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.props.decrement}> - </button>
        <button onClick={this.props.increment}> + </button>
        <h3>{this.renderDescription()}</h3>
      </div>
    );
  }
}
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}




//takes in reducer

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
