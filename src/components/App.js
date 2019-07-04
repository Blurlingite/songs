import React from "react";
import SongList from "./SongList";

const App = () => {
  return (
    // These classNames come from semantic.min.css file from the index.html file. (There is no need to connect index.html file to React components b/c React uses the ReactDOM. The ReactDOM then gets translated into the regular DOM (dictated by index.html))
    // These classnames are part of the Grid system of semantic ui (not the CSS Grid system)
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default App;
