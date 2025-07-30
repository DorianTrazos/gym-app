import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../lib/contexts/Auth.context';
import { loginUser } from '../../lib/utils/firebase-auth';

const Login = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <h2>Loading...</h2>;
  if (user) return <Navigate to='/gym' />;

  return (
    <>
      <h1>Login</h1>
      <button onClick={loginUser}>LOGIN WITH GOOGLE</button>
    </>
  );
};

export default Login;
