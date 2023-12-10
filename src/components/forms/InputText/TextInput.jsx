// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import './TextInput.scss';

// const TextInput = ({
//   state = 'default',
//   id = '',
//   placeholder = '',
//   label = '',
//   error = false,
//   success = false,
//   hint = false,
//   className = '',
// }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [isFilled, setIsFilled] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [dynamicFill, setDynamicFill] = useState('');

//   // Update dynamicFillClass after 0.25 seconds when isFilled changes
//   useEffect(() => {
//     let timer;
//     if (isFocused) {
//       setDynamicFill(styles.active);
//     } else {
//       timer = setTimeout(() => {
//         setDynamicFill('');
//       }, 250);
//     }
//   }, [isFocused]);

//   return (
//     <input
//       type="email"
//       name="email"
//       placeholder="Email"
//       required
//       className="inputEmail appearance-none block bg-gray-200 text-gray-700 border text-center
// border-red-500 rounded p-3 mb-2 leading-tight focus:outline-none focus:bg-white"
//     />
//   );
// };

// TextInput.propTypes = {
//   state: PropTypes.string,
//   id: PropTypes.string,
//   placeholder: PropTypes.string,
//   label: PropTypes.string,
//   error: PropTypes.bool,
//   success: PropTypes.bool,
//   hint: PropTypes.bool,
//   size: PropTypes.oneOf(['small', 'medium', 'large']), // Replace with possible size options
//   variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
// };

// // state = 'default',
// // id = '',
// // placeholder = '',
// // label = '',
// // error = false,
// // success = false,
// // hint = false,
// // className = '',

// TextInput.defaultProps = {
//   state: undefined,
//   text: undefined,
//   showIcon: undefined,
//   showText: undefined,
//   size: undefined,
//   variant: undefined,
// };

// export default TextInput;
