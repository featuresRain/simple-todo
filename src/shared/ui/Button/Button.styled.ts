import styled from "styled-components";
import {StyledButtonProps, StyledIconButtonProps} from "./Button.types.ts";

export const StyledButton = styled.button<StyledButtonProps>`
    padding: 10px 22px;
    border-radius: 5px;
    border: 1px solid #6C63FF;
    color: ${props => props.revertColors ? "#6C63FF" : "#FFF"};
    background-color: ${props => props.revertColors ? "#FFF" : "#6C63FF"};
    transition: all ease 0.3s;
    
    &:hover {
        box-shadow: ${props => props.revertColors ? "none" : "0 0 4px 0 #6C63FF"};
        color: #fff;
        background-color: #6C63FF;
    }
`

export const StyledIconButton = styled.button<StyledIconButtonProps>`
    width: ${props => props.large ? "50" : "38px"};
    height: ${props => props.large ? "50" : "38px"};
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #6C63FF;
    transition: all ease 0.3s;
    
    &:hover { 
        box-shadow: 0 0 4px 0 #6C63FF;
        background-color: #5850dd;
    }
`