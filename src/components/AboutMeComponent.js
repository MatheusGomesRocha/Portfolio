import {DefaultText} from './DefaultText';

import Back from '../svg/back.svg';
import Mobile from '../svg/mobile.svg';
import Front from '../svg/front.svg';

import {
    MainDiv,
    TopDiv,
    BlockDiv,
    ItemDiv,
    Svg,
    BlockBottomDiv, BlockTopDiv,
} from './AboutMeStyled';

export default () => {
    let primaryColor = '#282828';
    let secondaryColor = '#999';
    let white = '#fff';

    let array = [
        {
            id: 1,
            svg: Front,
            title: 'Programação Front-end',
            content: 'Gosto de copiar designs e sempre tentar algo novo, como uma animação, um efeito e etc.',
            subtitle: 'Linguagens que uso:',
            languages: ['HTML & CSS'+'\n', 'Bootstrap'+'\n', 'Javascript'+'\n', 'Jquery'+'\n', 'React'+'\n'],
            bLeft: true,
            bRight: false,
        },

        {
            id: 2,
            svg: Back,
            title: 'Programação Back-end',
            content: 'Com certeza é minha parte favorita da programação, gosto de pensar até resolver o problema de lógica de como fazer tal função.',
            subtitle: 'Linguagens que uso:',
            languages: ['PHP'+'\n', 'Laravel'+'\n', 'AJAX'+'\n', 'Firebase'+'\n'],
            bLeft: false,
            bRight: false,
        },

        {
            id: 3,
            svg: Mobile,
            title: 'Programação Mobile',
            content: 'Essa é a área que tenho menos tempo de estudo, mas é a com mais projetos feitos.',
            subtitle: 'Linguagens que uso:',
            languages: ['React-Native'+'\n', 'Firebase'+'\n'],
            bLeft: false,
            bRight: true,
        }
    ];

    return (
        <MainDiv>
            <TopDiv>
                <DefaultText color={white} align={"center"} bolder={"bold"} font={"25px"}>
                    Meu nome é Matheus, e sou um desenvolvedor Full-Stack em formação
                </DefaultText>

                <DefaultText width={"75%"} font={"22px"} align={"center"} color={"#ddd"}>
                    Oi, tenho 19 anos e estou na área de programação à 2 anos. Comecei quando iniciei a faculdade de
                    Análise
                    e Desenvolvimento de Sistemas, a qual estou no 5º semestre. Não tenho nenhuma experiência
                    profissional,
                    apenas alguns projetos que fiz para estudo e experiência própria, visando um projeto real.
                </DefaultText>
            </TopDiv>

            <BlockDiv>
                {array.map((item, k) => (
                    <ItemDiv key={k} bLeft={item.bLeft ? '1px solid #999' : null} rightTop={item.bRight ? '10px' : null} rightBottom={item.bRight ? '10px' : null} leftTop={item.bLeft ? '10px' : null} leftBottom={item.bLeft ? '10px' : null}>
                        <BlockTopDiv>
                            <Svg src={item.svg} width={80} height={80} fill={"#845EC2"}/>

                            <DefaultText color={primaryColor} font={"18px"} align={"center"} bolder={"bold"}>{item.title}</DefaultText>

                            <DefaultText style={{height: 120}} font={"18px"} color={secondaryColor} align={"center"}> {item.content} </DefaultText>
                        </BlockTopDiv>

                        <BlockBottomDiv>
                            <DefaultText font={"18px"} align={"center"} color={"#845EC2"} bolder={"bold"}>
                                {item.subtitle}
                            </DefaultText>

                            <DefaultText font={"18px"} style={{whiteSpace: 'pre-wrap'}} align={"center"} bolder={"bold"} color={primaryColor}>
                                {item.languages}
                            </DefaultText>
                        </BlockBottomDiv>

                    </ItemDiv>
                ))}
            </BlockDiv>
        </MainDiv>
    );
}