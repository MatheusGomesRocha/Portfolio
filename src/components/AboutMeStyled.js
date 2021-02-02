import styled from 'styled-components';

const defaultBackgroundColor = '#eee';

export const MainDiv = styled.div`

`;
export const TopDiv = styled.div`
    width: 100%;
    padding: 40px 0 350px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${defaultBackgroundColor};
`;
export const BlockDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -300px;
    margin-bottom: 50px;
    width: 100%;
    justify-content: center;
`;
export const ItemDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    height: 600px;
    width: 25%;
    border-right: 1px solid #999;
    border-left: ${props=>props.bLeft};
    border-top-left-radius: ${props=>props.leftTop};
    border-bottom-left-radius: ${props=>props.leftBottom};
    border-top-right-radius: ${props=>props.rightTop};
    border-bottom-right-radius: ${props=>props.rightBottom};
    border-bottom: 1px solid #999;
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