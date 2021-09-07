import React from "react";
import styled from "styled-components";

interface SubmitButtonProps {
    type?: any;
    children?: string;
}

const Button = styled.button`
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
`;

const SubmitButton: React.FC = (props: SubmitButtonProps) => {
    return <Button type={props.type}>{props.children}</Button>;
};

export default SubmitButton;
