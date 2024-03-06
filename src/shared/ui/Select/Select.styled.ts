import styled from "styled-components";

export const StyledSelect = styled.div`
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 4px #6C63FF;
    background-color: #6C63FF;
    border: 2px solid #6C63FF;
    transition: all ease 0.3s;
    position: relative;
    width: 170px;
    cursor: pointer;
    
    &.active {
        background-color: #534cc2;
    }
`;

export const ActiveOption = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
    line-height: 100%;
`;

export const OptionsContainer = styled.div`
    width: calc(100% + 4px);
    padding: 8px 0;
    border: 1px solid #6C63FF;
    border-radius: 5px;
    background-color: #fff;
    position: absolute;
    top: 49px;
    left: -2px;
`;

export const Option = styled.div`
    padding: 0 6px;
    font-size: 16px;
    text-transform: capitalize;
    color: #6C63FF;
    background-color: #fff;
    transition: all ease 0.3s;
    cursor: pointer;
    
    &:hover {
        background-color: rgba(108, 99, 255, 0.2);
    }
`;