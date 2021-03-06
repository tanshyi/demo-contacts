import React, {useState, useEffect} from 'react'
import { DataGrid } from '@material-ui/data-grid'
import ContactDialog from './ContactDialog'

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'username', headerName: 'User Name', width: 400 },
];

export default function Contacts(){
  let [contacts, setContacts] = useState([]);
  let [dialogData, setDialogData] = useState({});
  let [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(records => {
        //sorting by username
        records = [...records];
        records.sort((a,b) => a.username.localeCompare(b.username));
        return records;
      })
      .then(records => setContacts(records));
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={contacts} columns={columns}
        pageSize={5} onRowClick={r => {
          setDialogData(r.row);
          setDialogOpen(true);
        }}
      />
      <ContactDialog data={dialogData} open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  )
}