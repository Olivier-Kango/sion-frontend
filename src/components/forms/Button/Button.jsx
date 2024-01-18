import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  state = 'default',
  text = 'Button',
  showIcon = false,
  showText = true,
  size = 'medium',
  variant = 'primary',
}) => {
  let dynamicState = '';

  if (state === 'disabled') {
    dynamicState = 'disabled';
  } else if (state === 'loading') {
    dynamicState = 'loading';
  }

  let dynamicSize = '';

  if (size === 'large') {
    dynamicSize = 'largeSize';
  } else if (size === 'icon') {
    dynamicSize = 'iconSize';
  } else if (size === 'small') {
    dynamicSize = 'smallSize';
  }

  const dynamicVariant = variant;

  return (
    <button
      type="submit"
      className={`button ${dynamicState} ${dynamicSize} ${dynamicVariant} ${showIcon ? 'disableInteractions' : ''}`}
      disabled={state === 'disabled' || state === 'loading'}
    >
      {showIcon && ((variant === 'primary') || (variant === 'subtle' && size === 'icon')) && (
        <svg
          width={size === 'small' ? 16 : 24}
          height={size === 'small' ? 16 : 24}
          viewBox="0 0 20 20"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path
            d="M9.99967 1.66658C8.3515 1.66658 6.74033 2.15533 5.36992 3.071C3.99951 3.98668 2.93141 5.28817 2.30068 6.81089C1.66995 8.33361 1.50492 10.0092 1.82646 11.6257C2.14801 13.2422 2.94168 14.727 4.10712 15.8925C5.27255 17.0579 6.75741 17.8516 8.37392 18.1731C9.99043 18.4947 11.666 18.3296 13.1887 17.6989C14.7114 17.0682 16.0129 16.0001 16.9286 14.6297C17.8443 13.2593 18.333 11.6481 18.333 9.99992"
            stroke="#FCFCFC"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {showIcon && (variant === 'secondary' || (variant === 'subtle' && size !== 'icon') || (variant === 'text' && size === 'icon')) && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="iconG"
        >
          <path
            d="M9.99967 1.66658C8.3515 1.66658 6.74033 2.15533 5.36992 3.071C3.99951 3.98668 2.93141 5.28817 2.30068 6.81089C1.66995 8.33361 1.50492 10.0092 1.82646 11.6257C2.14801 13.2422 2.94168 14.727 4.10712 15.8925C5.27255 17.0579 6.75741 17.8516 8.37392 18.1731C9.99043 18.4947 11.666 18.3296 13.1887 17.6989C14.7114 17.0682 16.0129 16.0001 16.9286 14.6297C17.8443 13.2593 18.333 11.6481 18.333 9.99992"
            stroke="#60C1C6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {showIcon
        && (variant === 'text' && size !== 'icon') && (
          <span>Loading</span>
      )}

      {!showText && size === 'icon' && state !== 'loading' && (
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="iconForward">
          <path d="M1 1L7.96317 7.96317L1 14.9263" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {showText && size !== 'icon' && text}
    </button>
  );
};

Button.propTypes = {
  state: PropTypes.string,
  text: PropTypes.string,
  showIcon: PropTypes.bool,
  showText: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']), // Replace with possible size options
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']), // Replace with possible variant options
};

Button.defaultProps = {
  state: undefined,
  text: undefined,
  showIcon: undefined,
  showText: undefined,
  size: undefined,
  variant: undefined,
};

export default Button;
