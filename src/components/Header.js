import React, {useState, useEffect} from "react";
import './Header.css';

import DefaultBtnComponent from "../sideComponent/DefaultBtn";
import HeaderSvg from '../assets/svg/header';

export default () => {
    const [fixedHeaderTop, setFixedHeaderTop] = useState(false);
    const [link, setLink] = useState('home');

    const handleScroll = () => {        // Verifica o Scroll da pagina
        if (document.documentElement.scrollTop > 90) {       // Se for maior que 0, fixa o Header e está na sessão Home
            setFixedHeaderTop(true);
        }
        if (document.documentElement.scrollTop < 90) {
            setFixedHeaderTop(false);
        }
    }

    useEffect(() => {       // Ao carregar a página já executa a função para pegar o valor do scroll
        window.onscroll = () => {
            handleScroll();
        };
    }, [])

    return (
        <div className={"header"}>
            <div className={"headerTop"} style={{
                boxShadow: fixedHeaderTop && '0 1px 5px 0 rgba(0, 0, 0, 0.75)',
                backgroundColor: fixedHeaderTop && '#252525'
            }}>
                <span className={"logo"}>M.</span>

                <div className={"side"}>
                    <div onClick={() => setLink('home')} className={"linkDiv"}>
                        <a className={"link"} href={"#home"} style={{color: link === 'home' && '#FEB633'}}>Home</a>
                        <div className={"linkBorderBottom"} style={{width: link === 'home' && '30px'}}></div>
                    </div>

                    <div onClick={() => setLink('about')} className={"linkDiv"}>
                        <a className={"link"} href={"#about"} style={{color: link === 'about' && '#FEB633'}}>About
                            Me</a>
                        <div className={"linkBorderBottom"} style={{width: link === 'about' && '30px'}}></div>
                    </div>

                    <div onClick={() => setLink('services')} className={"linkDiv"}>
                        <a className={"link"} href={"#services"}
                           style={{color: link === 'services' && '#FEB633'}}>Services</a>
                        <div className={"linkBorderBottom"} style={{width: link === 'services' && '30px'}}></div>
                    </div>

                    <div onClick={() => setLink('skills')} className={"linkDiv"}>
                        <a className={"link"} href={"#skills"}
                           style={{color: link === 'skills' && '#FEB633'}}>Skills</a>
                        <div className={"linkBorderBottom"} style={{width: link === 'skills' && '30px'}}></div>
                    </div>

                    <div onClick={() => setLink('process')} className={"linkDiv"}>
                        <a className={"link"} href={"#process"}
                           style={{color: link === 'process' && '#FEB633'}}>Process</a>
                        <div className={"linkBorderBottom"} style={{width: link === 'process' && '30px'}}></div>
                    </div>

                    <div onClick={() => setLink('works')} className={"linkDiv"}>
                        <a className={"link"} href={"#works"} style={{color: link === 'works' && '#FEB633'}}>Works</a>
                        <div className={"linkBorderBottom"} style={{width: link === 'works' && '30px'}}></div>
                    </div>

                    <div onClick={() => setLink('contact')} className={"linkDiv"}>
                        <a className={"link"} href={"#contact"}
                           style={{color: link === 'contact' && '#FEB633'}}>Contact</a>
                        <div className={"linkBorderBottom"} style={{width: link === 'contact' && '30px'}}></div>
                    </div>
                </div>
            </div>

            <div className={"headerBottom"}>
                <div className={"side"}>
                    <span className={"title"}>Meu nome é Matheus</span>
                    <span className={"text"}>Programador Web & Mobile</span>
                    <DefaultBtnComponent title={"Hire Me"}/>
                </div>

                <div style={{marginRight: 100}}>
                    <HeaderSvg />
                </div>
            </div>

        </div>
    )
}