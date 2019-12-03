import React from 'react';
import './SnowFlake.css';

const SnowFlake = () => {
  return (
    <div className='snowflakes' aria-hidden='true'>
      <div className='snowflake'>❅</div>
      <div className='snowflake'>❆</div>
      <div className='snowflake'>❅</div>
      <div className='snowflake'>❆</div>
      <div className='snowflake'>❅</div>
      <div className='snowflake'>❆</div>
      <div className='snowflake'>❅</div>
      <div className='snowflake'>❆</div>
    </div>
  );
};

export default SnowFlake;
