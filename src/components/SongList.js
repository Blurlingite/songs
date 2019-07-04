// We also import the named export "Component" so when we extend in our songList component we can just say extends Component instead of React.Component, but either way is fine
import React, { Component } from "react";
// We will use connect to communicate with Provider and get the list of songs (since we are in SongList) from the Redux Store
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    return <div>Song List</div>;
  }
}

// take the state object (all the data from our Redux store) and run some computations on it thats going to cause that data to show up as "props" inside of our component
// Since we are taking the state from the Redux Store we pass it in as a param (before the =>)
// The state in this case is just the entire list of songs and the currently selected song from the Redux Store
// We will configure connect by passing in this mapStateToProps variable as the first argument
const mapStateToProps = state => {};

// connect uses 2 sets of parantheses here. This is b/c connect returns a function. If we wanted to just return the function we might say connect(). But to invoke that function that connect is returning we will use connect()()
// The kinds of things you can pass into the 1st and 2nd pair of parantheses are different:
// For the 1st:  You can pass in things that involve the Redux Store and it's data ("mapStateToProps" retrieves the state object (with all the data) from the Redux Store) Without "mapStateToProps" being passed in here, this component has no idea that the Redux Store exists and therefore can't get any data from it
// For the 2nd: You can pass in whatever will use the data you get from the Redux Store (our SongList component will use the list of songs in the state object obtained from the Redux Store)
export default connect(mapStateToProps)(SongList);
