import React from 'react' ;
import styled from 'styled-components' ;

import Faqs from '../FAQs/Faqs.js';

const Navdiv = styled.div`
    position: fixed;
    margin-top: 40px;
`

const Icon = styled.img`
    margin: 15px;
    width: 70px;
    &:hover{
        transform: rotate(360deg);
        transition: .8s ease-in-out;
    }
`

const Navbar =()=>(
    <Navdiv className="col-1">
    <a href="#What"><Icon src='./images/Landing/1What.svg' data-toggle="tooltip" title="What"/></a>
    <a href="#Who"><Icon src='./images/Landing/2Who.svg' data-toggle="tooltip" title="Who"/></a>
    <a href="#Where"><Icon src='./images/Landing/3Where.svg' data-toggle="tooltip" title="Where"/></a>
    <a href="#When"><Icon src='./images/Landing/4When.svg' data-toggle="tooltip" title="When"/></a>
    <a href="#FAQs"><Icon src='./images/Landing/5FAQs.svg' data-toggle="tooltip" title="FAQs"/></a>
    <a href="#Contact"><Icon src='./images/Landing/6Contact.svg' data-toggle="tooltip" title="Contact"/></a>
    </Navdiv>
)

export default Navbar