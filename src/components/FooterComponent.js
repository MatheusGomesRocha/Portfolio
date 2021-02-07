import {DefaultText} from "./DefaultText";

import {
    MainDiv
} from "./FooterStyled";

export default (props) => {
    return(
        <MainDiv background={props.darkMode ? '#fff' : '#2f2e41'}>
            <DefaultText font={"20px"} mTop={"0"} align={"center"} bolder={"bold"} color={props.darkMode ? '#2f2e41' : '#fff'}>Feito por Matheus Gomes. </DefaultText>
            <DefaultText font={"20px"} mTop={"0"} align={"center"} color={'#999'}>© Todos os direitos reservados. </DefaultText>
        </MainDiv>
    );
}