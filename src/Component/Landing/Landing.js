import React from 'react' ;
import styled from 'styled-components' ;

const BackgroundDiv = styled.div`
    position: absolute;
    background-image: url("./images/Landing/bg-landing.svg");
    height: 100%;
    width: 100%;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
`
const TitleDiv = styled.div`
    position: absolute;
    // border: 3px solid #73AD21;
    top: 8%;
`
const Img = styled.img`
    transition: .8s;
    &:hover{
        transform: rotate(-12deg);
    }
    
`

const DownDiv = styled.div`
    position: absolute;
    top: 95%;
    // border: 3px solid #73AD21;
    left: 50%;
    transform: translate(-50%, -50%);
`
const DownImg = styled.img`
    transition: height .5s;
    &:hover{
        height: 40px;
    }
`

const Landing =()=>(
    <div>
    <BackgroundDiv>
       <TitleDiv className="col-sm-6 offset-sm-3">
           <Img src="./images/Landing/Title.svg" className="col-sm-10 offset-sm-4"/>
       </TitleDiv>
       <DownDiv>
            <DownImg src="./images/Landing/down-arrow.svg" height="28px"/>
       </DownDiv>
    </BackgroundDiv>
    </div>
)

export default Landing