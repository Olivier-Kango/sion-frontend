import classes from './index.module.css';

export default function Title(props) {
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  return <h1 className={classes.Container}>{props.children}</h1>;
}
