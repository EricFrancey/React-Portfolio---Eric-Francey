import React from 'react';
import "./playerStyle.css";
import { Icon } from '@iconify/react';

function Footer() {

    return (
        <div className='footer'><span class="my-socials">My socials</span>
            <a href="https://github.com/ericfrancey" target="_blank" rel="noreferrer">
                <Icon className='socials-icon' icon="akar-icons:github-fill" ></Icon>
            </a>
            <a href="https://www.linkedin.com/in/eric-francey-680971149/" target="_blank" rel="noreferrer">
                <Icon className = 'socials-icon' icon="akar-icons:linkedin-box-fill" />
            </a>
        </div>
    )
}

export default Footer;