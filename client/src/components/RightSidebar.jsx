import React from 'react'
import { ContactList } from './ContactList.jsx'

export const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-52 lg:min-w-60'>
        <div className='flex items-center text-gray-600'>
            <p className='flex flex-grow font-semibold '> Contacts </p>
        </div>

        <ContactList image="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600" 
            name="John"
            status="online"
        />

        <ContactList image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    name="David"
                    status="offline"
                />
        <ContactList image="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    name="Kevin"
                    status="offline"
                />
        <ContactList image="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    name="Nelson"
                    status="online"
                />

    </div>
  )
}
