import { Button, InputLabel, Typography } from '@mui/material';
import React from 'react';
import useStyles from './styles';

function Recuperar() {
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <div className={classes.registroHeader}>
                    <Typography variant="h3">Recupera tu contraseña</Typography>
                    <Typography variant="subtitle1">Nueva contraseña</Typography>
                </div>
                <div className={classes.registroBody}>
                    <InputLabel>CORREO</InputLabel>
                    <input type="email" placeholder="example@example.com" className={classes.filledInput}/>  
                </div>
                <Button variant="contained" className={classes.button}>Recuperar</Button>
            </div>
    )
}

export default Recuperar
