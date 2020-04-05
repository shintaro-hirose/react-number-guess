import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function LongButton(props) {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(2),
      padding: theme.spacing(1),
      backgroundColor: "grey",
    },
  }));
  const classes = useStyles();

  return (
      <div>
        <Button className={classes.margin} onClick={props.onClick} size="large">
            {props.children}
        </Button>
      </div>
  );
}