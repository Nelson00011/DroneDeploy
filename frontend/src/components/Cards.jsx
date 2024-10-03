//TODO review 
import { Box, Typography } from "@mui/material";

const Cards = ({ info }) => {

const name = `Image Number: ${info.image_id}`
let data = []


for (const key in info) {
    if (Object.hasOwnProperty.call(info, key)) {
      
      if(key != "image_id"){
      data.push(<div  width="90%"><b>{key + ": "}</b>  {info[key]}</div>)
     }
    }
   data.join(" ")
  }

    return(
        <Box sx={{
            margin: "5px 0px",
            width:'70%',
            bgcolor: 'rgba(255,255,255, 0.35)',
            borderRadius: '2%',}}>
            <Box
            width="90%" margin="10px auto"
            textAlign="left"
            sx={{ fontWeight: 'bold',
             }}
            >
            <Typography component="legend" variant="h5" >{name}</Typography>
            </Box>
            <Box
            width="90%" margin="5px auto"
            textAlign="left"
            >
            {data}
            <hr/>
            </Box>
        </Box>
    
    )
}

export default Cards;