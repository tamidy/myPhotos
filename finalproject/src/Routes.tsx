import React from 'react';

import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";

//Pages 
import Main from './Main';
import Photos from './Photos';
import Albums from './Albums';
import AccountPage from './Account';
import UploadPage from './UploadImage';

const createRoutes = () => (
    <Router>
      <Route exact path="/" component={Main}/>
      <Route exact path="/photos" component={Photos}/>
      <Route exact path="/albums" component={Albums}/>
      <Route exact path="/account" component={AccountPage}/>
      <Route exact path="/upload" component={UploadPage}/>
    </Router>
);

export default createRoutes;