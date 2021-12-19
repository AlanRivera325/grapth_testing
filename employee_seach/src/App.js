import './App.css';

import * as React from 'react';
import * as MU from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DataTable from './dataTable';


function App() {
  const [component, setComponent] = React.useState(null)
  const [anchorEl, setAnchorEl] = React.useState(null);
  var state = 0;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* App BAR */}
      <MU.AppBar position="static">
        <MU.Toolbar>

          <MU.Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </MU.Typography>

            <div>
              <MU.IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </MU.IconButton>
              <MU.Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MU.MenuItem onClick={handleClose}>Log Out</MU.MenuItem>
              </MU.Menu>
            </div>

        </MU.Toolbar>
      </MU.AppBar>
      

      <MU.Grid container direction="row"
        style={{
        height: '94vh',
        spacing: 0,
        justify: 'space-around'}}>
        <MU.Grid item xs={2}> 
          {/* Barra lateral */}
          <MU.Box sx={{
            width: 'auto',
            height: '100%',
            backgroundColor: 'primary.dark'}}
          >
            
            <MU.Button variant="contained" sx={{p:2}} style={{width: '100%', height: 60}} onClick={() => setComponent('data')}>
              <MU.Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:"#ede7f6"}}>
                Employees
              </MU.Typography>
            </MU.Button>

            
          </MU.Box>
        </MU.Grid>
      
        <MU.Grid item xs={10}>
            {
              component === 'data' ?
                <DataTable />
              :
              ''
            }

        </MU.Grid>
      </MU.Grid>
    </div>
  );
}

export default App;
