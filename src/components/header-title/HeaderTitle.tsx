import React from 'react';
import './HeaderTitle.scss';

type Props = {
    title: string
}

const HeaderTitle = (props: Props) => {

  return (
    <h2 className='title'>{props.title}</h2>
  );

}

export default HeaderTitle;