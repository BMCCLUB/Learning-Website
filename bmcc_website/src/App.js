import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import PageFooter from "./Components/PageFooter";
import LearnPage from "./Components/LearnPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Redirect to="/" />
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <LandingPage />} />
          <Route
            exact
            path="/learn"
            component={() => <LearnPage />}
          />
          <Route
            exact
            path="/about"
            component={() => {/* <AboutPage /> */}}
          />
        </Switch>
      </Router>
      <PageFooter />
    </div>
  );
};

export default App;
