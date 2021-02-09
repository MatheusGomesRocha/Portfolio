import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
    background-color: ${props=>props.background};
    
    @media(max-width: 800px) {
        padding: 50px 0;
    }
`;
export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 50px;
    margin-top: 100px;
    justify-content: center;
    width: 100%;
    
    @media(max-width: 700px) {
        grid-template-columns: auto;
        height: auto;
        width: 90%;
        margin-top: 100px;
    }
    
    @media(min-width: 701px) and (max-width: 1050px) {
        grid-template-columns: auto;
        width: 90%;
    }
`;
export const BlockDiv = styled.div`
    height: 350px;
    border-radius: 10px;
    position: relative;
    width: 100%;
    
    :hover {
        cursor: pointer;
    }
    
    @media(max-width: 700px) {
        width: 100%;
        height: 200px;
    } 
    
    @media(min-width: 701px) and (max-width: 1050px) {
        width: 100%;
        height: 400px;
    }
`;
export const ItemDiv = styled.img`
    height: 350px;
    width: 100%;
    border-radius: 10px;
    
    @media(max-width: 700px) {
        height: 200px;
    } 
    
    @media(min-width: 701px) and (max-width: 1050px) {
        height: 400px;
    }
`;
export const ItemHiddenDiv = styled.div`
    display: ${props=>props.display};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 350px;
    width: 100%;
    border-radius: 10px;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    animation: fadeIn 500ms;
    
    @keyframes fadeIn{
        from {opacity: 0}
        to {opacity: 1}
    }
    
    @media(max-width: 700px) {
        height: 200px;
    } 
    
    @media(min-width: 701px) and (max-width: 1050px) {
        height: 400px;
    }
`;