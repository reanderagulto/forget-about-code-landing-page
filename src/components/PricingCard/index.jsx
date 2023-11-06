import React from 'react';
import clsx from 'clsx';
import { features } from '@data/contents';
import { SVGCheckIcon } from '@components/SVG';
import Button from '@components/Button';


const PricingCard = ({
    name, 
    price, 
    currency, 
    planFeatures
}) => {
  return (
    <div className="pricing-card">
        <div className="pricing-card__plan">
            <span className="pricing-card__plan-name">{name}</span>
            <h3 className='pricing-card__plan-price'>
                {price} <span>{currency}</span>
            </h3>
        </div>
        <div className="pricing-card__features-container">
            {features && features.map((item, index) => {
                return (
                    <div 
                        key={index}
                        className={clsx(
                            "pricing-card__feature-item", 
                            planFeatures.includes(item) && "active"
                    )}>
                        {planFeatures.includes(item) && <SVGCheckIcon />}
                        {item}
                    </div>
                )
            })} 
        </div>
        <Button 
            id={'btn-' + name.toLowerCase()}
            className="btn__action-transparent"
            isLink={true}
            label="Get Started"
        />
    </div>
  )
}

export default PricingCard
