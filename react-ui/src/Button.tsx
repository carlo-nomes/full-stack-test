import styled from 'styled-components';

const Button = styled.button`
    min-width: 100px;

    cursor: pointer;
    padding: 0.5rem;
    margin-left: 0.5rem;

    border: 1px solid #eee;
    border-radius: 4px;
    background: #fff;

    &.danger {
        color: #f00;
    }
`;

export default Button;
