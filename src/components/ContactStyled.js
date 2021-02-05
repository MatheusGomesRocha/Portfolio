import styled from 'styled-components';

export const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    height: 600px;
`;

export const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #999;
    height: 600px;
`;
export const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px; 
    height: 500px;
    background-color: #F5F5F5;
`;
export const RightCenterDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    padding: 50px 10px;
`;
export const Input = styled.input`
    border: 1px solid #999;
    height: 50px;
    padding-left: 10px;
    font-size: 20px;
    border-radius: 10px;
    
    ::placeholder {
        color: #999;
    }
`;
export const InputBig = styled.textarea`
    border: 1px solid #999;
    height: 200px;
    padding: 10px 0 0 10px;
    font-size: 20px;
    margin-top: -80px;
    border-radius: 10px;
    
    ::placeholder {
        color: #999;
    }
`;

export const IconDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;
export const IconBall = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #2f2e41;
    margin-left: 10px;
    transition: 250ms;
    
    :hover {
        cursor: pointer;
        background-color: #484663;
    }
`;
