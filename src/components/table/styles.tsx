import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 80vh;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
`;

export const FullSizeTable = styled.table`
    width: 100%;
    border-radius: 8px;
    margin-bottom: 20px;
    border-collapse: collapse;
    td, th {
      padding: 8px;
      border-left: none;
      border-right: none;
    };
`;

export const TableHeader = styled.tr`
    height: 47px;
    background-color: #0500ff;
`;

export const TableBody = styled.tbody``;

export const Tr = styled.tr`
    height: 49px;
    background-color: #ffffff;
    border-left: none;
    border-right: none;
    box-shadow: 0 0 2px #00000033;
`;

export const Td = styled.td`
    text-align: center;
`;

export const ProfileImg = styled.img`
    height: 34px;
    width: 34px;
    border-radius: 50%;
`;

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 500;
    font-family: Helvetica;
    color: #ffffff;
`;

export const Text = styled.h3`
    font-size: 16px;
    font-weight: 400;
    font-family: Helvetica;
    color: #1c1c1c;
`;

export const CompactTable = styled.div`
    width: 100%;
    border-radius: 8px;
    margin-bottom: 20px;
    border-collapse: collapse;
`;

export const Header = styled.div`
    height: 47px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow: 0 0 2px #00000033;
    background-color: #0500ff;
`;

export const Row = styled.div`
    gap: 20px;    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
