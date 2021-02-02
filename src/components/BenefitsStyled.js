import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    background-color: #eee;
`;
export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 0fr repeat(2, 1fr);
    grid-template-rows: 1fr 2fr 0fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 40px 120px;
`;
export const RowDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
`;
export const SvgDiv = styled.div`
    width: 65px;
    height: 50px;
    background-color: #282828;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
export const Svg = styled.img`
    width: 25px;
    height: 25px;
`;