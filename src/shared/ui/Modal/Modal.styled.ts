import styled from "styled-components";


export const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(37, 37, 37, 0.7)
`;

export const StyledModal = styled.div`
    max-width: 600px;
    padding: 18px 30px;
    margin: 120px auto 0 auto;
    border-radius: 16px;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const Title = styled.h2`
    font-size: 24px;
    line-height: 100%;
    text-transform: uppercase;
    text-align: center;
    color: #000;
`

export const ModalContent = styled.div``

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`