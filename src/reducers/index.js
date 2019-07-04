// THIS FILE IS THE REDUX STORE where all the reducers are combined (using combineReducers)

// When importing an outside library, check the documentation for that library and see if you need to include curly braces. If it's a named export, you need them but if it's a default export then you don't
import { combineReducers } from "redux";

// returns an array of songs
// Putting an array of songs in a reducer is overkill but this is just to get experience using redux
const songsReducer = () => {
  // each song has a title and duration
  return [
    { title: "Mirror Haus", duration: "3:56" },
    { title: "The Arena", duration: "3:52" },
    { title: "Shadows", duration: "3:43" },
    { title: "Christmas C'mon", duration: "3:50" }
  ];
};

// we default selectedSong to null so when our application starts up, there is no selected song yet
// We pass in a selected param called "action" (We will pass in an action like SONG_SELECTED)
const selectedSongReducer = (selectedSong = null, action) => {
  // If SONG_SELECTED is passed in, return the payload from that action which will be the selected song as seen in selectSong in index.js in "actions" folder
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  // otherwise return the selectedSong (which will be null the first time)
  return selectedSong;
};

// combineReducers will combine your reducers and let other files have access to the combined reducers. We label the fields as "songs" and "selectedSong" and we pass in the reducers by name as "songsReducer" (returns the list of songs) and "selectedSongReducer" (returns the song that was selected)
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
