import React from 'react';
import classNames from 'classnames';
import './Button.scss';

interface Props {
  children: React.ReactNode;
  primary?: boolean;
}

const Button: React.FC<Props> = ({ children, primary }) => {
  const btnClass = classNames('btn', { '-primary': primary });

  return (
    <button className={btnClass} type="button">
      {children}
    </button>
  );
};

export default Button;
