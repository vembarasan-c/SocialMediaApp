
import React from "react"

import logo from "../assets/images/developer.jpg"
import userlogo from "../assets/images/man.png"

import {FaSearch } from "react-icons/fa";
import { AiOutlineHome ,AiTwotoneShop} from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { useAuth } from "./AuthContext";


export function Header(){

    const {logout, user} = useAuth();

    const handleClick = (e) => {
        e.preventDefault();
        logout();
    }


    return(
        <div className=" bg-white flex pt-1 items-center p-2 shadow-md top-0 sticky z-50 h-16">
           
            {/* Left bar */}
            <div className="flex min-w-fit" >
                <img className="rounded-full object-cover w-12 h-12" src={userlogo} width={50} height={40} alt="Logo image" />

                <div className=" hidden  lg:inline-flex flex items-center space-x-2 px-2 rounded-full ml-2 bg-gray-50 text-gray-400">
                    <FaSearch size={20} className="text-gray-500"/>
                    <input className="hidden lg:inline-flex bg-transparent focus:outline-none"  type="search"  placeholder="Search here"/>
                </div>
            
            </div>

            {/* Center bar */}
            
            <div className="flex justify-center flex-grow mx-2" >
                <div className=" flex items-center">
                    
                    <div className="flex items-center px-4 h-14 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer" > 
                        <AiOutlineHome className=" mx-auto" size={25}/>
                    </div>
                    
                    <div className="flex items-center px-4 h-14 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer" > 
                        <MdOndemandVideo className=" mx-auto" size={25}/>
                    </div>
                    
                    <div className="flex items-center px-4 h-14 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer" > 
                        < AiTwotoneShop className=" mx-auto" size={25}/>
                    </div>
                </div>
            </div>
            
            {/* right bar */}

            <div className=" flex items-center justify-end min-w-fit space-x-2 ">
                <img src={logo} width={50} height={20} alt="User image" className=" w-12 h-12 rounded-full cursor-pointer" />
                <p className=" hidden md:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs" >{user.username.toUpperCase()}</p>

                {/* <CgMenuGridO className=" hidden lg:inline-flex h-10 w-10 bg-gray-100 text-gray-500 rounded-full p-2 cursor-pointer hover:bg-gray-300 "     /> */}
                <FaBell className=" hidden lg:inline-flex h-10 w-10 bg-gray-100 text-gray-500 rounded-full p-2 cursor-pointer hover:bg-gray-300 "     />

                <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="submit" onClick={handleClick}>Logout</button>
            </div>


        </div>
    )
}


