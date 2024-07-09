import React from 'react'

export const ContactList = ({image, name, status}) => {
  return (
    <div className='flex items-center py-2 pl-2 space-x-2 hover:bg-gray-300 cursor-pointer relative rounded-lg '>
        <img src={image} height={20} width={20} className='  h-10 w-10 object-cover  rounded-full cursor-pointer' />

        <p className='hidden  sm:inline-flex text-sm '>{name}</p>
        
        { status=== "online" && 
                    ( <div className='bg-green-400 h-4 w-4 rounded-full absolute left-6 bottom-1 border-2' ></div> )
        }
        { status=== "offline" && 
                    ( <div className='bg-gray-500 h-4 w-4 rounded-full absolute left-6 bottom-1 border-2' ></div> )
        }
        
    </div>
  )
}
