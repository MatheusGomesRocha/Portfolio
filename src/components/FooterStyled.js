import styled from 'styled-components';

export const MainDiv = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.background};
    height: 120px;
    transition: 500ms;
`;