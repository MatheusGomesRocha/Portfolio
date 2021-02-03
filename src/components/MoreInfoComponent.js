import {DefaultText} from "./DefaultText";
import AnimatedNumber from "react-animated-number";
import Smile from '../svg/smile.svg';
import Clock from '../svg/clock.svg';
import Edit from '../svg/edit.svg';

import {
    MainDiv,
    BlockDiv,
    Svg
} from "./MoreInfoStyled";

export default () => {
    return (
        <MainDiv>

            <BlockDiv>
                <Svg src={Smile}/>
                <AnimatedNumber component="text" value={174}
                                style={{
                                    fontSize: 48,

                                }}
                                formatValue={n => n.toFixed(0)}
                                duration={3000}
                />
                <DefaultText>Clientes satisfeitos</DefaultText>
            </BlockDiv>

            <BlockDiv>
                <Svg src={Smile}/>
                <AnimatedNumber component="text" value={1.478}
                                style={{
                                    fontSize: 48,

                                }}
                                formatValue={n => n.toFixed(0)}
                                duration={3000}
                />
                <DefaultText>Copos de café</DefaultText>
            </BlockDiv>

            <BlockDiv>
                <Svg src={Edit}/>
                <AnimatedNumber component="text" value={1.871}
                                style={{
                                    fontSize: 48,

                                }}
                                formatValue={n => n.toFixed(0)}
                                duration={3000}
                />
                <DefaultText>Linhas de códigos</DefaultText>
            </BlockDiv>

            <BlockDiv>
                <Svg src={Clock}/>
                <AnimatedNumber component="text" value={5}
                                style={{
                                    fontSize: 48,

                                }}
                                formatValue={n => n.toFixed(0)}
                                duration={3000}
                />
                <DefaultText>Projetos completados</DefaultText>
            </BlockDiv>
        </MainDiv>
    )
}