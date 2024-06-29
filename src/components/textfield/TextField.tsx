import React from 'react';
import './TextField.scss';

type Props = {
    type: string,
    placeholder: string,
    onChange: () => void
}

const TextField = (props: Props) => {

  return (
    <input 
        className='test text-field' 
        placeholder={props.placeholder} 
        type={props.type}
        onChange={props.onChange}
    />
  );

}

export default TextField;