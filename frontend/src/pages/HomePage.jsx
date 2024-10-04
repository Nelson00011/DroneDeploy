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
    //COMMENT: Data Pulled from Backend
    const [dataDrone, setDataDrone] = useState([]);
    //TODO: Filtering factor for data using Language Open AI
    const [dataFilter, setDataFilter] = useState('');
    
  
   
    //COMMENT: All Data Fetch Initial Page
    useEffect(() => {
      fetch('/api/data')
        .then(response => response.json())
        .then(data => {
          setDataDrone(data)
        }
      );
    }, []);
  
    //TODO: Add AI to filter the data:
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setDataFilter(input)
        //TODO test input confirmation with AI
        console.log({
          input: input,
        });
      };

    //TODO: Filter the Data
    const applyFilter= () => {
    

    }
    
    //TODO: Make Cards with Filtered Drone Data
    useEffect(() => {
     applyFilter()
    }, [dataFilter]);

  
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