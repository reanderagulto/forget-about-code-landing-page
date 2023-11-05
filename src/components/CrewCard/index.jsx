import React from 'react';

const CrewCard = ({
    name, 
    position, 
    image,
    socials
}) => {
  return (
    <div className="crew-card">
        <img src={image} alt={name} className="crew-card__image" />
        <h3 className="crew-card__name">
          {name}
          <span className="crew-card__position">{position}</span>
        </h3>
        <div className="crew-card__socials">
          {socials && socials.map((item, index) => {
            return (
              <a 
                href={item.link} 
                className="crew-card__socials-item"
                key={index}
              >
                {item.name} 
                {item.icon}
              </a>
            )
          })}
        </div>
    </div>
  )
}

export default CrewCard
