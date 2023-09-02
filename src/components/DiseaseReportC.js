import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ECTReactComponent from './ECTReactComponent';
import { Box, Container, Grid, Typography } from '@mui/material';

function DiseaseReportC({setSelectedDataC}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
    Report disease C +
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle><Typography>State the underlying cause on the lowest use line c</Typography></DialogTitle>
      <DialogContent>
        <DialogContentText>
        <Container>
  
  <Box sx={{ margin: '10px' }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
    justifyContent:'center',
    alignItems:'center', textAlign:'left'}}>
        
        <Grid item xs={4} sm={12} md={12}>
            <ECTReactComponent />
        </Grid>
    </Grid>
  </Box>
  <Box>
  {setSelectedDataC && (
      <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
        <span style={{width: '60%', alignItems: 'flex-start'}}>{setSelectedDataC.title}</span>
        <input style={{width: '30%', float: 'left', margin: ' 0 5px',height: '25px'}} type="date" placeholder="Date"/>
        <button style={{width: '30px', height: '30px'}}>X</button>
      </div>
    )}
  </Box>
  
  </Container>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        <Button onClick={handleClose} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default DiseaseReportC