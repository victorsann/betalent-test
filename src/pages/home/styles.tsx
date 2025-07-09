import styled from "styled-components";

interface ColProps {
    alignitems?: any;
    justifycontent?: any;
}

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f0f0f0;
`;

export const NavBar = styled.div`
    height: 8vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 0 10px #00000033;
    background-color: #ffffff;
`;

export const Logo = styled.img`
    height: 20px;
    padding-left: 30px;
`;

export const Content = styled.div`
    min-height: 92vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const First = styled.div`
    min-height: 8vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 530px) {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const Col = styled.div<ColProps>`
    width: 100%;
    display: flex;
    padding-top: 15px;
    margin-left: 30px;
    margin-right: 30px;
    align-items: ${props => props.alignitems || 'center'};
    justify-content: ${props => props.justifycontent || 'flex-start'};
    @media (max-width: 530px) {
       width: 85%;
    }
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 500px;
    font-family: Helvetica;
    color: #1c1c1c;
`;

export const Second = styled.div`
    min-height: 82vh;
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;



