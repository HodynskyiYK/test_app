import React, { useState } from 'react';

const SearchForm = () => {
    const [value, setValue] = useState('');

    const formHandler = (event) => {
        event.preventDefault();

        console.log(value);
        setValue('');
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
                        placeholder="Ener title"
                        id="defaultTitle"
                        value={value}
                        onChange={event => setValue(event.target.value)}
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