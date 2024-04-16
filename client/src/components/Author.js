import React from 'react';
import './Author.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Author({ author }) {
  return (
    <div className="author">
      <div className="left">
      <AccountCircleIcon style={{ fontSize: '2.5rem' }} />
      </div>
      <div className="right">
        <p className='thick'>{author.author_name}</p>
        <p>{author.email}</p>
      </div>
    </div>
  );
}

export default Author;