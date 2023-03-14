import React,{useCallback,useState} from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import {motion} from 'framer-motion'

function CodeInput() {
    const [placeholder,SetPlaceholder] = useState("Please enter JS code.")
    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
      );
    const [language,setlanguage] = useState('javascript')
    const HandleLanguageChange =  useCallback(()=>{
        setlanguage(`Please enter a ${language} code`)
    },[])
    return (
     <div className="">
        <CodeEditor
        value={code}
        language={language}
        placeholder={placeholder}
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: "black",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
        />
     </div>
  )
}

export default CodeInput