import React from "react";
import bgLogin from "../assets/img/login-bg.svg";
import logo from "../assets/Logo_D-Net.svg"
import DocumentTitle from "../components/DocumentTitle";

const Login = () => {
  DocumentTitle('Sign In')
  return (
    <div className="flex min-h-screen bg-main-bg">
      <div>
        <img src={bgLogin} alt="img-bg-login"></img>
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2">        
        <div className="my-5 w-11/12 max-w-[700px] px-10 pt-5 pb-10 rounded-3xl bg-white border-2 border-gray-100">
          <img src={logo} alt="logo-dnet" className="w-24 h-24"></img>
          <h1 className="text-5xl font-semibold">Welcome Back</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Welcome back! Please enter you details.
          </p>
          <div className="mt-8">
            <div className="flex flex-col">
              <label className="text-lg font-medium" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border-1 border-gray-100 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium" htmlFor="password">
                Password
              </label>
              <input
                className="w-full border-1 border-gray-100 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your password"
                type={"password"}
              />
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-blue-600 rounded-xl text-white font-bold text-lg">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
