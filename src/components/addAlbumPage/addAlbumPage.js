import React, {useEffect, useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import FormField from "../UI/formField/formField";
import {useDispatch, useSelector} from "react-redux";
import {fetchArtists} from "../../store/actions/artistsActions";
import {addAlbum} from "../../store/actions/albumActions";

const AddAlbumPage = () => {
  const initialState = {
    title: '',
    artist: '',
    dateOfRelease: '',
    coverImage: null
  };

  const [albumData, setAlbumData] = useState(initialState);
  const artists = useSelector(state => state.artists.artists);
  const dispatch = useDispatch();

  const inputChangeHandler = e => setAlbumData({...albumData, [e.target.name]: e.target.value});
  const fileChangeHandler = e => setAlbumData({...albumData, [e.target.name]: e.target.files[0]});

  const onSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(albumData).forEach(item => data.append(item, albumData[item]));

    dispatch(addAlbum(data));
  };

  useEffect(() => {
    dispatch(fetchArtists())
  }, [dispatch]);

  return artists && (
    <div className='pt-4'>
      <h1>Add new album</h1>
      <Form onSubmit={onSubmit}>
        <FormField
          type='text' required
          name='title'
          title='Title'
          value={albumData.title}
          onChange={inputChangeHandler}
          placeholder='Enter album title'
        />
        <FormGroup row>
          <Label for='artist' sm={2}>Artist</Label>
          <Col sm={10}>
            <Input
              value={albumData.artist}
              type='select'
              name='artist'
              onChange={inputChangeHandler}
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
        <FormField
          value={albumData.dateOfRelease}
          type='date' required
          name='dateOfRelease'
          title='Date of release'
          onChange={inputChangeHandler}
        />
        <FormField
          type='file' required
          name='coverImage'
          title='COver image'
          onChange={fileChangeHandler}
        />
        <Button type='submit'>Add artist</Button>
      </Form>
    </div>
  );
};

export default AddAlbumPage;