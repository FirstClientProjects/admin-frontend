import React from 'react';
import './AuthButton.scss';

type Props = {
    title: string,
    onClick?: () => void
}

const AuthButton = (props: Props) => {

  return (
    <button className='auth-btn test' onClick={props.onClick}>{props.title}</button>
  );

}

export default AuthButton;