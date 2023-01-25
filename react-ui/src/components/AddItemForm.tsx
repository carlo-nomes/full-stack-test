import React, { useState } from "react";

interface AddItemFormProps {
    titleRef: React.RefObject<HTMLInputElement>;
    handleAddTodo: () => void;
}

const AddItemForm = ({titleRef, handleAddTodo}: AddItemFormProps) => {
    const [error, setError] = useState<boolean>(false);

    const addItem = () => {
        if (!titleRef.current?.value) {
            setError(true);
            return;
        }
        setError(false);
        handleAddTodo()
    }

    return (
        <>
            <div>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" ref={titleRef}/>
            </div>
            {error && <div>Enter a title for the todo</div>}
            <div>
                <button onClick={() => addItem()}>Add Todo</button>
            </div>
        </>
    )
};

export default AddItemForm;