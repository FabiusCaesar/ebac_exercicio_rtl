import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários ao Post', () => {
        render(<PostComment />)

        const textarea = screen.getByTestId('textarea-coment')
        const botao = screen.getByTestId('btn-enviar')

        // Primeiro comentário
        fireEvent.change(textarea, { target: { value: 'Comentário 1' } })
        fireEvent.click(botao)

        // Segundo comentário
        fireEvent.change(textarea, { target: { value: 'Comentário 2' } })
        fireEvent.click(botao)

        // Verificações
        expect(screen.getByText('Comentário 1')).toBeInTheDocument()
        expect(screen.getByText('Comentário 2')).toBeInTheDocument()
    })
});
