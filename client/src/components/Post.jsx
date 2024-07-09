import React from 'react'
import { CreatePost } from './CreatePost'
import { Posts } from './Posts'

export const Post = () => {
  return (
    <div className='no-scrollbar flex-grow h-screen pt-6 mr-6 overflow-auto no-scrollbar'>

        <div className='mx-auto max-w-md md:max-w-xl lg:max-w-2xl'>
            
            {/* Create post */}
            <CreatePost />
            
            {/* Posts */}
            <Posts />
            
        </div>

    </div>
  )
}
