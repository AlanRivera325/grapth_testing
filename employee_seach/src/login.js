import React, {Component} from 'react';
import * as MU from '@mui/material';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    setUsername = event => {
        this.setState({
            username: event.target.value
        });
    };
    
    setPassword = event => {
        this.setState({
            password: event.target.value
        });
    };

    
    render(){
        return(
            <div>
                <MU.Container maxWidth="sm">
                    <MU.Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{p:10}}
                    >
                        <MU.Typography variant="h4" component="div" sx={{ flexGrow: 2 }} >
                            Welcome
                        </MU.Typography>
                        <MU.Divider />

                        <MU.Box sx={{
                            width: 500,
                            height: 300,
                            backgroundColor: 'primary.dark',
                            borderRadius: 1}}
                        >
                            <MU.Container maxWidth="md">
                                <MU.Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                                    <MU.Grid item xs={12}> 
                                        <MU.Typography variant="h8" component="div" sx={{ flexGrow: 2 }} sx={ {m: 1} } style = {{color:"#ede7f6"}}>
                                            Usuario:
                                        </MU.Typography>
                                        <MU.TextField id="username"
                                        label="Usuario" 
                                        variant="outlined" 
                                        fullWidth  
                                        color="secondary"
                                        required
                                        onChange={this.setUsername}
                                        value={this.state.username} />
                                    </MU.Grid>

                                    <MU.Grid item xs={12}> 
                                        <MU.Typography variant="h8" component="div" sx={{ flexGrow: 2 }} sx={ {m: 1} } style = {{color:"#ede7f6"}}>
                                            Contraseña:
                                        </MU.Typography>
                                        <MU.TextField
                                        id="filled-password-input"
                                        label="Contraseña"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="outlined"
                                        fullWidth
                                        color="secondary"
                                        required
                                        onChange={this.setPassword}
                                        value={this.state.password}
                                        />
                                    </MU.Grid>

                                    <MU.Grid item xs={12}> 
                                        <MU.Button variant="contained" 
                                        sx={{p:2}} 
                                        style={{width: '100%', height: 40}}

                                        >
                                        <MU.Typography variant="h9" component="div" sx={{ flexGrow: 1 }} style={{color:"#ede7f6"}}>
                                            Acceder
                                        </MU.Typography>
                                        </MU.Button>
                                    </MU.Grid>
                                </MU.Grid>
                            </MU.Container>

                        </MU.Box>
                </MU.Grid>
                </MU.Container>
            </div>
        )
    }
};

export default Login;