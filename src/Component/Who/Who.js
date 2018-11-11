import React from 'react' ;
import styled from 'styled-components' ;

const WhoDiv = styled.div`
    position: absolute;
    width: 100%
    height: 100%;
    top: 200%;
`

const Who =()=>(
    <div>
        <a name="Who">
        <WhoDiv className="col-sm-11 offset-sm-1">
            Whooooo
        </WhoDiv>
        </a>
    </div>

)

export default Who