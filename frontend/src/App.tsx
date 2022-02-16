import React from 'react';
import './App.css';
import ScrollToTop from './ScrollToTop';

//Pages 
import Header from './Header';
import Main from './Main';
import Photos from './Photos';
import Albums from './Albums';
import AccountPage from './Account';
import EditProfilePage from './EditProfile';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import UploadPage from './UploadImage';
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/*Links 
<Link to="/">Main</Link>
<Link to="/photos">Photos</Link>
<Link to="/albums">Albums</Link>
<Link to="/account">Account</Link>
<Link to="/upload">Upload</Link>
*/

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollToTop />

        <div>
          {/*Switch looks through its children Routes and renders the first one that matches the current URL.*/}
          <Switch>
            <Route path="/upload" component={UploadPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/editprofile" component={EditProfilePage} />
            <Route path="/albums" component={Albums} />
            <Route path="/photos" component={Photos} />
            <Route path="/" component={Main} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

/**References:
 * https://reactrouter.com/web/guides/quick-start
 * https://medium.com/swlh/aws-cdk-and-typescript-deploy-a-static-react-app-to-s3-df74193e9e3d
 */