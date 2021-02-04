import {DefaultText} from "./DefaultText";
import Project1 from '../img/project1.png';

import {
    MainDiv,

    GridDiv,
    BlockDiv
} from "./WorksStyled";

export default () => {
    let primaryColor = '#2f2e41';
    let secondaryColor = '#ddd';

    return (
        <MainDiv>
            <DefaultText mTop={"0"} align={"center"} bolder={"bold"} font={"40px"} color={primaryColor}>
                Meus trabalhos recentes
            </DefaultText>
            <DefaultText mTop={"0"} align={"center"} font={"25px"} color={secondaryColor}>
                Uma pequena amostra dos meus trabalhos
            </DefaultText>

            <GridDiv>
                <BlockDiv src={Project1}></BlockDiv>
                <BlockDiv src={Project1}></BlockDiv>
            </GridDiv>
        </MainDiv>
    );
}