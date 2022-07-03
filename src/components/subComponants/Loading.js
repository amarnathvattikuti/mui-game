import React, { useState } from "react"; 
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 75,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
};

const Loading = () => {
    const [open, setOpen] = useState(true);
    setTimeout(() => {
        setOpen(false)
    }, 2000);

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <CircularProgress />
                </Box>
            </Modal>
        </div>
    )
}
export default Loading;