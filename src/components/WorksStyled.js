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
    grid-template-columns: auto auto;
    grid-gap: 50px;
    margin-top: 100px;
    justify-content: center;
    width: 100%;
    
    @media(max-width: 800px) {
        grid-template-columns: auto;
        height: auto;
        width: 90%;
        margin-top: 100px;
    }
`;
export const BlockDiv = styled.div`
    height: 350px;
    border-radius: 10px;
    position: relative;
    
    :hover {
        cursor: pointer;
    }
    
    @media(max-width: 800px) {
        width: 100%;
        height: 200px;
    }
`;
export const ItemDiv = styled.img`
    height: 350px;
    border-radius: 10px;
    
    @media(max-width: 800px) {
        width: 100%;
        height: 200px;
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
    
    @media(max-width: 800px) {
        width: 100%;
        height: 200px;
    }
`;