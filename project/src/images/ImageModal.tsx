import React from "react";
import "./ImageModal.css";
import imageOne from './sampleimages/one.png';

export default class ImageModal extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
        console.log("Clicked");
    };

  render() {
    return (
      <div>
        <img className="small" src={imageOne} onClick={this.handleShowDialog} alt="no image" />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img className="image" src={imageOne} onClick={this.handleShowDialog} alt="no image" />
          </dialog>
        )}
      </div>
    );
  }
}
