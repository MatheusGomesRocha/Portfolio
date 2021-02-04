import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    margin-bottom: 500px;
    background-color: #fff;
`;
export const GridTopDiv = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    align-items: center;
    justify-content: center;
`;
export const ItemCircleDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    height: 200px;
`;


export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    height: 270px;
    margin-top: 250px;
`;
export const BlockDiv = styled.div`
    background-color: ${props=>props.background};
    display: ${props=>props.display};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    color: ${props=>props.color || '#FF5E62'};
    animation: fade 1s;
    height: 270px;
    border-right: 1px solid #999;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;

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

