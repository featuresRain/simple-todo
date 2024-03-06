import styled from "styled-components";

export const DoneIndicator = styled.div`
    display: none;
`;

export const StyledCheckbox = styled.div`
    width: 26px;
    height: 26px;
    border: 1px solid #6C63FF;
    border-radius: 2px;
    transition: all ease 0.3s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    
    svg {}      
        
    &.active {
        background-color: #6C63FF;
        
        ${DoneIndicator} { display: block }
    }
`