import * as React from 'react'
import styled from 'styled-components';
import { ContactForm } from '../components';
import { InnerLayout } from '../Layouts';
import contactImage from '../images/contact.jpeg'

const ContactPage = () => {
  return ( 
    <InnerLayout>
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
    </InnerLayout>
    
   );
}
 
export default ContactPage;

const ContactPageStyled = styled.div`
  display: flex;
  .left-content {
    flex: 1;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .right-content {
    flex: 1;
  }
`;