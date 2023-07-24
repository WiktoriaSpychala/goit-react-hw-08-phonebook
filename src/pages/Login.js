import { LoginForm } from 'components/LoginForm/LoginForm';

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default function LoginPage() {
    return (
      <div>
        <h1 style={styles.title}>Login</h1>
        <LoginForm />
      </div>
    );
};
