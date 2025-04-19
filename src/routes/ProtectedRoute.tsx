import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authHelpers';


// TODO Check user authorization after backend is ready.
const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
