import { useState } from "react";
import { AddCategory, GifGrid,  } from "./components";



export const GifExpertApp = () => {

    // Hooks useState - espacio de memoria (almacenar) para manejar categorias
    const [categories, setCategories] = useState([ 'Messi' ]);

    // Agregar categoria atravez de setcategoria
    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return;

        // console.log(newCategory);
        // categories.push(newCategory);
        setCategories([newCategory, ...categories]);
    }


    return (
        <>
        
        {/* Título */}
        <h1>GifApp</h1>       
            

        {/* Input */}
        <AddCategory 
            onNewCategory={ (value) => onAddCategory(value) }
        />

        {/* Listado Card-Gif */}
        {/* <button onClick={ onAddCategory} >Agregar </button> */}
        
        { categories.map( category => (
                <GifGrid key={ category } category={ category } />
            )) 
        }
        {/* <li></li> */}
    
        {/* Gif Item */}


        </>
    )
}