import {useState} from 'react';
import {DefaultText} from './DefaultText';
import './Contact.css';
import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

import Facebook from '../svg/facebook';
import Instagram from '../svg/instagram';
import Linkedin from '../svg/linkedin';

import {
    MainDiv,
    LeftDiv,
    RightDiv,
    RightCenterDiv,
    Input,
    InputBig,
    IconDiv,
    IconBall,
    Icon,
} from "./ContactStyled";

export default (props) => {
    const [primaryColor, setPrimaryColor] = useState('#2f2e41');
    const [secondaryColor, setSecondaryColor] = useState('#999');

    const DefaultBtn = withStyles(() => ({
        root: {
            backgroundColor: '#2f2e41',
            padding: 20,
            fontSize: 16,
            height: 50,
            borderRadius: 10,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            '&:hover': {
                backgroundColor: '#484663',
            }
        },
    }))(Button);

    return(
        <MainDiv>
            <LeftDiv display={props.showContact ? 'flex' : 'none'}>
                <DefaultText mTop={"100px"} align={"center"} font={"30px"} color={secondaryColor}>Aberto para negócios</DefaultText>
                <DefaultText align={"center"} font={"35px"} color={primaryColor} bolder={"bold"} mTop={"0"}>Minhas redes sociais</DefaultText>
                <DefaultText width={"80%"} align={"center"} font={"25px"} color={secondaryColor} mTop={"10px"}>
                    Por aqui você pode me contatar para tirar dúvidas sobre preço, horário, processo de criação e etc...
                </DefaultText>

                <DefaultText mTop={"50px"} align={"center"} color={secondaryColor} font={"25px"} bolder={"bold"}><span style={{color: primaryColor}}>Telefone: </span> (85) 99253-3108</DefaultText>
                <DefaultText mTop={"10px"} align={"center"} color={secondaryColor} font={"25px"} bolder={"bold"}><span style={{color: primaryColor}}>Email: </span> matheusgomes192@hotmail.com</DefaultText>

                <IconDiv>
                    <IconBall>
                        <Facebook fill={"#fff"} />
                    </IconBall>
                    <IconBall>
                        <Instagram fill={'#fff'} />
                    </IconBall>
                    <IconBall>
                        <Linkedin fill={'#fff'} />
                    </IconBall>
                </IconDiv>
            </LeftDiv>

            <RightDiv display={props.showContact ? 'flex' : 'none'}>
                <DefaultText align={"center"} font={"35px"} bolder={"bold"} color={primaryColor}>Fale comigo</DefaultText>
                <DefaultText mTop={"0px"} align={"center"} font={"30px"} bolder={"bold"} color={secondaryColor}>Apenas para ofertas de trabalhos</DefaultText>
                <RightCenterDiv>
                    <Input className={"input1"} placeholder={"Seu nome"} />
                    <Input className={"input2"} placeholder={"Seu Email"} />
                    <InputBig className={"input3"} placeholder={"Sua proposta"} />
                    <DefaultBtn className={"input4"}>Enviar Mensagem</DefaultBtn>
                </RightCenterDiv>
            </RightDiv>

        </MainDiv>


    );
}