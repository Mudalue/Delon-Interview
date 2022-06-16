import React from "react";
import { DataGrid } from "@material-ui/data-grid";

//table content
const columns = [
  { field: "id", headerName: "id", width: 100 },
  { field: "FirstName", headerName: "FirstName", width: 150 },
  { field: "LastName", headerName: "LastName", width: 150 },
  { field: "PhoneNumber", headerName: "PhoneNumber", width: 150 },
  { field: "Partner", headerName: "Partner", width: 150 },
  { field: "Location", headerName: "Location", width: 150 },
  { field: "Status", headerName: "Status", width: 150 },
  { field: "Actions", headerName: "Actions", width: 150 },
];
const data = [
  {
    id: 1,
    LastName: "Snow",
    FirstName: "Jon",
    PhoneNumber: 35930493,
    Partner: "dully",
    Location: "Lagos",
    Status: "Active",
    Actions: "...",
  },
  {
    id: 2,
    LastName: "Lannister",
    FirstName: "Cersei",
    PhoneNumber: 422782398922,
    Partner: "dully",
    Location: "Lagos",
    Status: "Active",
    Actions: "...",
  },
  {
    id: 3,
    LastName: "Lannister",
    FirstName: "Jaime",
    PhoneNumber: 42372873925,
    Partner: "dully",
    Location: "Lagos",
    Status: "Active",
    Actions: "...",
  },
  {
    id: 4,
    LastName: "Stark",
    FirstName: "Arya",
    PhoneNumber: 1347398396,
    Partner: "dully",
    Location: "Lagos",
    Status: "Active",
    Actions: "...",
  },
  {
    id: 5,
    LastName: "Targaryen",
    FirstName: "Daenerys",
    PhoneNumber: null,
    Partner: "dully",
    Location: "Lagos",
    Status: "Active",
    Actions: "...",
  },
  {
    id: 6,
    LastName: "Melisandre",
    FirstName: null,
    PhoneNumber: 1832927250,
    Partner: "dully",
    Location: "Lagos",
    Status: "Approval awaiting",
    Actions: "...",
  },
  {
    id: 7,
    LastName: "Clifford",
    FirstName: "Ferrara",
    PhoneNumber: 44378393793,
    Partner: "dully",
    Location: "Lagos",
    Status: "Active",
    Actions: "...",
  },
  {
    id: 8,
    LastName: "Frances",
    FirstName: "Rossini",
    PhoneNumber: 36387397933,
    Partner: "dully",
    Location: "Lagos",
    Status: "Deactivated",
    Actions: "...",
  },
  {
    id: 9,
    LastName: "Roxie",
    FirstName: "Harvey",
    PhoneNumber: 65389393893,
    Partner: "dully",
    Location: "Lagos",
    Status: "Approval awaiting",
    Actions: "...",
  },
];
const Table = () => {
  return (
    <>
      <div style={{ height: 400 }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default Table;
