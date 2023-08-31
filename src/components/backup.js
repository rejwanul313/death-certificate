import React, { useState } from 'react';
import { TextField, Grid, Typography, Box } from '@mui/material';


function OldDeathUI() {
    const [deathDate, setDeathDate] = useState('');
    const [deathTime, setDeathTime] = useState('');
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleDateChange = (event) => {
      setDeathDate(event.target.value);
    };
  
    const handleTimeChange = (event) => {
      setDeathTime(event.target.value);
    };
  
    const handleSubmit = () => {
      // Handle form submission with deathDate and deathTime values
    };
  
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'left' }}>
      <Typography sx={{color: 'red', width: '150px'}} variant="h6">Date and Time of Death</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="death-date"
            type="date"
            value={deathDate}
            onChange={handleDateChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="death-time"
            type="time"
            value={deathTime}
            onChange={handleTimeChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 minute intervals
            }}
          />
        </Grid>
      </Grid>
    </Box>
    {/* <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box> */}
  </>
  )
}

export default OldDeathUI