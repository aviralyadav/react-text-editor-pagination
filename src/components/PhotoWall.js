import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import Photo from "./Photo";

function PhotoWall(props) {
  // console.log(props)
  return (
    <div>
      <Link to="/AddPhoto" className="addIcon"></Link>
      <div className="photoGrid">
        {props.posts.sort((x,y)=> y.id - x.id).map((post,i) => (
          <Photo
            key={post.id}
            post={post}
            removePhoto={props.removePhoto}
            index={i}
            history={props.history}
            comments={props.comments}
          />
        ))}
      </div>
    </div>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  // onRemovePhoto: PropTypes.func.isRequired
};

export default PhotoWall;
