export default function CollectionTable({ data }){

    return (


<div className="flex flex-col">
<table className="border-separate border-spacing-2 border border-slate-500">
  <thead>
    <tr>
      <th className="border border-slate-600">Collection Name</th>
      <th className="border border-slate-600">Creation date </th>
      <th className="border border-slate-600">Updated date </th> 
      <th className="border border-slate-600">Latest version </th> 
      <th className="border border-slate-600">Download count </th> 
    </tr>
  </thead>
  <tbody>
  {data.map((d)=> 
  <tr>
  <td className="border border-slate-700">{d.collection_name}</td>
  <td className="border border-slate-700">{d.created_at}</td>
  <td className="border border-slate-700">{d.updated_at}</td>
  <td className="border border-slate-700">{d.latest_version}</td>
  <td className="border border-slate-700">{d.download_count}</td>
  </tr>
  
  )   
  }
  </tbody>
</table>
</div>


    )
}