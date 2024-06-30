import React from 'react';
import './TextField.scss';

type Props = {
    type: string,
    placeholder: string,
    value: string,
    onChange: (value: string) => void
}

const TextField = (props: Props) => {

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log('Event:', event); // Check the event object
    console.log('Value:', event.target.value); // Check the value being passed
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  }

  return (
    <input 
        className='test text-field' 
        placeholder={props.placeholder} 
        type={props.type}
        onChange={handleChange}
        value={props.value}
    />
  );

}

export default TextField;