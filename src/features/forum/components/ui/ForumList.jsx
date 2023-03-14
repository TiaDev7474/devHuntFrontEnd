import React,{useState} from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function MyForum() {
  const [copy,setCopy] = useState(false)
  const codeString = `import React from 'react'
  function ForumRightBar() {
    return (
      <div>ForumRightBar</div>
    )
  }
export default ForumRightBar`;
  return (
    <div>
      <div className="max-w-2xl  min-w-[20rem] bg-black rounded-md overflow-hidden ">
        <div className="flex justify-between text-xs px-4 text-[#f2f2f2] items-center">
          <p className='text-sm'>My Code</p>
          <button onClick={()=>{
            navigator.clipboard.writeText(codeString)
            setCopy(true)
            setTimeout(()=>{
              setCopy(false)
            },5000)
          }}>
           {copy ?  "copied!" : "Copy code"  } 
          </button>
        </div>
      <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{
        padding: '25px'
      }}
      wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default MyForum