import {DefaultText} from "./DefaultText";
import './Benefits.css';

import {
    MainDiv,
    GridDiv,
    ItemDiv
} from './BenefitsStyled';

export default () => {
    return(
        <div class={"container"}>
                <div class={"item1"}>
                    <DefaultText color={"fff"} bolder={"bold"}>O básico</DefaultText>
                </div>
                <div class={"item2"}>.</div>
                <div class={"item3"}>.</div>
                <div class={"item4"}>
                    <DefaultText font={"20px"} color={"#fff"} bolder={"bold"} mTop={"0"}>Relatório de atividades</DefaultText>
                    <DefaultText font={"20px"} color={"#bbb"} bolder={"bold"} mTop={"0"}>Todo o suporte grantido</DefaultText>
                    <DefaultText color={"#fff"} width={"80%"} style={{lineHeight: '1.5'}}>
                        Caso o cliente queira, pode acompanhar de perto o projeto, quanto dele já foi feito, quanto
                        falta e etc.
                    </DefaultText>
                </div>
        </div>
    );
}