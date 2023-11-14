import React, { useState } from "react";

const Login = (isLoggedIn, setIsLoggedIn) => {
  const [data, setData] = useState({ username: "", password: "" });
  // function handleChange(e){
  //   setData({...data, [e.target.name]:e.target.value});
  // }
  const handleChange = (e) => {
    console.log(e.target, e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {isLoggedIn ? (
        <p>you are logged in!</p>
      ) : (
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
