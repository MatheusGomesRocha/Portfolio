import {DefaultText} from './DefaultText';
import Header_img from '../header_img.svg';

import {
    MainDiv,
    TopDiv,
    BlockDiv,
    ItemDiv,
    Svg
} from './AboutMeStyled';

export default () => {
    let primaryColor = '#282828';
    let secondaryColor = '#999';
    let white = '#fff';

    return (
        <MainDiv>
            <TopDiv>
                <DefaultText color={white} align={"center"} bolder={"bold"} font={"22px"}>
                    Meu nome é Matheus, e sou um desenvolvedor Full-Stack em formação
                </DefaultText>

                <DefaultText width={"60%"} font={"20px"} align={"center"} color={"#ddd"}>
                    Oi, tenho 19 anos e estou na área de programação à 2 anos. Comecei quando iniciei a faculdade de
                    Análise
                    e Desenvolvimento de Sistemas, a qual estou no 5º semestre. Não tenho nenhuma experiência
                    profissional,
                    apenas alguns projetos que fiz para estudo e experiência própria, visando um projeto real.
                </DefaultText>
            </TopDiv>

            <BlockDiv>
                <ItemDiv bLeft={"1px solid #999"} radius={"10px 0 0 10px"}>
                    <Svg src={Header_img} width={100} height={100} fill={"#845EC2"}/>
                    <DefaultText color={primaryColor} align={"center"} bolder={"bold"}>Programação Front-end</DefaultText>

                    <DefaultText color={secondaryColor} align={"center"}>
                        Gosto de copiar designs e sempre tentar algo novo, como uma animação, um efeito e etc.
                    </DefaultText>

                    <DefaultText align={"center"} color={"#845EC2"} bolder={"bold"} mTop={"80px"}>Linguagens que uso:</DefaultText>
                    <DefaultText align={"center"} bolder={"bold"} color={primaryColor} mTop={"20px"}>HTML & CSS</DefaultText>
                </ItemDiv>

                <ItemDiv>
                    <Svg src={Header_img} width={100} height={100} fill={"#845EC2"}/>
                    <DefaultText color={primaryColor} align={"center"} bolder={"bold"}>Programação Front-end</DefaultText>

                    <DefaultText color={secondaryColor} align={"center"}>
                        Gosto de copiar designs e sempre tentar algo novo, como uma animação, um efeito e etc.
                    </DefaultText>


                </ItemDiv>

                <ItemDiv radius={"0 10px 10px 0"}>
                    <Svg src={Header_img} width={100} height={100} fill={"#845EC2"}/>
                    <DefaultText color={primaryColor} align={"center"} bolder={"bold"}>Programação Front-end</DefaultText>
                    <DefaultText color={secondaryColor} align={"center"}>
                        Gosto de copiar designs e sempre tentar algo novo, como uma animação, um efeito e etc.
                    </DefaultText>
                </ItemDiv>
            </BlockDiv>
        </MainDiv>
    );
}