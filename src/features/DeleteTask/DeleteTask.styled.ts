import styled from "styled-components";

export const StyledDeleteTask = styled.button`
    width: fit-content;
    background: none;
    border: none;
    
    svg path { transition: all ease 0.15s }
    
    &:hover svg path {
        stroke: #e50000;
    }
`;