import {useState, useEffect} from 'react';
import Typist from 'react-typist';
import Header_img from './header_img.svg';

import {
    Container,

    DefaultText,

    Header, HeaderImg,
    HeaderLeft,
} from './AppStyled';

export default () => {
    let primaryColor = '#282828';
    let secondaryColor = '#999';

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
              </HeaderLeft>

              <HeaderImg src={Header_img}/>

          </Header>
      </Container>

  );
}