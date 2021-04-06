import React from 'react';
import './About.css';

import DefaultBtnComponent from "../../sideComponent/DefaultBtn";

export default () => {
    return(
        <div className={"about"}>
            <div style={{marginRight: 100}} className={"side"}>
                <span className={"title"}>About Me</span>
                <div className={"lineBottom"}></div>
            </div>

            <div style={{width: '40%'}} className={"side"}>
                <span className={"textAbout"}>
                    Meu nome é Francisco Matheus Gomes Rocha, tenho 20 anos, moro em Fortaleza-CE estou no
                    5º semestre do curso de Análise e Desenvolvimento de Sistemas na UniFametro.
                    Quando conheci a programação à mais ou menos 3 anos atrás, me apaixonei de imediato, antes de
                    entrar para a faculdade, eu não sabia direito o que queria ser, mas quando pesquisei e ví
                    vídeos sobre a vida de um programador, descobri que era aquilo que eu queria.
                </span>

                <span style={{marginTop: 20}} className={"textAbout"}>
                    Hoje, 3 anos depois, sempre tento aprender algo novo e implementar em algum projetos, atualmente
                    sou Desenvolvedor Full-Stack. Não tenho nenhuma experiência profissionalmente, mas já criei
                    vários projetos apenas para desenvolvimento próprio que podem ser encontrados no meu GitHub.
                </span>

                <div className={"rowBtn"}>
                    <DefaultBtnComponent title={"Download CV"} />
                    <div style={{marginLeft: 15}}>
                        <DefaultBtnComponent border={true} title={"Ver Trabalhos"} />
                    </div>
                </div>
            </div>
        </div>
    )
}