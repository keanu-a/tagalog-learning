import React, { useState } from 'react';

import Navbar from '../../components/navbar/Navbar';

import './LoginPage.scss';

const LoginPage = () => {
  const [loginPage, setLoginPage] = useState('login');

  return (
    <div className="page-container">
      <Navbar />

      <form className="form" method="post">
        <div className="form-title">SIGN IN</div>

        <div className="form-actions">
          <div className="form-inputs">
            <input type="text" placeholder="Email or Username"></input>

            <input type="password" placeholder="Password"></input>
          </div>

          <div className="form-btns">
            <button className="sign-in">
              <span>Sign In</span>
            </button>
            <button className="sin-up">
              <span>Sign Up</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
