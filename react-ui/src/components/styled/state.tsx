import { css } from 'styled-components';

export const focus = css`
    :focus {
        outline: 2px solid #ddd;
        outline-offset: 2px;
    }
`;

export const danger = css`
    background-color: #f56565;
    color: #fff;
`;

export const success = css`
    background-color: #48bb78;
    color: #fff;
`;
