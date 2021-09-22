import { Button, InputLabel, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

function Registro() {

    const classes = useStyles();
    return (
            <div className={classes.root}>
                <div className={classes.registroHeader}>
                    <Typography variant="h3">Regístrate</Typography>
                    <Typography variant="subtitle1">Ya estas registrado?<Typography variant="subtitle1" component={Link} to="/login">Inicia Sesión</Typography></Typography>
                </div>
                <div className={classes.registroBody}>
                    <InputLabel>NOMBRE</InputLabel>
                    <input type="text" placeholder="Yatsuri Yamile" className={classes.filledInput}/>
                    <InputLabel>CORREO</InputLabel>
                    <input type="email" placeholder="example@example.com" className={classes.filledInput}/>
                    <InputLabel>NUEVA CONTRASEÑA</InputLabel>
                    <input type="password" className={classes.filledInput}/>
                    <InputLabel>FECHA DE NACIMIENTO</InputLabel>
                    <input type="date" className={classes.filledInput}/>    
                </div>
                <Button variant="contained" className={classes.button}>Registrarse</Button>
            </div>
    )
}

export default Registro;