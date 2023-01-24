import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    &.loading {
        opacity: 0.5;
    }
`;

type Props = { loading?: boolean; children: ReactNode };

const Loading = ({ loading, children }: Props) => {
    return <Container className={loading ? 'loading' : ''}>{children}</Container>;
};

export default Loading;
