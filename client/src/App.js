import React from "react";
import FrontPage from "./components/frontPage";
import MainContent from "./components/mainContent";
import Login from "./components/login";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route exact path="/home">
          <MainContent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
