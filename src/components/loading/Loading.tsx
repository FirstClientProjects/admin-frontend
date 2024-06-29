import React from 'react';
import './Loading.scss';
import Lottie from "lottie-react";
import loadingAnim from '../../assets/lotties/loading-one.json';

const Loading = () => {

  return (
    <Lottie className='test loadingAnim' animationData={loadingAnim} loop={true} />
  );

}

export default Loading;