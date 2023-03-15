import { Link } from 'react-router-dom';
import './Splash.scss';

const Splash = () => (
  <section className="splash-section w-full">
    <div className="splash-container w-full h-full flex justify-center items-center flex-col">
      <div className="splash-card">
        <div className="px-3 text-center">
          <h1 className="text-6xl font-bold text-white">Meal Master</h1>
          <p className="text-xl text-slate-50 mt-2">
            Order your favorite foods from your favorite site😉
          </p>
        </div>
        <div className="mt-10 w-4/6 flex justify-between mx-auto">
          <Link
            to="/signup"
            className="border border-lime-500 py-3 px-7 ml-3 text-white hover:scale-105"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-lime-500 py-3 px-7  mr-3 hover:scale-105"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Splash;
