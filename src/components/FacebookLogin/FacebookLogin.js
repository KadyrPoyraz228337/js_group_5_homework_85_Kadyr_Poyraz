import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {useDispatch} from "react-redux";
import {facebookLogin} from "../../store/actions/userActions";

const FacebookLoginButton = () => {
  const dispatch = useDispatch();

  return (
    <>
    <FacebookLogin
      appId="2801087116627448"
      fields='name,picture'
      callback={e => {
        if(e.id) {
          console.log(e);
          dispatch(facebookLogin(e))
        }
      }}
      render={renderProps => (
        <a onClick={renderProps.onClick} className='fb-link d-inline-block'>Login in facebook</a>
      )}
    />
    </>
  )
}

export default FacebookLoginButton;