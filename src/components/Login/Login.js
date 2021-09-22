import { Button, InputLabel, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

function Login() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.registroHeader}>
                <Typography variant="h3">Inicia Sesión</Typography>
                <Typography variant="subtitle1">No estas registrado?<Typography variant="subtitle1" component={Link} to="/registro">Regístrate</Typography></Typography>
            </div>
            <div className={classes.registroBody}>
                <form >
                    <InputLabel >CORREO</InputLabel>
                    <input type="email" placeholder="example@example.com" className={classes.filledInput}/>
                    <InputLabel>CONTRASEÑA</InputLabel>
                    <input type="password" className={classes.filledInput}/>
                </form>  
            </div>
            <div>
                <Typography component={Link} to="/recuperar">¿Olvidaste tu contraseña?</Typography>
            </div>
            <Button variant="contained" className={classes.button}>continuar</Button>
        </div>
    )
}

export default Login
