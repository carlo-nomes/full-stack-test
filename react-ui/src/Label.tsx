import styled from 'styled-components';

const Label = styled.label`
    flex: 0 0 100px;
    text-align: right;
    margin-right: 0.5rem;

    &:after {
        content: ':';
    }
`;

export default Label;
