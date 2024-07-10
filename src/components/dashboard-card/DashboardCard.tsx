import React from 'react';
import './DashboardCard.scss';
import { Tooltip } from '@mui/material';

type Props = {
    title: string,
    count: number,
    image: string,
}

const DashboardCard = (props: Props) => {

  return (
    <Tooltip title={props.title} arrow>
        <div className='dashboard-card test'>
            <h1 className="card-title test">{props.title}</h1>
            <h5 className="card-count test">{props.count}</h5>
            <img src={props.image} alt="card-image" className="card-image test" />
        </div>
    </Tooltip>
  );

}

export default DashboardCard;