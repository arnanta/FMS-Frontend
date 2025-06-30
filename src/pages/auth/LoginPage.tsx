import React from "react";
import style from "../styles/LoginPage.module.css";
const LoginPage = () => {
  //Layout wise - Two divs horizontally placed - let's say 70-30split
  return (
    <>
      <div className={style.container}>
        {/*Left Side div containing texts */}
        <div className={style.div1}>
          <div className={style.contentStyle}>
            <p className={style.mainText}>
              All your files in one place, <br /> access them instantly.
            </p>
            <p className={style.secondaryText}>Log in and get started!</p>
            <p className={style.loginPrompt}>
              Don't have an account yet? <span>Sign Up</span>
            </p>
          </div>
        </div>
        {/*Right Side div containing the Login form */}
        <div className={style.div2}>
          <div className={style.formContainer}>
            <h2 className={style.title}>Welcome Back</h2>
            <form className={style.form}>
              <label>
                Email Address
                <input type="email" placeholder=" " />
              </label>
              <label>
                Password
                <input type="password" placeholder=" " />
              </label>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
