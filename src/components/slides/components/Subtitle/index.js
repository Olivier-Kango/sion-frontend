import React from 'react';
import classes from './index.module.css';

export default function Subtitle(props) {
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  return <h2 className={classes.Container}>{props.children}</h2>;
}
