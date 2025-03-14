"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from 'next/navigation'
import {revalidatePath} from "next/cache"

export const saveSnippet= async(id:number, code:string)=>{
    await prisma.snipped.update({
        where:{
            id
        },
        data:{
            code
        }
    });
    revalidatePath(`/snippet/${id}`);
    redirect(`/snippet/${id} `);
}
export  const deleteSnippet=async(id:number)=>{
    await prisma.snipped.delete({
        where:{id}
    });
    revalidatePath("/");
    redirect("/");
}



export async function createSnippet(revState:{message:string},formData:FormData)
{
    try{
        const title =formData.get("title")as string | null;;
        const code =formData.get("code")as string | null;;
    if(!title)return {message:"title is required.."}
    if(!code)return {message:"code is required.."}
    
     await prisma.snipped.create({
        data:{
            title,
            code
        }
    });
    revalidatePath("/");

    }catch(error:unknown)
    {   if(error instanceof Error){
        return {message:error.message}
        }
        else{
        return {message:"Some internal server error"}
        }
    }
    //"use server" // use server directive
    
    redirect("/");
} 
