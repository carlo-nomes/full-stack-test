import styled from 'styled-components';
import { focus } from './state';

export const Input = styled.input<{ $fullWidth?: boolean }>`
    padding: 1rem;
    border: 2px solid #111;
    font-size: 1rem;
    border-radius: 0.25rem;
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

    ${focus}
`;
