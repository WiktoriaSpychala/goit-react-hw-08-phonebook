import { RegisterForm } from "components/RegisterForm/RegisterForm";

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default function RegisterPage() {
    return (
      <div>
        <h1 style={styles.title}>Registration</h1>
        <RegisterForm />
      </div>
    );
};