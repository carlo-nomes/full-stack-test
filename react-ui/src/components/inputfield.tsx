import styled from 'styled-components';

type Props = {
    value: string;
    handleChange: (text: string) => void;
    onEnter?: () => void;
    placeholder: string;
};

const Inputfield = (props: Props) => {
    const { handleChange, placeholder, onEnter, value } = props;
    return (
        <StyledInput
            type="text"
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    onEnter && onEnter();
                }
            }}
            onChange={(e) => handleChange(e.target.value)}
            value={value}
            placeholder={placeholder}
        />
    );
};

export default Inputfield;

const StyledInput = styled.input`
    width: 100%;
    padding: 16px 20px;
    border: none;
    border-radius: 4px;
    background-color: #f1f1f1;
    font-size: 16px;
    box-sizing: border-box;
`;
