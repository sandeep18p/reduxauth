import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';
import './Login.css';

export default function Login({ setPage }) {
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.status === 'succeeded') {
      setPage('Profile');
    }
  }, [auth.status, setPage]);

  function handleSubmit() {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    dispatch(loginUser({ username, password }));
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-form">
        <label htmlFor="username">Username:</label>
        <input id="username" ref={usernameRef} />
        <label htmlFor="password">Password:</label>
        <input id="password" ref={passwordRef} type="password" />
        <button onClick={handleSubmit}>Submit</button>
        {auth.status === 'failed' && <div className="error">{auth.error}</div>}
      </div>
    </div>
  );
}
