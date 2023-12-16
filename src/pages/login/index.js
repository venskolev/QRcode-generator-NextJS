import React from "react";
import LoginAuth from "../../components/Auth/Login.js";

const Login = ({ lang }) => {
  return (
    <main id="content">
      <div>
        <LoginAuth lang={lang} />
      </div>
    </main>
  );
};

export default Login;
