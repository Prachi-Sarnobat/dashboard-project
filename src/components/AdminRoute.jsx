import { Navigate } from "react-router-dom";
import React from "react";

const AdminRoute = ({ children }) => {
  return localStorage.getItem("isAdmin") ? children : <Navigate to="/admin-Login" />;
};

export default AdminRoute;
