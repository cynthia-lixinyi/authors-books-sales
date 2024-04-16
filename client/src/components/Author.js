import React from 'react';
import './Author.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Author({ author }) {
  return (
    <div className="author">
      <div className="left">
        <AccountCircleIcon />
      </div>
      <div className="right">
        <p>{author.author_name}</p>
        <p>Email: {author.email}</p>
      </div>
    </div>
  );
}

export default Author;