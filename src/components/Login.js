import React from "react";

const Login = ({ setIsAuth, isAuth }) => {
  const handleLogin = () => setIsAuth(true);
  const handleLogout = () => setIsAuth(false);

  return (
    <div>
      
      {!isAuth ? (
        <button onClick={handleLogin}>Log In</button>
      ) : (
        <button onClick={handleLogout}>Log Out</button>
      )}

      <p>Login</p>
    </div>
  );
};

export default Login;
