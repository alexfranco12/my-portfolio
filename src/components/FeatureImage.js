import React from "react";
import styled from "styled-components";

export const FeatureImage = ({ image }) => {
  return ( 
    <FeatureImageStyled>
      {image 
        ? <img src={image} alt="project" />
        : " "
      }
    </FeatureImageStyled>
   );
}

const FeatureImageStyled = styled.div`
  height: 100%;
  & img {
    height: 100%;
  }
`;