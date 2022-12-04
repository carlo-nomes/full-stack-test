import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;

    &.loading {
        opacity: 0.5;
        pointer-events: none;

        &::after {
            content: 'loading...';

            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

type Props = PropsWithChildren<{ loading?: boolean }>;

const Loading = ({ loading, children }: Props) => {
    return <Wrapper className={loading ? 'loading' : ''}>{children}</Wrapper>;
};

export default Loading;
