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
    HeaderLeft,
    HeaderImg,
} from './AppStyled';

import AboutMeComponent from "./components/AboutMeComponent";
import BenefitsComponent from "./components/BenefitsComponent";
import MoreInfoComponent from "./components/MoreInfoComponent";

export default () => {
    let primaryColor = '#282828';
    let secondaryColor = '#999';

    const DefaultBtn = withStyles(() => ({
        root: {
            backgroundColor: '#845EC2',
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
                backgroundColor: '#008353',
            }
        },
    }))(Button);

  return(
      <Container>
          <Header>

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

          </Header>

          <AboutMeComponent />

          <BenefitsComponent />

          <MoreInfoComponent />
      </Container>

  );
}