import EditSnippetForm from "@/components/EditSnippetForm";
import { prisma } from "@/lib/prisma";


const EditPageSnippet= async({params}:{params:Promise<{id:string}>})=>{

    const id =parseInt((await params).id);
    

    const snipped=await prisma.snipped.findUnique({
        where:{
            id,
        }
    })
    if(!snipped) return <h1>snippet not found</h1>
    return(
        <EditSnippetForm snipped={snipped} />
    )
}
export default EditPageSnippet;