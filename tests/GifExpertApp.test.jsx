// Tarea Test

import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';



describe('Pruebas en <GifExpertApp />', () => {
    
    test('Esta prueba no debe fallar', () => {

        
        render( <GifExpertApp />);
        screen.debug();
        
    });
    
});