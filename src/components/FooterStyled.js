import styled from 'styled-components';

export const MainDiv = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.background};
    height: 120px;
    transition: 500ms;
    border-top: 1px solid #999;
    margin-top: 3px;
    
    @media(max-width: 1050px) {
        border-top: none;
        margin-top: 0;
    }
`;