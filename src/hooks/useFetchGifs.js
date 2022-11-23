import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Custom Hooks - Funcion que regresa algo(return)
export const useFetchGifs = ( category ) => {

    // const [counter, setCounter] = useState(10);
    const [images, setImages] = useState ([]);
    const [isLoading, setIsLoading] = useState (true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    // Hook useEffect
    useEffect(() => {
        getImages();
    }, [])


    return {
        images,
        isLoading
    }
}