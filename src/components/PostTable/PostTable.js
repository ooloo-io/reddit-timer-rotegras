import React from 'react';
import PropTypes from 'prop-types';


export default function PostTable() {
  return (
    <div>
      Posts
    </div>
  );
}


PostTable.propTypes = {
  posts: PropTypes.object.isRequired,
};
