import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ECTReactComponent from './ECTReactComponent';
import { Box, Container, Grid, TextField, Typography } from '@mui/material';
function Modal({selectedData}) {
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
      Report disease A +
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><Typography>Report disease or condition directly leading to death on line a</Typography></DialogTitle>
        <DialogContent>
          <DialogContentText>
          <Container>
            <Box sx={{ margin: '10px' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
            justifyContent:'center',
            alignItems:'center'}}>
                <Grid item xs={4} sm={12} md={12}>
                    <ECTReactComponent />
                </Grid>
            </Grid>
            </Box>
            <Box>
            {selectedData && (
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
                <span style={{width: '60%', alignItems: 'flex-start'}}>{selectedData.title}</span>
                <input style={{width: '30%', float: 'left', margin: ' 0 5px',height: '25px'}} type="date" placeholder="Date"/>
                <button style={{width: '30px', height: '30px'}}>X</button>
                </div>
            )}
            </Box>
    {/* <Box sx={{ margin: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
      justifyContent:'center',
      alignItems:'center', textAlign:'right'}}>
          <Grid item xs={2} sm={6} md={6}>
              <Typography>Reports chain of events in due to order if applicable b</Typography>
          </Grid>
          <Grid item xs={4} sm={6} md={6}>
            <ECTReactComponent />
          </Grid>
      </Grid>
    </Box> */}
   
    {/* <Box sx={{ margin: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
      justifyContent:'center',
      alignItems:'center', textAlign:'right'}}>
          <Grid item xs={2} sm={6} md={6}>
              <Typography>State the underlying cause on the lowest use line c</Typography>
          </Grid>
          <Grid item xs={4} sm={6} md={6}>
            <ECTReactComponent />
          </Grid>
      </Grid>
    </Box> */}
    
    {/* <Box sx={{ margin: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
      justifyContent:'center',
      alignItems:'center', textAlign:'right'}}>
          <Grid item xs={2} sm={6} md={6}>
              <Typography>D Due to</Typography>
          </Grid>
          <Grid item xs={4} sm={6} md={6}>
            <ECTReactComponent />
          </Grid>
      </Grid>
    </Box> */}
    {/* <Box sx={{ margin: '10px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  display:'flex',
      justifyContent:'center',
      alignItems:'center', textAlign:'right'}}>
          <Grid item xs={2} sm={6} md={6}>
              <Typography>Other significant conditions contributing to death time intervals can be included in brackets after the condition</Typography>
          </Grid>
          <Grid item xs={4} sm={6} md={6}>
            <ECTReactComponent />
          </Grid>
      </Grid>
    </Box> */}
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

export default Modal