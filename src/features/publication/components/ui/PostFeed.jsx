import React from 'react'
import { Link } from 'react-router-dom'

function PostFeed() {
  return (
    <div className='bg-neutral-900'>
        <Link to='create'>
             Create
        </Link>
    </div>
  )
}

export default PostFeed