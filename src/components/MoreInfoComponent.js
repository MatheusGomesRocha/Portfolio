import {DefaultText} from "./DefaultText";
import AnimatedNumber from "react-animated-number";
import Smile from '../svg/smile.svg';
import Clock from '../svg/clock.svg';
import Edit from '../svg/edit.svg';
import Coffee from '../svg/coffee-cup.svg';

import {
    MainDiv,
    BlockDiv,
    Svg
} from "./MoreInfoStyled";
import {useState} from "react";

export default () => {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);

    return (
        <MainDiv>

            <BlockDiv onMouseOver={() => setHover1(true)} onMouseOut={() => setHover1(false)} background={"#eee"}>
                <Svg transform={hover1 ? 'scale(1.2)' : 'scale(1)'} src={Smile}/>
                <AnimatedNumber component="text" value={18}
                                style={{
                                    fontSize: 48,
                                    color: '#845EC2',
                                    marginTop: 10
                                }}
                                formatValue={n => n.toFixed(0)}
                                duration={3000}
                />
                <DefaultText align={"center"} bolder={"bold"} font={"25px"} mTop={"10px"}>Clientes satisfeitos</DefaultText>
            </BlockDiv>

            <BlockDiv onMouseOver={() => setHover2(true)} onMouseOut={() => setHover2(false)}>
                <Svg transform={hover2 ? 'scale(1.2)' : 'scale(1)'} src={Coffee}/>
                <AnimatedNumber component="text" value={1478}
                                style={{
                                    fontSize: 48,
                                    color: '#845EC2',
                                    marginTop: 10
                                }}
                                formatValue={n => n.toFixed(0)}
                                duration={3000}
                />
                <DefaultText align={"center"} bolder={"bold"} font={"25px"} mTop={"10px"}>Copos de café</DefaultText>
            </BlockDiv>

            <BlockDiv onMouseOver={() => setHover3(true)} onMouseOut={() => setHover3(false)} background={"#eee"}>
                <Svg transform={hover3 ? 'scale(1.2)' : 'scale(1)'} src={Edit}/>
                <AnimatedNumber component="text" value={1871}
                                style={{
                                    fontSize: 48,
                                    color: '#845EC2',
                                    marginTop: 10
                                }}
                                formatValue={n => n.toFixed(0)}
                                duration={3000}
                />
                <DefaultText align={"center"} bolder={"bold"} font={"25px"} mTop={"10px"}>Linhas de códigos</DefaultText>
            </BlockDiv>

            <BlockDiv onMouseOver={() => setHover4(true)} onMouseOut={() => setHover4(false)}>
                <Svg transform={hover4 ? 'scale(1.2)' : 'scale(1)'} src={Clock}/>
                <AnimatedNumber component="text" value={5}
                                style={{
                                    fontSize: 48,
                                    color: '#845EC2',
                                    marginTop: 10
                                }}
                                formatValue={n => n.toFixed(0)}
                                duration={3000}
                />
                <DefaultText align={"center"} bolder={"bold"} font={"25px"} mTop={"10px"}>Projetos completados</DefaultText>
            </BlockDiv>
        </MainDiv>
    )
}