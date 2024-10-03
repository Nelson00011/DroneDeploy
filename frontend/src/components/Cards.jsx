//Pages
import { Box } from "@mui/material";


//style
import classes from './Cards.module.css';

function Cards (){
    

    
    return (
        <Box className={classes.outterBox}>
            <Box className={classes.innerBox}>
                <Box 
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  >Drone Deploy</Box>
                 <Box className={classes.icons}>
            
                </Box>
            </Box>
        </Box>
    )
};

export default Cards;