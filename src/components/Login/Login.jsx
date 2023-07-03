import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const [show, setShow] = useState(false)

  const { userSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
    .then(result => {
        console.log(result.user)
        navigate(from, {replace: true});
    })
    .catch(err => console.log(err.message))
    form.reset()
  };

  return (
    <div className="border w-[400px] p-8 mx-auto mt-16 rounded-md">
      <h2 className="font-bold text-3xl text-center mb-6">Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="user-email"
            className="w-full border mb-5 px-2 py-4 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type= {show ? "text":"password"}
            name="password"
            autoComplete="current-password"
            className="w-full border mb-5 px-2 py-4 rounded-md"
          />
          <p onClick={()=> setShow(!show)}><small>
            {
                show ? <span>hide password</span> : <span>show password</span>
            }
            </small></p>
        </div>
        <input
          type="submit"
          value="Login"
          className="text-lg font-semibold py-4 w-full bg-[#ffb545] rounded-md hover:bg-[#ffa41c] cursor-pointer mb-2"
        />
        <small>
          New to Ema-john?{" "}
          <Link to="/signUp" className="text-[#FF9900]">
            Create New Account
          </Link>
        </small>
      </form>
    </div>
  );
};

export default Login;
