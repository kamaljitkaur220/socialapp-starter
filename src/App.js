import React from "react";
import { Switch, Route } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import MessageFeed from "./pages/MessageFeed";
import ProfileUpdateForm from "./components/profileUpdateForm/ProfileUpdateForm";
import { Button } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/messagefeed" component={MessageFeed} />
        <Route exact path="/profileUpdate" component={ProfileUpdateForm} />
        <Route exact path="/profileimageUpload" component={Profileimage} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;