import React from "react";
import { connect } from "react-redux";
import { createStore, combineReducers } from "redux";


function App() {
  return (
    <div>
      <button className="increment">Increment</button>
      <button className="decrement">Decrement</button>
               Current Count: <span>0</span>
    </div>
  );
}

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

export default connect(mapStateToProps, { increment, decrement })(App);
