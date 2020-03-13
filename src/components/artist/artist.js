import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchArtist} from "../../store/actions/artistActions";
import {useLocation, useParams} from "react-router";
import {ListGroup} from "reactstrap";
import Album from "../album/album";

const Artist = () => {
  const state = useSelector(state => state.artist);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchArtist(params.id));
  }, [dispatch, params.id]);
  const query = new URLSearchParams(useLocation().search);
  return state.albums && (
    <div>
      <h1>{query.get('artist')}</h1>
      <div>
        <ListGroup>
          {state.albums.map(album => {
            return (
              <Album
                key={album._id}
                title={album.title}
                path={`/albums/${album._id}?artist=${query.get('artist')}&album=${album.title}`}
                cover={`http://localhost:8000/uploads/${album.coverImage}`}
                date={album.dateOfRelease}
                tracksTotal={album.totalTracks}
              />
            )
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default Artist;