import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const guessTimes = props.guessTimes;
  const answer = props.answer;

  const open = props.open
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} >
              <Box marginBottom="30px" id="transition-modal-title">
                <Typography  variant="h4">正解です！</Typography>
              </Box>
              <Box  id="transition-modal-description">
                <Typography variant="h5">正解の数字:　{answer}</Typography>
                <Typography variant="h5">正解までの質問数：　{guessTimes}</Typography>
              </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}