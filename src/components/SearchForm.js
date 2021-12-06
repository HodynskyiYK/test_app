import React, { useState } from 'react';

const SearchForm = () => {
    const [fieldValue, setFieldValue] = useState('');

    const formHandler = (event) => {
        event.preventDefault();

        // const value = fieldValue;
        console.log(fieldValue);
        setFieldValue('');
    };

    return (
        <>
            <hr />
            <form 
                className="row align-items-end"
                onSubmit={formHandler}
            >
                <div className="form-group col-10">
                    <label htmlFor="defaultTitle">Enter title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="defaultTitle"
                        value={fieldValue}
                        onChange={event => setFieldValue(event.target.value)}
                    />
                </div>
                <div className="form-group col-2">
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                    >Submit</button>
                </div>
            </form>
        </>
    )
};

export default SearchForm;