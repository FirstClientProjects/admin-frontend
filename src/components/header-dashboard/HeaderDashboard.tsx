import React from 'react';
import './HeaderDashboard.scss';
import logo from '../../assets/icons/question.png';

const HeaderDashboard = () => {
  return (
    <div className='header-dashboard'>

        <div className='icons'>
            <div className='icon'>
                <img src={logo} alt="logo" className='logo'/>
            </div>
        </div>

    </div>
  )
}

export default HeaderDashboard