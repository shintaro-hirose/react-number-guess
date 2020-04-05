import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    box: {
        width: "100%",
        margin: "10px auto",
    },
  }));

export default function Display(props) {
  const classes = useStyles();

  return (
      <div>
       <Box className={classes.box}>
           <Typography variant="h3">
                {props.children}
           </Typography>
       </Box>
      </div>
  );
}