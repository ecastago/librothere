import { makeStyles } from "@mui/styles";

export default makeStyles({
    filledInput: {
        width: '200px',
        height: '40px',
        border: 'none',
        background: '#d9d9d9',
        borderRadius: '30px',
        '&:focus':{
            outline:"none",
            borderRadius: '30px',
            fontSize:"16px"
        }
    },
    registroHeader:{
        background: 'linear-gradient(15deg, #d3794d, #ff0047)',
        textAlign: 'center',
        color: 'white',
        padding:'60px'
    },
    registroBody:{
        margin:'30px'
    },
    root:{
        textAlign:"center"
    },
    button:{
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
});