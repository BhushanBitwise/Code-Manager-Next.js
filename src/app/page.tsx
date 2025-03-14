import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic ="force-dynamic"// desabling caching feature mhanje dynamic route banala 
// export const revalidate=0;//
export default async function Home() {

    const snippets=await prisma.snipped.findMany();

  return (
   <div>
    <h1 className="font-bold text-3xl opacity-90">code...</h1>
    <div className=" flex item-center justify-between ">
      <h1 className="mt-5 font-semibold opacity-70 text-green-700 ">Your Snippets</h1>
     <Link href="/snippet/new"> <Button>New</Button></Link>
    </div>  
    {
      snippets.map((snippet)=>
        (
        <div key={snippet.id} className=" mt-3 rounded-xl flex item-center justify-between bg-gray-200 p-3">
             <h1 className="text-lg font-semibold opacity-70">{snippet.title}</h1>
             <Link href={`snippet/${snippet.id}`}><Button variant={'link'}>View</Button></Link>
        </div>
      ))}
   </div>
  );
}

