import { useDispatch, useSelector } from 'react-redux';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { userLogin } from '../../redux/users/users';
import './user.scss';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const error = user.error['login-error'];
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userData = {
      user: { email: data.email, password: data.password },
    };
    dispatch(userLogin(userData));
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
            className="appearance-none block bg-gray-200 text-gray-700 border text-center border-red-500 rounded p-3 mb-2 leading-tight focus:outline-none focus:bg-white"
          />

          <div
            className="appearance-none block text-gray-700 border text-center border-red-500 rounded p-3 mb-2 leading-tight focus:outline-none focus:bg-white"
            style={{ background: '#EFF0F6' }}
          >
            <input
              name="password"
              type={passwordShown ? 'text' : 'password'}
              placeholder="Password"
              required
              className="appearance-none block text-gray-700 text-center p-3 mb-2 leading-tight focus:outline-none"
              style={{ background: '#EFF0F6' }}
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
          <button
            type="submit"
            className="group relative flex w-1/3 justify-center mt-3 rounded-md py-2 px-3 text-xl font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
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
