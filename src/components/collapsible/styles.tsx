import styled from "styled-components";

export const Container = styled.div`
    gap: 20px;    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Collapse = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #ffffff;
    box-shadow: 0 0 2px #00000033;
`;

export const Collapsed = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 20px 40px 20px;
    background-color: #ffffff;
    box-shadow: 0 0 2px #00000033;
`;

export const Row = styled.div`
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px dotted #00000033;
`;

export const TextBold = styled.h3`
    font-size: 16px;
    font-weight: 400px;
    font-family: Helvetica;
    color: #1c1c1c;
`;

export const Text = styled.h3`
    font-size: 16px;
    font-weight: 400;
    font-family: Helvetica;
    color: #1c1c1c;
`;
