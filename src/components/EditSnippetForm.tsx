"use client"
import { Editor } from "@monaco-editor/react";
import type { snipped } from "@prisma/client";
import { useState } from "react";
import { Button } from "./ui/button";
import {saveSnippet} from "@/actions"


const EditSnippetForm=({snipped}:{snipped:snipped})=>{
    const [code , setcode ] = useState(snipped.code);

    const changeEventHandler=(value:string="")=>{
        setcode(value);
    }
    const saveSnippetAction = saveSnippet.bind(null,snipped.id,code)

    return(
        <div>
            <form action={saveSnippetAction} className="flex items-center justify-between  mb-10">
                <h1 className="font-bold text-xl ">Your code editer </h1>
                <Button type="submit"> Save </Button>
            </form>
            <Editor 
            height="60vh"
            defaultLanguage="javascript"
            defaultValue={code}
            theme="vs-dark" 
            onChange={changeEventHandler}
            />
        </div>
    )
}
export default EditSnippetForm;