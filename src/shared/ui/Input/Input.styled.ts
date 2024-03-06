import styled from "styled-components";
import {StyledInputProps} from "./Input.types.ts";

export const StyledInput = styled.input<StyledInputProps>`
    padding: 8px ${props => props.icon ? "47px" : "16px"} 8px 16px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #6C63FF;
    position: relative;
    
    color: #6C63FF;
    line-height: 100%;
    
    &::placeholder {
        color: #c3c1e5;
    }
`

export const InputContainer = styled.div`
    position: relative;
`;

export const IconContainer = styled.div`
    position: absolute;
    top: 9px;
    right: 16px;
`