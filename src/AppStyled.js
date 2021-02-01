import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    justify-content: center;
`;

export const DefaultText = styled.span`
    color: ${props=>props.color};
    font-size: ${props=>props.font};
    font-weight: ${props=>props.bolder || 'normal'};
    font-family: courier;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    height: 100vh;
`;
export const HeaderLeft = styled.div`
    width: 30%;
`;
export const HeaderImg = styled.img`
    animation: fade 1s;
    
    @keyframes fade {
        from {opacity: 0}
        to {opacity: 1}
    }
`;