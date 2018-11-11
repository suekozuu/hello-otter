import React from 'react' ;
import styled from 'styled-components' ;

const WhenDiv = styled.div`
    position: absolute;
    width: 100%
    height: 100%;
    top: 400%;
`
const TitleText = styled.div`
    text-align: center;
`

const ImgTimeline = styled.img`
    margin-left: 330px;

`
const Img = styled.img`
    margin-left: 63px;

`
const Img2 = styled.img`
    margin-left: 30px;

`
const Img3 = styled.img`
    margin-left: 99px;

`
const Img4 = styled.img`
    margin-left: 65px;

`
const Img5 = styled.img`
    margin-left: 18px;

`
const Img6 = styled.img`
    margin-left: 130px;

`

const When =()=>(
    <div>
        <a name="When">
        <WhenDiv className="col-sm-11 offset-sm-1">
          <ImgTimeline src='./images/when/Timeline.svg' whidth = '200' height = '55'/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <Img src='./images/when/T1.1.svg' whidth = '200' height = '70'/>
          <Img src='./images/when/line1.svg' whidth = '10' height = '8'/>
          <Img src='./images/when/T2.1.svg' whidth = '200' height = '70'/>
          <Img src='./images/when/line1.svg' whidth = '10' height = '8'/>
          <Img src='./images/when/T3.1.svg' whidth = '200' height = '70'/>
          <Img src='./images/when/line1.svg' whidth = '10' height = '8'/>
          <Img src='./images/when/T4.1.svg' whidth = '200' height = '70'/>
          <br></br>

          <Img2 src='./images/when/T1.2.svg' whidth = '10' height = '20'/>
          <Img3 src='./images/when/T2.2.svg' whidth = '10' height = '20'className="col-3"/>
          <Img2 src='./images/when/T3.2.svg' whidth = '10' height = '20'className="col-3"/>
          <Img4 src='./images/when/T4.2.svg' whidth = '10' height = '20'className="col-2"/>
          <br></br>

          <Img5 src='./images/when/T1.3.svg' whidth = '200' height = '15'/>
          <Img6 src='./images/when/T2.3.svg' whidth = '200' height = '20'className="col-2"/>
          <Img6 src='./images/when/T3.3.svg' whidth = '200' height = '20'className="col-2"/>
          <Img3 src='./images/when/T4.3.svg' whidth = '200' height = '35'className="col-2"/>





        </WhenDiv>

        </a>
    </div>

)

export default When
