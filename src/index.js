import React from "react";
import ReactDOM from "react-dom";
// The Provider is what will communicate with the Redux store you created so the App React component can access the data from the combined reducers in that store. Then the App component can pass that data to the child components
// Provider is a component made by the react-redux library
import { Provider } from "react-redux";
// createStore can be used to take the code you wrote for the Redux Store (index.js in "reducers" folder) and actually create it
import { createStore } from "redux";

import App from "./components/App";
// This is the shorter way of importing the file specifically named "index.js" from the "reducers" folder. If you have other reducers then they have to be imported with another "import" statement
import reducers from "./reducers";

ReactDOM.render(
  // Here we enclose our App component in the Provider component so the App component can get access to the Redux Store
  // We give the Provider a "store" attribute which will use createStore (imported above) and actually make the Redux Store with the reducers you pass in (imported above but created by you in the "index.js" file in the "reducers" folder. That file has the multiple reducers and combines them using combineReducers so we can pass them all in with 1 variable)
  // Now that we have our Provider set up (it's at the top of the component hierarchy if you were drawing a chart) all other components can use the "Connect" component (Connect communicates with Provider also so child components can get data even if they are further down from the App class in the component hierarchy) to take the data the App component gets from the Redux Store (through the Provider) and use it
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
