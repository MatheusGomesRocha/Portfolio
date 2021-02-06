import {useState} from "react";
import {DefaultText} from "./DefaultText";
import Project1 from '../img/project1.png';
import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

import {
    MainDiv,

    GridDiv,
    BlockDiv,
    ItemDiv,
    ItemHiddenDiv
} from "./WorksStyled";

const DefaultBtn = withStyles(() => ({
    root: {
        border: '1px solid #FF5E62',
        padding: 20,
        fontSize: 16,
        height: 50,
        marginTop: 20,
        borderRadius: 10,
        width: '60%',
        color: '#FF5E62',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '500ms',

        '&:hover': {
            backgroundColor: '#FF5E62',
            color: '#fff',
        }
    },
}))(Button);

export default () => {
    let primaryColor = '#2f2e41';
    let secondaryColor = '#999';

    const [hoverWork1, setHoverWork1] = useState(false);
    const [hoverWork2, setHoverWork2] = useState(false);

    return (
        <MainDiv>
            <DefaultText mTop={"0"} align={"center"} bolder={"bold"} font={"40px"} color={primaryColor}>
                Meus trabalhos recentes
            </DefaultText>
            <DefaultText mTop={"0"} align={"center"} font={"25px"} color={secondaryColor}>
                Uma pequena amostra dos meus trabalhos
            </DefaultText>

            <GridDiv>
                <BlockDiv onMouseOver={() => setHoverWork1(true)} onMouseOut={() => setHoverWork1(false)}>
                    <ItemDiv src={Project1}></ItemDiv>
                    <ItemHiddenDiv display={hoverWork1 ? 'flex' : 'none'}>
                        <DefaultText mTop={"0"} align={"center"} font={"30px"} bolder={"bold"} color={"#fff"}>Cópia de Design</DefaultText>
                        <DefaultText width={"80%"} align={"center"} font={"25px"} color={"#fff"}>
                            Este site foi uma cópia que fiz de um design de um site já existente, apenas para aparender
                            algumas coisas, usei React e algumas animações em css.
                        </DefaultText>
                        <DefaultBtn target={"_blank"} href={"https://matheusgomesrocha.github.io/DesignClone1/"}>Visite o site</DefaultBtn>
                    </ItemHiddenDiv>
                </BlockDiv>

                <BlockDiv onMouseOver={() => setHoverWork2(true)} onMouseOut={() => setHoverWork2(false)}>
                    <ItemDiv src={Project1}></ItemDiv>
                    <ItemHiddenDiv display={hoverWork2 ? 'flex' : 'none'}></ItemHiddenDiv>
                </BlockDiv>
            </GridDiv>
        </MainDiv>
    );
}