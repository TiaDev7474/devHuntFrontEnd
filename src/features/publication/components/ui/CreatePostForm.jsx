import React, { useRef } from 'react'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { useNavigate } from 'react-router-dom';

function CreatePostForm() {
    const descRef = useRef()
    const fileRef= useRef()
    const navigate = useNavigate()
   
  return (
    <div className='bg-[#f2f2f2] p-2 h-[79vh]'>
           <div className='flex justify-start items-center'>
              <span className='text-3xl font-bold text-[#0d0d0d] ml-10'>CREATE POST</span>
          </div>
          <div className=' px-8 py-8'>
              <div className='flex flex-col'>
                    <textarea
                        className='h-[150px] text-xl py-3 px-4 text-[#0d0d0d]   focus:outline-none border-b-2'
                        // value={description}
                        // onChange={(e)=>seTDescription(e.target.value)}
                        ref={descRef}
                        name="description"
                        placeholder='Faite une description de ce que vous voulez partager....'

                    />
                            
               </div>
               <div className=' bg-gray-200  w-full'>
                   <label className='w-[50px]'>
                        <div className='relative flex p-1 items-center w-[50%]'>
                            
                            <div 
                                
                                className=' cursor-pointer hover:bg-gray-50 p-4 align-center hover:opacity-90'>
                                <span className='w-[50px]'>
                                    <PhotoLibraryIcon
                                       sx={{color:'#00CF35'}}
                                    />
                                    
                                </span>
                                
                            </div>
                            
                            <div  
                                
                                className='text-center cursor-pointer hover:bg-gray-50 p-4'>
                                <span>
                                     <AudioFileIcon/>
                                </span>
                                
                            </div>
                            <div  

                                className='flex flex-col items-center cursor-pointer hover:bg-gray-50 p-4'>
                                <span>
                                    <VideoCameraBackIcon/>
                                </span>
                            </div>        
                        </div> 
                        <input 
                             ref={fileRef}
                            type='file' 
                            className='hidden absolute top-0 left-0 '/>
                    </label>
                    
                    
                    
               </div>
               <div className=' w-full bg-white p-4 flex justify-center items-center'>
                      <div className='text-[#0d0d0d] items-center text-2xl font-bold w-1/4'>
                            Tag
                      </div>
                     
                          <input 
                        //   value={tag}
                        //   onChange={HandleInput}  
                          placeholder='Separed per comma ( no more than 5'
                          className='w-full py-3 px-2 border-b-2 focus:outline-none  '/>
                     
               </div>
              
          </div>
           <div className='flex justify-start items-center'>
                <button 
                    //   onClick={handleSubmit}
                     className='text-xl text-center text-[#f2f2f2] w-[100px] ml-8 px-4 py-2 bg-[#00CF35]'>
                      Post
                </button>
                <button 
                    onClick={()=> navigate(-1)}
                    className='text-xl text-center text-[#0d0d0d] w-[100px] ml-5 px-4 py-2 bg-gray-200'>
                      Cancel
                </button>

           </div>
    </div>
  )
}

export default CreatePostForm