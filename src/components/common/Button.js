import React from "react";
import styled from 'styled-components';
import palette from "../../lib/styles/palette";

const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    
    background: ${palette.theme.colors.blue['800']};
        &:hover {
            background: ${palette.theme.colors.blue['100']};
            color: ${palette.theme.colors.gray['800']};
    }
`;

const Button = props => <StyledButton {...props} />;

export default Button;