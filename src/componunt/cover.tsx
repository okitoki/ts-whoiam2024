import React from 'react';
import { CoverPageProps } from '../model/type';
import styled from 'styled-components';


const Container = styled.div`
background-color:#282828;
`

function CoverPage({name,id}:CoverPageProps) {


        const startBtnHandler = () => {

 

        }

return (

<>
    <div>
        <div >
          <div>
              <div>
                  <div>
                  <span>2024년</span>
                  <span>나를 찾아줘</span>
                      </div>
                      <Container>
                        <span>리소-허드슨 테스트</span>
                        <span>- 평소 당신의 태도와 행동을 가장 잘반영한다고 여기지는 진술을 고르세요.</span>
                        <span>- 모든 말과 문장에 완전히 동의해야 하는 것은 아닙니다. (80%-90% 정도 동의)</span>
                        <span>- 문장의 전체적인 내용에 동의하는 것이면 동의입니다.</span>
                        <span>- 당신의 선택을 지나치게 분석하지 말아주세요.</span>
                        <span>- 100% 동의할 수 없어도 당신의 직관이 옳다고 판단 내리는 것을 선택해주세요.</span>
                        <span>- 부분적인 요소보다는 그 진술의 전체적인 주제와 느낌이 더 중요합니다.   </span>

                      </Container>
                      <div>
                      
                        <button onClick={startBtnHandler}>Start</button>
                      </div>
                      <div>
                                <span>- 출처: 애니어그램의 지혜</span>
                        </div>                        
              </div>
              </div>
        </div>
       
      </div>

  </>
);

}

export default CoverPage;