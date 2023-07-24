
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import css from "./RegisterForm.module.css"

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    dispatch(register(newUser));

    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input className={css.input} type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input className={css.input} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 7 or more characters"
        />
      </label>
      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};