import styled from 'styled-components';

export const MainDiv = styled.div`
    background: linear-gradient(90deg, #ff9966 0%, #ff5e62 100%);    
    padding-bottom: 70px;
    position: relative;
`;
export const TopDiv = styled.div`
    width: 100%;
    padding-bottom: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.background};
    transition: 500ms;
    
     @media(max-width: 800px) {
        margin-top: 30px;
    }
`;
export const BlockDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -300px;
    margin-bottom: 50px;
    width: 100%;
    justify-content: center;
    
    @media(max-width: 800px) {
        flex-direction: column;
        align-items: center;
    } 
`;
export const ItemDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: ${props=>props.background};
    height: 600px;
    width: 25%;
    
    transition: 500ms;
    
    @media(max-width: 800px) {
        height: auto;
        width: 80%;
        padding: 20px 10px;
        border: 1px solid #999;
    } 
    
    @media(min-width: 801px) and (max-width: 1800px) {
        border-right: 1px solid #999;
        border-left: ${props=>props.bLeft};
        border-top: 1px solid #999;
        border-bottom: 1px solid #999;
        border-top-left-radius: ${props=>props.leftTop};
        border-bottom-left-radius: ${props=>props.leftBottom};
        border-top-right-radius: ${props=>props.rightTop};
        border-bottom-right-radius: ${props=>props.rightBottom};
        border-bottom: 1px solid #999;
    }
`;
export const Svg = styled.img``;
export const BlockTopDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`;
export const BlockBottomDiv = styled.div`
    display: flex;
    flex-direction: column; 
    margin-top: 80px;
`;