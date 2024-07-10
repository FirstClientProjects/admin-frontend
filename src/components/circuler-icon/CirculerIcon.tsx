import React from 'react';
import './CirculerIcon.scss';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

type Props = {
    icon: string,
    navigate: string
    tooltip?: string,
}

const CirculerIcon = (props: Props) => {

  return (
    <Tooltip title={props.tooltip} arrow>
        <Link to={props.navigate}>
            <div className='icon'>
                <img src={props.icon} alt="logo" className='logo'/>
            </div>
        </Link>
    </Tooltip>
  );

}

export default CirculerIcon;