import React, { useState } from 'react';
import './Analytics.scss';
import HeaderTitle from '../../components/header-title/HeaderTitle';
import folder from '../../assets/images/fav-folder-dynamic-premium.png';
import headphone from '../../assets/images/headphone-dynamic-premium.png';
import phone from '../../assets/images/phone-ringing-dynamic-premium.png';
import megaphone from '../../assets/images/megaphone-dynamic-premium.png';
import DashboardCard from '../../components/dashboard-card/DashboardCard';

interface Card {
  title: string,
  count: number,
  image: string,
}

const Analytics = () => {

  const [cards, setCards] = useState<Card[]>([
    {
      title: 'Clients',
      count: 234,
      image: folder,
    },
    {
      title: 'Projects',
      count: 3423,
      image: phone,
    },
    {
      title: 'Developers',
      count: 150,
      image: headphone,
    },
    {
      title: 'Organizations',
      count: 2342,
      image: megaphone,
    },
    {
      title: 'Organizations',
      count: 2342,
      image: megaphone,
    },
    {
      title: 'Organizations',
      count: 2342,
      image: megaphone,
    },
  ]);

  return (
    <div className='analytics test'>

      <HeaderTitle title='Dashboard'/>

      <div className='analytics-content test'>
        {
          cards.map((card, index) => {
            return (
              <DashboardCard
                key={index}
                title={card.title}
                count={card.count}
                image={card.image}
              />
            );
          })
        }        
      </div>

    </div>
  );

}

export default Analytics;