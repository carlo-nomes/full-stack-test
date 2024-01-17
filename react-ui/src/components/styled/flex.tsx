import styled from 'styled-components';

export const Flex = styled.div<{ $direction: 'row' | 'column'; $gap: number }>`
    display: flex;
    flex-direction: ${(props) => props.$direction};
    gap: ${(props) => props.$gap}px;
`;
