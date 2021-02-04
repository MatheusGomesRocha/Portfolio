import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    height: 751px;
`;
export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 0fr repeat(2, 1fr);
    grid-template-rows: 1fr 2fr 0fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 40px 120px;
`;
export const ItemDiv = styled.div`
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 10px;
    display: ${props=>props.display};
    flex-direction: column;
    animation: fadeTop 1s;
    padding: 20px;

    @keyframes fadeTop {
        from{opacity: 0; transform: translateY(40%)}
        to {opacity: 1;}
    }
`;
export const RowDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
`;
export const SvgDiv = styled.div`
    width: 65px;
    height: 50px;
    background-color: #2f2e41;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
export const Svg = styled.img`
    width: 25px;
    height: 25px;
`;