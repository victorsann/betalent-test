import styled from "styled-components";

export const InputArea = styled.div`
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 8px;
    border: 1px solid #dfdfdf;
    background-color: #ffffff;
`;

export const Input = styled.input`
    height: 45px;
    width: 100%;
    border: none;
    &:focus {
      outline: none;
    };
    &::placeholder {
        font-family: Helvetica;
        font-weight: 400;
        font-size: 16px;
        color: #9e9e9e;
    }
`;