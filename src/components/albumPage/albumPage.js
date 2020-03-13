import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAlbum} from "../../store/actions/albumActions";
import {Badge, ListGroup, ListGroupItem} from "reactstrap";
import {useLocation, useParams} from "react-router";

const AlbumPage = () => {
  const state = useSelector(state => state.album);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchAlbum(params.id))
  }, [dispatch, params.id]);
  const query = new URLSearchParams(useLocation().search);
  return state.tracks && (
    <div>
      <h1>{query.get('artist')}</h1>
      <h1>{query.get('album')}</h1>
      <div>
        <ListGroup>
          {state.tracks.map(track => {
            return (
              <ListGroupItem action className='d-flex align-items-center' key={track._id}>
                <h5 className='m-0 mr-3 border rounded bg-light p-2'>{track.trackNumber}</h5>
                <h3 className='m-0 mr-5'>{track.title}</h3>
                <p className='m-0 mr-1 text-dark'>duration:</p>
                <Badge pill>{track.duration} minutes</Badge>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default AlbumPage;