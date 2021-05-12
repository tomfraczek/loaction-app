import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './custom-form.styles.scss';

const CustomForm = ({handleChange, handleSubmit, search}) => {
    return(
        <div className="custom-form">
            <form className='search-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='text'
                    name='search'
                    value={search}
                    onChange={handleChange}
                    placeholder='Search'
                    required
                />
                
                <CustomButton type='submit'>Search</CustomButton>
            </form>
        </div>
    )
}

export default CustomForm;