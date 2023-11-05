import React from 'react';
import Input from '@components/Input';
import Button from '../components/Button';
import { pricingPlans } from '@data/contents';
import ClientCard from '@components/ClientCard';
import CrewCard from '@components/CrewCard';
import PricingCard from '@components/PricingCard';

const Homepage = () => {
    return (
        <div className="container" style={{
            background: '#000'
        }}>
            {pricingPlans && pricingPlans.map((item, index) => {
                return (
                    <PricingCard 
                        key={index}
                        name={item.name}
                        price={item.price}
                        currency={item.currency}
                        planFeatures={item.features}
                    />
                )
            })}
        </div>
    )
}

export default Homepage
