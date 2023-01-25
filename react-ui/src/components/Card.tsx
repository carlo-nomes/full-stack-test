import styled from 'styled-components';

type Props = {
    children: JSX.Element;
};

const Card = (props: Props) => {
    return <StyledCard>{props.children}</StyledCard>;
};

export default Card;

const StyledCard = styled.div`
    background-color: white;
    max-width: 576px;
    width: 100%;
    padding: 24px;
    border-radius: 14px;
    filter: drop-shadow(0px 16px 0.75rem lightblue);
`;
