# dx-slider

A customizable React slider component with smooth transitions and auto-play functionality. Best used for rendering smaller images into a carousel.

## Installation

Install the package using npm:

```bash
npm install dx-slider

import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'dx-slider';

const images = [
  'url-to-image1.jpg',
  'url-to-image2.jpg',
  'url-to-image3.jpg',
  // Add more images
];

const App = () => (
  <div>
    <h1>"Custom Slider"</h1>
    # pass in size props and an object of images
    <Slider images={images} width="600px" height="400px" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

Here is an example of the slider in action:

## Demo Video

https://www.youtube.com/watch?v=4RKd7zfDKe0


