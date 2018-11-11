import React from 'react' ;
import styled from 'styled-components' ;

const WhereDiv = styled.div`
    position: absolute;
    width: 100%
    height: 100%;
    top: 300%;
`

const TitleText = styled.div`
    text-align: center;
    color:#a6a6a6
`

const Img = styled.img`
    margin-left: 300px;

`
const Img2 = styled.img`
    margin-bottom: 100px;
    margin-left: 200px;

`

const Where =()=>(
    <div>

        <a name="Where">

        <WhereDiv className="col-sm-11 offset-sm-1">
          <Img src='./images/where/Where.svg' whidth = '150' height = '60'/>
        <br></br>
        <br></br>
        <Img src='./images/where/3.svg' whidth = '1000' height = '400'/>
        <br></br>
        <br></br>
        <TitleText><h6>*** อาคารเรียนรวม 2 ***</h6></TitleText>






        </WhereDiv>

        </a>
    </div>

)

export default Where
