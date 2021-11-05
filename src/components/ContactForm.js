import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from 'axios'
import { IoPaperPlane } from 'react-icons/io5'
import ReCAPTCHA from "react-google-recaptcha";
import { PandoraButton, SmallTitle } from ".";

export const ContactForm = () => {
  const formId = '7fB0qqp6';
  const formSparkURL = `https://submit-form.com/${formId}`;
  const recaptchaKey = '6LcHDhUdAAAAABMW1s8hKL1PAYjloCMpA-t8wKxH';
  const recaptchaRef = useRef();

  const initialFormState = {
    email: '',
    name: '',
    message: '',
  };

  const [formState, setFormState] = useState(initialFormState);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitting(true);
    postSubmission();
    setSubmitting(false);
  }

  const postSubmission = async () => {
    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken
    };

    try {
      const result = await axios.post(formSparkURL, payload);
      console.log(result);
      setMessage("Thanks you! I will be in touch.")
      setFormState(initialFormState)
      recaptchaRef.current.reset();
    } catch(error) {
      console.log(error)
      setMessage("My apologies, there was a problem. Please try again or feel free to reach out via LinkedIn. Thank you!")
    }
  };

  const updateFormControl = (e) => {
    const { id, value } = e.target;
    const formKey = id;
    const updatedFormState = {...formState};
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  }

  const updateRecapthcaToken = (token) => {
    setRecaptchaToken(token);
  }

  return ( 
    <ContactFormStyled>
      <div className="title">
        <SmallTitle title={"Contact Me"} icon={IoPaperPlane} />
      </div>

      {message && 
        <div className='submit-message'>
          {message}
        </div>
      }

      <form 
        className="contact-form"
        onSubmit={submitForm}>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input 
            className="text-input form-name" 
            id="name" 
            type="text"
            onChange={updateFormControl}
            value={formState.name}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input 
            className="text-input form-email"
            id="email"
            type="text"
            onChange={updateFormControl}
            value={formState.email}
          />
        </div>
        <div className="input-field">
          <label htmlFor="message">Message</label>
          <textarea
            className="textarea-input form-message"
            id="message"
            onChange={updateFormControl}
            value={formState.message}
          />
        </div>

        <ReCAPTCHA
          className="recaptcha"
          ref={recaptchaRef}
          sitekey={recaptchaKey}
          onChange={updateRecapthcaToken}
        />

        <div className="submit-button">
          <PandoraButton  
            disabled={submitting} 
            text={submitting ? "Submitting" : "Submit"} 
          />
        </div>
      </form>

    </ContactFormStyled>
  );
}
 
const ContactFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  .title {
    align-self: center;
  }
  .contact-form {
    width: 100%;
    & .input-field {
      display: flex;
      flex-direction: column;
      margin: 2rem auto;
      & .text-input {
        height: 2rem;
        font-size: 1.125rem;
        padding: 0 .5rem;
      }
      & .textarea-input {
        height: 8rem;
        font-size: 1.125rem;
        padding: .25rem;
      }
    }
    & .recaptcha {
      margin: 1rem auto 2rem auto;
    }
    & .submit-button {
      text-align: end;
    }
  }
`;

