import React, {useEffect, useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import FormField from "../UI/formField/formField";
import {useDispatch, useSelector} from "react-redux";
import {fetchArtists} from "../../store/actions/artistsActions";
import {fetchArtist} from "../../store/actions/artistActions";
import {addTrack} from "../../store/actions/trackHistoryActions";
import {CSSTransition} from 'react-transition-group';

const AddTrackPage = props => {
  const initialState = {
    title: '',
    album: '',
    duration: '',
    videoId: ''
  };

  const [trackData, setTrackData] = useState(initialState);
  const [artist, setArtist] = useState({artist: ''});
  const artists = useSelector(state => state.artists.artists);
  const albums = useSelector(state => state.artist.albums);
  const dispatch = useDispatch();

  const inputChangeHandler = e => setTrackData({...trackData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();

    dispatch(addTrack(trackData));
    props.history.replace('/');
  };

  useEffect(() => {
    dispatch(fetchArtists())
  }, [dispatch]);

  useEffect(() => {
    if (artist.artist !== '') {
      dispatch(fetchArtist(artist.artist))
    }
  }, [artist, dispatch]);

  return artists && (
    <div className='pt-4'>
      <h1>Add new album</h1>
      <Form onSubmit={onSubmit}>
        <FormField
          type='text' required
          name='title'
          title='Title'
          value={trackData.title}
          onChange={inputChangeHandler}
          placeholder='Enter album title'
        />
        <FormGroup row>
          <Label for='artist' sm={2}>Artist</Label>
          <Col sm={10}>
            <Input
              value={artist.artist}
              type='select'
              onChange={e => setArtist({artist: e.target.value})}
              required
            >
              <option value=''>Enter artist...</option>
              {artists.map(artist => (
                <option value={artist._id} key={artist._id}>
                  {artist.name}
                </option>
              ))}
            </Input>
          </Col>
        </FormGroup>
        <CSSTransition
          in={!!(albums && artist.artist)}
          timeout={300}
          classNames={'albums'}
          mountOnEnter
          unmountOnExit
        >
          <FormGroup row>
            <Label for='albums' sm={2}>Albums</Label>
            <Col sm={10}>
              <Input
                value={trackData.artist}
                type='select'
                name='album'
                onChange={inputChangeHandler}
                required
              >
                <option value=''>Enter artist...</option>
                {albums ? albums.map(album => (
                  <option value={album._id} key={album._id}>
                    {album.title}
                  </option>
                )) : null}
              </Input>
            </Col>
          </FormGroup>
        </CSSTransition>

        <FormField
          value={trackData.duration}
          type='number' requiredtrack
          name='duration'
          title='Duration'
          onChange={inputChangeHandler}
          placeholder='enter track duration'
          className='w-25'
        />
        <FormField
          value={trackData.videoId}
          type='text'
          name='videoId'
          title='Id video from youtube (not necessary)'
          onChange={inputChangeHandler}
          placeholder='enter video id'
        />
        <Button type='submit'>Add artist</Button>
      </Form>
    </div>
  );
};

export default AddTrackPage;