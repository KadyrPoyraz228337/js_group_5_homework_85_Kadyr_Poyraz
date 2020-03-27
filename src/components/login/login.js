import React, {useState} from 'react';
import FormField from "../UI/formField/formField";
import {Alert, Button, Form} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchLoginUser} from "../../store/actions/userActions";

const Login = () => {
  const initialState = {
    username: '',
    password: ''
  };
  const [userInfo, setUser] = useState(initialState);
  const error = useSelector(state => state.users.error);
  const dispatch = useDispatch();
  const inputChangeHandler = e => setUser({...userInfo, [e.target.name]: e.target.value});
  const onSubmit = async e => {
    e.preventDefault();
    await dispatch(fetchLoginUser(userInfo))
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
          title='password'
          type='password'
          placeholder='enter password'
          name='password'
          value={userInfo.password}
          onChange={inputChangeHandler}
        />
        {error && <Alert color="danger">
          {error}
        </Alert>}
        <Button>Registration</Button>
      </Form>
    </div>
  );
};

export default Login;