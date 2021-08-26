import React from 'react';

import imageOne from './images/sampleimages/one.png';
import imageTwo from './images/sampleimages/two.jpg';
import imageThree from './images/sampleimages/three.jpg';
import imageFour from './images/sampleimages/four.jpg';
import imageFive from './images/sampleimages/five.jpg';
import imageSix from './images/sampleimages/six.jpeg';

function Albums() {
  return (
    <div>
        <main>
            <h2>Albums</h2>
            <div id="albumsdisplay">
              <img src= {imageOne} alt="" />
              <img src= {imageTwo} alt="" />
              <img src= {imageThree} alt="" />
              <img src= {imageFour} alt="" />
              <img src= {imageFive} alt="" />
              <img src= {imageSix} alt="" />
            </div>
        </main>
    </div>
  );
}

export default Albums;