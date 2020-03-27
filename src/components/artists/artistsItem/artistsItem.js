import React from 'react';
import {Button, ListGroupItem} from "reactstrap";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const ArtistsItem = (
  {name, photo, path, published, publish, id, deleteArtist}
) => {
  const user = useSelector(state => state.users.user);

  return (
    <ListGroupItem tag={NavLink} to={path} action className='d-flex align-items-center'>
      <div className='img-thumbnail d-flex align-items-center justify-content-center mr-5 overflow-hidden'
           style={{height: '230px', width: '230px', background: '#000'}}>
        <img src={photo} alt="Artist" className='' />
      </div>
      <div>
        <h1 className='font-weight-bold'>{`${name} ${!published ? '(not published)' : ''}`}</h1>
        <div className='d-flex'>
          {!published && user && user.role === 'admin' && <Button color='primary' onClick={() => publish(id)} style={{zIndex: '9999'}}>publish</Button>}
          {published && user && user.role === 'admin' && <Button color='danger' onClick={() => deleteArtist(id)}>delete</Button>}
        </div>
      </div>
    </ListGroupItem>
  );
};

export default ArtistsItem;