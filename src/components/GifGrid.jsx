import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    // console.log({ isLoading});
    

    return (
        <>
            <h3>{ category }</h3>

            {/* Loading */}
            {
                isLoading && (<h2>Cargando...</h2>)  
            }
            

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        // <li key={ id }>{ title }</li>
                        <GifItem 
                             key={image.id}
                             { ...image }
                            //  title={ image.title }
                            //  url={ image.url }
                        />
                    ))
                }

            </div>


        </>
    )
}