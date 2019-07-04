// The only reason we named this root file of the "actions" folder "index.js" is so when we import it in another file, we can shorten it to ../actions instead of ../actyions/index
// Webpack is what accomplishes this (above comment)

// This is an action creator
// We pass in "song" which will be the song the user selected
// This named export lets us export many different functions from a single file (Just add the word "export" in front of the action creator)
// When you import a named export in another file you need to include it in curly brackets. If it's just a default export, you don't need the curly brackets
export const selectSong = song => {
  // return an action with the payload being the selected song that was passed in
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
