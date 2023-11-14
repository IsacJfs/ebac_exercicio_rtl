import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';
import Post from '.'

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});

describe('Teste para adicionar dois comentários', () =>{
    test('Receber dois comentários e renderizar dois comentários', () => {
        render(<Post/>)
        fireEvent.change(screen.getByTestId('area-comentario'), {
            target: {
                value: 'teste primeiro comentário'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))

        fireEvent.change(screen.getByTestId('area-comentario'), {
            target: {
                value: 'teste segundo comentário'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        expect(screen.getByText('teste primeiro comentário')).toBeInTheDocument()
        expect(screen.getByText('teste segundo comentário')).toBeInTheDocument()
    })
})