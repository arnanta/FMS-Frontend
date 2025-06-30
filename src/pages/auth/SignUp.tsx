import React from "react";
import style from "../styles/SignUp.module.css";
const SignUp = () => {
  //Layout wise - Two divs horizontally placed - let's say 70-30split
  return (
    <>
      <div className={style.container}>
        {/*Left Side div containing texts */}
        <div className={style.div1}>
          <div className={style.contentStyle}>
            <p className={style.mainText}>
              All your files in one place, <br /> always within reach.
            </p>
            <p className={style.secondaryText}>Start organizing in minutes!</p>
            <p className={style.loginPrompt}>
              Already have an account? <span>Log in</span>
            </p>
          </div>
        </div>
        {/*Right Side div containing the sign up form */}
        <div className={style.div2}>
          <div className={style.formContainer}>
            <h2 className={style.title}>Create Account</h2>
            <form className={style.form}>
              <label>
                Full Name
                <input type="text" placeholder=" " />
              </label>
              <label>
                Email Address
                <input type="email" placeholder=" " />
              </label>
              <label>
                Password
                <input type="password" placeholder=" " />
              </label>
              <button type="submit">Create Account</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
