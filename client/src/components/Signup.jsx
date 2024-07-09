import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "./AuthContext.jsx";
import { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [phoneNumber, setPhonenumber] = useState(null);
  const { register } = useAuth();

  const [error, setError] = useState(null);
  const [userData, setUserdata] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(
        username,
        email,
        password,
        phoneNumber,
        "USER"
      );
      setUserdata(data.data);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (e) {
      setError(e);
      console.error(e);
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Create an account
              </h1>

              {error && (
                <div className=" bg-red-400 rounded-lg py-1">
                  <p className=" text-center text-white font-semibold">
                    Please enter correct details...
                  </p>
                </div>
              )}

              {userData && (
                <div className=" bg-blue-50 rounded-lg py-1">
                  <p className=" text-center text-green-500 font-semibold">
                    Account created successfully!
                  </p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Your Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="focus:outline-blue-500 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                    placeholder="Name"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" focus:outline-blue-500 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5 "
                    placeholder="name@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=""
                    className=" focus:outline-blue-500 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Contact:
                  </label>
                  <input
                    type="confirm-password"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder=""
                    className=" focus:outline-blue-500  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5 "
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  shadow-lg shadow-green-400/50  me-2 mb-2 "
                >
                  Create an account
                </button>
                <div className="flex justify-end">
                  <p className="text-sm font-semibold text-red-400 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      to="/"
                      className="font-medium text-blue-600 hover:underline hover:text-violet-600"
                    >
                      Login here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
