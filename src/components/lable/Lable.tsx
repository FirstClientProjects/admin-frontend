import React from 'react';
import './Lable.scss';

type Props = {
  title: string
}

const Lable = (props: Props) => {

  return (
    <h4 className='test lable'>{props.title}</h4>
  );

}

export default Lable;