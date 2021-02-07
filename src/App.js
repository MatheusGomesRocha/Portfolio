import {useEffect, useState} from "react";
import './App.css'
import Typist from 'react-typist';
import Header_img from './header_img.svg';
import Dots from './svg/ellipsis';
import Sun from './svg/sun';
import Moon from './svg/moon';
import {DefaultText} from './components/DefaultText';
import {Button} from '@material-ui/core';

import {
    withStyles,
} from '@material-ui/core/styles';

import {
    Container,

    DarkModeDiv,
    DarkModeDivInside,

    Header,
    HeaderTop,
    HeaderTopHidden,
    HeaderLinkDiv,
    HeaderLink,
    HeaderBottom,
    HeaderLeft,
    HeaderImg,
} from './AppStyled';

import AboutMeComponent from "./components/AboutMeComponent";
import BenefitsComponent from "./components/BenefitsComponent";
import MoreInfoComponent from "./components/MoreInfoComponent";
import WorksComponent from "./components/WorksComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";

export default () => {
    const [backgroundColor, setBackgroundColor] = useState('#2f2e41');
    const [fontColor, setFontColor] = useState('#fff');

    const [displayBlock, setDisplayBlock] = useState(false);
    const [displayBlock2, setDisplayBlock2] = useState(false);
    const [displayBlock3, setDisplayBlock3] = useState(false);
    const [displayBlock4, setDisplayBlock4] = useState(false);
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [fixedHeader, setFixedHeader] = useState(false);

    const [sectionHome, setSectionHome] = useState(false);
    const [sectionAbout, setSectionAbout] = useState(false);
    const [sectionBenefits, setSectionBenefits] = useState(false);
    const [sectionInfos, setSectionInfos] = useState(false);
    const [sectionWorks, setSectionWorks] = useState(false);
    const [sectionContact, setSectionContact] = useState(false);

    const [darkMode, setDarkMode] = useState(false);
    const [lightMode, setLightMode] = useState(true);
    const [darkModeDiv, setDarkModeDiv] = useState(false);

    const DefaultBtn = withStyles(() => ({
        root: {
            backgroundColor: '#2f2e41',
            padding: 20,
            fontSize: 16,
            height: 50,
            marginTop: 30,
            borderRadius: 10,
            width: '60%',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '500ms',

            '&:hover': {
                backgroundColor: '#FF5E62',
            }
        },
    }))(Button);

    const DarkModeBtn = withStyles(() => ({
        root: {
            backgroundColor: backgroundColor,
            padding: 20,
            fontSize: 16,
            height: 50,
            width: 50,
            borderRadius: 10,
            color: '#fff',
            position: 'fixed',
            bottom: 25,
            right: 25,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '500ms',
            zIndex: 999,

            '&:hover': {
                backgroundColor: '#FF5E62',
            }
        },
    }))(Button);


    const handleScroll = () => {        // Verifica se o scroll é maior que 1900 e mostra uma área
        if (document.documentElement.scrollTop > 0) {
            setFixedHeader(true);
            setSectionWorks(false);
            setSectionContact(false);
            setSectionBenefits(false);
            setSectionAbout(false);
            setSectionInfos(false);
            setSectionHome(true);
        } if (document.documentElement.scrollTop <= 0) {
            setFixedHeader(false);
            setSectionHome(false);
        } if (document.documentElement.scrollTop > 800) {
            setSectionHome(false);
            setSectionWorks(false);
            setSectionContact(false);
            setSectionBenefits(false);
            setSectionInfos(false);
            setSectionAbout(true);
        }
        if (document.documentElement.scrollTop > 1200) {
            setDisplayBlock(true);
        }
        if (document.documentElement.scrollTop > 1400) {
            setDisplayBlock2(true);
        }
        if (document.documentElement.scrollTop > 1600) {
            setDisplayBlock3(true);
        }
        if (document.documentElement.scrollTop > 1800) {
            setDisplayBlock4(true);
            setSectionHome(false);
            setSectionAbout(false);
            setSectionWorks(false);
            setSectionContact(false);
            setSectionInfos(false);
            setSectionBenefits(true);
        }
        if (document.documentElement.scrollTop > 2500) {
            setShowMoreInfo(true);
            setSectionHome(false);
            setSectionAbout(false);
            setSectionWorks(false);
            setSectionContact(false);
            setSectionBenefits(false);
            setSectionInfos(true);
        } if (document.documentElement.scrollTop > 3100) {
            setSectionHome(false);
            setSectionAbout(false);
            setSectionContact(false);
            setSectionBenefits(false);
            setSectionInfos(false);
            setSectionWorks(true);
        }
        if (document.documentElement.scrollTop > 3800) {
            setShowContact(true);
            setSectionHome(false);
            setSectionAbout(false);
            setSectionWorks(false);
            setSectionBenefits(false);
            setSectionInfos(false);
            setSectionContact(true);
        }
    }

    useEffect(() => {       // Ao carregar a página já executa a função para pegar o valor do scroll
        window.onscroll = () => {
            handleScroll();
        };
    }, [])

    const handleDarkMode = () => {
            setDarkMode(true);
            setBackgroundColor('#fff');
            setFontColor('#2f2e41');
            setLightMode(false);
    }

    const handleLightMode = () => {
            setLightMode(true);
            setBackgroundColor('#2f2e41');
            setFontColor('#fff');
            setDarkMode(false);
    }

    return (
        <Container>
            <Header id={"home"}>
                <DarkModeBtn onClick={() => setDarkModeDiv(!darkModeDiv)}>
                    <Dots fill={fontColor}/>
                </DarkModeBtn>

                <DarkModeDiv background={backgroundColor} display={darkModeDiv ? 'flex' : 'none'}>
                    <DefaultText mTop={"0"} color={fontColor} weight={"bold"} align={"center"} font={"22px"}>Modo</DefaultText>
                    <DarkModeDivInside bdColor={fontColor} onClick={handleLightMode} background={lightMode ? fontColor : 'transparent'}>
                        <Sun fill={"#2f2e41"}/>
                        <DefaultText style={{marginLeft: 20}} font={"20px"} align={"center"} color={'#2f2e41'} mTop={"0"}>Light Mode</DefaultText>
                    </DarkModeDivInside>

                    <DarkModeDivInside bdColor={fontColor} onClick={handleDarkMode} background={darkMode ? fontColor : 'transparent'}>
                        <Moon fill={'#fff'}/>
                        <DefaultText style={{marginLeft: 20}} font={"20px"} color={'#fff'} mTop={"0"}>Dark Mode</DefaultText>
                    </DarkModeDivInside>
                </DarkModeDiv>

                <HeaderTopHidden display={fixedHeader ? 'flex' : 'none'}></HeaderTopHidden>

                <HeaderTop background={fixedHeader && backgroundColor || fixedHeader && darkMode && backgroundColor} position={fixedHeader && 'fixed'}>

                    <HeaderLink href="#home">Home</HeaderLink>

                    <HeaderLinkDiv>
                        <HeaderLink color={sectionHome && '#FF5E62' || fixedHeader && fontColor} href="#home">Home</HeaderLink>

                        <HeaderLink color={sectionAbout && '#FF5E62' || fixedHeader && fontColor} href="#about">Sobre</HeaderLink>

                        <HeaderLink color={sectionBenefits && '#FF5E62' || fixedHeader && fontColor} href="#benefits">Benefícios</HeaderLink>

                        <HeaderLink color={sectionInfos && '#FF5E62' || fixedHeader && fontColor} href="#infos">Infos</HeaderLink>

                        <HeaderLink color={sectionWorks && '#FF5E62' || fixedHeader && fontColor} href="#works">Trabalhos</HeaderLink>

                        <HeaderLink color={sectionContact && '#FF5E62' || fixedHeader && fontColor} href="#contact">Contato</HeaderLink>
                    </HeaderLinkDiv>

                </HeaderTop>

                <HeaderBottom>
                    <HeaderLeft>
                        <Typist>
                            <DefaultText font={'30px'} color={fontColor}>Olá,</DefaultText>
                            <br/>
                            <DefaultText font={'40px'} color={backgroundColor} bolder={"bold"}>Meu nome é <br/> Matheus
                                Gomes</DefaultText>
                            <br/>
                            <DefaultText font={'30px'} color={fontColor}>Bem vindo ao meu portfólio</DefaultText>
                        </Typist>

                        <DefaultBtn> Vamos Começar </DefaultBtn>
                    </HeaderLeft>

                    <HeaderImg src={Header_img}/>
                </HeaderBottom>


            </Header>

            <div className="custom-shape-divider-bottom-1612379057">
                <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill" fill={darkMode ? '#2f2e41' : '#fff'} style={{transition: '500ms'}}></path>
                </svg>
            </div>

            <div id={"about"}>
                <AboutMeComponent darkMode={darkMode}/>
            </div>

            <div id={"benefits"}>
                <BenefitsComponent display={displayBlock} display2={displayBlock2} display3={displayBlock3}
                                   display4={displayBlock4} darkMode={darkMode}/>
            </div>

            <div id={"infos"}>
                <MoreInfoComponent darkMode={darkMode} showMoreInfo={showMoreInfo}/>
            </div>

            <div id={"works"}>
                <WorksComponent darkMode={darkMode}/>
            </div>

            <div id={"contact"}>
                <ContactComponent darkMode={darkMode} showContact={showContact}/>
            </div>

            <FooterComponent darkMode={darkMode}/>
        </Container>

    );


}