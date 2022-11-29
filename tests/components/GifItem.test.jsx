import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {

    const title = 'Eren Jeger'
    const url = 'https://erenjeager.com'


    test('Debe de hacer match con el snapshot', () => {
        
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect ( container ).toMatchSnapshot();
    });
    
});