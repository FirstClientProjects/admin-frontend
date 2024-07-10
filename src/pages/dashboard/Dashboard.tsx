import React from 'react';
import './Dashboard.scss';
import { Outlet } from 'react-router-dom';
import LeftBar from '../../components/left-bar/LeftBar';
import HeaderDashboard from '../../components/header-dashboard/HeaderDashboard';

const Dashboard = () => {

  return (
    <div className='dashboard'>
      <div className="left-dashboard">
        <LeftBar />
      </div>
      <div className="right-dashboard">
        <div className="header-dashboard">
          <HeaderDashboard />
        </div>
        <div className="content-dashboard">
          <Outlet />
        </div>
      </div>
    </div>
  );

}

export default Dashboard