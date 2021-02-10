import styled from 'styled-components';

const defaultBackgroundColor = '#845EC2';

export const Container = styled.div`
    background-color: #fff;
`;

export const DarkModeDiv = styled.div`
    display: ${props=>props.display};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: grow 250ms;
    position: fixed;
    bottom: 85px;
    right: 25px;
    z-index: 999;
    background-color: ${props=>props.background};
    width: 200px;
    height: 200px;
    border-radius: 10px;
    padding: 0 10px;
    
    @keyframes grow {
        from {width: 0; height: 0;}
        to {width: 200px; height: 200px;}
    }
`;
export const DarkModeDivInside = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    background-color: ${props=>props.background};
    margin-top: 10px;
    border-radius: 10px;
    padding: 0 10px;
    border: 1px solid transparent;
    transition: 500ms;
    
    :hover {
        cursor: pointer;
        border: 1px solid;
        border-color: ${props=>props.bdColor};
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 150px;
    background: linear-gradient(90deg, #ff9966 0%, #ff5e62 100%);  
    height: 80vh;  
    
    @media(max-width: 1050px) {
        height: auto;
        padding: 20px 0;
        width: 100%;
    }
    
    @media(min-width: 1800px) {
       height: 100vh;
       padding-bottom: 0;
    }
`;
export const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    width: 100%;
    position: ${props=>props.position};
    background-color: ${props=>props.background};
    top: 0;
    transition: 500ms;
    z-index: 999;
    box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.75);
    
    @media(max-width: 1050px) {
        display: none;
    }
    
    @media(min-width: 1800px) {
        justify-content: space-around;
    }
`;
export const HeaderTopHidden = styled.div`
    display: ${props=>props.display};
    height: 75px;
    
    @media(max-width: 1050px) {
        display: none;
    }
`;
export const HeaderLinkDiv = styled.div`
    display: flex;
    margin-right: 80px;
`;
export const HeaderLink = styled.a`
    font-size: 22px;
    font-weight: bold;
    font-family: courier;
    transition: 250ms;
    text-decoration: none;
    margin-left: 30px;
    color: ${props=>props.color || '#fff'};
    
    :hover {
        color: #FF5E62;
    }
`;

export const HeaderBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    
    @media(max-width: 700px) {
        flex-direction: column;
        padding: 0 40px;
    }
    
    @media(min-width: 701px) and (max-width: 1050px) {
        flex-direction: column;
        padding: 20px;
    }
    
    @media(min-width: 1800px) {
       justify-content: space-around;
       padding: 30px 270px;
    }
`;
export const HeaderLeft = styled.div`
    width: 40%;
    height: 250px;
    padding: 10px 0;
    
    @media(max-width: 700px) {
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 50px;
    }
    
    @media(min-width: 701px) and (max-width: 950px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
    }
    
    @media(min-width: 951px) and (max-width: 1150px) {
        width: 65%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
    }
    
`;
