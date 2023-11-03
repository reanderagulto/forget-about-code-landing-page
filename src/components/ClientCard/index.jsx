import React from 'react';
import clsx from 'clsx';

const ClientCard = ({
    name,
    image, 
    desc 
}) => {
  return (
    <div className="client-card">
        <img src={image} alt="name" className="client-card__image" />
        <div className="client-card__info">
            <div className="client-card__info--desc">
                {desc}
            </div>
            <div className="client-card__info--name">
                {name}
            </div>
        </div>
    </div>
  )
}

export default ClientCard
