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
    justify-content: flex-end;
    height: 100px;
    padding: 0 30px;
`;
export const HeaderLinkDiv = styled.div`
    margin-left: 30px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    :hover {
        cursor: pointer;
    }
`;
export const HeaderLink = styled.a`
    font-size: 25px;
    color: ${props=>props.color};
    font-weight: bold;
    font-family: courier;
    transition: 250ms;
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