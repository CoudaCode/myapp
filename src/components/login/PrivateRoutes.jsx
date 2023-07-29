import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  const isLoggedIn = () => {
    const authToken = localStorage.getItem("authToken");
    return !!authToken; // Renvoie true si authToken est défini, sinon false
  };
  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
