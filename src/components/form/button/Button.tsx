// components/forms/TextInput.js
import React, { useState } from 'react';
import './Button.scss'

interface ButtonProps {
  state?: 'default' | 'loading' | 'disabled';
  text?: string;
  showText?: boolean;
  showIcon?: boolean;
  icon?: string;
  size: 'small' | 'medium' | 'large' | 'icon'; 
  variant: 'primary' | 'secondary' | 'subtle' | 'text'; 
}
const Button: React.FC<ButtonProps> = ({
  state = 'default',
  text = 'Button',
  showIcon = false,
  showText = true,
  icon = '/loading.svg',
  size = 'medium',
  variant = 'primary',
}) => {
  const dynamicState = state === 'disabled' ? 'disabled' : state === 'loading' ? 'loading' : '';
  const dynamicSize = size === 'large' ? 'largeSize' : size === 'icon' ? 'iconSize' : size === 'small' ? 'smallSize' : '';
  const dynamicVariant = variant;
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    // Add your other click logic here
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  if (state === 'loading') {
    showIcon = true,
    showText = !showIcon;
  }

  return (
    <button
      className={`button ${dynamicState} ${dynamicSize} ${dynamicVariant} ${showIcon ? styles.disableInteractions : ''}`}
      disabled={state === 'disabled' || state === 'loading'}
      onClick={handleClick}
      onBlur={handleBlur}
    >
      {showIcon && (variant === 'primary' || variant === 'subtle' && size === 'icon') && (
        <Image
          src={icon}
          alt="Button Icon"
          width={size === 'small' ? 16: 24}
          height={size === 'small' ? 16: 24}
          className={styles.icon}
        />
      )}
      {showIcon && (variant === 'secondary' || variant === 'subtle' && size !== 'icon' || variant === 'text' && size === 'icon') && (
        <Image
          src={'/LoadingG.svg'}
          alt="Button Icon"
          width={24}
          height={24}
          className={styles.iconG}
        />
      )}
      {showIcon && (variant === 'text' && size !== 'icon') && (
        <span>Loading</span>
      )}
      {showText && size !== 'icon' ? 
        text 
        : size === 'icon' && state !== 'loading' ?
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconForward}>
            <path d="M1 1L7.96317 7.96317L1 14.9263" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        :
      ''}
    </button>
  );
};

export default Button;