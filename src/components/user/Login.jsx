import { useDispatch, useSelector } from 'react-redux';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { userLogin } from '../../redux/users/users';
import Button from '../forms/Button/Button';
import './user.scss';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const error = user.error['login-error'];
  const navigate = useNavigate();
  const formRef = useRef();
  const [loading, setLoading] = useState(true);

  const state = loading ? 'loading' : 'default';
  let dynamicShowIcon = false;
  let dynamicShowText = true;

  if (state === 'loading') {
    dynamicShowIcon = true;
    dynamicShowText = !dynamicShowIcon;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userData = {
      user: { email: data.email, password: data.password },
    };

    // dispatch(userLogin(userData));
    try {
      await dispatch(userLogin(userData)); // Sending data to the API
      // Once the response is received successfully, loading is finished
      setLoading(false);
    } catch (error) {
      setLoading(false); // In case of an error, loading is still stopped
    }
  };

  useEffect(() => {
    if (user.loggedIn) {
      navigate('/');
    }
  }, [navigate, user.loggedIn]);

  // Password handling with eyes
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <section className="auth-section flex justify-center items-center h-full ">
      <div className="auth-left-section w-1/2 bg-white text-white flex justify-center items-center" />
      <div className="auth-form-section w-1/2 flex justify-center items-center flex-col gap-2">
        <h2 className="text-4xl font-bold -mt-16 mb-16">Login</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="auth-form flex flex-col justify-center items-center p-8"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="inputEmail appearance-none block bg-gray-200 text-gray-700 border text-center border-red-500 rounded p-3 mb-2 leading-tight focus:outline-none focus:bg-white"
          />

          <div
            className="divPassword appearance-none block text-gray-700 border text-center border-red-500 rounded leading-tight focus:outline-none focus:bg-white p-0 mb-2"
            style={{ background: '#EFF0F6' }}
          >
            <input
              name="password"
              type={passwordShown ? 'text' : 'password'}
              placeholder="Password"
              required
              className="inputPassword appearance-none block text-gray-700 text-center p-3 leading-tight focus:outline-none"
            />
            <div
              onClick={togglePassword}
              onKeyPress={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  togglePassword();
                }
              }}
              role="button"
              tabIndex={0}
            >
              {passwordShown ? <AiFillEyeInvisible size={24} style={{ background: 'transparent' }} /> : <AiFillEye size={24} style={{ background: 'transparent' }} />}
            </div>
          </div>

          <Button
            state={state}
            text="Login"
            showIcon={dynamicShowIcon}
            showText={dynamicShowText}
            size="medium" // medium | large | small | icon
            variant="primary" // 'primary' | 'secondary' | 'subtle' | text
          />
        </form>

        {user.error ? (
          <h3 className="text-red-500 text-lg error">{error}</h3>
        ) : (
          ''
        )}

        <div className="options-container">
          <span>Create an account:</span>
          <Link
            to="/signup"
            className="font-medium underline ml-2 "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
