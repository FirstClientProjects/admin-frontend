import React from 'react';
import './AuthSubHeader.scss';

type Props = {
    paragraph: string
}

const AuthSubHeader = (props: Props) => {

  return (
    <p className='test auth-subheader'>{props.paragraph}</p>
  );

}

export default AuthSubHeader;