import * as React from 'react';
import { useState } from 'react';
import { Input } from '@mui/material';
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
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          input: input,
        });
      };
  
    return (
         <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://media.istockphoto.com/id/537241730/photo/up-view-in-financial-district.jpg?s=1024x1024&w=is&k=20&c=T9Rt8TyQsoqi8rqfvKJ7DszNWPYU807_hLtid90Drdk=)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
            
              <Typography component="h1" variant="h5">
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