import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
    const location = useLocation()

  if (loading) {
    return (
      <div className="flex items-center justify-center text-3xl mt-20">L <div className="w-5 h-5 border-4 border-dashed border-black animate-spin rounded-full"></div>ading...</div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
