// "use client"
// import { Editor } from "@monaco-editor/react";
// import type { snipped } from "@prisma/client";
// import { useState } from "react";
// import { Button } from "./ui/button";
// import {saveSnippet} from "@/actions"


// const EditSnippetForm=({snipped}:{snipped:snipped})=>{
//     const [code , setcode ] = useState(snipped.code);

//     const changeEventHandler=(value:string="")=>{
//         setcode(value);
//     }
//     const saveSnippetAction = saveSnippet.bind(null,snipped.id,code)

//     return(
//         <div>
//             <form action={saveSnippetAction} className="flex items-center justify-between  mb-10">
//                 <h1 className="font-bold text-xl ">Your code editer </h1>
//                 <Button type="submit"> Save </Button>
//             </form>
//             <Editor 
//             height="60vh"
//             // defaultLanguage="javascript"
//             defaultLanguage="java"
//             defaultValue={code}
//             theme="vs-dark" 
//             onChange={changeEventHandler}
//             />
//         </div>
//     )
// }
// export default EditSnippetForm;











"use client";

import { Editor, Monaco } from "@monaco-editor/react";
import type { snipped } from "@prisma/client";
import { useState } from "react";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions";

const EditSnippetForm = ({ snipped }: { snipped: snipped }) => {
  const [code, setCode] = useState(snipped.code);
  const [language, setLanguage] = useState("javascript");

  const handleCodeChange = (value: string = "") => {
    setCode(value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleEditorWillMount = (monaco: Monaco) => {
    // IntelliSense support
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
    });

    // Auto-Completion and Suggestions
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.Latest,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      strict: true,
    });
  };

  const saveSnippetAction = saveSnippet.bind(null, snipped.id, code);

  return (
    <div>
      <form action={saveSnippetAction} className="flex items-center justify-between mb-10">
        <h1 className="font-bold text-xl">Your Code Editor</h1>
        <Button type="submit">Save</Button>
      </form>

      <select onChange={handleLanguageChange} value={language} className="mb-4 p-2 border rounded">
        <option value="javascript">JavaScript</option>
        <option value="typescript">TypeScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="cpp">C++</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="json">JSON</option>
      </select>

      <Editor
        height="60vh"
        language={language}
        value={code}
        theme="vs-dark"
        onChange={handleCodeChange}
        beforeMount={handleEditorWillMount} // IntelliSense ko activate karne ke liye
        options={{
          automaticLayout: true, // Responsive layout
          folding: true, // Code Folding
          minimap: { enabled: true }, // Minimap
          lineNumbers: "on", // Line numbers
          scrollBeyondLastLine: false,
          wordWrap: "on",
          tabSize: 2,
          fontSize: 19, // Increased font size
        }}
      />
    </div>
  );
};

export default EditSnippetForm;
