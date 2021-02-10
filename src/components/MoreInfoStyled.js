import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    background-color: ${props => props.background};
    transition: 500ms;
    border-top: 1px solid #999;

    @media(max-width: 700px) {
        padding: 50px 0;
        align-items: center;
    }
    
    @media(min-width: 701px) and (max-width: 1050px) {
        align-items: center;
    }
`;
export const GridTopDiv = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    align-items: center;
    justify-content: center;
    
    @media(max-width: 700px) {
        grid-template-columns: 100%;
    }
    
    @media(min-width: 701px) and (max-width: 1050px) {
        display: flex;
        flex-wrap: wrap;
    }
`;
export const ItemCircleDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    height: auto;
    
    @media(max-width: 700px) {
        justify-content: center;
        width: 100%;
    }
    
    @media(min-width: 701px) and (max-width: 1050px) {
        justify-content: center;
        width: 50%;
    }
    
    @media(min-width: 1800px) {
        padding: 20px 100px;
        height: 200px;
    }
    
`;


export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    height: 270px;
    margin-top: 200px;
       
    @media(max-width: 700px) {
        grid-template-columns: 100%;
        height: auto;
        margin-top: 150px;
        width: 100%;
    } 
    
    @media(min-width: 701px) and (max-width: 1050px) {
        grid-template-columns: 50% 50%;
        height: auto;
        margin-top: 150px;
        width: 100%;
    }
`;
export const BlockDiv = styled.div`
    background-color: ${props => props.background};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    color: ${props => props.color || '#FF5E62'};
    height: 300px;
    border-right: 1px solid #999;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    animation: fade 1s;
    display: ${props => props.display};

    @media(max-width: 1050px) {
        display: flex;
    }
  
    @keyframes fade {
        from{opacity: 0;}
        to{opacity:1}
    }
`;
export const Svg = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 15px;
    transition: 0.5s;
    transform: ${props => props.transform};
`;

