import React from "react";
import styled from "styled-components";

const Button = styled.div`
    margin-top: 32px;
    width: 75%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    font: 600 12px Montserrat, sans-serif;
    ${(props) => props.theme.colors.primaryBackground};
    opacity: 0.9;
    transition: ease all 0.2s;
    :hover {
        opacity: 1;
    }
`;

const SubmitButton: React.FC = ({ children }) => {
    return <Button>{children}</Button>;
};

export default SubmitButton;
