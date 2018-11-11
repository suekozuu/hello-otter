import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    // position: absolute;
    // top: 20%;
`
const Question = styled.div`
    background-color: #4F766F;
    padding: 25px;
`

const QuestionText = styled.button`
        // color: #FFF;
        font-family: Dosis;
        // font-style: bold;
        background-color: transparent;
        border: none;
        cursor: pointer;
`

const Collapse = () => (
  <div>
    <Div class="accordion" id="accordionExample">
      <div class="card">
        <Question class="card-header" id="headingOne">
          <h5 class="mb-0">
            <QuestionText class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne">
              เขียนโค้ดไม่เป็น ไม่มีพื้นฐานเลย ไม่เคยทำเว็บไซต์ สมัครเข้าร่วมโครงการได้ไหมคะ?
        </QuestionText>
          </h5>
        </Question>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body">
            <p>เข้าร่วมโครงการได้แน่นอน</p>
          </div>
        </div>
      </div>

      
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Collapsible Group Item #2
        </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Collapsible Group Item #3
        </button>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
        </div>
      </div>
    </Div>
  </div>
)
export default Collapse