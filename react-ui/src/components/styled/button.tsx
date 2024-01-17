import styled from 'styled-components';
import { focus } from './state';

export const Button = styled.button<{
    $appearance?: 'primary' | 'secondary' | 'text';
    $size?: 'small' | 'medium' | 'large';
    $fullWidth?: boolean;
}>`
    background-color: ${({ $appearance }) => ($appearance === 'primary' ? '#111' : '#fff')};
    color: ${({ $appearance }) => ($appearance === 'primary' ? '#fff' : '#111')};
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
    border: ${({ $appearance }) => ($appearance !== 'text' ? '2px solid #111' : 'none')};
    padding: ${({ $size }) => {
        switch ($size) {
            case 'small':
                return '0.5rem 1rem';
            case 'large':
                return '1.5rem 2rem';
            default:
                return '1rem 1.5rem';
        }
    }};
    font-size: ${({ $size }) => {
        switch ($size) {
            case 'small':
                return '0.75rem';
            case 'large':
                return '1.25rem';
            default:
                return '1rem';
        }
    }};
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
    text-transform: none;
    white-space: nowrap;
    text-align: start;

    ${focus}
`;
