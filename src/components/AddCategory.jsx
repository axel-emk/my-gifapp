import { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState([ '']);

    const onInputChange = ( {target} ) => {
        // console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        // console.log('Hola mundo desde Submit');
        event.preventDefault();        
        if( inputValue.trim().length <= 1) return;
        // console.log(inputValue);
        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory(inputValue.trim());
        setInputValue('');


    }

    return (
        <>
              

        
            <form onSubmit={onSubmit} aria-label="form">
                <div className="input-group mb-3">
                    <button onClick={onSubmit}  className="btn btn-outline-secondary" type="button" id="button-addon1">Buscar</button>
                    <input className="input-group flex-nowrap form-control"
                    type="text"
                    placeholder="Buscar Gifs"
                    value={inputValue}
                    onChange={onInputChange} aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                </div>
            </form>


        {/*  */}
            {/* <form onSubmit={onSubmit} aria-label="form">
                <input className="input-group flex-nowrap form-control"
                    type="text"
                    placeholder="Buscar Gifs"
                    value={inputValue}
                    onChange={onInputChange}
                />


            </form> */}

        </>
    )
}

// TEst Proptypes - Esperar a una Function
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}