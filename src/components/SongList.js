// We also import the named export "Component" so when we extend in our songList component we can just say extends Component instead of React.Component, but either way is fine
import React, { Component } from "react";
// We will use connect to communicate with Provider and get the list of songs (since we are in SongList) from the Redux Store
import { connect } from "react-redux";
// short hand to get action from index.js in "actions" folder is just ../actions
import { selectSong } from "../actions";

class SongList extends Component {
  // a helper method to loop through (or map over) the list of songs and format them into JSX and return that JSX
  renderList() {
    // The 1st "return" returnd the JSX
    // The 2nd "return" returns the format of the JSX. Without this you'll get an error
    return this.props.songs.map(song => {
      return (
        // These classNames are taken from the semantic ui css file you linked in your index.html file
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              // We want to run the selectSong function(action creator)  when the button us clicked so it will select the song so we use an arrow function and assign it to the onClick handler
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// take the state object (all the data from our Redux store) and run some computations on it thats going to cause that data to show up as "props" inside of our component
// Since we are taking the state from the Redux Store we pass it in as a param (before the =>)
// The state in this case is just the entire list of songs and the currently selected song from the Redux Store. Since this component only needs the list of songs we will create a field called "songs" and pull the list from the state object with "state.songs" Now the list of songs will be available as props to this component. So if we say "this.props" the "props" will be "songs: state.songs", or the list of songs
// We will configure connect by passing in this mapStateToProps variable as the first argument
// When we click the button that we attached an onClick handler to (the one involving selecting a song), mapStateToProps will re-run and be passed in a new state object (updated with the song that was selected). That is b/c we passed in "state" here so when the state is changed, mapStateToProps will re-run.
// You can console.log(state) here to see what the state is at any given time. So if we click the button we should get a new message in the console of what song was selected
const mapStateToProps = state => {
  return { songs: state.songs };
};

// connect uses 2 sets of parantheses here. This is b/c connect returns a function. If we wanted to just return the function we might say connect(). But to invoke that function that connect is returning we will use connect()()
// The kinds of things you can pass into the 1st and 2nd pair of parantheses are different:
// For the 1st:  You can pass in things that involve the Redux Store and it's data ("mapStateToProps" retrieves the state object (with all the data) from the Redux Store) Without "mapStateToProps" being passed in here, this component has no idea that the Redux Store exists and therefore can't get any data from it
// For the 2nd: You can pass in whatever will use the data you get from the Redux Store (our SongList component will use the list of songs in the state object obtained from the Redux Store)
// We pass in selectSong action (as an object) and we used ES2015 syntax since we want the field to be the same name as the action. Instead of doing this: {selectSong: selectSong} we just do this {selectSong}. Now that we passed in our action, connect will pass that action into this component as a prop. You can check if it's there by console.log(this.props) in the render(). When we call selectSong (the action creator), the action that gets returned will send it to Redux's dispatch function
// Redux can't recognize actions without thse use of a dispatch() call, Connect will automatically call dispatch() when we pass in the action creator(s), in this case we passed in "selectSong" so connect will call store.dispatch(selectSong) and we can communicate with the Redux store and pas in the action selectSong (or whatever that action is returning)
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
