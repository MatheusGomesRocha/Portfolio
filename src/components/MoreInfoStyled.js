import styled from 'styled-components';

export const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin-top: 600px;
    margin-bottom: 1000px;
`;
export const BlockDiv = styled.div`
    background-color: ${props=>props.background};
    display: ${props=>props.display};
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    font-size: 40px;
    font-weight: bold;
    color: #845EC2;
    animation: fade 1s;
    
    @keyframes fade {
        from{opacity: 0; transform: translateY(-40%);}
        to{opacity:1}
    }
   
`;
export const Svg = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 15px;
    transition: 0.5s;
    transform: ${props=>props.transform};
`;