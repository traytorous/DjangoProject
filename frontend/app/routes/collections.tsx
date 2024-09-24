import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import CollectionTable from "components/CollectionTable";
import { savepdf } from "helperfunctions/exportdata";

export async function loader(){
    const res = await fetch("http://127.0.0.1:8000/collections")
    return json(await res.json());
}

export default function Collections() {
    const data = useLoaderData();  
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-16">
            <CollectionTable data={data}/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>savepdf(data)}>Save to PDF</button>  
        </div>
      </div>
    );
  }