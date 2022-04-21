import React from 'react';
import { withRouter } from 'react-router-dom';
import './css/Footer.css';

const LogoButton = withRouter(({ history }) => (
  <a href="" onClick={() => { history.push('/') }}><h1 id="footerlogo">myPhotos</h1></a>
))

const HomeLink = withRouter(({ history }) => (
  <a href="" onClick={() => { history.push('/') }}><li>Home</li></a>
))

const PhotosLink = withRouter(({ history }) => (
  <a href="" onClick={() => { history.push('/photos') }}><li>All Photos</li></a>
))

const AlbumsLink = withRouter(({ history }) => (
  <a href="" onClick={() => { history.push('/albums') }}><li>Albums</li></a>
))

const AccountLink = withRouter(({ history }) => (
  <a href="" onClick={() => { history.push('/account') }}><li>Account</li></a>
))

function Footer() {
  return (
    <div id="footer">
      <footer>
          <LogoButton />
          <ul>
            <HomeLink />
            <PhotosLink />
            <AlbumsLink />
            <AccountLink />
          </ul>
      </footer>
    </div>
  );
}

export default Footer;

/**References:
 * https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
 */