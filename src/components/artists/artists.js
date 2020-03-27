import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {artistPublish, deleteArtist, fetchArtists} from "../../store/actions/artistsActions";
import {ListGroup} from "reactstrap";
import ArtistsItem from "./artistsItem/artistsItem";

const Artists = () => {
  const state = useSelector(state => state.artists.artists);
  const dispatch = useDispatch();

  const publish = (id) => {
    dispatch(artistPublish(id));
    dispatch(fetchArtists());
  };

  const deleteArt = (id) => {
    dispatch(deleteArtist(id))
  };

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
            id={artist._id}
            name={artist.name}
            published={artist.published}
            photo={`http://localhost:8000/uploads/${artist.photo}`}
            path={`/${artist._id}?artist=${artist.name}`}
            publish={publish}
            deleteArtist={deleteArt}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default Artists;