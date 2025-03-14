"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
// import { redirect } from "next/dist/server/api-utils";
import { useActionState } from "react";
import * as actions from "@/actions"

const CreateSnippetPage=()=>{

    const [fromStateData,xyz]=useActionState(actions.createSnippet,{message:""});
   
    return(
        <form action={xyz}>
           <div>
           <Label className="font-bold ">Title</Label>
                <Input className="bg-white text-xl font-semibold " type="text" name="title" id="title"/>

           </div>
           <div>
                <Label className="font-bold ">Code</Label> 
                <Textarea className="bg-white h-[35vh] text-xl font-semibold text-blue-500 " name="code" id="code"/>

           </div>
           {fromStateData.message&& <div className="p-2 bg-red-300 border-2 border-red-600">{fromStateData.message}</div>}
           <Button className="mt-5" type="submit">New </Button>
        </form> 
        
    )
}
export default CreateSnippetPage;