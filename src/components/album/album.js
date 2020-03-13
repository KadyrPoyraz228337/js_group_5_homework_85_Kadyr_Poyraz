import React from 'react';
import {NavLink} from "react-router-dom";
import {Badge, ListGroupItem} from "reactstrap";

const Album = (
  {cover, title, date, tracksTotal, path}
) => {
  return (
    <ListGroupItem tag={NavLink} to={path} action className='d-flex align-items-center'>
      <div className='img-thumbnail d-flex align-items-center justify-content-center mr-5 overflow-hidden'
           style={{height: '230px', width: '230px', background: '#000'}}>
        <img src={cover} alt="Artist" className='' style={{height: '230px'}}/>
      </div>
      <div>
        <h1 className='font-weight-bold'>{title}</h1>
        <div>
          <p className='text-muted'><span className='text-dark'>Date of release: </span>{date}</p>
          <p className='d-inline mr-2 text-dark'>Total tracks:</p><Badge pill>{tracksTotal}</Badge>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default Album;