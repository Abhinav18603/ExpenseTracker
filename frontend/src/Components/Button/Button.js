import React from 'react';
import styled from 'styled-components';

function Button({ name, icon, onClick, bg, padding, color, borderRadius, shadow }) {
    return (
        <StyledButton
            style={{
                background: bg,
                padding: padding || '0.75rem 1.5rem', // Increased padding for larger buttons
                borderRadius: borderRadius || '12px', // Default rounded corners
                color: color,
                boxShadow: shadow,
            }}
            onClick={onClick}
            buttonType={name} // Pass the button name as a prop
        >
            {icon && <IconWrapper>{icon}</IconWrapper>}
            <span>{name}</span>
        </StyledButton>
    );
}

const StyledButton = styled.button`
    outline: none;
    border: 2px solid transparent;
    font-family: inherit;
    font-size: 1.25rem; /* Increased font size for larger text */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem; /* Increased gap between icon and text */
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: inherit;

    &:hover {
        transform: translateY(-2px);
        border-color: #6a1b9a; /* Use your primary color here */
        background-color: ${({ buttonType }) => 
            buttonType === 'Add Income' || buttonType === 'Add Expense' ? '#28a745' : 
            buttonType === 'Delete' ? '#dc3545' : 
            'inherit'};
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Button;
