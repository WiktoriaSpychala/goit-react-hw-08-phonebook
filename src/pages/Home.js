import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Home.module.css'


export default function HomePage() {
    const { isLoggedIn } = useAuth();
    return (
      <div>
        <h1 className={css.title}>Welcome to Your Phonebook!</h1>
        {!isLoggedIn && (
          <p className={css.description}>
            Please
            <NavLink to="/register" className={css.link}>
              Sign Up
            </NavLink>
            or
            <NavLink to="/login" className={css.link}>
              Log In
            </NavLink>
            to use the app 📖
          </p>
        )}
      </div>
    );
}
