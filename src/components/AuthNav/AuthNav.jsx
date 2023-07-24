import React from "react";
import { NavLink } from 'react-router-dom';
import css from 'components/AuthNav/AuthNav.module.css'

export const AuthNav = () => {
    return (
      <div className="css.header">
          <NavLink to={'/register'} className={css.link}>
            Sign Up
          </NavLink>

          <NavLink to={'/login'} className={css.link}>
            Log In
          </NavLink>
      </div>
    );
};