import React, { useState } from 'react';
import styled from 'styled-components';

const AddItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ErrorSpan = styled.span`
    color: red;
    font-weight: bold;
`;

interface AddItemFormProps {
    titleRef: React.RefObject<HTMLInputElement>;
    handleAddTodo: () => void;
}

const AddItem = ({ titleRef, handleAddTodo }: AddItemFormProps) => {
    const [error, setError] = useState<boolean>(false);

    const addItem = () => {
        if (!titleRef.current?.value) {
            setError(true);
            return;
        }
        setError(false);
        handleAddTodo();
    };

    return (
        <>
            <AddItemContainer>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" ref={titleRef} />
                </div>
                {error && <ErrorSpan>Enter a title for the todo</ErrorSpan>}
                <button onClick={() => addItem()}>Add Todo</button>
            </AddItemContainer>
        </>
    );
};

export default AddItem;
