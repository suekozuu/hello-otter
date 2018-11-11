import React from 'react' ;
import styled from 'styled-components' ;

const ContactDiv = styled.div`
    position: absolute;
    background-color: #CDD8D7;
    width: 100%
    height: 100%;
    top: 600%;
`
const StopContactBar = styled.div`
    position: absolute;
    width: 100%;
    height: 4%
    top: 696%;
    background: #F4CABC;
`
const TitleDiv = styled.div`
    top: 5%;
    position: absolute;
    width: 100%;
`

const Title = styled.p`
    font-family: 'Dosis', sans-serif;
    font-size: 64px;
    font-weight: 900;
    color: #4F766F;
    text-align: center;
    
`

const Contact =()=>(
    <div>
        <a name="Contact">
        <ContactDiv>
            <TitleDiv><Title>Contact</Title></TitleDiv>
            <div className="col-sm-11 offset-sm-1">
            Contactttt
            </div>
        </ContactDiv>
        <StopContactBar/>
        </a>
    </div>

)

export default Contact