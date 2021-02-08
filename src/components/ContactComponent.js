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
import {useMediaQuery} from "react-responsive";

export default (props) => {
    const [secondaryColor, setSecondaryColor] = useState('#999');

    const isMobile = useMediaQuery({                                     // 18 - Da uma largura para mobile devices
        query: '(max-width: 800px)'
    });

    const DefaultBtn = withStyles(() => ({
        root: {
            backgroundColor: props.darkMode ? '#fff' : '#2f2e41',
            padding: 20,
            fontSize: 16,
            height: 50,
            borderRadius: 10,
            color: props.darkMode ? '#2f2e41' : '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '500ms',
            fontFamily: 'candara',

            '&:hover': {
                backgroundColor: '#FF5E62',
            }
        },
    }))(Button);

    return(
        <MainDiv>
            <LeftDiv background={props.darkMode ? '#2f2e41' : '#fff'} display={props.showContact ? 'flex' : 'none'}>
                <DefaultText mTop={isMobile ? '0' : '100px'} align={"center"} font={isMobile ? '25px' : '30px'} color={'#999'}>Aberto para negócios</DefaultText>
                <DefaultText align={"center"} font={isMobile ? '30px' : '35px'} color={props.darkMode ? '#fff' : '#2f2e41'} bolder={"bold"} mTop={"0"}>Minhas redes sociais</DefaultText>
                <DefaultText width={"80%"} align={"center"} font={isMobile ? '20px' : '25px'} color={secondaryColor} mTop={"10px"}>
                    Por aqui você pode me contatar para tirar dúvidas sobre preço, horário, processo de criação e etc...
                </DefaultText>

                <DefaultText mTop={"50px"} align={"center"} color={'#999'} font={isMobile ? '20px' : '25px'} bolder={"bold"}><span style={{color: props.darkMode ? '#fff' : '#2f2e41'}}>Telefone: </span> (85) 99253-3108</DefaultText>
                <DefaultText mTop={"10px"} align={"center"} color={'#999'} font={isMobile ? '20px' : '25px'} bolder={"bold"}><span style={{color: props.darkMode ? '#fff' : '#2f2e41'}}>Email: </span> matheusgomes192@hotmail.com</DefaultText>

                <IconDiv>
                    <IconBall background={props.darkMode ? '#fff' : '#2f2e41'}>
                        <Facebook fill={props.darkMode ? '#2f2e41' : '#fff'} />
                    </IconBall>
                    <IconBall background={props.darkMode ? '#fff' : '#2f2e41'}>
                        <Instagram fill={props.darkMode ? '#2f2e41' : '#fff'} />
                    </IconBall>
                    <IconBall background={props.darkMode ? '#fff' : '#2f2e41'}>
                        <Linkedin fill={props.darkMode ? '#2f2e41' : '#fff'} />
                    </IconBall>
                </IconDiv>
            </LeftDiv>

            <RightDiv background={props.darkMode ? '#3C3A52' : '#f5f5f5'} display={props.showContact ? 'flex' : 'none'}>
                <DefaultText align={"center"} font={isMobile ? '30px' : '35px'} bolder={"bold"} color={props.darkMode ? '#fff' : '#2f2e41'}>Fale comigo</DefaultText>
                <DefaultText mTop={"0px"} align={"center"} font={isMobile ? '25px' : '35px'} bolder={"bold"} color={'#999'}>Apenas para ofertas de trabalhos</DefaultText>
                <RightCenterDiv>
                    <Input color={props.darkMode ? '#fff' : '#2f2e41'} background={props.darkMode ? '#2f2e41' : '#fff'} className={"input1"} placeholder={"Seu nome"} />
                    <Input color={props.darkMode ? '#fff' : '#2f2e41'} background={props.darkMode ? '#2f2e41' : '#fff'} className={"input2"} placeholder={"Seu Email"} />
                    <InputBig color={props.darkMode ? '#fff' : '#2f2e41'} background={props.darkMode ? '#2f2e41' : '#fff'} className={"input3"} placeholder={"Sua proposta"} />
                    <DefaultBtn className={"input4"}>Enviar Mensagem</DefaultBtn>
                </RightCenterDiv>
            </RightDiv>

        </MainDiv>


    );
}