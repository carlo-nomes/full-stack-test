import styled, { css } from 'styled-components';

export const baseHeadingStyles = css`
    font-family: 'InterDisplay', 'Inter', sans-serif;
    font-weight: 900;
    line-height: 1.5;
    margin: 0;
`;

export const H1 = styled.h1`
    font-size: 6rem;
    ${baseHeadingStyles}
`;

export const H2 = styled.h2`
    font-size: 3rem;
    ${baseHeadingStyles}
`;

export const H3 = styled.h3`
    font-size: 2rem;
    ${baseHeadingStyles}
`;
