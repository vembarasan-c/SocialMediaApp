import React ,{useState}from "react";
import { Link , useNavigate} from "react-router-dom";

import {useAuth} from "./AuthContext.jsx"

    

export const Login = () => {

  const [username, setUsername] =  useState(null);
  const [password, setPassword] =  useState(null);

  const {login} = useAuth();

  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      await login(username,password);

      setTimeout(() => {
        navigate("/social-media")
      }, 1000);


    } catch (error) {
      console.error(error);
    }
  }

  

  return (
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Username
                  </label>
                  <input
                  onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name="username"
                    className= " bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="User name"
                    required
                    autoFocus
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                  onChange={(e) => setPassword(e.target.value)}

                    type="password"
                    name="password"
                    placeholder="••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    className="text-sm cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <div  className="flex justify-center">

                <button
                  type="submit"
                  className=" w-full  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  font-semibold rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign in
                </button>
                </div>
                <div  className="flex justify-end">

                <p className="text-sm font-semibold text-red-500 dark:text-gray-400">
                  Don't have an account yet?    
                  
                  <Link to="/register"
                    className="font-medium text-blue-600 hover:underline hover:text-violet-500"
                    >
                     Sign up
                  </Link>
                </p>
                      </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};
