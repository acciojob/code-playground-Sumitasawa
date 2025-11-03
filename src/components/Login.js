import React from "react";

const Login = ({ setIsAuth, isAuth }) => {
  const handleLogin = () => setIsAuth(true);
  const handleLogout = () => setIsAuth(false);

  return (
    <div>
      <p>Login Page</p>

      {!isAuth ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default Login;
