"use client";
import { login } from "@/state/features/shopFeature/shopApiSlice";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { useDispatch } from "react-redux";

const Login = () => {
  const [input, setinput] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setinput((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    dispatch(login(input));
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-indigo-200">
      <div className="bg-white p-5   w-10/12 sm:w-7/12 md:w-4/12   rounded-xl shadow-lg hover:scale-105 duration-300 ">
        <p className="text-slate-500 font-semibold text-xl mb-2 flex items-center gap-3">
          <span>Login </span>
          <span>
            <AiOutlineLogin className="text-indigo-400 h-9 w-9" />{" "}
          </span>
        </p>{" "}
        <hr className="w-full h-2 bg-indigo-400 rounded-md" />
        <div className="space-y-3 py-3">
          <label className="font-semibold text-slate-500" htmlFor="email">
            Enter email :
          </label>
          <input
            onChange={handleInput}
            className="w-full border outline-slate-300 p-1 rounded-md "
            value={input.email}
            type="email"
            name="email"
            id="email"
          />

          <label className="font-semibold text-slate-500 " htmlFor="password">
            Enter password :
          </label>
          <input
            onChange={handleInput}
            value={input.password}
            className="w-full border outline-slate-300 p-1 rounded-md"
            type="password"
            name="password"
            id="password"
          />
          <button
            onClick={handleLogin}
            className="w-full p-2 text-white bg-indigo-400 rounded-xl  font-semibold"
          >
            login
          </button>
          <p className="cursor-pointer text-indigo-700 font-semibold text-center">
            <Link href="/register">Create an account ?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
