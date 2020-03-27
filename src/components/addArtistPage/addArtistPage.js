import React, {useState} from 'react';
import {Button, Form} from "reactstrap";
import FormField from "../UI/formField/formField";
import {useDispatch} from "react-redux";
import {addArtist} from "../../store/actions/artistsActions";

const AddArtistPage = () => {
  const initialState = {
    name: '',
    information: '',
    photo: null
  };

  const [artistData, setArtistData] = useState(initialState);
  const dispatch = useDispatch();

  const inputChangeHandler = e => setArtistData({...artistData, [e.target.name]: e.target.value});
  const fileChangeHandler = e => setArtistData({...artistData, [e.target.name]: e.target.files[0]});

  const onSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(artistData).forEach(item => data.append(item, artistData[item]));

    dispatch(addArtist(data));
  };

  return (
    <div className='pt-4'>
      <h1>Add new artist</h1>
      <Form onSubmit={onSubmit}>
        <FormField
          type='text' required
          name='name'
          title='Name'
          value={artistData.name}
          onChange={inputChangeHandler}
          placeholder='Enter artist name'
        />
        <FormField
          type='textarea' required
          name='information'
          title='Information'
          value={artistData.information}
          onChange={inputChangeHandler}
          placeholder='Enter artist description'
        />
        <FormField
          type='file' required
          name='photo'
          title='Photo'
          onChange={fileChangeHandler}
        />
        <Button type='submit'>Add artist</Button>
      </Form>
    </div>
  );
};

export default AddArtistPage;