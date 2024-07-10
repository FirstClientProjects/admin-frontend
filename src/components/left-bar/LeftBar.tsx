import React, { useState } from 'react';
import './LeftBar.scss';
import logo from '../../assets/images/logo-removebg.png';
import Section from '../section/Section';
import client from '../../assets/icons/client.png';
import developer from '../../assets/icons/developer.png';
import organization from '../../assets/icons/organization.png';
import project from '../../assets/icons/project.png';
import home from '../../assets/icons/home.png';
import { Link, NavLink } from 'react-router-dom';
import AuthButton from '../auth-btn/AuthButton';

interface Link{
    name: string,
    link: string,
    icon: string,
    active: boolean
}

const LeftBar = () => {

    const [links, setLinks] = useState<Link[]>([
        {
            name: 'Dashboard',
            link: '/dashboard/analytics',
            icon: home,
            active: true 
        },
        {
            name: 'Clients',
            link: '/dashboard/client-management',
            icon: client,
            active: false 
        },
        {
            name: 'Projects',
            link: '/dashboard/project-management',
            icon: project,
            active: false 
        },
        {
            name: 'Developers',
            link: '/dashboard/developer-management',
            icon: developer,
            active: false 
        },
        {
            name: 'Organizations',
            link: '/dashboard/organization-management',
            icon: organization,
            active: false 
        },
    ]);

    return (
        <div className='left-bar'>
            <Link to='/dashboard/analytics'>
                <img src={logo} alt='logo' className='logo'/>
            </Link>
            
            <Section marginTop='19px'>
                <hr className='hr'/>
            </Section>

            <div className='nav-section'>
                <h5 className='list-header'>MAIN</h5>
                {
                    links.map((link, index) => {
                        return (
                            <NavLink to={link.link}>
                                <div className='nav-button' key={index}>
                                    <img src={link.icon} alt='logo' className='nav-icon'/>
                                    <h5 className='nav-name'>{link.name}</h5>
                                </div>
                            </NavLink>
                        );
                    })
                }
            </div>

            <div className='logout'>
                <AuthButton onClick={() => {}} title='Logout'/>
            </div>

        </div>
    );

}

export default LeftBar;