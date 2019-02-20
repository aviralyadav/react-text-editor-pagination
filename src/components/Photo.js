import React from "react";
import { Link } from "react-router-dom";
// import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function Photo(props) {
  const { imageLink, description, id } = props.post;
  // console.log(props.comments, props)
  return (
    <figure className="figure">
      <Link to={`/single/${id}`}>
        <img src={imageLink} alt={description} className="photo" />
      </Link>
      <figcaption>
        <p>{description}</p>
      </figcaption>
      <div className="button-container">
        <button
          className="remove-button"
          onClick={() => {
            props.removePhoto(props.index);
            props.history.push("/");
          }}
        >
          Remove
        </button>
        {/* <Button color="danger" onClick={() => {
            props.removePhoto(props.index);
            props.history.push("/");
          }}>Remove</Button> */}
        <Link className="button" to={`/single/${id}`}>
          <div className="comment-count">
            <div className="speech-bubble"></div>
            {props.comments[props.post.id] ? props.comments[props.post.id].length : 0}
          </div>
        </Link>
      </div>
      
    </figure>
  );
}

export default Photo;
