import React, {useState} from 'react';
import FormField from "../UI/formField/formField";
import {Alert, Button, Form} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../store/actions/userActions";
import FacebookLoginButton from "../FacebookLogin/FacebookLogin";

const Register = () => {
  const initialState = {
    username: '',
    password: '',
    displayName: '',
    avatarImage: null
  };
  const [userInfo, setUser] = useState(initialState);
  const error = useSelector(state => state.users.error);
  const dispatch = useDispatch();

  const inputChangeHandler = e => setUser({...userInfo, [e.target.name]: e.target.value});
  const fileChangeHandler = e => setUser({...userInfo, [e.target.name]: e.target.files[0]});

  const onSubmit = async e => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(userInfo).forEach(item => {
      data.append(item, userInfo[item])
    });

    await dispatch(fetchUser(data))
  };

  return (
    <div className='d-flex flex-column w-75 mx-auto my-4 border rounded bg-light p-5'>
      <Form onSubmit={onSubmit}>
        <FormField
          title='username'
          type='text'
          placeholder='enter username'
          name='username'
          value={userInfo.username}
          onChange={inputChangeHandler}
        />
        <FormField
          title='display name'
          type='text'
          placeholder='enter display name'
          name='displayName'
          value={userInfo.displayName}
          onChange={inputChangeHandler}
        />
        <FormField
          title='password'
          type='password'
          placeholder='enter password'
          name='password'
          value={userInfo.password}
          onChange={inputChangeHandler}
        />
        <FormField
          title='avatar'
          type='file'
          name='avatarImage'
          onChange={fileChangeHandler}
        />
        {error && <Alert color="danger">
          {error}
        </Alert>}
        <Button>Registration</Button>
      </Form>
      <FacebookLoginButton/>
    </div>
  );
};

export default Register;