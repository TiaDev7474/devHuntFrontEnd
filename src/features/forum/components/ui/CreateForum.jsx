import React,{useCallback, useState} from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';



function CreateForum() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  const [placeholder,SetPlaceholder] = useState("Please enter JS code.")
  const [language,setlanguage] = useState('javascript')
  const [addCode,setAddCode] = useState(false)

  const HandleLanguageChange =  useCallback(()=>{
    setlanguage(`Please enter a ${language} code`)
  },[])
  const HandleAddCodeChange = useCallback(()=>{
    setAddCode(ancien=>!ancien)
  },[])
  return (
    <div className='w-full'>
      <div className="border border-white flex flex-col">
        <div className="text-[#f2f2f2] flex justify-between items-center">
          <h3 >Poser une Question ?</h3>
          <h3>Ajouter une champ de code</h3>
        </div>
      </div>
      
      {
        addCode && (
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
        )
      }

    </div>
  )
}

export default CreateForum


