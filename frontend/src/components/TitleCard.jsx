//TODO title Card
import { Box, Typography } from "@mui/material";

const TitleCard = ({ title }) => {

    return(
        <Box    >
            <Box
            width="100%" margin="0px auto"
            textAlign="center"
            sx={{
                bgcolor: 'rgba(255,255,255, 0.35)',
                borderRadius: '2%',}}
            >
            <Typography component="legend" variant="h4" >{title}</Typography>
            </Box>
            <Box textAlign="center" >
            <hr/>
            </Box>
        </Box>
    
    )
}

export default TitleCard;