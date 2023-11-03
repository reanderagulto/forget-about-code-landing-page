import React from 'react';
import Input from '@components/Input';
import Button from '../components/Button';
import { listOfReviews } from '@data/contents';
import ClientCard from '@components/ClientCard';

{/* <Input 
    className="form-input__lg"
    placeholder="Your Email"
    id="your_email"
/>
<Button 
    buttonType="button"
    className="btn__action-primary"
    id="btn-submit"
    label="Submit"
/> */}

const Homepage = () => {
    return (
        <div className="container" style={{
            background: '#000'
        }}>
            {listOfReviews && listOfReviews.map((item, index) => {
                return (
                    <ClientCard 
                        key={index}
                        name={item.name}
                        image={item.image}
                        desc={item.review}
                    />
                )
            })}
        </div>
    )
}

export default Homepage
