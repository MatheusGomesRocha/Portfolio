import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    height: 751px;
    background-color: ${props => props.background};
    transition: 500ms;
    
    @media(max-width: 800px) {
        height: auto;
        padding: 50px 0;
    }
`;
export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 0fr repeat(2, 1fr);
    grid-template-rows: 1fr 2fr 0fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 40px 120px;
    
    @media(max-width: 800px) {
        grid-template-columns: repeat(5, 1fr);
        padding: 0 10px;
        margin-top: -250px;
    }
`;
export const ItemDiv = styled.div`
    border: 1px solid #999;
    border-radius: 10px;
    flex-direction: column;
    padding: 20px;

    @media(max-width: 800px) {
        display: flex;
    }
    
    @media(min-width: 801px) {
        display: ${props => props.display};
        padding: 10px 20px;
        animation: fadeTop 1s;
    }
    
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
    background-color: ${props => props.background};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    transition: 500ms;
`;
