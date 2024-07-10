import React from 'react';
import './HeaderDashboard.scss';
import profile from '../../assets/icons/profile.png';
import question from '../../assets/icons/question.png';
import settings from '../../assets/icons/settings.png';
import CirculerIcon from '../circuler-icon/CirculerIcon';

const HeaderDashboard = () => {
  return (
    <div className='header-dashboard'>

        <div className='header-profile'>
            <div className="left">
                <CirculerIcon icon={profile} tooltip='Profile' navigate='/dashboard/profile'/>
            </div>
            <div className="right">
                <h5 className="welcome-text">Welcome,</h5>
                <h5 className="name">
                    Jeral Sandeeptha
                </h5>
            </div>
        </div>

        <div className='icons'>
            <CirculerIcon icon={question} tooltip='Help' navigate='/dashboard/help'/>
            <CirculerIcon icon={settings} tooltip='Settings' navigate='/dashboard/settings'/>
        </div>

    </div>
  )
}

export default HeaderDashboard