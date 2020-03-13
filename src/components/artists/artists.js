import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchArtists} from "../../store/actions/artistsActions";
import {ListGroup} from "reactstrap";
import ArtistsItem from "./artistsItem/artistsItem";

const Artists = () => {
  const state = useSelector(state => state.artists.artists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtists());
  }, [dispatch]);

  return state && (
    <div>
      <h1>Artists</h1>
      <ListGroup className='w-75 mx-auto  '>
        {state.map(artist => (
          <ArtistsItem
            key={artist._id}
            name={artist.name}
            photo={`http://localhost:8000/uploads/${artist.photo}`}
            path={`/${artist._id}?artist=${artist.name}`}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default Artists;