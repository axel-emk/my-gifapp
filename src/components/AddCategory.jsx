import { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState([ '']);

    const onInputChange = ( {target} ) => {
        // console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        // console.log(event);
        event.preventDefault();        
        if( inputValue.trim().length <= 1) return;
        // console.log(inputValue);
        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory(inputValue.trim());
        setInputValue('');


    }

    return (
        <form onSubmit={ onSubmit } action="">
            <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange= { onInputChange  }
            />


        </form>
    )
}

// TEst Proptypes - Esperar a una Function
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}