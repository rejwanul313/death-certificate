
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ECTReactComponent from './ECTReactComponent';
import { useState } from 'react';

const BasicTextFields = () => {
  const [selectedDiagnosisList, setselectedDiagnosisList] = useState();
  return (
    <Container>
    <Box sx={{ margin: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
      justifyContent:'center',
      alignItems:'center', textAlign:'right'}}>
          <Grid item xs={2} sm={4} md={4}>
              <Typography>Date and Time of Death</Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <TextField fullWidth  type="date"/>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <TextField sx={{}} fullWidth  type="time"/>
          </Grid>
      </Grid>
    </Box>
    <Box sx={{ margin: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
      justifyContent:'center',
      alignItems:'center', textAlign:'right'}}>
          <Grid item xs={2} sm={4} md={4}>
              <Typography>Report disease or condition directly leading to death on line a</Typography>
          </Grid>
          <Grid item xs={4} sm={8} md={8}>
              {/* <TextField fullWidth  type="text"/> */}
              <ECTReactComponent />
          </Grid>

      </Grid>
    </Box>
    <Box sx={{ margin: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
      justifyContent:'center',
      alignItems:'center', textAlign:'right'}}>
  
          <Grid item xs={2} sm={4} md={4}>
              <Typography>A Time interval from onset to death</Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <TextField fullWidth  type="date"/>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <TextField sx={{}} fullWidth  type="time"/>
          </Grid>
     
      </Grid>
    </Box>
    <Box sx={{ margin: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
      justifyContent:'center',
      alignItems:'center', textAlign:'right'}}>
          <Grid item xs={2} sm={4} md={4}>
              <Typography>Reports chain of events in due to order if applicable b</Typography>
          </Grid>
          <Grid item xs={4} sm={8} md={8}>
              <TextField fullWidth  type="text"/>
          </Grid>
      </Grid>
    </Box>
    <Box sx={{ margin: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
      justifyContent:'center',
      alignItems:'center', textAlign:'right'}}>
  
          <Grid item xs={2} sm={4} md={4}>
              <Typography>B Time interval from onset to death</Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <TextField fullWidth  type="date"/>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <TextField sx={{}} fullWidth  type="time"/>
          </Grid>
     
      </Grid>
    </Box>
    <Box sx={{ margin: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
      justifyContent:'center',
      alignItems:'center', textAlign:'right'}}>
          <Grid item xs={2} sm={4} md={4}>
              <Typography>State the underlying cause on the lowest use line c</Typography>
          </Grid>
          <Grid item xs={4} sm={8} md={8}>
              <TextField fullWidth  type="text"/>
          </Grid>
      </Grid>
    </Box>
    <Box sx={{ margin: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
      justifyContent:'center',
      alignItems:'center', textAlign:'right'}}>
  
          <Grid item xs={2} sm={4} md={4}>
              <Typography>C Time interval from onset to death</Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <TextField fullWidth  type="date"/>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <TextField sx={{}} fullWidth  type="time"/>
          </Grid>
      </Grid>
    </Box>
    <Box sx={{ margin: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
      justifyContent:'center',
      alignItems:'center', textAlign:'right'}}>
          <Grid item xs={2} sm={4} md={4}>
              <Typography>D Due to</Typography>
          </Grid>
          <Grid item xs={4} sm={8} md={8}>
              <TextField fullWidth  type="text"/>
          </Grid>
      </Grid>
    </Box>
    <Box sx={{ margin: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
      justifyContent:'center',
      alignItems:'center', textAlign:'right'}}>
  
          <Grid item xs={2} sm={4} md={4}>
              <Typography>D Time interval from onset to death</Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <TextField fullWidth  type="date"/>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
              <TextField sx={{}} fullWidth  type="time"/>
          </Grid>
      </Grid>
    </Box>
    <Box sx={{ margin: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
      justifyContent:'center',
      alignItems:'center', textAlign:'right'}}>
          <Grid item xs={2} sm={4} md={4}>
              <Typography>Other significant conditions contributing to death time intervals can be included in brackets after the condition</Typography>
          </Grid>
          <Grid item xs={4} sm={8} md={8}>
              <TextField fullWidth  type="text"/>
          </Grid>
      </Grid>
    </Box>
    <Box >
    <Button >Save</Button>
    </Box>
    </Container>
  );
}

export default BasicTextFields