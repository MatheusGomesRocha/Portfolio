import styled from 'styled-components';

const defaultBackgroundColor = '#845EC2';

export const Container = styled.div``;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px 150px 80px;
    background: linear-gradient(90deg, #ff9966 0%, #ff5e62 100%);  
    height: 80vh;  
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