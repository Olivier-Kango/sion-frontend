import classes from './index.module.css';

export default function Wrapper(props) {
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  return <div className={classes.Container}>{props.children}</div>;
}
