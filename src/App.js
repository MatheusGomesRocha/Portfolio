import {useEffect, useState} from "react";
import './App.css'
import {useMediaQuery} from "react-responsive";
import Typist from 'react-typist';
import Header_img from './header_img';
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
} from './AppStyled';

import AboutMeComponent from "./components/AboutMeComponent";
import BenefitsComponent from "./components/BenefitsComponent";
import MoreInfoComponent from "./components/MoreInfoComponent";
import WorksComponent from "./components/WorksComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";

export default () => {
    const [backgroundColor, setBackgroundColor] = useState('#2f2e41');      // Background para Dark Mode
    const [fontColor, setFontColor] = useState('#fff');                     // Color para Dark Mode

    const [fixedHeader, setFixedHeader] = useState(false);                  // Para mostrar o Header fixado

    /* Hooks enviados para o Component Benefits */
    const [displayBlock, setDisplayBlock] = useState(false);                // Para mostrar o primeiro item
    const [displayBlock2, setDisplayBlock2] = useState(false);              // Para mostrar o segundo item
    const [displayBlock3, setDisplayBlock3] = useState(false);              // Para mostrar o terceiro item
    const [displayBlock4, setDisplayBlock4] = useState(false);              // Para quarto o primeiro item

    const [showMoreInfo, setShowMoreInfo] = useState(false);                // Para mostrar os itens do Component MoreInfo

    const [showContact, setShowContact] = useState(false);                  // Para mostrar o Component Contact

    const [sectionHome, setSectionHome] = useState(false);                  // Para saber se está na sessão Home
    const [sectionAbout, setSectionAbout] = useState(false);                // Para saber se está na sessão About
    const [sectionBenefits, setSectionBenefits] = useState(false)           // Para saber se está na sessão Benefits
    const [sectionInfos, setSectionInfos] = useState(false);                // Para saber se está na sessão MoreInfos
    const [sectionWorks, setSectionWorks] = useState(false);                // Para saber se está na sessão Works
    const [sectionContact, setSectionContact] = useState(false);            // Para saber se está na sessão Contact

    const [darkMode, setDarkMode] = useState(false);                        // Se está no Dark Mode
    const [lightMode, setLightMode] = useState(true);                       // Se não está no DarkMode, que começa como verdadeiro
    const [darkModeDiv, setDarkModeDiv] = useState(false);                  // Mostra a div com a opção de escolher o modo Dark ou Light

    const isMobile = useMediaQuery({                                     // 18 - Da uma largura para mobile devices
        query: '(max-width: 700px)'
    });

    const isIpad = useMediaQuery({                                     // 18 - Da uma largura para mobile devices
        query: '(max-width: 1050px)'
    });


    const DefaultBtn = withStyles(() => ({          // Botão padrão "VAMOS COMEÇAR"
        root: {
            backgroundColor: '#2f2e41',
            padding: 20,
            fontSize: 16,
            height: 50,
            marginTop: 30,
            borderRadius: 10,
            width: isMobile ? '80%' : '60%',
            fontFamily: 'candara',
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

    const DarkModeBtn = withStyles(() => ({         // Botão fixado no bottom right com o "..."
        root: {
            backgroundColor: darkMode ? '#fff' : '#2f2e41',
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
            border: darkMode ? '1px solid #2f2e41' : '1px solid #fff',

            '&:hover': {
                backgroundColor: '#FF5E62',
            }
        },
    }))(Button);


    const handleScroll = () => {        // Verifica o Scroll da pagina
        if (document.documentElement.scrollTop > 0) {       // Se for maior que 0, fixa o Header e está na sessão Home
            setFixedHeader(true);
            setSectionWorks(false);
            setSectionContact(false);
            setSectionBenefits(false);
            setSectionAbout(false);
            setSectionInfos(false);
            setSectionHome(true);
        }
        if (document.documentElement.scrollTop <= 0) {          // Se for menor que 0, desfixa o Header e não está em nenhuma sessão
            setFixedHeader(false);
            setSectionHome(false);
        }
        if (document.documentElement.scrollTop > 800) {     // Se for maior que 800, está na sessão About
            setSectionHome(false);
            setSectionWorks(false);
            setSectionContact(false);
            setSectionBenefits(false);
            setSectionInfos(false);
            setSectionAbout(true);
        }
        if (document.documentElement.scrollTop > 1200) {        // Se for maior que 1200, mostra o item1 do Component Benefits
            setDisplayBlock(true);
        }
        if (document.documentElement.scrollTop > 1400) {        // Se for maior que 1400, mostra o item2 do Component Benefits
            setDisplayBlock2(true);
        }
        if (document.documentElement.scrollTop > 1600) {        // Se for maior que 1600, mostra o item3 do Component Benefits
            setDisplayBlock3(true);
        }
        if (document.documentElement.scrollTop > 1800) {        // Se for maior que 1800, mostra o item4 do Component Benefits e está na sessão Benefits
            setDisplayBlock4(true);
            setSectionHome(false);
            setSectionAbout(false);
            setSectionWorks(false);
            setSectionContact(false);
            setSectionInfos(false);
            setSectionBenefits(true);
        }
        if (document.documentElement.scrollTop > 2500) {      // Se for maior que 2500 mostra, a div com mais infos, e está na sessão Infos
            setShowMoreInfo(true);
            setSectionHome(false);
            setSectionAbout(false);
            setSectionWorks(false);
            setSectionContact(false);
            setSectionBenefits(false);
            setSectionInfos(true);
        }
        if (document.documentElement.scrollTop > 3100) {    // Se for maior que 3100, está na sessão Works
            setSectionHome(false);
            setSectionAbout(false);
            setSectionContact(false);
            setSectionBenefits(false);
            setSectionInfos(false);
            setSectionWorks(true);
        }
        if (document.documentElement.scrollTop > 3800) {    // Se for maior que 3800, mostra o Component Contact, e está na sessão Contact
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

    const handleDarkMode = () => {      // Seta o site como DarkMode
        setDarkMode(true);
        setBackgroundColor('#fff');
        setFontColor('#2f2e41');
        setLightMode(false);
    }

    const handleLightMode = () => {     // Seta o site como LightMode
        setLightMode(true);
        setBackgroundColor('#2f2e41');
        setFontColor('#fff');
        setDarkMode(false);
    }

    return (
        <Container>
            <Header id={"home"}>
                {/*Botão para abrir div e escolher modo*/}
                <DarkModeBtn onClick={() => setDarkModeDiv(!darkModeDiv)}>
                    <Dots fill={darkMode ? '#2f2e41' : '#fff'}/>
                </DarkModeBtn>

                {/*Div para escolher modo*/}
                <DarkModeDiv background={darkMode ? '#fff' : '#2f2e41'} display={darkModeDiv ? 'flex' : 'none'}>
                    <DefaultText mTop={"0"} color={darkMode ? '#2f2e41' : '#fff'} weight={"bold"} align={"center"}
                                 font={"22px"}>Modo</DefaultText>
                    <DarkModeDivInside bdColor={darkMode ? '#2f2e41' : '#fff'} onClick={handleLightMode}
                                       background={lightMode ? '#fff' : 'transparent'}>
                        <Sun fill={"#2f2e41"}/>
                        <DefaultText style={{marginLeft: 20}} font={"20px"} align={"center"} color={'#2f2e41'}
                                     mTop={"0"}>Light Mode</DefaultText>
                    </DarkModeDivInside>

                    <DarkModeDivInside bdColor={darkMode ? '#2f2e41' : '#fff'} onClick={handleDarkMode}
                                       background={darkMode ? fontColor : 'transparent'}>
                        <Moon fill={'#fff'}/>
                        <DefaultText style={{marginLeft: 20}} font={"20px"} color={'#fff'} mTop={"0"}>Dark
                            Mode</DefaultText>
                    </DarkModeDivInside>
                </DarkModeDiv>

                {/*Div escondida para não ter um margem negativa quando fixa o Header*/}
                <HeaderTopHidden display={fixedHeader ? 'flex' : 'none'}></HeaderTopHidden>

                {/* Header Top */}
                <HeaderTop background={fixedHeader && backgroundColor || fixedHeader && darkMode && backgroundColor}
                           position={fixedHeader && 'fixed'}>

                    <HeaderLink href="#home">Home</HeaderLink>

                    <HeaderLinkDiv>
                        <HeaderLink color={sectionHome && '#FF5E62' || fixedHeader && fontColor}
                                    href="#home">Home</HeaderLink>

                        <HeaderLink color={sectionAbout && '#FF5E62' || fixedHeader && fontColor}
                                    href="#about">Sobre</HeaderLink>

                        <HeaderLink color={sectionBenefits && '#FF5E62' || fixedHeader && fontColor}
                                    href="#benefits">Benefícios</HeaderLink>

                        <HeaderLink color={sectionInfos && '#FF5E62' || fixedHeader && fontColor}
                                    href="#infos">Infos</HeaderLink>

                        <HeaderLink color={sectionWorks && '#FF5E62' || fixedHeader && fontColor}
                                    href="#works">Trabalhos</HeaderLink>

                        <HeaderLink color={sectionContact && '#FF5E62' || fixedHeader && fontColor}
                                    href="#contact">Contato</HeaderLink>
                    </HeaderLinkDiv>

                </HeaderTop>

                {/*Parte de baixo com o texto na esquerda e o Svg na direita*/}
                <HeaderBottom>
                    <HeaderLeft>
                        <Typist>
                            <DefaultText font={isMobile ? '25px' : '30px'} color={'#fff'}>Olá,</DefaultText>
                            <br/>
                            <DefaultText font={isMobile ? '30px' : '40px'} color={'f2f2f2'} bolder={"bold"}>Meu nome
                                é <br/> Matheus
                                Gomes</DefaultText>
                            <br/>
                            <DefaultText font={isMobile ? '25px' : '30px'} color={'#fff'}>Bem vindo ao meu
                                portfólio</DefaultText>
                        </Typist>

                        <DefaultBtn href={"#about"}> Vamos Começar </DefaultBtn>
                    </HeaderLeft>

                    <Header_img mobile={isIpad} fillTop={darkMode ? '#3C3A52' : '#f2f2f2'}
                                fillAngle={darkMode ? '#fff' : '#2f2e41'}
                                fillBig={darkMode ? '#2f2e41' : '#fff'}/>
                </HeaderBottom>


            </Header>

            {/*Wave abaixo do Header*/}
            {isMobile ?
                    null
                :
                <div className="custom-shape-divider-bottom-1612379057">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="shape-fill" fill={darkMode ? '#2f2e41' : '#fff'}
                            style={{transition: '500ms'}}></path>
                    </svg>
                </div>
            }
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