// This component will not be making any changes to the state, since we are just using it to display details of a song. Since it won't change the state, we will not be using action creators here (like "selectSong")
// Also since we aren't changing state, this will be a functional component instead of a class component
import React from "react";
// We can use connect in functional components too
// We use connect when we want to change data in the state or recieve data from it
import { connect } from "react-redux";

// we destructured "song" (the key containing the selected song) from the incoming props
const SongDetail = ({ song }) => {
  // When this component loads up for the 1st time there will be no song currently selected so if the song doesn't exist return a div telling the user to pick one instead
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  // From the incoming state, we want to access the "selectedSong" field which has the currently selected song. We assign it to a field called "song". We return this as a javascript object (and you will see it show up in the console in this format if you use console.log())
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
