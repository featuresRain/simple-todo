import styled from "styled-components";

export const Wrapper = styled.div``

export const StyledEditTask = styled.button`
    width: fit-content;
    background: none;
    border: none;
    
    svg path  { transition: all ease 0.15s }
    
    &:hover svg path {
        stroke: #6C63FF;
    }
`