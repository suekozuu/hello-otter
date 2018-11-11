import React from 'react';
import styled from 'styled-components';

const WhatDiv = styled.div`
    position: absolute;
    width: 100%
    height: 100%;
    top: 99%;
    background-color: #cdd8d7;
`
const CardDiv = styled.div`
    position: absolute;
    width: auto;
    height: 700px;
`
const Img = styled.img`
    margin-top: 20px;
`

const What = () => (
    <div>
                
            <a name="What">
                <WhatDiv><div className="col-sm-11 offset-sm-1">  
                    <img src="./images/what/Group.svg"/>
                    <div className="col-sm-11 offset-sm-1">
                        <div className="row">
                            <div className="col-sm-4 offset-sm-1">
                                <br></br>
                                <div className="card">

                                    <Img className="card-img-top" margin-top="20px" src="./images/what/frontend.svg" width="70px" height="70px" />
                                    <div className="card-body">
                                        <h5 class="card-title">Front-end</h5>
                                        <p class="card-text">ฝึกฝนพัฒนาการในด้านศาสตร์และศิลป์ในการตกแต่งเว็บด้วย styled-components Bootstrap </p>
                                        <a href="#" class="btn btn-primary">Register</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 offset-sm-1">
                                <br></br>
                                <div className="card">
                                    <Img className="card-img-top" src="./images/what/design.svg" width="70px" height="70px" />
                                    <div className="card-body">
                                        <h5 class="card-title">Design</h5>
                                        <p class="card-text">สรรค์สร้างเว็บไซต์สุดล้ำ นำเทรนด์ และตอบสนองต่อความต้องการของผู้ใช้งาน สร้างเอกลักษณ์ของเว็บไซต์</p>
                                        <a href="#" class="btn btn-primary">Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-4 offset-sm-1">
                                    <br></br>
                                    <div className="card">
                                        <Img className="card-img-top" src="./images/what/infrastructor.svg" width="70px" height="70px" />
                                        <div className="card-body">
                                            <h5 class="card-title">Infrastructure</h5>
                                            <p class="card-text">เรียนรู้เกี่ยวกับการใช้ Linux และชุดคำสั่ง เรียนรู้การ config และใช้งาน Nginx เบื้องต้น</p>
                                            <a href="#" class="btn btn-primary">Register</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 offset-sm-1">
                                    <br></br>
                                    <div className="card">
                                        <Img className="card-img-top" src="./images/what/game.svg" width="70px" height="70px" />
                                        <div className="card-body">
                                            <h5 class="card-title">Game</h5>
                                            <p class="card-text">เราแบ่งความรู้ออกเป็น 3 แขนง ได้แก่ Game Design ,Graphic Design Game ,Sound</p>
                                            <br></br>
                                            <a href="#" class="btn btn-primary">Register</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></WhatDiv>
            </a>
        
    </div>
)

export default What