import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
import './UsernameInput.scss'

interface UsernameInputProps {
  state?: 'default' |  'disabled';
  id: string;
  placeholder?: string;
  label?: string;
  error?: boolean;
  success?: boolean;
  hint?: boolean;
}

const UsernameInput: React.FC<UsernameInputProps> = ({
  state, // The "state" prop can be 'default' or 'disabled'
  id, // The "id" prop is required for the "for" attribute of the label tag and the "id" of the input
  placeholder, // The "placeholder" prop is the placeholder text inside the input
  label, // The "label" prop is the text of the label associated with the input
  error, // The "error" prop is a boolean indicating whether there is an error
  success, // The "success" prop is a boolean indicating if the input has passed validation
  hint, // The "hint" prop is a boolean indicating if additional information is displayed
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [dynamicFill, setDynamicFill] = useState('');

   // Update dynamicFillClass after 0.25 seconds when isFilled changes
   useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isFocused) {
      setDynamicFill('active');
    } else {
      timer = setTimeout(() => {
        setDynamicFill('');
      }, 250);
    }
  }, [isFocused]);

  // Determine the dynamic values based on the logic
  const dynamicState = state === 'disabled' ? 'disabled' : '';
  const dynamicFocus = isFocused ? 'active' : '';
  const dynamicInputFill = isFilled ? 'inputFill' : '';
  const dynamicError = error ? 'error' : '';
  const dynamicSuccess = success ? 'success' : '';

  const handleFocus = () => {
    if (error || state === 'disabled') {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setIsFilled(!!event.target.value);
  };

  const handleOnchange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    if (state !== 'disabled') {
      setFirstName(e.target.value);
      setIsFilled(!!e.target.value);
    }
  }

  const handleClear = () => {
    setFirstName('');
    setIsFilled(false);
  }

  return (
    <div className="formGroup">
      {/* Label associated with the input */}
      <label htmlFor={id}>{label}</label>
         
      <div 
        className={`
          inputContainer
          ${dynamicFocus || !error}
          ${dynamicState} 
          ${dynamicError} 
          ${dynamicSuccess} 
        `}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {/* Username display at the top right */}
        {isFilled && (
          <div className="usernameDisplay">
            <span>{placeholder}</span>
          </div>
        )}

        <input
          type="text"
          id={id}
          placeholder={placeholder}
          className={`inputControl ${isFilled ? dynamicInputFill : ''}`}
          value={firstName}
          onChange={handleOnchange}
          disabled={state === 'disabled'} // Disable the input when in the 'disabled' state
          readOnly={state === 'disabled'} // Make the input read-only when in the 'disabled' state
        />

        {(dynamicFill || dynamicFocus || error || success) && 
          // <Image
          //   src={'/closeX.svg'}
          //   alt="Close"
          //   width={24}
          //   height={24}
          //   className={`${
          //     error ? styles.closeIconError : 
          //     success ? styles.closeIconSuccess : 
          //     styles.closeIcon
          //   }`}
          //   onClick={handleClear}
          // />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              error ? 'closeIconError' : 
              success ? 'closeIconSuccess' : 
              'closeIcon'
            }`}
            onClick={handleClear}
          >
            <path d="M6 6L18.7742 18.7742" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 18.7742L18.7742 5.99998" stroke="#14142B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        }
      </div>

      {/* Displays additional information at the bottom of the field */}
      {hint && <small className="formText textMuted">Here&apos;s a hint that might help you.</small>}

      {/* Displays an error message if "error" is true */}
      {/* {error && <div className={styles.errorMessage}>Username taken.</div>} */}

      {/* Displays a success message if "success" is true */}
      {success && <div className="successMessage">Username available!</div>}
    </div>
  );
};

export default UsernameInput;
