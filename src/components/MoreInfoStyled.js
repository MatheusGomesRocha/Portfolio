import styled from 'styled-components';

export const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin-top: 600px;
`;
export const BlockDiv = styled.div`
    background-color: ${props=>props.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    
    :hover {
        cursor: pointer;
    }
`;
export const Svg = styled.img`
    width: 80px;
    height: 80px;
    transition: 0.5s;
    
    transform: ${props=>props.transform};
`;