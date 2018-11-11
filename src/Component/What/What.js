import React from 'react';
import styled from 'styled-components';

const WhatDiv = styled.div`
    position: absolute;
    width: 100%
    height: 100%;
    top: 100%;
`

const What =()=>(
    <div>
        <a name="What">
            <WhatDiv className="col-sm-11 offset-sm-1">

                <div className="card">
                    <img className="card-img-top" src="./images/what/frontend.svg" width="70px" height="70px" />
                        <div className="card-body">
                            <h5 class="card-title">Front-end</h5>
                            <p class="card-text">ฝึกฝนพัฒนาการในด้านศาสตร์และศิลป์ในการตกแต่งเว็บด้วย styled-components Bootstrap</p>
                            <a href="#" class="btn btn-primary">Register</a>
                        </div>
                  
                </div>

                <div className="card">
                    <img className="card-img-top" src="./images/what/frontend.svg" width="70px" height="70px" />
                        <div className="card-body">
                            <h5 class="card-title">Design</h5>
                            <p class="card-text">ฝึกฝนพัฒนาการในด้านศาสตร์และศิลป์ในการตกแต่งเว็บด้วย styled-components Bootstrap</p>
                            <a href="#" class="btn btn-primary">Register</a>
                        </div>
                  
                </div>

                <div className="card">
                    <img className="card-img-top" src="./images/what/frontend.svg" width="70px" height="70px" />
                        <div className="card-body">
                            <h5 class="card-title">Infrastructure</h5>
                            <p class="card-text">ฝึกฝนพัฒนาการในด้านศาสตร์และศิลป์ในการตกแต่งเว็บด้วย styled-components Bootstrap</p>
                            <a href="#" class="btn btn-primary">Register</a>
                        </div>
                  
                </div>

                <div className="card">
                    <img className="card-img-top" src="./images/what/frontend.svg" width="70px" height="70px" />
                        <div className="card-body">
                            <h5 class="card-title">Game</h5>
                            <p class="card-text">แบ่งความรู้ออกเป็น 3 แขนง ได้แก่ Game Design ,Graphic Design Game ,Sound</p>
                            <a href="#" class="btn btn-primary">Register</a>
                        </div>
                  
                </div>

        </WhatDiv>
        </a>
    </div>

        )
        
export default What