import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextareaAutosize, Typography } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Delete } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import ECTReactComponent from './ECTReactComponent';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
function ModalUI({
    index,
    
  }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open dialog
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Modal title
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <ECTReactComponent />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions>
                <li key={index}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={3}>
                            <Typography variant="h6" component="div">
                                {/* <b>{diagnosis.value}</b> */}
                                jkljdls
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <div className="diagnosis-notes">
                                <TextareaAutosize
                                    className="investigation-list-textarea"
                                    
                                    placeholder="Add Notes"
                                />
                            </div>
                        </Grid>
                        <Grid item xs={1} className="text-end">
                            <IconButton
                                
                                type="button"
                                className="cross-btn-red btn-sm me-3 diagnosis-btn"
                                aria-label="Close"
                            >
                                <Delete />
                            </IconButton>
                        </Grid>
                    </Grid>
                </li>
            </BootstrapDialog>
        </div>
    )
}

export default ModalUI