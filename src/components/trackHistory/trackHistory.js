import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTracks} from "../../store/actions/trackHistoryActions";
import {ListGroup, ListGroupItem} from "reactstrap";
import dateFormat from 'dateformat';

const TrackHistory = () => {
  const tracks = useSelector(state => state.trackHistory.tracks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTracks())
  }, [dispatch]);

  return tracks && (
    <ListGroup className='mt-3'>
      {tracks.map(track => (
        <ListGroupItem key={track._id} className='d-flex align-items-center'>
          <p className='mr-3'>{track.track.title}</p>
          <p
            className='text-muted bg-light d-inline border rounded p-2'>{dateFormat(track.datetime, 'd-m-yyyy hh:MM:ss TT')}</p>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default TrackHistory;