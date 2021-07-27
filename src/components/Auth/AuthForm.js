import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-context';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    let url = process.env.REACT_APP_FIREBASE_URL;

    console.log(url);

    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyADMGPMBPboW27k_2P6JTAFH4fuf2XcSt0';
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      setIsLoading(false);

      if (res.ok) {
        res.json().then((data) => {
          authCtx.login(data.idToken);
          history.replace('/');
        });
      } else {
        res
          .json()
          .then((data) => {
            let errorMessage = 'Authentication Failed';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
    });
  };

  return (
      <section className={classes.auth}>
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <form onSubmit={onSubmitHandler}>
              <div className={classes.control}>
                  <label htmlFor="email">Your Email
                      <input type="email" id="email" ref={emailInputRef} required />
                  </label>
              </div>
              <div className={classes.control}>
                  <label htmlFor="password">Your Password
                      <input
                        type="password"
                        id="password"
                        ref={passwordInputRef}
                        required
                      />
                  </label>
              </div>
              <div className={classes.actions}>
                  {!isLoading && (
                  <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
                  {isLoading && <p>Loading...</p>}
                  {!isLoading && (
                  <button
                    type="button"
                    className={classes.toggle}
                    onClick={switchAuthModeHandler}
                  >
                      {isLogin ? 'Create new account' : 'Login with existing account'}
                  </button>
          )}
              </div>
          </form>
      </section>
  );
};

export default AuthForm;
