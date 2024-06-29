import React from 'react';
import './LoadingPage.scss';
import Logo from '../logo/Logo';
import Loading from '../loading/Loading';

const LoadingPage = () => {

  return (
    <div className='test loading-page'>
        <Logo />
        <Loading />
    </div>
  );

}

export default LoadingPage;