import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from "react-redux";
import { createStore, combineReducers } from "redux";


// Action Creators - You don't need to change these
const increment = () => ({ type: 'increment' });
const decrement = () => ({ type: 'decrement' });


const mapStateToProps = state => {
  return { count: state.count };
};

// Only change code *before* me!
// -----------

const store = createStore(combineReducers({
  count: (count = 0, action) => {
    if (action.type === 'increment') {
      return count + 1;
    } else if (action.type === 'decrement') {
      return count - 1;
    } else {
      return count;
    }
  }
}));

const App = ({ count, increment, decrement }) => {
  return (
    <div>
      <button
        onClick={ increment }
        className="increment"
      >
        Increment
      </button>

      <button
        onClick={ decrement }
        className="decrement"
      >
        Decrement
      </button>

  Current Count: <span>{ count }</span>
    </div>
  );
};

const WrappedApp = connect(mapStateToProps, { increment, decrement })(App);


ReactDOM.render(<Provider store={ store }>
  <WrappedApp />
</Provider>,
  document.getElementById('root')
);
