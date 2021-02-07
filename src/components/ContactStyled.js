import styled from 'styled-components';

export const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    height: 700px;
`;

export const LeftDiv = styled.div`
    display: ${props=>props.display};
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #999;
    animation: fadeLeft 0.5s;
    background-color: ${props=>props.background};
    transition: 500ms;
    
    @keyframes fadeLeft {
        from {opacity: 0; transform: translateX(-40%)}
        to {opacity: 1;}
    }
`;
export const RightDiv = styled.div`
    display: ${props=>props.display};
    flex-direction: column;
    padding: 50px; 
    background-color: ${props=>props.background};
    animation: fadeRight 0.5s;
    transition: 500ms;

    @keyframes fadeRight {
        from {opacity: 0; transform: translateX(40%)}
        to {opacity: 1;}
    }
`;
export const RightCenterDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    padding: 50px 10px;
    height: 400px;
`;
export const Input = styled.input`
    border: 1px solid #999;
    height: 50px;
    padding-left: 10px;
    font-size: 20px;
    border-radius: 10px;
    background-color: ${props=>props.background};
    color: ${props=>props.color};
    
    ::placeholder {
        color: #999;
    }
    
    :focus {
        outline: 0;
    }
`;
export const InputBig = styled.textarea`
    border: 1px solid #999;
    padding: 10px 0 0 10px;
    font-size: 20px;
    margin-top: -80px;
    border-radius: 10px;
    background-color: ${props=>props.background};
    color: ${props=>props.color};

    ::placeholder {
        color: #999;
    }
    
    :focus {
        outline: 0;
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
    background-color: ${props=>props.background};
    margin-left: 10px;
    transition: 500ms;
    
    :hover {
        cursor: pointer;
        background-color: #FF5E62;
    }
`;
