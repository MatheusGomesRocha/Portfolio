import styled from 'styled-components';

const defaultBackgroundColor = '#845EC2';

export const Container = styled.div``;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 150px;
    background: linear-gradient(90deg, #ff9966 0%, #ff5e62 100%);  
    height: 80vh;  
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
`;
export const HeaderTopHidden = styled.div`
    display: ${props=>props.display};
    height: 100px;
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
    color: ${props=>props.color};
    
    :hover {
        color: #FF5E62;
    }
`;

export const HeaderBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
`;
export const HeaderLeft = styled.div`
    width: 40%;
    height: 250px;
    padding: 10px 0;
`;
export const HeaderImg = styled.img`
    width: 750px;
    height: 650px;
`;