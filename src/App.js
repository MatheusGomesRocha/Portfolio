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
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDisplay(true)
        }, 4000)
    }, [])
  return(
      <Container>
          <Header>

              <HeaderLeft>
                  <Typist>
                      <DefaultText font={'25px'} color={"#999"}>Olá,</DefaultText>
                      <br />
                      <DefaultText font={'35px'} bolder={"bold"}>Meu nome é <br /> Matheus Gomes</DefaultText>
                      <br />
                      <DefaultText font={'25px'} color={"#999"}>Bem vindo ao meu portfólio</DefaultText>
                  </Typist>
              </HeaderLeft>

              <HeaderImg style={{display: display ? 'block' : 'none'}} src={Header_img} width={750} height={650}/>

          </Header>
      </Container>

  );
}