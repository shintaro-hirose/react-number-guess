import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function NumberButton(props) {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
      backgroundColor: "#f48fb1",
    },
  }));
  const classes = useStyles();

  return (
      <div>
        <Button className={classes.margin} onClick={props.onClick}>
            {props.children}
        </Button>
      </div>
  );
}