import React from 'react';
import styled from 'styled-components';

export const SmallTitle = ({ title, icon }) => {
  const Icon = icon

  return ( 
    <SmallTitleStyled id={title}>
      <p>
        <Icon />
      </p>
      <h2>{title}</h2>
    </SmallTitleStyled>
   );
}
 
const SmallTitleStyled = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  &:not(:first-child) {
    padding-top: 2rem;
  }
  p {
    padding-right: 1rem;
    svg {
      font-size: 2rem;
    }
  }
  h2 {
    color: ${props => props.theme.colors.dark1};
    font-size: 1.75rem;
  }
`;