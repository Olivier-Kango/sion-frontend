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

  const state = 'default'; // default, loading, disabled
  const text = 'Login';
  const showText = true;
  const showIcon = false;
  const size = 'medium'; // medium | large | small | icon
  const variant = 'primary'; // 'primary' | 'secondary' | 'subtle' | text

  let dynamicState = '';

  if (state === 'disabled') {
    dynamicState = 'disabled';
  } else if (state === 'loading') {
    dynamicState = 'loading';
  }

  let dynamicSize = '';

  if (size === 'large') {
    dynamicSize = 'largeSize';
  } else if (size === 'icon') {
    dynamicSize = 'iconSize';
  } else if (size === 'small') {
    dynamicSize = 'smallSize';
  }

  const dynamicVariant = variant;
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive(true);
  //   // Add your other click logic here
  // };

  // const handleBlur = () => {
  //   setIsActive(false);
  // };

  if (state === 'loading') {
    // const showIcon = true;
    // const showText = !showIcon;
  }

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
          <button
            type="submit"
            className={`group relative flex w-1/3 justify-center mt-3 rounded-md py-2 px-3 text-xl font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 button ${dynamicState} ${dynamicSize} ${dynamicVariant} ${showIcon ? 'disableInteractions' : ''}`}
            disabled={state === 'disabled' || state === 'loading'}
            // onClick={handleClick}
            // onBlur={handleBlur}
          >
            {showIcon && (
              (
                (variant === 'secondary' || variant === 'subtle') && size !== 'icon'
              )
                || (
                  variant === 'text' && size === 'icon'
                )
            ) && (
              // <Image
              //   src={icon}
              //   alt="Button Icon"
              //   width={size === 'small' ? 16 : 24}
              //   height={size === 'small' ? 16 : 24}
              //   className={styles.icon}
              // />
              <svg
                width={size === 'small' ? 16 : 24}
                height={size === 'small' ? 16 : 24}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path
                  d="M9.99967 1.66658C8.3515 1.66658 6.74033 2.15533 5.36992 3.071C3.99951 3.98668 2.93141 5.28817 2.30068 6.81089C1.66995 8.33361 1.50492 10.0092 1.82646 11.6257C2.14801 13.2422 2.94168 14.727 4.10712 15.8925C5.27255 17.0579 6.75741 17.8516 8.37392 18.1731C9.99043 18.4947 11.666 18.3296 13.1887 17.6989C14.7114 17.0682 16.0129 16.0001 16.9286 14.6297C17.8443 13.2593 18.333 11.6481 18.333 9.99992"
                  stroke="#FCFCFC"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {showIcon && (
              (
                (variant === 'secondary' || variant === 'subtle') && size !== 'icon'
              )
                || (variant === 'text' && size === 'icon')
            ) && (
              // <Image
              //   src="/LoadingG.svg"
              //   alt="Button Icon"
              //   width={24}
              //   height={24}
              //   className={styles.iconG}
              // />
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="iconG"
              >
                <path d="M9.99967 1.66658C8.3515 1.66658 6.74033 2.15533 5.36992 3.071C3.99951 3.98668 2.93141 5.28817 2.30068 6.81089C1.66995 8.33361 1.50492 10.0092 1.82646 11.6257C2.14801 13.2422 2.94168 14.727 4.10712 15.8925C5.27255 17.0579 6.75741 17.8516 8.37392 18.1731C9.99043 18.4947 11.666 18.3296 13.1887 17.6989C14.7114 17.0682 16.0129 16.0001 16.9286 14.6297C17.8443 13.2593 18.333 11.6481 18.333 9.99992" stroke="#60C1C6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {showIcon
              && (variant === 'text' && size !== 'icon') && (
                <span>Loading</span>
            )}
            {!showText && size === 'icon' && state !== 'loading' && (
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="iconForward">
                <path d="M1 1L7.96317 7.96317L1 14.9263" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {showText && size !== 'icon' && text}
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
