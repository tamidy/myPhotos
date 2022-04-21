import React, { useState } from 'react';
import './css/UploadImage.css';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState<FileList | null>(null);

    const submitFile = async () => {
      try {
        if (!file) {
          throw new Error('Select a file first!');
        }
        const formData = new FormData();
        formData.append('file', file[0]);
        await axios.post(`/test-upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // handle success
        (document.getElementById("uploadFeedback") as HTMLInputElement).innerHTML = "Success!";

      } catch (error) {

        // handle error
        (document.getElementById("uploadFeedback") as HTMLInputElement).innerHTML = "No file uploaded";
        
      }
    };
  

  return (
    <div id="uploadimage">
        <h2>Upload Image</h2>
        <p id="uploadFeedback"></p>
        <form onSubmit={submitFile}>
            <label>File Upload</label>
            <br />
            <input type="file" id="link" name="link" placeholder="Link" onChange={event => setFile(event.target.files)}/>
            <br />
            <br />
            
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

export default FileUpload;

/**References: 
 * https://medium.com/@fabianopb/upload-files-with-node-and-react-to-aws-s3-in-3-steps-fdaa8581f2bd
 * 
 */