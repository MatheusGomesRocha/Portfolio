import {useState} from 'react';
import {DefaultText} from "./DefaultText";

import {
    MainDiv
} from "./FooterStyled";

export default () => {
    const [primaryColor, setPrimaryColor] = useState('#fff');
    const [secondaryColor, setSecondaryColor] = useState('#ddd');

    return(
        <MainDiv>
            <DefaultText font={"20px"} mTop={"0"} align={"center"} bolder={"bold"} color={primaryColor}>Feito por Matheus Gomes. </DefaultText>
            <DefaultText font={"20px"} mTop={"0"} align={"center"} color={secondaryColor}>Todos os direitos reservados. </DefaultText>
        </MainDiv>
    );
}