import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='form-input'>
        <input onChange={handleChange} {...otherProps} />
    </div>
)

export default FormInput;