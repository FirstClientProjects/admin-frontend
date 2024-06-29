import React from 'react';
import './NotFound.scss';
import Lottie from "lottie-react";
import notfoundanim from '../../assets/lotties/notfoundanim.json';

const NotFound = () => {

  return (
    <div className='test not-found'>
        <Lottie className='anim' animationData={notfoundanim} loop={true} />
    </div>
  );

}

export default NotFound;