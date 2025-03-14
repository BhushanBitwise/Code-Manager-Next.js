// import { Button } from "@/components/ui/button";
// import { prisma } from "@/lib/prisma";
// import Link from "next/link";
// import React from "react";
// // import { deleteSnippet } from "@/actions";
// import * as actions from "@/actions"

// const SnippetDetailsPage=async ({params}:{params:Promise<{id:string}>})=>{
//     const id = parseInt((await params).id);

//     await new Promise((r)=>setTimeout(r,2000))

//     const snippet= await prisma.snipped.findUnique({
//         where:{
//             id,
//         },
//     });
//     if(!snippet) <h1>Snippet not found</h1>

//     const deleteSnippetAction=actions.deleteSnippet.bind(null,snippet.id);

//     return(
//         <div className="flex flex-col gap-5">
//             <div className="flex items-center justify-between ">
//                 <h1 className="font-bold text-xl">{snippet?.title}</h1>
//                 <div className="flex items-center gap-4">
//                    <Link href={`/snippet/${snippet?.id}/edit`}> <Button>Edit</Button> </Link>
//                     <form action={deleteSnippetAction}>
//                         <Button type="submit" variant={'destructive'}>Delete</Button>
//                     </form>
//                 </div>
//             </div>
//             <pre className="mt-10 border-2 border-gray-200 p-5 bg-gray-100">
//                 <code className="text-green-700 font-semibold text-lg">{snippet?.code}</code>
//             </pre>
//         </div>
//     )
// }
// export default SnippetDetailsPage;







import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import * as actions from "@/actions";

 const SnippetDetailsPage=async ({params}:{params:Promise<{id:string}>})=>{
// const SnippetDetailsPage = async ({ params }: { params: { id: string } }) => {

    // const id = parseInt(params.id);
    const id = parseInt((await params).id);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const snippet = await prisma.snipped.findUnique({
        where: { id },
    });

    if (!snippet) {
        return <h1>Snippet not found</h1>; // Stops execution if snippet is null
    }

    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-xl">{snippet.title}</h1>
                <div className="flex items-center gap-4">
                    <Link href={`/snippet/${snippet.id}/edit`}>
                        <Button>Edit</Button>
                    </Link>
                    <form action={deleteSnippetAction}>
                        <Button type="submit" variant="destructive">
                            Delete
                        </Button>
                    </form>
                </div>
            </div>
            <pre className="mt-10 border-2 border-gray-200 p-5 bg-gray-100">
                <code className="text-green-700 font-semibold text-lg">{snippet.code}</code>
            </pre>
        </div>
    );
};

export default SnippetDetailsPage;

export const generateStaticParams=async()=>{
    const snippets=await prisma.snipped.findMany();
    return snippets.map((snippet)=>{
        return{id:snippet.id.toString()}
    })
}

