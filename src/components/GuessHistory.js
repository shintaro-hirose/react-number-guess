import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    box: {
        textAlign: "left",
        margin:"20px 0",
        padding:"0 20px"
    },
  }));

export default function GuessHistory(props) {
  const classes = useStyles();

  const history = props.history;

  return (
      <div>
        <Typography>予想履歴</Typography>
        <Box className={classes.box}>
          {
            history.map((guess, index) => 
            <Box key={index} marginBottom="10px">
              <Typography variant="h5">
                {index+1}.  {guess[0]}{guess[1]}:  {guess[2]}
              </Typography>
            </Box>
            )
          }
        </Box>
      </div>
  );
}