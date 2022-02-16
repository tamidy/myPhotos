import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import Main from "./Main";
import Photos from "./Photos";
import Albums from "./Albums";
import AccountPage from "./Account";
import EditProfilePage from "./EditProfile";
import UploadPage from "./UploadImage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

const createRoutes = () => (
  <Router>
    <Route exact path="/" component={Main} />
    <Route exact path="/photos" component={Photos} />
    <Route exact path="/albums" component={Albums} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/signup" component={SignUpPage} />
    <Route exact path="/account" component={AccountPage} />
    <Route exact path="/editprofile" component={EditProfilePage} />
    <Route exact path="/upload" component={UploadPage} />
  </Router>
);

export default createRoutes;
