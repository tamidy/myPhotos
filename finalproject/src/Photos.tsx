import React from 'react';

import imageOne from './images/sampleimages/one.png';
import imageTwo from './images/sampleimages/two.jpg';
import imageThree from './images/sampleimages/three.jpg';
import imageFour from './images/sampleimages/four.jpg';
import imageFive from './images/sampleimages/five.jpg';
import imageSix from './images/sampleimages/six.jpeg';

function Photos() {
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
        </main>
    </div>
  );
}

export default Photos;