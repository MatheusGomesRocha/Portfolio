import {useState, useEffect} from "react";
import {DefaultText} from "./DefaultText";
import AnimatedNumber from "animated-number-react";
import Smile from '../svg/smile.svg';
import Clock from '../svg/clock.svg';
import Edit from '../svg/edit.svg';
import Coffee from '../svg/coffee-cup.svg';
import {CircleProgressBar1, CircleProgressBar2, CircleProgressBar3, CircleProgressBar4, CircleProgressBar5} from './CircleProgressBar';

import {
    MainDiv,
    GridTopDiv,
    ItemCircleDiv,
    GridDiv,
    BlockDiv,
    Svg
} from "./MoreInfoStyled";

export default (props) => {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);

    return (
        <MainDiv>

            <DefaultText align={"center"} font={"40px"} bolder={"bold"} color={"#2f2e41"} >Minhas especialidades</DefaultText>
            <DefaultText mTop={"0"} align={"center"} font={"25px"} color={"#999"} >Algumas de minhas habilidades</DefaultText>

            <GridTopDiv>
                <ItemCircleDiv>
                    <CircleProgressBar1 />
                    <DefaultText mTop={"-10px"} color={"#2f2e41"} font={"25px"} align={"center"}>Back-end</DefaultText>
                </ItemCircleDiv>

                <ItemCircleDiv>
                    <CircleProgressBar2 />
                    <DefaultText mTop={"-10px"} color={"#2f2e41"} font={"25px"} align={"center"}>Front-end</DefaultText>
                </ItemCircleDiv>

                <ItemCircleDiv>
                    <CircleProgressBar3 />
                    <DefaultText mTop={"-10px"} color={"#2f2e41"} font={"25px"} align={"center"}>Mobile</DefaultText>
                </ItemCircleDiv>

                <ItemCircleDiv>
                    <CircleProgressBar4 />
                    <DefaultText mTop={"-10px"} color={"#2f2e41"} font={"25px"} align={"center"}>Performance</DefaultText>
                </ItemCircleDiv>

                <ItemCircleDiv>
                    <CircleProgressBar5 />
                    <DefaultText mTop={"-10px"} color={"#2f2e41"} font={"25px"} align={"center"}>Expriência do usuário</DefaultText>
                </ItemCircleDiv>
            </GridTopDiv>

            <GridDiv>
                <BlockDiv display={props.showMoreInfo ? 'flex' : 'none'} onMouseOver={() => setHover1(true)}
                          onMouseOut={() => setHover1(false)} background={"#FF5E62"} color={"#fff"}>
                    <Svg transform={hover1 ? 'scale(1.2)' : 'scale(1)'} src={Smile}/>
                    {props.showMoreInfo ?
                        <AnimatedNumber
                            value={19}
                            formatValue={n => n.toFixed(0)}
                            duration={3000}
                        />
                        :
                        null
                    }

                    <DefaultText color={"#fff"} align={"center"} bolder={"bold"} font={"25px"} mTop={"10px"}>Clientes
                        satisfeitos</DefaultText>
                </BlockDiv>

                <BlockDiv display={props.showMoreInfo ? 'flex' : 'none'} onMouseOver={() => setHover2(true)}
                          onMouseOut={() => setHover2(false)}>
                    <Svg transform={hover2 ? 'scale(1.2)' : 'scale(1)'} src={Coffee}/>
                    {props.showMoreInfo ?
                        <AnimatedNumber
                            value={2147}
                            formatValue={n => n.toFixed(0)}
                            duration={3000}
                        />
                        :
                        null
                    }

                    <DefaultText color={"#2f2e41"} align={"center"} bolder={"bold"} font={"25px"} mTop={"10px"}>Copos de
                        café</DefaultText>
                </BlockDiv>

                <BlockDiv display={props.showMoreInfo ? 'flex' : 'none'} onMouseOver={() => setHover3(true)}
                          onMouseOut={() => setHover3(false)} background={"#FF5E62"} color={"#fff"}>
                    <Svg transform={hover3 ? 'scale(1.2)' : 'scale(1)'} src={Edit}/>
                    {props.showMoreInfo ?
                        <AnimatedNumber
                            value={3485}
                            formatValue={n => n.toFixed(0)}
                            duration={3000}
                        />
                        :
                        null
                    }

                    <DefaultText color={"#fff"} align={"center"} bolder={"bold"} font={"25px"} mTop={"10px"}>Linhas de
                        códigos</DefaultText>
                </BlockDiv>

                <BlockDiv display={props.showMoreInfo ? 'flex' : 'none'} onMouseOver={() => setHover4(true)}
                          onMouseOut={() => setHover4(false)}>
                    <Svg transform={hover4 ? 'scale(1.2)' : 'scale(1)'} src={Clock}/>
                    {props.showMoreInfo ?
                        <AnimatedNumber
                            value={8}
                            formatValue={n => n.toFixed(0)}
                            duration={3000}
                        />
                        :
                        null
                    }

                    <DefaultText color={"#2f2e41"} align={"center"} bolder={"bold"} font={"25px"} mTop={"10px"}>Projetos
                        completados</DefaultText>
                </BlockDiv>
            </GridDiv>


        </MainDiv>
    )
}