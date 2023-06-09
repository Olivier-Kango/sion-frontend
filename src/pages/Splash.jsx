import { Link } from 'react-router-dom';
import './Splash.scss';

const Splash = () => (
  <section className="splash-section w-full">
    <div className="splash-container w-full h-full flex justify-center items-center flex-col">
      <div className="splash-card max-w-[50%] w-full max-h-[55%] sm:mb-20 px-2">
        <div className="sm:px-3 text-center">
          <h1 className="font-bold text-white text-4xl sm:text-6xl ">
            PSS Digital
          </h1>
          <p className="text-xl text-slate-50 mt-2">
            Order your favorite products from your favorite site.
          </p>
        </div>
        <div className="mt-10 w-4/6 flex justify-center gap-4 mx-auto text-center link-button">
          <Link
            to="/signup"
            className="border py-3 px-7 ml-3 text-white hover:scale-105"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="py-3 px-7  mr-3 hover:scale-105"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Splash;
