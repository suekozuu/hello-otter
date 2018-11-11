import React from 'react' ;
import styled from 'styled-components' ;

const WhereDiv = styled.div`
    position: absolute;
    width: 100%
    height: 100%;
    top: 300%;
`

const Where =()=>(
    <div>
        <a name="Where">
        <WhereDiv className="col-sm-11 offset-sm-1">
            Whereeeee
        </WhereDiv>
        </a>
    </div>

)

export default Where