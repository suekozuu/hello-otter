import React from 'react' ;
import styled from 'styled-components' ;

import Collapse from './Collapse.js'

const FaqsDiv = styled.div`
    position: absolute;
    width: 100%
    height: 100%;
    top: 500%;
`
const FaqsBar = styled.div`
    position: absolute;
    width: 100%;
    height: 10%
    top: 495%;
`

const Faqs =()=>(
    <div>
        <FaqsBar>FAQs</FaqsBar>
        <a name="FAQs">
        <FaqsDiv className="col-sm-6 offset-sm-5">
            <Collapse/>
        </FaqsDiv>
        </a>
    </div>
)

export default Faqs