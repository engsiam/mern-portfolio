import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation(); // Get the current location

  const token = localStorage.getItem("token"); // Get the token from localStorage
  if (!token) {
    // If no token, redirect to login page (Auth)
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return children; // If token exists, render children (Dashboard, etc.)
};

export default ProtectedRoute;
