import { useState } from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function CodeBlockArea({ code, language, visible }) {
  const [show, setShow] = useState(visible)

  function showCode() {
    setShow(!show)
  }

  return (
    <div>
      <div className="flex flex-col mt-5 cursor-pointer group w-fit" onClick={showCode}>
        <a className="font-text text-[17px] text-yellow font-normal leading-tight">{show === false ? 'Show' : 'Hide'} Code</a>
        <div className="h-[2px] w-0 bg-yellow mt-0 group-hover:w-full duration-200"></div>
      </div>
      <div className={show === true ? 'block' : 'hidden'}>
        <SyntaxHighlighter language={language} showLineNumbers={true} customStyle={{ width: '100%', display: 'block', margin: 'auto', borderRadius: '10px', fontSize: '14px', marginTop: '25px', padding: '20px 10px' }} style={nord}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}