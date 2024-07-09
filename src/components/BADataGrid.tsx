import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 120,
    editable: true,
  },
  {
    field: 'course',
    headerName: 'Course',
    width: 150,
    editable: true,
  },
  {
    field: 'class',
    headerName: 'Class',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, class:"Matric", course:"Computer science", email:"abc@gmail.com" },
  { id: 2, lastName: 'Snow', firstName: 'Jon', age: 14, class:"Matric", course:"Computer science", email:"abc@gmail.com" },
  { id: 3, lastName: 'Snow', firstName: 'Jon', age: 14, class:"Matric", course:"Computer science", email:"abc@gmail.com" },
  { id: 4, lastName: 'Snow', firstName: 'Jon', age: 14, class:"Matric", course:"Computer science", email:"abc@gmail.com" },
  { id: 5, lastName: 'Snow', firstName: 'Jon', age: 14, class:"Matric", course:"Computer science", email:"abc@gmail.com" },
  { id: 6, lastName: 'Snow', firstName: 'Jon', age: 14, class:"Matric", course:"Computer science", email:"abc@gmail.com" },
  { id: 7, lastName: 'Snow', firstName: 'Jon', age: 14, class:"Matric", course:"Computer science", email:"abc@gmail.com" },
  { id: 8, lastName: 'Snow', firstName: 'Jon', age: 14, class:"Matric", course:"Computer science", email:"abc@gmail.com" },
  { id: 9, lastName: 'Snow', firstName: 'Jon', age: 14, class:"Matric", course:"Computer science", email:"abc@gmail.com" },
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 14, class:"Matric", course:"Computer science", email:"abc@gmail.com" },

];

export default function BADataGrid() {
  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      <DataGrid
        className='m-auto w-75'
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
