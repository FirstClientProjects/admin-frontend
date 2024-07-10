import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login';
import ForgotPassword from '../pages/forgot-password/ForgotPassword';
import ChangePassword from '../pages/change-password/ChangePassword';
import Dashboard from '../pages/dashboard/Dashboard';
import Landing from '../pages/landing/Landing';
import NotFound from '../pages/not-found/NotFound';
import OrganizationManagement from '../pages/organization-management/OrganizationManagement';
import ProjectManagement from '../pages/project-management/ProjectManagement';
import DeveloperManagement from '../pages/developer-management/DeveloperManagement';
import ClientManagement from '../pages/client-management/ClientManagement';
import Analytics from '../pages/analytics/Analytics';
import Profile from '../pages/profile/Profile';

const Navigation = () => {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Landing}/>
        <Route path='/login' Component={Login}/>
        <Route path='/forgot-password' Component={ForgotPassword}/>
        <Route path='/change-password/:userEmail' Component={ChangePassword}/>
        <Route path='/dashboard/*' Component={Dashboard}>
          <Route path='analytics' Component={Analytics}/>
          <Route path='profile' Component={Profile}/>
          <Route path='client-management' Component={ClientManagement}/>
          <Route path='developer-management' Component={DeveloperManagement}/>
          <Route path='project-management' Component={ProjectManagement}/>
          <Route path='organization-management' Component={OrganizationManagement}/>
        </Route>
        <Route path='*' Component={NotFound}/>
      </Routes>
    </BrowserRouter>
  );

}

export default Navigation;