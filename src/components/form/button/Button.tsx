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
  // icon = '/loading.svg',
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
      className={`button ${dynamicState} ${dynamicSize} ${dynamicVariant} ${showIcon ? 'disableInteractions' : ''}`}
      disabled={state === 'disabled' || state === 'loading'}
      onClick={handleClick}
      onBlur={handleBlur}
    >
      {showIcon && (variant === 'primary' || variant === 'subtle' && size === 'icon') && (
        // <Image
        //   src={icon}
        //   alt="Button Icon"
        //   width={size === 'small' ? 16: 24}
        //   height={size === 'small' ? 16: 24}
        //   className="icon"
        // />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.99967 1.66658C8.3515 1.66658 6.74033 2.15533 5.36992 3.071C3.99951 3.98668 2.93141 5.28817 2.30068 6.81089C1.66995 8.33361 1.50492 10.0092 1.82646 11.6257C2.14801 13.2422 2.94168 14.727 4.10712 15.8925C5.27255 17.0579 6.75741 17.8516 8.37392 18.1731C9.99043 18.4947 11.666 18.3296 13.1887 17.6989C14.7114 17.0682 16.0129 16.0001 16.9286 14.6297C17.8443 13.2593 18.333 11.6481 18.333 9.99992" stroke="#FCFCFC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      )}
      {showIcon && (variant === 'secondary' || variant === 'subtle' && size !== 'icon' || variant === 'text' && size === 'icon') && (
        // <Image
        //   src={'/LoadingG.svg'}
        //   alt="Button Icon"
        //   width={24}
        //   height={24}
        //   className={styles.iconG}
        // />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.99967 1.66658C8.3515 1.66658 6.74033 2.15533 5.36992 3.071C3.99951 3.98668 2.93141 5.28817 2.30068 6.81089C1.66995 8.33361 1.50492 10.0092 1.82646 11.6257C2.14801 13.2422 2.94168 14.727 4.10712 15.8925C5.27255 17.0579 6.75741 17.8516 8.37392 18.1731C9.99043 18.4947 11.666 18.3296 13.1887 17.6989C14.7114 17.0682 16.0129 16.0001 16.9286 14.6297C17.8443 13.2593 18.333 11.6481 18.333 9.99992" stroke="#60C1C6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      )}
      {showIcon && (variant === 'text' && size !== 'icon') && (
        <span>Loading</span>
      )}
      {showText && size !== 'icon' ? 
        text 
        : size === 'icon' && state !== 'loading' ?
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="iconForward">
            <path d="M1 1L7.96317 7.96317L1 14.9263" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        :
      ''}
    </button>
  );
};

export default Button;