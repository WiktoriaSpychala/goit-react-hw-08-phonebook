import { Route, Routes } from 'react-router-dom';
import { RestricteRoute } from './RestricteRoute';
import { PrivateRoute } from './PrivateRoute';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);


  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={
          <RestricteRoute redirectTo="/contacts" component={RegisterPage} />
        } />
        <Route path="/login" element={
          <RestricteRoute redirectTo="/contacts" component={LoginPage} />
        } />
        <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={ContactsPage} />
        } />
          <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={ContactsPage} />
        } />
          </Route>
      </Routes>
    )
  )
};
export default App;