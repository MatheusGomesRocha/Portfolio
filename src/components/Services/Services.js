import React from 'react';
import './Services.css';

import MobileSvg from '../../assets/svg/mobile';
import BackSvg from '../../assets/svg/back';
import FrontSvg from '../../assets/svg/front';
import CoinSvg from '../../assets/svg/coint';

export default () => {
    let array = [
        {
            id: 1,
            color: '#e14b5a',
            title: 'Desenvolvedor Mobile',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
            icon: 'MobileSvg'
        },

        {
            id: 2,
            color: '#e14b5a',
            title: 'Desenvolvedor Back-End',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
            icon: 'BackSvg'
        },

        {
            id: 3,
            color: '#e14b5a',
            title: 'Desenvolvedor Front-end',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
            icon: 'FrontSvg'
        },

        {
            id: 4,
            color: '#e14b5a',
            title: 'Hospedagem',
            text: 'Caso prefira, eu mesmo hospedo seu website, economizando com mensalidades dos serviços de hospedagem',
            icon: 'CoinSvg'
        }
    ]
    return(
        <div className={"services"}>

        </div>
    )
}