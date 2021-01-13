import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./Schema";
const Auth = () => {
  const [error, setError] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data) => {
    fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.err) {
          setError(json.err);
        } else {
          setError(null);
          console.log(json);
          sessionStorage.setItem("auth-token", json);
        }
      });
  };
  return (
    <div className="login">
      <div className="login__top">
        <h2>ULI</h2>
        <p>Get Connected</p>
      </div>
      <div className="login__bottom">
        <form onSubmit={handleSubmit(onSubmit)}>
          <small className="error">
            {errors.email && `* ${errors.email?.message}`}
          </small>
          <input
            type="text"
            name="email"
            className="login__input"
            placeholder="E-mail"
            ref={register}
          />
          <small className="error">
            {errors.password && `* ${errors.password?.message}`}
          </small>
          <input
            type="text"
            className="login__input"
            name="password"
            placeholder="Password"
            ref={register}
          />

          <Button variant="contained" type="submit">
            Login
          </Button>
          <div style={{ margin: "10px auto" }}>
            <p className="error" style={{ margin: "0px auto" }}>
              {error}
            </p>
          </div>
        </form>
        <div className="login__option">
          <p>or</p>
          <div className="login__option__icon">
            <p>
              Already an account ?{" "}
              <u>
                <Button>Sign Up</Button>
              </u>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
