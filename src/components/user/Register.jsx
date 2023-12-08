import { useDispatch, useSelector } from 'react-redux';
import { useRef, useEffect, useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { userSignup } from '../../redux/users/users';

const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const error = user.error['signup-error'];
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userData = {
      user: {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      },
    };
    if (data.password === data.password_confirmation) {
      dispatch(userSignup(userData));
    } else {
      document.querySelector('.error').innerText = 'Passwords do not match';
    }
  };

  // Password handling with eyes
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShownConfirm, setPasswordShownConfirm] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const togglePasswordConfirm = () => {
    setPasswordShownConfirm(!passwordShownConfirm);
  };

  useEffect(() => {
    if (user.loggedIn) {
      navigate('/');
    }
  }, [navigate, user.loggedIn]);

  return (
    <section className="auth-section flex justify-center items-center h-full ">
      <div className="auth-left-section w-1/2 bg-white text-white flex justify-center items-center" />
      <div className="auth-form-section w-1/2 flex justify-center items-center flex-col gap-2">
        <h2 className="text-4xl font-bold -mt-2 mb-16">Register</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          action="post"
          className="auth-form flex flex-col justify-center items-center p-8"
        >

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="inputEmail appearance-none block bg-gray-200 text-gray-700 border text-center border-red-500 rounded p-3 mb-2 leading-tight focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="inputEmail appearance-none block bg-gray-200 text-gray-700 border text-center border-red-500 rounded p-3 mb-2 leading-tight focus:outline-none"
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

          <div
            className="divPassword appearance-none block text-gray-700 border text-center border-red-500 rounded leading-tight focus:outline-none focus:bg-white p-0 mb-2"
            style={{ background: '#EFF0F6' }}
          >
            <input
              name="password_confirmation"
              type={passwordShownConfirm ? 'text' : 'password'}
              placeholder="Confirm Password"
              required
              className="inputPassword appearance-none block text-gray-700 text-center p-3 leading-tight focus:outline-none"
            />
            <div
              onClick={togglePasswordConfirm}
              onKeyPress={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  togglePasswordConfirm();
                }
              }}
              role="button"
              tabIndex={0}
            >
              {passwordShownConfirm ? <AiFillEyeInvisible size={24} style={{ background: 'transparent' }} /> : <AiFillEye size={24} style={{ background: 'transparent' }} />}
            </div>
          </div>

          <button
            type="submit"
            className="group relative flex w-1/3 justify-center mt-3 rounded-md py-2 px-3 text-xl font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </form>

        <h3 className="text-red-500 text-lg mx-auto error">{error}</h3>

        <div className="options-container">
          <span>Already have an account?</span>
          <Link
            to="/login"
            className="font-medium underline ml-2"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
