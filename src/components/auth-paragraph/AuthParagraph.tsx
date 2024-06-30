import React from 'react';
import './AuthParagraph.scss';

type Props = {
    paragraph: number | string
}

const AuthParagraph = (props: Props) => {

  return (
    <p className='test auth-paragraph'>{props.paragraph}</p>
  );

}

export default AuthParagraph;