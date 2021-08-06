import React from 'react';
import './UploadImage.css';

/*
var express = require('express');
//var router = express.Router();

let images = [
    {link:"", title:"", location:"", date:"", description:""},
    {}
];
*/

function UploadPage() {
  return (
    <div id="uploadimage">
        <h2>Upload Image</h2>
        <form action="">
            <label>Link</label>
            <input type="text" id="link" name="link" placeholder="Link"/>

            <label>Title</label>
            <input type="text" id="title" name="title" placeholder="Title"/>

            <label>Location</label>
            <input type="text" id="location" name="location" placeholder="Location"/>

            <label>Date</label>
            <input type="text" id="date" name="date" placeholder="Date"/>

            <label>Description</label>
            <input type="text" id="desc" name="desc" placeholder="Description"/>

            <input type="submit" value="Submit" />
        </form>
    </div>
  );
}

export default UploadPage;
