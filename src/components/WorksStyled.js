import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 200px;
`;
export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 50px;
    margin-top: 100px;
    justify-content: center;
    width: 100%;
`;
export const BlockDiv = styled.img`
    height: 350px;
    background-color: #ccc;
    border-radius: 10px;
`;