import React, { useState } from 'react';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [data, setData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    console.log(e.target, e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
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