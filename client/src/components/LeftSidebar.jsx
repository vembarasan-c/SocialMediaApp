import React from 'react'

import userlogo from "../assets/images/developer.jpg"

import { ImUsers } from "react-icons/im";
import { SidebarItem } from './SidebarItem';
import { MdGroups } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { useAuth } from './AuthContext';

// Left Side bar
const LeftSidebar = () => {

  const {user} = useAuth();

  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[300px]'>
        
        <div className='flex items-center space-x-2 py-3 pl-2 ml-2  hover:bg-gray-200 rounded-3xl cursor-pointer'>
            <img src={userlogo} className='h-12 w-12 rounded-full' alt='user image' sizes='20' />
            <p className='hidden sm:inline-flex font-medium'>{user.username}</p> 
       </div>

       <SidebarItem Icon={ImUsers}  value="Friends" />
       <SidebarItem Icon={MdGroups}  value="Groups" />
       <SidebarItem Icon={AiOutlineShop}  value="Market Place" />
       <SidebarItem Icon={MdOutlineOndemandVideo}  value="Memories" />
       <SidebarItem Icon={BsStopwatch}  value="Watch" />

    </div>
  )
}

export default LeftSidebar;