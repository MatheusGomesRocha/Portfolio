import {useEffect, useState} from "react";
import './App.css'
import Typist from 'react-typist';
import Header_img from './header_img.svg';
import {DefaultText} from './components/DefaultText';
import {Button} from '@material-ui/core';

import {
    withStyles,
} from '@material-ui/core/styles';

import {
    Container,

    Header,
    HeaderTop,
    HeaderLinkDiv,
    HeaderLink,
    HeaderLeft,
    HeaderImg, HeaderBottom,
} from './AppStyled';

import AboutMeComponent from "./components/AboutMeComponent";
import BenefitsComponent from "./components/BenefitsComponent";
import MoreInfoComponent from "./components/MoreInfoComponent";
import WorksComponent from "./components/WorksComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";

export default () => {
    let primaryColor = '#2f2e41';
    let secondaryColor = '#fff';

    const [displayBlock, setDisplayBlock] = useState(false);
    const [displayBlock2, setDisplayBlock2] = useState(false);
    const [displayBlock3, setDisplayBlock3] = useState(false);
    const [displayBlock4, setDisplayBlock4] = useState(false);
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const [hoverLink, setHoverLink] = useState(false);
    const [hoverLink2, setHoverLink2] = useState(false);
    const [hoverLink3, setHoverLink3] = useState(false);
    const [hoverLink4, setHoverLink4] = useState(false);
    const [hoverLink5, setHoverLink5] = useState(false);
    const [hoverLink6, setHoverLink6] = useState(false);

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

            '&:hover': {
                backgroundColor: '#484663',
            }
        },
    }))(Button);


    const handleScroll = () => {        // Verifica se o scroll é maior que 1900 e mostra uma área
        if (document.documentElement.scrollTop > 1200) {
            setDisplayBlock(true);
        } if(document.documentElement.scrollTop > 1400) {
            setDisplayBlock2(true);
        } if(document.documentElement.scrollTop > 1600) {
            setDisplayBlock3(true);
        } if(document.documentElement.scrollTop > 1800) {
            setDisplayBlock4(true);
        } if (document.documentElement.scrollTop > 2500) {
            setShowMoreInfo(true);
        } if (document.documentElement.scrollTop > 3800) {
            setShowContact(true);
        }
    }

    useEffect(() => {       // Ao carregar a página já executa a função para pegar o valor do scroll
        window.onscroll = () => {
            handleScroll();
        };
    }, [])


    return(
      <Container>
          <Header>
              <HeaderTop>
                  <HeaderLinkDiv onMouseOver={() => setHoverLink(true)} onMouseOut={() => setHoverLink(false)}>
                      <HeaderLink color={hoverLink ? '#2f2e41' : '#fff'}>Home</HeaderLink>
                  </HeaderLinkDiv>

                  <HeaderLinkDiv onMouseOver={() => setHoverLink2(true)} onMouseOut={() => setHoverLink2(false)}>
                      <HeaderLink color={hoverLink2 ? '#2f2e41' : '#fff'}>Sobre</HeaderLink>
                  </HeaderLinkDiv>

                  <HeaderLinkDiv onMouseOver={() => setHoverLink3(true)} onMouseOut={() => setHoverLink3(false)}>
                      <HeaderLink color={hoverLink3 ? '#2f2e41' : '#fff'}>Benefícios</HeaderLink>
                  </HeaderLinkDiv>

                  <HeaderLinkDiv onMouseOver={() => setHoverLink4(true)} onMouseOut={() => setHoverLink4(false)}>
                      <HeaderLink color={hoverLink4 ? '#2f2e41' : '#fff'}>Infos</HeaderLink>
                  </HeaderLinkDiv>

                  <HeaderLinkDiv onMouseOver={() => setHoverLink5(true)} onMouseOut={() => setHoverLink5(false)}>
                      <HeaderLink color={hoverLink5 ? '#2f2e41' : '#fff'}>Trabalhos</HeaderLink>
                  </HeaderLinkDiv>

                  <HeaderLinkDiv onMouseOver={() => setHoverLink6(true)} onMouseOut={() => setHoverLink6(false)}>
                      <HeaderLink color={hoverLink6 ? '#2f2e41' : '#fff'}>Contato</HeaderLink>
                  </HeaderLinkDiv>
              </HeaderTop>

              <HeaderBottom>
                  <HeaderLeft>
                      <Typist>
                          <DefaultText font={'30px'} color={secondaryColor}>Olá,</DefaultText>
                          <br />
                          <DefaultText font={'40px'} color={primaryColor} bolder={"bold"}>Meu nome é <br /> Matheus Gomes</DefaultText>
                          <br />
                          <DefaultText font={'30px'} color={secondaryColor}>Bem vindo ao meu portfólio</DefaultText>
                      </Typist>

                      <DefaultBtn> Vamos Começar </DefaultBtn>
                  </HeaderLeft>

                  <HeaderImg src={Header_img}/>
              </HeaderBottom>


          </Header>

          <div className="custom-shape-divider-bottom-1612379057">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                   preserveAspectRatio="none">
                  <path
                      d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                      className="shape-fill"></path>
              </svg>
          </div>

          <AboutMeComponent />

          <BenefitsComponent display={displayBlock} display2={displayBlock2} display3={displayBlock3} display4={displayBlock4}/>

          <MoreInfoComponent showMoreInfo={showMoreInfo}/>

          <WorksComponent />

          <ContactComponent showContact={showContact}/>

          <FooterComponent />
      </Container>

  );
}