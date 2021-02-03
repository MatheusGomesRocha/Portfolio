import {DefaultText} from "./DefaultText";
import AnimatedNumber from "animated-number-react";
import Smile from '../svg/smile.svg';
import Clock from '../svg/clock.svg';
import Edit from '../svg/edit.svg';
import Coffee from '../svg/coffee-cup.svg';

import {
    MainDiv,
    BlockDiv,
    Svg
} from "./MoreInfoStyled";
import {useState, useEffect} from "react";

export default () => {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);

    const [displayBlock, setDisplayBlock] = useState(false);

    const handleScroll = () => {        // Verifica se o scroll é maior que 80 e mostra o Header fixado
        if (document.documentElement.scrollTop > 2500) {
            setDisplayBlock(true);
        }
    }

    useEffect(() => {       // Ao carregar a página já executa as 2 funções para pegar o valor do scroll
        window.onscroll = () => {
            handleScroll();
        };
    }, [])

    return (
        <MainDiv>

            <BlockDiv display={displayBlock ? 'flex' : 'none'} onMouseOver={() => setHover1(true)}
                      onMouseOut={() => setHover1(false)} background={"#eee"}>
                <Svg transform={hover1 ? 'scale(1.2)' : 'scale(1)'} src={Smile}/>
                {displayBlock ?
                    <AnimatedNumber
                        value={19}
                        formatValue={n => n.toFixed(0)}
                        duration={3000}
                    />
                    :
                    null
                }

                <DefaultText color={"#282828"} align={"center"} bolder={"bold"} font={"25px"} mTop={"10px"}>Clientes
                    satisfeitos</DefaultText>
            </BlockDiv>

            <BlockDiv display={displayBlock ? 'flex' : 'none'} onMouseOver={() => setHover2(true)}
                      onMouseOut={() => setHover2(false)}>
                <Svg transform={hover2 ? 'scale(1.2)' : 'scale(1)'} src={Coffee}/>
                {displayBlock ?
                    <AnimatedNumber
                        value={2147}
                        formatValue={n => n.toFixed(0)}
                        duration={3000}
                    />
                    :
                    null
                }

                <DefaultText color={"#282828"} align={"center"} bolder={"bold"} font={"25px"} mTop={"10px"}>Copos de
                    café</DefaultText>
            </BlockDiv>

            <BlockDiv display={displayBlock ? 'flex' : 'none'} onMouseOver={() => setHover3(true)}
                      onMouseOut={() => setHover3(false)} background={"#eee"}>
                <Svg transform={hover3 ? 'scale(1.2)' : 'scale(1)'} src={Edit}/>
                {displayBlock ?
                    <AnimatedNumber
                        value={3485}
                        formatValue={n => n.toFixed(0)}
                        duration={3000}
                    />
                    :
                    null
                }

                <DefaultText color={"#282828"} align={"center"} bolder={"bold"} font={"25px"} mTop={"10px"}>Linhas de
                    códigos</DefaultText>
            </BlockDiv>

            <BlockDiv display={displayBlock ? 'flex' : 'none'} onMouseOver={() => setHover4(true)}
                      onMouseOut={() => setHover4(false)}>
                <Svg transform={hover4 ? 'scale(1.2)' : 'scale(1)'} src={Clock}/>
                {displayBlock ?
                    <AnimatedNumber
                        value={8}
                        formatValue={n => n.toFixed(0)}
                        duration={3000}
                    />
                    :
                    null
                }

                <DefaultText color={"#282828"} align={"center"} bolder={"bold"} font={"25px"} mTop={"10px"}>Projetos
                    completados</DefaultText>
            </BlockDiv>
        </MainDiv>
    )
}