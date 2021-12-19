import { useQuery } from '@apollo/client';
import {ListEmployee} from './graphql/querys';
import './App.css';
import { DataGrid } from '@mui/x-data-grid';
import * as MU from '@mui/material';
import * as React from 'react';

function DataTable() {
    const { loading, error, data } = useQuery(ListEmployee);
    const columns = [
        {field: 'id_employee', headerName: 'ID', width: 70 }
        , {field: 'first_name', width: 130}
        , {field: 'last_name', width: 130}
        , {field: 'email', width: 130}
        , {field: 'naotionality', width: 130}
        , {field: 'phone', width: 130}
        , {field: 'cs', width: 130}
        , {field: 'birthday', headerName: 'Birthday', width: 130}
    ]

    // Orden de la tabla 
    const [sortModel, setSortModel] = React.useState([
        {
        field: 'first_name',
        sort: 'asc',
        },
    ]);

    var rows = []

    if (loading){
        var load = <p>Loading...</p>
    } else {
        data.getEmployees.forEach(
        (row) => rows.push(row)
    );
    }

    return (
        <MU.Container maxWidth="xl">
            {/* Titulo */}
            <MU.Box sx={ {m: 1} }>
                <MU.Typography variant="h5" component="div" sx={{ flexGrow: 2 }} sx={ {m: 1} }>
                    Employee Search
                </MU.Typography>
                <MU.Divider />
            </MU.Box>
            {/* Tabla de Datos */}
            <MU.Box sx={{ m: 2 }}>
                <div style={{ height: 600, width: '100%' }}>
                    <DataGrid
                        getRowId={(r) => r.id_employee}
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        sortModel={sortModel}
                        onSortModelChange={(model) => setSortModel(model)}
                    />
                </div>
            </MU.Box>
        </MU.Container>
    );
}
export default DataTable;