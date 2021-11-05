import * as React from 'react'
import styled from 'styled-components';
import { ContactForm } from '../components';
import { MainLayout } from '../Layouts';
import contactImage from '../images/contact.jpeg'

const ContactPage = () => {
  return ( 
    <MainLayout>
      <ContactPageStyled>
        <div 
          className="left-content"
          style={{backgroundImage: `url(${contactImage})`}}
        >
          
        </div>
        <div className="right-content">
          <ContactForm />
        </div>
        
      </ContactPageStyled>
    </MainLayout>
    
   );
}
 
export default ContactPage;

const ContactPageStyled = styled.div`
  display: flex;
  .left-content {
    flex: 1;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .right-content {
    flex: 1;
  }
`;