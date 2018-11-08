import React from 'react' ;
import styled from 'styled-components' ;

const Navdiv = styled.div`
    position: fixed;
`

const Icon = styled.img`
    margin: 15px;
    width: 70px;
    &:hover{
        transform: rotate(360deg);
        transition: transform .8s ease-in-out;
        opacity: 0.8;
    }

`

const Navbar =()=>(
    <Navdiv className="col-1">
    <a><Icon src='./images/1What.svg' /></a>
    <a><Icon src='./images/2Who.svg' /></a>
    <a><Icon src='./images/3Where.svg' /></a>
    <a><Icon src='./images/4When.svg' /></a>
    <a><Icon src='./images/5FAQs.svg' /></a>
    <a><Icon src='./images/6Contact.svg' /></a>

    </Navdiv>
)

export default Navbar