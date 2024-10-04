import * as React from 'react';
import { useState, useEffect } from 'react';
//pages
import Cards from '../components/Cards';
import TitleCard from '../components/TitleCard';
//style
// import { Card, Input } from '@mui/material';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';




function HomePage() {
    const [input, setInput] = useState(false);
    //TODO Test Data update
    const [dataDrone, setDataDrone] = useState([{
      "image_id": "003",
      "timestamp": "2024-09-24 14:36:47",
      "latitude": "44.4275° N",
      "longitude": "110.5888° W",
      "altitude_m": 100,
      "heading_deg": 90,
      "file_name": "YNP_003.jpg",
      "camera_tilt_deg": 0,
      "focal_length_mm": 50,
      "iso": 400,
      "shutter_speed": "1/2000",
      "aperture": "f/5.6",
      "color_temp_k": 5800,
      "image_format": "RAW+JPEG",
      "file_size_mb": 26.8,
      "drone_speed_mps": 2.5,
      "battery_level_pct": 91,
      "gps_accuracy_m": 0.4,
      "gimbal_mode": "Tripod",
      "subject_detection": "Yes",
      "image_tags": ["Wildlife", "Elk"]
      }]);
  
   
    //COMMENT: All Data Fetch Initial Page TODO pull data to front end
    useEffect(() => {
      fetch('/api/data')
        .then(response => response.json())
        .then(data => {
          //TEST: console.log(data[0]['image_id'])
          setDataDrone(data)
        }
      );
    }, []);
  
    //TODO: Apply Drone Filtering & link backend data
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          input: input,
        });
      };

      //TODO: Make Cards with Filtered Drone Data
  
    return (
         <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={8}
            sx={{
              backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/00/52/14/94/1000_F_52149427_zpSBvXruuUbDlrWvrF3d4Z8Pp83OI788.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              <Box
              sx={{
                my: 15,
                mx: .5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              
                {/* COMMENT: Title Card */}
                <TitleCard title="Drone Data Below" />
                {/* COMMENT: Cycle Through Drone Data*/}
                {dataDrone && dataDrone.map(item => (<Cards info={item}/>))}
              </Box>
            </Grid>
        
        
          <Grid item xs={8} sm={8} md={4} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 20,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
            
              <Typography component="h1" variant="h5"> Ask about Drone Data
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="input"
                  label="Drone Data Request..."
                  name="input"
                  autoComplete="input"
                  autoFocus
                  onChange={(evt)=> setInput(evt.target.value)}
                />
           
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                Submit
                </Button>
            
                <p>
                Drone Data Request Examples:</p> 
                <p>“What is the altitude of the second image?”</p>
                <p>
                “What is the battery level of the drone during the last image?”
                </p>
                <Grid container>
                  <Grid item xs>
                  </Grid>
                
                </Grid>
              </Box>
  
            </Box>

          </Grid>
        </Grid>
    );
  }
  
  export default HomePage;