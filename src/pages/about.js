import * as React from 'react'
import styled from 'styled-components';
import { Title } from '../components';
import { InnerLayout } from '../Layouts';

const AboutPage = () => {
  return ( 
    <InnerLayout>
      <AboutPageStyled>
        <Title title={"about"} />
      </AboutPageStyled>
    </InnerLayout>
   );
}
 
export default AboutPage;

const AboutPageStyled = styled.div`
  height: 100vh;
  padding: 2rem;
`;