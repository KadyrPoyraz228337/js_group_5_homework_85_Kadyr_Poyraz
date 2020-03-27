import React from 'react';
import {NavLink} from "react-router-dom";
import {Badge, Button, ListGroupItem} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {deleteAlbum, publishAlbum} from "../../store/actions/albumActions";

const Album = (
  {cover, title, date, tracksTotal, path, published, id}
) => {
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();
  return (
    <div className='border rounded p-2'>
      <ListGroupItem tag={NavLink} to={path} action className='d-flex align-items-center'>
        <div className='img-thumbnail d-flex align-items-center justify-content-center mr-5 overflow-hidden'
             style={{height: '230px', width: '230px', background: '#000'}}>
          <img src={cover} alt="Artist" className='' style={{height: '230px'}}/>
        </div>
        <div>
          <h1 className='font-weight-bold'>{title} {!published && <b>{'(not published)'}</b>}</h1>
          <div>
            <p className='text-muted'><span className='text-dark'>Date of release: </span>{date}</p>
            <p className='d-inline mr-2 text-dark'>Total tracks:</p><Badge pill>{tracksTotal ? tracksTotal : 0}</Badge>
          </div>
        </div>
      </ListGroupItem>
      <div className='d-flex m-1'>
        {!published && user && user.role === 'admin' && <Button color='primary' onClick={() => dispatch(publishAlbum(id))}>publish</Button>}
        {published && user &&  user.role === 'admin' && <Button color='danger' onClick={() => dispatch(deleteAlbum(id))}>delete</Button>}
      </div>
    </div>
  );
};

export default Album;