import React from 'react';
import clsx from 'clsx';

const Button = ({
    className, 
    label, 
    buttonType = "button",
    isLink = false,
    link = '',
    id,
}) => {
  if(isLink) {
    return (
      <a
        href={link}
        className={clsx('btn', className)}
        aria-label={label}
        id={id}
      >
        {label}
      </a>
    )
  } 
  return (
    <button
      type={buttonType}
      className={clsx('btn', className)}
      aria-label={label}
      id={id}
    >
        {label}
    </button>
  )
}

export default Button
