import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import Error from "./Error";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="main-container">
      {!isAuth ? (
        <p>You are not authenticated, Please login first</p>
      ) : (
        <p>Logged in, Now you can enter Playground</p>
      )}

      <ul>
        <li><Link to="/Home">PlayGround</Link></li>
        
        <li><Link to="/login">{isAuth ? "Login" : "Login"}</Link></li>
      </ul>

      <Routes>
        
        <Route path="/login" element={<Login setIsAuth={setIsAuth} isAuth={isAuth} />} />

        <Route
          path="/Home"
          element={
            <PrivateRoute isAuth={isAuth}>
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
