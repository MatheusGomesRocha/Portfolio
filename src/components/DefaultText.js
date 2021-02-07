import styled from "styled-components";

export const DefaultText = styled.span`
    color: ${props=>props.color};
    font-size: ${props=>props.font};
    font-weight: ${props=>props.bolder || 'normal'};
    font-family: candara;
    width: ${props=>props.width || '100%'};
    text-align: ${props=>props.align || 'left'};
    margin-top: ${props=>props.mTop || '20px'};
    transition: 500ms;
`;
