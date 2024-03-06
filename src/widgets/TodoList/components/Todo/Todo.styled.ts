import styled from "styled-components";

export const StyledTodo = styled.div`
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #6C63FF;
    
    &:not(:first-child):last-of-type {
        border: none;
    }
`;

export const TodoTitle = styled.div`
    font-size: 20px;
    line-height: 100%;
    text-transform: uppercase;
    color: #000000;
    font-weight: 500;
    
    &.completed { 
        text-decoration: line-through;
        color: rgba(37, 37, 37, 0.5);
    }
`;

export const TodoSection = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

