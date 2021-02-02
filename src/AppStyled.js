import styled from 'styled-components';

const defaultBackgroundColor = '#845EC2';

export const Container = styled.div`
    background-color: #fff;
    justify-content: center;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    height: 100vh;
`;
export const HeaderLeft = styled.div`
    width: 40%;
`;
export const HeaderImg = styled.img`
    width: 750px;
    height: 650px;
`;