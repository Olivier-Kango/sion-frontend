import { useDispatch, useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
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
            className="appearance-none block bg-gray-200 text-gray-700 border text-center border-red-500 rounded p-3 mb-2 leading-tight focus:outline-none focus:bg-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="appearance-none block bg-gray-200 text-gray-700 border text-center border-red-500 rounded p-3 mb-2 leading-tight focus:outline-none focus:bg-white"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="appearance-none block bg-gray-200 text-gray-700 border text-center border-red-500 rounded p-3 mb-2 leading-tight focus:outline-none focus:bg-white"
          />

          <input
            name="password_confirmation"
            type="password"
            placeholder="Confirm Password"
            required
            className="appearance-none block bg-gray-200 text-gray-700 border text-center border-red-500 rounded p-3 mb-2 leading-tight focus:outline-none focus:bg-white"
          />

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
