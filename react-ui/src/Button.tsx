import React from 'react';

type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
    icon?: React.ReactElement;
};

export default function Button({ onClick, disabled, icon }: ButtonProps) {
    function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        onClick?.(event);
    }

    let renderIcon;
    if (icon != undefined) {
        renderIcon = React.cloneElement(icon, { className: 'w-5 h-5 my-0.5' });
    }

    return (
        <button className="border rounded py-2 bg-neutral-50 hover:bg-neutral-100 transition px-4" onClick={handleClick} disabled={disabled}>
            {renderIcon}
        </button>
    );
}
