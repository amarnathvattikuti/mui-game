import React from 'react';
import Dialog from '@mui/material/Dialog';
//import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Cards from './cards';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {

  const [openCards, setOpenCards] = React.useState(false);

  const promise = new Promise(function (resolve) {
    resolve()
  })
  promise.then(
    setTimeout(() => {
      setOpenCards(true);
    }, 2000)
  )
  const handleClose = () => {
    setOpenCards(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={openCards}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="div" component="div">
              Select team to create
            </Typography>

          </Toolbar>
        </AppBar>
        <Cards openCards={openCards} setOpenCards={setOpenCards} />
      </Dialog>
    </div>
  );
}
