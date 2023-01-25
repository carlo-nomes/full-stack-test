import styled from 'styled-components';

interface ICheckbox {
    checked: boolean;
}

export const Checkbox = styled.input.attrs({
    type: 'checkbox',
})<ICheckbox>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')}
  border-radius: 3px;
`;
export const Button = styled.button`
    background: #ad232a;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
`;

export const TextInput = styled.input.attrs({
    type: 'text',
    name: 'todo',
})`
    border-radius: 3px;
`;

export const SubmitButton = styled.input.attrs({
    type: 'submit',
    value: 'Submit',
})`
    border-radius: 3px;
`;
