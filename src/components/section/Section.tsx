import React, { ReactNode } from 'react';
import './Section.scss';

type Props = {
    marginTop?: string,
    marginBottom?: string,
    children?: ReactNode;
}

const Section = (props: Props) => {

  return (
    <div className='test' style={{
        marginTop: props.marginTop,
        marginBottom: props.marginBottom
    }}>
      { props.children }
    </div>
  );

}

export default Section;