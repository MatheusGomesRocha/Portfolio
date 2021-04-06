import React, {useState, useEffect} from "react";
import './Header.css';

export default () => {
    const [fixedHeaderTop, setFixedHeaderTop] = useState(false);

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

    return(
        <div className={"header"}>
            <div className={"headerTop"} style={{
                borderBottom: fixedHeaderTop && '2px solid red',
                backgroundColor: fixedHeaderTop && '#252525'
            }}>
                <span className={"Logo"}>M.</span>

                <div className={"side"}>
                    <a className={"link"} href={"#home"}>Home</a>
                    <a className={"link"} href={"#about"}>About Me</a>
                    <a className={"link"} href={"#services"}>Services</a>
                    <a className={"link"} href={"#skills"}>Skills</a>
                    <a className={"link"} href={"#process"}>Working Process</a>
                    <a className={"link"} href={"#works"}>Works</a>
                    <a className={"link"} href={"#contact"}>Contact</a>
                </div>
            </div>

            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>


        </div>
    )
}