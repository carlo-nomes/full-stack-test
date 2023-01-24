import styled from 'styled-components';

const Container = styled.div`
    background-color: red;
    opacity: 0.5;
    width: 40%;
    border: 1px;
    border-radius: 5px;
    padding: 5px 10px;
    line-height: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

type Props = {
    error: string;
    reset?: () => void;
};

export const Error = ({ error, reset }: Props) => {
    return (
        <Container>
            <p>Error: {error}</p>
            {reset && <span onClick={() => reset()}>{'X'}</span>}
        </Container>
    );
};

export default Error;
