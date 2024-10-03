//Pages
import { Box } from "@mui/material";


//style
import classes from './NavBar.module.css';

function NavBar (){
    

    
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

export default NavBar;