import React from 'react';
import { withRouter } from 'react-router-dom';
import './Main.css';

import imageOne from './images/sampleimages/one.png';
import imageTwo from './images/sampleimages/two.jpg';
import imageThree from './images/sampleimages/three.jpg';
import imageFour from './images/sampleimages/four.jpg';
import imageFive from './images/sampleimages/five.jpg';
import imageSix from './images/sampleimages/six.jpeg';

const PhotosLink = withRouter(({ history }) => (
  <a href="" id="seeallphotos" onClick={() => { history.push('/photos') }}>See All</a>
))

const AlbumsLink = withRouter(({ history }) => (
  <a href="" id="seeallalbums" onClick={() => { history.push('/albums') }}>See All</a>
))

//<a href="" id="seeallphotos" onClick={redirectToPhotos}>See All</a>

function Main() {

  return (
    <div>
        <main>
            <h2>Photos</h2>
            <div id="photosdisplay">
              <img src= {imageOne} alt="" />
              <img src= {imageTwo} alt="" />
              <img src= {imageThree} alt="" />
              <img src= {imageFour} alt="" />
              <img src= {imageFive} alt="" />
              <img src= {imageSix} alt="" />
            </div>
            <PhotosLink />

            <h2>Albums</h2>
            <div id="albumsdisplay">
              <img src= {imageOne} alt="" />
              <img src= {imageTwo} alt="" />
              <img src= {imageThree} alt="" />
              <img src= {imageFour} alt="" />
              <img src= {imageFive} alt="" />
              <img src= {imageSix} alt="" />
            </div>
            <AlbumsLink />

        </main>
    </div>
  );
}

export default Main;

/**References:
 * https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
 */