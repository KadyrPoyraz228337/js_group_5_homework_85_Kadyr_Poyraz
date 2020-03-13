import React from 'react';
import {ListGroupItem} from "reactstrap";
import {NavLink} from "react-router-dom";

const ArtistsItem = (
  {name, photo, path}
) => {
  return (
    <ListGroupItem tag={NavLink} to={path} action className='d-flex align-items-center'>
      <div className='img-thumbnail d-flex align-items-center justify-content-center mr-5 overflow-hidden'
           style={{height: '230px', width: '230px', background: '#000'}}>
        <img src={photo} alt="Artist" className='' />
      </div>
      <h1 className='font-weight-bold'>{name}</h1>
    </ListGroupItem>
  );
};

export default ArtistsItem;