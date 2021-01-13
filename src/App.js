import React from "react";
import "../src/styles/App.css";
import Auth from "./Components/Auth";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage";
function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/homepage">
            <Homepage></Homepage>
          </Route>
          <Route exact path="/">
            <Auth></Auth>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
