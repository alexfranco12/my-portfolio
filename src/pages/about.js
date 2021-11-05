import * as React from 'react'
import styled from 'styled-components';
import { Title } from '../components';
import { MainLayout } from '../Layouts';

const AboutPage = () => {
  return ( 
    <MainLayout>
      <AboutPageStyled>
        <Title title={"about"} />
      </AboutPageStyled>
    </MainLayout>
   );
}
 
export default AboutPage;

const AboutPageStyled = styled.div`
  height: 100vh;
  padding: 2rem;
`;