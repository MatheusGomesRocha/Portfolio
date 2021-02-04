import {useState, useEffect} from "react";
import {DefaultText} from "./DefaultText";
import Responsive from '../svg/resize.svg';
import Clean from '../svg/menu.svg';
import Fast from '../svg/lighting.svg';
import Seo from '../svg/search.svg';

import './Benefits.css';

import {
    MainDiv,
    GridDiv,
    ItemDiv,
    RowDiv,
    SvgDiv,
    Svg
} from './BenefitsStyled';

export default (props) => {
    return (
        <MainDiv>
            <DefaultText align={"center"} color={"#2f2e41"} font={"40px"} bolder={"bold"}>Benefícios de trabalhar comigo</DefaultText>
            <GridDiv>
                <ItemDiv display={props.display ? 'flex' : 'none'} className={"item1"}>
                    <DefaultText font={"25px"} color={"#2f2e41"} bolder={"bold"}>O básico</DefaultText>
                    <RowDiv>
                        <SvgDiv>
                            <Svg src={Responsive}/>
                        </SvgDiv>
                        <DefaultText font={"22px"} color={"#2f2e41"} bolder={"bold"} mTop={"0"}>Design
                            Responsivo</DefaultText>
                    </RowDiv>

                    <RowDiv>
                        <SvgDiv>
                            <Svg src={Fast}/>
                        </SvgDiv>
                        <DefaultText font={"22px"} color={"#2f2e41"} bolder={"bold"} mTop={"0"}>Carregamento
                            rápido</DefaultText>
                    </RowDiv>

                    <RowDiv>
                        <SvgDiv>
                            <Svg src={Clean}/>
                        </SvgDiv>
                        <DefaultText font={"22px"} color={"#2f2e41"} bolder={"bold"} mTop={"0"}>Código limpo</DefaultText>
                    </RowDiv>

                    <RowDiv>
                        <SvgDiv>
                            <Svg src={Seo}/>
                        </SvgDiv>
                        <DefaultText font={"22px"} color={"#2f2e41"} bolder={"bold"} mTop={"0"}>SEO</DefaultText>
                    </RowDiv>
                </ItemDiv>

                <ItemDiv display={props.display2 ? 'flex' : 'none'} className={"item2"}>
                    <DefaultText font={"25px"} color={"#2f2e41"} bolder={"bold"} mTop={"0"}>Fluxo rápido de
                        trabalho</DefaultText>
                    <DefaultText font={"25px"} color={"#999"} bolder={"bold"} mTop={"0"}>Rápido como um
                        raio</DefaultText>
                </ItemDiv>

                <ItemDiv display={props.display3 ? 'flex' : 'none'} className={"item3"}>
                    <DefaultText font={"25px"} color={"#2f2e41"} bolder={"bold"} mTop={"0"}>Desenvolvimento</DefaultText>
                    <DefaultText font={"25px"} color={"#999"} bolder={"bold"} mTop={"0"}>Tudo por uma mão</DefaultText>
                    <DefaultText color={"#2f2e41"} width={"80%"} font={"22px"}>
                        Todo o trabalho de desenvolvimento, do começo ao fim, será feito por uma pessoa, ou seja, você
                        só
                        precisará ter contado comigo.
                    </DefaultText>
                </ItemDiv>

                <ItemDiv display={props.display4 ? 'flex' : 'none'} className={"item4"}>
                    <DefaultText font={"25px"} color={"#2f2e41"} bolder={"bold"} mTop={"0"}>Relatório de
                        atividades</DefaultText>
                    <DefaultText font={"25px"} color={"#999"} bolder={"bold"} mTop={"0"}>Todo o suporte
                        grantido</DefaultText>
                    <DefaultText color={"#2f2e41"} font={"22px"} width={"80%"}>
                        Caso o cliente queira, pode acompanhar de perto o projeto, quanto dele já foi feito, quanto
                        falta e etc.
                    </DefaultText>
                </ItemDiv>
            </GridDiv>

        </MainDiv>
    );
}