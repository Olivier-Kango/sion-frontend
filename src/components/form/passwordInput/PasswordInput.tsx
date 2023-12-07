import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import './PasswordInput.scss';

interface PasswordInputProps {
  state?: 'default' |  'disabled';
  id: string;
  placeholder?: string;
  label?: string;
  error?: boolean;
  success?: boolean;
  hint?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  state,
  id,
  placeholder,
  label,
  error,
  success,
  hint,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [password, setPassword] = useState('');
  // Password handling with eyes
  const [passwordShown, setPasswordShown] = React.useState<boolean>(false);
  const [dynamicFill, setDynamicFill] = useState('');

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isFocused) {
      setDynamicFill('active');
    } else {
      timer = setTimeout(() => {
        setDynamicFill('');
      }, 250);
    }

    return () => clearTimeout(timer);
  }, [isFocused]);

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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (state !== 'disabled') {
      setPassword(e.target.value);
      setIsFilled(!!e.target.value);
    }
  }

  const handleClear = () => {
    setPassword('');
    setIsFilled(false);
  }

  return (
    <div className="formGroup">
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
        {isFilled && (
          <div className="usernameDisplay">
            <span>{placeholder}</span>
          </div>
        )}

        <input
          type={passwordShown ? "text" : "password"}
          id={id}
          placeholder={placeholder}
          className={`inputControl ${isFilled ? dynamicInputFill : ''}`}
          value={password}
          onChange={handleOnChange}
          disabled={state === 'disabled'}
          readOnly={state === 'disabled'}
        />
{/* 
          {(dynamicFill || dynamicFocus || error || success) && 
            <Image
              src={'/closeX.svg'}
              alt="Close"
              width={24}
              height={24}
              className={`${
                error ? styles.closeIconError : 
                success ? styles.closeIconSuccess : 
                styles.closeIcon
              }`}
              onClick={handleClear}
            />
          } */}
          <div className="eye" onClick={togglePassword}>
              {passwordShown ? <AiFillEyeInvisible size={24} style={{ background: 'transparent' }} /> : <AiFillEye size={24} style={{ background: 'transparent' }} />}
          </div>
        </div>

      {hint && <small className="formText textMuted">Here&apos;s a hint that might help you.</small>}

      {/* {error && <div className={styles.errorMessage}>Password error!</div>} */}

      {success && <div className="successMessage">Password validated!</div>}
    </div>
  );
};

export default PasswordInput;
