import React from 'react'; 
import clsx from 'clsx';

const Input = ({
    className, 
    inputType = "text", 
    placeholder = "", 
    id,
    resize = false //For Textarea
}) => {
    if(inputType !== 'textarea') {
        return (
            <input 
                type={inputType} 
                id={id}
                className={clsx('form-input', className)}
                placeholder={placeholder}
            />
        )
    }
    return (
        <textarea 
            id={id}
            className={clsx('form-input', className)}
            placeholder={placeholder}
            style={{
                resize: resize === false && 'none'
            }}
        ></textarea>
    )
}

export default Input
