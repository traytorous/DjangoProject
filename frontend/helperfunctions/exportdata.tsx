import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'

export function savepdf(data){
   const doc = new jsPDF();
   console.log(data[0])
   autoTable(doc, {
    head: [['Collection Name', 'Creation Date', 'Updated date', 'Latest version', 'Download count']],
    body: data.map((d)=> [d.collection_name,d.created_at,d.updated_at,d.latest_version,d.download_count])
  })
    
  doc.save('Ansible-Collections-AAP.pdf')
}

export function savecsv(data){
  
}