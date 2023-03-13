import React from 'react'

function Feed({children}) {
  return (
    // <div class="flex h-screen pr-[25%]  pl-[25%] pt-32">
    //     <div class=" flex-1 ">
    //         {children}
    //     </div>
    //  </div>
    // <div className='w-[100%] md:w-[50%] md:pt-32 md:pr-[25%] md:pl-[25%] lg:w-[45%] '>
    //      {children}
    // </div>
        <div className='w-full mt-[120px] md:mt-0 md:pt-32 md:px-[25%]'>
              {children}
        </div>
  )
}

export default Feed