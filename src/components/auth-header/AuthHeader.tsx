import React from 'react';
import './AuthHeader.scss';

type Props = {
  title: string
}

const AuthHeader = (props: Props) => {

  return (
    <h1 className='test auth-header'>{props.title}</h1>
  );

}

export default AuthHeader;